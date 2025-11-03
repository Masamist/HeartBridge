import React, {useState, useEffect} from "react";
import { View, Text, FlatList, ActivityIndicator } from "react-native";
import {Routes} from '../../navigation/Routes';
import {loadFamilyData} from '../../actions/familyAction'

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Member from "../../components/Member/Member";
import BackButton from "../../components/BackButton/BackButton"

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';

// If you pass familyId via route params
  

const MemberList = ({navigation, route}) => {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const familyId = route?.params?.familyId || 'fUWECwl5qfKyvjin6JyP';

   useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const result = await loadFamilyData(familyId);
        if (result.status) {
          setMembers(result.data);
        } else {
          setError(result.error);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [familyId]);

  const renderMember = ({ item }) => (
    <Member
      useId={item.id}
      uri={require('../../assets/images/mum.png')} // replace with actual image if available
      badgeTitle={item.isAdmin ? 'Admin' : ''} // optional
      name={`${item.firstName} ${item.lastName}`}
      email={item.email}
      familyName={item.familyName || ''}
      onPress={(id) => {
        console.log('Pressed member with id:', id);
        // You can navigate to member detail page if needed
      }}
    />
  );


  return (
    <View style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={globalStyle.outerContainer}>
        <ScreenHeader title='Member List' />
        <BackButton title='Diary' onPress={() => navigation.navigate(Routes.Diary)} />
        {loading && <ActivityIndicator size="large" color="#0000ff" style={{ marginTop: 20 }} />}
        {error && <Text style={{ color: 'red', marginTop: 20 }}>{error}</Text>}

        {!loading && !error && members.length === 0 && (
          <Text style={{ marginTop: 20 }}>No members found.</Text>
        )}

        {!loading && members.length > 0 && (
          <FlatList
            data={members}
            renderItem={renderMember}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 20 }}
          />
        )}
      </View>
    </View>
  );
}
export default MemberList;