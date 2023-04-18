import React from 'react';

import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../../constants';

import newData from '../../../data/quizDatas';
import {useAppDispatch, useAppSelector} from '../../../store';

const windowWidth = Dimensions.get('window').width;
const QuizList = () => {
  const dispatch = useAppDispatch();
  const result = useAppSelector(item => item.results.result);
  console.log('newData', newData);
  console.log('result', result);

  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          marginTop: 50,
          width: windowWidth,
          flexDirection: 'column',
          gap: 20,
        }}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View
              style={{
                width: 60,
                height: 50,
                borderRadius: 12,
                backgroundColor: COLORS.accent,
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18}}>Back</Text>
            </View>
          </TouchableOpacity>
        </View>
        {newData.map((item, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('QuizScreen', {
                  data: item.test,
                  title: item.title,
                })
              }>
              <View
                style={{
                  borderWidth: 3,
                  borderColor: COLORS.secondary + '40',
                  backgroundColor: '#66bf39e1',
                  borderRadius: 20,
                  height: 75,
                  marginHorizontal: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  {item.title}
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};
export default QuizList;
