import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

import styles from './style';
import {COLORS} from '../../constants';

const First = ({navigation, route}) => {
  const {data} = route.params;
  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState({});
  const [isNext, setIsNext] = useState(false);
  const [total, setTotal] = useState([]);
  const [isFocus, setIsFocus] = useState(false);

  const [showScoreModal, setShowScoreModal] = useState(false);

  console.log('total', total);

  useEffect(() => {
    const quizArr = Object.values(inputValue);
    quizArr.length === data[current].correct_option.length &&
    quizArr.every(e => {
      return e.length > 0;
    })
      ? setIsNext(true)
      : setIsNext(false);
  }, [inputValue]);

  const handleNext = () => {
    let score = 0;

    if (data[current].type == 1) {
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
    }
    if (data[current].type == 2) {
      data[current].correct_option.map((e, i) => {
        e === inputValue[i] && score++;
        if (i === data[current].correct_option.length - 1) {
          setTotal([...total, score]);
        }
      });
    }
    if (data.length == current + 1) {
      setShowScoreModal(true);
    } else {
      setInputValue({});
      setIsNext(false);
      setCurrent(current + 1);
    }
  };

  const handleChange = (e, i) => {
    let obj = {...inputValue};
    obj[i] = e;
    setInputValue(obj);
  };
  const renderModal = () => {
    const score = total.length > 0 && total.reduce((a, b) => a + b);
    const allQuestions = data.reduce((acc, e) => acc + e.correct_option.length);
    return (
      <Modal animationType="slide" transparent={true} visible={showScoreModal}>
        <View
          style={{
            flex: 1,
            backgroundColor: COLORS.primary,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: COLORS.white,
              width: '90%',
              borderRadius: 20,
              padding: 20,
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>
              {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                marginVertical: 20,
              }}>
              <Text
                style={{
                  fontSize: 30,
                  color:
                    score > allQuestions.length / 2
                      ? COLORS.success
                      : COLORS.error,
                }}>
                {score}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                }}>
                / {allQuestions.length}
              </Text>
            </View>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                backgroundColor: COLORS.accent,
                padding: 20,
                width: '100%',
                borderRadius: 20,
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: COLORS.white,
                  fontSize: 20,
                }}>
                Back to List
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    );
  };
  const renderQuestionType1 = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Text>
          {data[current].id}) {data[current].question}
        </Text>
        <View style={{gap: 10, padding: 15}}>
          {data[current].correct_option.map((item, i) => {
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
        </View>
      </View>
    );
  };
  const renderQuestionType2 = () => {
    return (
      <View
        style={{
          margin: 10,
          padding: 10,
          backgroundColor: 'white',
          borderRadius: 10,
        }}>
        <Text>
          {data[current].id}) {data[current].question}
        </Text>
        <View style={{gap: 10, padding: 15}}>
          <View style={{flexDirection: 'column', gap: 5}}>
            <Text style={{marginBottom: 10}}>{data[current].text}</Text>
            {data[current].options.map((item, i) => {
              return (
                <View style={styles.container}>
                  <Text>{i + 1}. </Text>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus && {borderColor: '#66bf39e1'},
                    ]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data[current].options}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select item' : '...'}
                    searchPlaceholder="Search..."
                    value={inputValue[i]}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                      handleChange(item.value, i);
                      setIsFocus(false);
                    }}
                  />
                </View>
              );
            })}
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.containers}>
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
        <ScrollView>
          {data[current].type == 1 && renderQuestionType1()}
          {data[current].type == 2 && renderQuestionType2()}
          {renderModal()}
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
        </ScrollView>
      </View>
    </View>
  );
};
export default First;
