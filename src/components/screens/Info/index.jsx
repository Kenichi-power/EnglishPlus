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
import {selectFilteredResults} from '../../../store/result';

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
            Stats
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              borderTopEndRadius: 10,
              borderTopStartRadius: 10,
              backgroundColor: 'white',
              gap: 10,
              marginTop: 10,
            }}>
            <TouchableOpacity onPress={() => dispatch(setStats('all'))}>
              <View
                style={[
                  styles.sortButton,
                  {backgroundColor: stats !== 'all' ? 'white' : COLORS.accent},
                ]}>
                <Text
                  style={{
                    color: stats === 'all' ? 'white' : COLORS.accent,
                    fontSize: 18,
                  }}>
                  All
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(setStats('success'))}>
              <View
                style={[
                  styles.sortButton,
                  {
                    backgroundColor:
                      stats !== 'success' ? 'white' : COLORS.primary,
                  },
                ]}>
                <Text
                  style={{
                    color: stats === 'success' ? 'white' : COLORS.accent,
                    fontSize: 18,
                  }}>
                  Success
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch(setStats('failed'))}>
              <View
                style={[
                  styles.sortButton,
                  {
                    backgroundColor:
                      stats !== 'failed' ? 'white' : COLORS.error,
                  },
                ]}>
                <Text
                  style={{
                    color: stats === 'failed' ? 'white' : COLORS.accent,
                    fontSize: 18,
                  }}>
                  Failed
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          style={{
            flex: 1,

            marginHorizontal: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            gap: 10,
            borderTopWidth: 0.5,
            borderColor: 'rgba(0,0,0,0.3)',
          }}>
          {result.map((e, i) => {
            const date = new Date(e.time);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();
            const formattedDate = `${day}/${month}/${year}`;
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const formattedTime = `${hours}:${minutes}`;

            return (
              <View
                key={i}
                style={{
                  marginBottom: 10,
                  padding: 10,
                  borderRadius: 10,
                  height: 70,
                  justifyContent: 'space-between',
                  flexDirection: 'column',
                  backgroundColor: COLORS.accent,
                }}>
                <Text style={{color: 'white', fontSize: 16, fontWeight: 800}}>
                  {' '}
                  {e.id}. {e.title}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    alignItems: 'center',
                    width: windowWidth - 50,
                  }}>
                  <Text style={{color: 'white', padding: 3}}>
                    Date: {`${formattedDate} ${formattedTime}`}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 5,
                      borderRadius: 5,
                      padding: 3,
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor:
                        e.score > e.allQuestions / 2
                          ? COLORS.primary
                          : COLORS.error,
                    }}>
                    <Text
                      style={{
                        color: 'white',
                        fontWeight: '500',
                      }}>
                      Score: {e.score} / {e.allQuestions}
                    </Text>
                  </View>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Info;
