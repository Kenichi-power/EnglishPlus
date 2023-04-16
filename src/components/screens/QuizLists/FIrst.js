import React, {useEffect, useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import styles from './style';

const First = ({navigation, route}) => {
  const {data} = route.params;
  const [current, setCurrent] = useState(1);
  const [inputValue, setInputValue] = useState({});
  const [isNext, setIsNext] = useState(false);
  const [total, setTotal] = useState([]);
  console.log('inputValue', inputValue);

  useEffect(() => {
    const quizArr = Object.values(inputValue);
    quizArr.length === data[current].correct_option.length &&
    quizArr.every(e => {
      console.log(data[current].correct_option);
      return e.length > 0;
    })
      ? setIsNext(true)
      : setIsNext(false);
    console.log('tesr', data[current].correct_option);
  }, [inputValue]);

  const handleNext = () => {
    let score = 0;
    data[current].correct_option.map((e, i) => {
      let correctParse = e.slice(1).split(' ').join('');
      let answerParse = inputValue[i].split(' ').join('');
      if (correctParse == answerParse) {
        score++;
      }
      if (i === data[current].correct_option.length - 1) {
        setTotal([...total, score]);
      }
    });
    console.log('score', score);

    setCurrent(current + 1);
    setIsNext(false);
    setInputValue({});
  };

  const handleChange = (e, i) => {
    let obj = {...inputValue};
    obj[i] = e;
    setInputValue(obj);
  };

  const renderQuestionType1 = () => {
    return (
      <View style={{justifyContent: 'space-evenly', padding: 15}}>
        <Text>
          {data[current].id}) {data[current].question}
        </Text>
        <View style={{justifyContent: 'space-evenly', gap: 10, padding: 15}}>
          {data[current].type == 1 &&
            data[current].correct_option.map((item, i) => {
              return (
                <View
                  key={i}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{width: 20}}>{i + 1}.</Text>
                  <Text style={{}}>{item[0]}</Text>
                  <TextInput
                    autoCapitalize="none"
                    value={inputValue[i]}
                    onChangeText={e => handleChange(e, i)}
                    placeholder="_______"
                    style={{width: 120}}
                    maxLength={item.length - 1}
                  />
                </View>
              );
            })}
          {data[current].type == 2 && (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text>{data[current].text}</Text>
            </View>
          )}
        </View>
      </View>
    );
  };
  //   const renderQuestionType2 = () => {
  //     return (
  //       <View style={{justifyContent: 'space-evenly', gap: 10, padding: 15}}>
  //         <Text>{data[current].question}</Text>
  //         {data[current].correct_option.map((item, i) => {
  //           return (
  //             <View key={i} style={{flexDirection: 'row', alignItems: 'center'}}>
  //               <Text style={{width: 20}}>{i + 1}.</Text>
  //               <Text style={{}}>{item[0]}</Text>
  //               <TextInput
  //                 autoCapitalize="none"
  //                 value={inputValue[i]}
  //                 onChangeText={e => handleChange(e, i)}
  //                 placeholder="_______"
  //                 style={{width: 120}}
  //                 maxLength={item.length - 1}
  //               />
  //             </View>
  //           );
  //         })}
  //       </View>
  //     );
  //   };
  return (
    <View style={styles.container}>
      <View style={styles.lowContainer}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.backButton}>
              <Text style={{color: 'white', fontWeight: 500, fontSize: 18}}>
                Back
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {renderQuestionType1()}

        {isNext && (
          <TouchableOpacity onPress={() => handleNext()}>
            <View style={styles.mainContainer}>
              <Text
                style={{
                  color: 'white',
                }}>
                Next
              </Text>
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
export default First;
