import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import {useNavigation} from '@react-navigation/native';
import data from '../../../data/QuizData';
import {SIZES} from '../../../constants';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>English Plus</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizList', {data})}
          style={styles.gradient}>
          <Text style={styles.secondText}>Начать Тестирование</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../../assets/images/DottedBG.png')}
        style={{
          width: SIZES.width,
          height: 130,
          zIndex: -1,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          opacity: 0.15,
        }}
        resizeMode={'stretch'}
      />
    </View>
  );
};
export default HomeScreen;
