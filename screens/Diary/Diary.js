import React, {useState, useEffect} from "react";
import { View, Text, ScrollView, KeyboardAvoidingView, Platform } from "react-native";
import { getDailyPosts } from '../../api/diary';
import { loadDiary } from '../../redux/reducers/Diaries';
import {Routes} from '../../navigation/Routes';
import {useDispatch, useSelector} from 'react-redux';
import {fetchDiaries } from '../../actions/diaryActions'


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

    const [newDiary, setNewDiary] = useState('')
  
  useEffect(() => {
    dispatch(fetchDiaries('fUWECwl5qfKyvjin6JyP'));
  }, [dispatch])

    useEffect(() => {
    console.log('Updated diaries:', diaries);
  }, [diaries]);
  
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
                {diaries.items.length === 0 ? (
                <Text>No Diary Yet...</Text>
                  ) : (
                    diaries.items.map(item => (
                      <DiaryItem
                        key={item.id}
                        userId={item.userId}
                        author={item.author}
                        text={item.text}
                        image={typeof item.image === 'string' ? { uri: item.image } : item.image}
                        //timestamp={item.timestamp}
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