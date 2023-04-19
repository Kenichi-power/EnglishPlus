import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import styles from './style';
import {useAppDispatch, useAppSelector} from '../../../store';
import {COLORS} from '../../../constants';
import {setStats} from '../../../store/stats';
import {selectFilteredResults, setReset} from '../../../store/result';

const windowWidth = Dimensions.get('window').width;

const Info = () => {
  const result = useAppSelector(selectFilteredResults);
  const stats = useAppSelector(item => item.stats.stats);
  const dispatch = useAppDispatch();
  console.log('result', result);

  return (
    <View style={styles.containers}>
      <View style={styles.lowContainer}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '800'}}>
            Profile
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            marginTop: 10,
            marginHorizontal: 10,
            padding: 10,
            backgroundColor: 'white',
            borderTopEndRadius: 10,
            borderTopStartRadius: 10,
            gap: 10,
            borderTopWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.3)',
          }}>
          <View
            style={{
              alignItems: 'flex-end',
              marginRight: 10,
            }}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => dispatch(setReset())}>
              <Text style={{color: 'white', fontWeight: 500, fontSize: 18}}>
                Reset
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Info;
