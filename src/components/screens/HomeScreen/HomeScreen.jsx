import React from 'react';
import {Text, View, Dimensions, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import data from '../../data/QuizData';
import {SIZES} from '../../constants';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>English Plus</Text>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('QuizList', {data})}>
          <LinearGradient
            colors={['#66BF39', '#66BF39']}
            style={styles.gradient}>
            <Text style={styles.secondText}>Начать Тестирование</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../../assets/images/DottedBG.png')}
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
