import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { getDailyPosts } from '../../api/diary';
import { loadDiary } from '../../redux/reducers/Diaries';
import {Routes} from '../../navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';


// import { resetToInitialState } from '../../redux/reducers/User';
// import { updateSelectedCategoryId } from '../../redux/reducers/Categories';
// import { updateSelectedDonationId } from '../../redux/reducers/Donations';

import ScreenHeader from "../../components/ScreenHeader/ScreenHeader";
import Tab from "../../components/Tab/Tab";
import DiaryItem from "../../components/DiaryItem/DiaryItem";
import DiaryInput from "../../components/DiaryInput/DiaryInput"

import style from "./style";
import globalStyle from '../../assets/styles/globalStyle';

const Diary = ({navigation}) => {

  const dispatch = useDispatch();
  const diaries = useSelector(state => state.diaries)
  //const user = useSelector(state => state.user);

//  const [diaryItems, setDiaryItems] = useState([]);
    const [newDiary, setNewDiary] = useState('')
  
  // const fetchData = async () => {
  //     const result = await getDailyPosts();
  //     if (result.status) {
  //       dispatch(loadDiary(result.data));
  //     } else {
  //       console.log('Error fetching diaries: ', result.error);
  //     }
  //     console.log(result)
  //   };

  useEffect(() => {
    // setDiaryItems(diaries?.items || []);
    const fetchData = async () => {
      const result = await getDailyPosts();
      if (result.status) {
        dispatch(loadDiary(result.data));
        console.log(result)
      } else {
        console.log('Error fetching diaries: ', result.error);
      }
    };

    fetchData();
    //const items = diaries?.items?.filter(value => value.auther === 'Masami') || [];
    // const items = diaries?.items?.filter(value =>
    //   value.timestamp?.includes('today')) || [];

  }, [dispatch])
  
  return (
    <KeyboardAvoidingView
      style={[globalStyle.backgroundWhite, globalStyle.flex]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={[ globalStyle.backgroundWhite, globalStyle.flex]}>
        <View style={globalStyle.outerContainer}>
          <View style={style.containerRelative}>
            
            <View style={style.diaryContainer}>
              <ScreenHeader title="Diary" onPress={() => navigation.navigate(Routes.MemberList)} />
              <View style={style.tab}>
                <Tab tabId={1} title={'Today'} isInactive={false} onPress={() => {}} />
              </View>
              <ScrollView contentContainerStyle={{ paddingBottom: 120 }}>
                {diaries.length === 0 ? (
                <Text>No Diary Yet...</Text>
                  ) : (
                    diaries.map(item => (
                      <DiaryItem
                        key={item.id}
                        userId={item.userId}
                        auther={item.auther}
                        text={item.text}
                        image={typeof item.image === 'string' ? { uri: item.image } : item.image}
                        timestamp={item.timestamp}
                        notification={item.notification}
                        onPress={() => console.log('Pressed diary with id:', item.id)}
                      />
                    ))
                  )}
              </ScrollView>
            </View>

            <View style={style.inputContainer}>
              <DiaryInput
                placeholder={'Story...'}
                style={style.input}
                onChangeText={(value) => setNewDiary(value)}
              />
            </View>

          </View>
        </View>
      </View>
    </KeyboardAvoidingView> 
  );
}
export default Diary;