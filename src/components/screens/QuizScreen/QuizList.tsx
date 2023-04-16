import React from 'react';

import {View, Text, TouchableOpacity, Dimensions} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import data from '../../data/QuizData';
import newData from '../../data/data1';

const windowWidth = Dimensions.get('window').width;

const QuizList = () => {
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
                borderWidth: 2,
                borderColor: COLORS.secondary + '40',
                backgroundColor: '#66bf39e1',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: 10,
                marginTop: 10,
              }}>
              <Text style={{color: 'white', fontWeight: 500, fontSize: 18}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* <View>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz', {data})}>
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
                First
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Quiz', {data})}>
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
                Second
              </Text>
            </View>
          </TouchableOpacity>
        </View> */}
        {newData.map((item, i) => (
          <View key={i}>
            <TouchableOpacity
              onPress={() => navigation.navigate('QuizLists', {data: item})}>
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
                  Second
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
