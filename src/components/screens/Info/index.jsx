import React from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';
import styles from './style';
import {useAppSelector} from '../../../store';
import {COLORS} from '../../../constants';

const windowWidth = Dimensions.get('window').width;

const Info = () => {
  const result = useAppSelector(item => item.results.result);

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
        </View>
        <ScrollView
          style={{
            margin: 10,
            padding: 10,
            backgroundColor: 'white',
            borderRadius: 10,
            gap: 10,
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
