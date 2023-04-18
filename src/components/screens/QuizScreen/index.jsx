import React, {useEffect, useState} from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Modal,
  Image,
} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './style';
import {COLORS} from '../../../constants';
import {useAppDispatch, useAppSelector} from '../../../store';
import {setResult} from '../../../store/result';

const QuizScreen = ({navigation, route}) => {
  const {data, title} = route.params;
  const [current, setCurrent] = useState(0);
  const [inputValue, setInputValue] = useState({});
  const [isNext, setIsNext] = useState(false);
  const [total, setTotal] = useState([]);
  const [isFocus, setIsFocus] = useState({});
  const [state, setState] = useState({});
  const [showScoreModal, setShowScoreModal] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);
  const result = useAppSelector(item => item.results.result);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const quizArr = Object.values(inputValue);
    quizArr.length === data[current].correct_option.length &&
    quizArr.every(e => {
      return e.length > 0;
    })
      ? setIsNext(true)
      : setIsNext(false);
  }, [inputValue]);
  useEffect(() => {
    if (showScoreModal) {
      nextAndGo();
    }
  }, [showScoreModal]);
  const nextAndGo = () => {
    const score = total.length > 0 && total.reduce((a, b) => a + b);
    const allQuestions = data.reduce(
      (acc, e) => acc + e.correct_option.length,
      0,
    );
    const id = result[result.length - 1] ? result[result.length - 1].id + 1 : 1;
    dispatch(setResult({id, title, allQuestions, score, time: new Date()}));
  };
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
  const handleChangeFocus = (e, i) => {
    let obj = {...isFocus};
    obj[i] = e;
    setIsFocus(obj);
  };
  const handleChangeType = (e, i) => {
    let object = {};
    for (let prop in inputValue) {
      if (inputValue[prop] !== e) {
        object[prop] = inputValue[prop];
      }
    }
    object[i] = e;
    setInputValue(object);
  };
  const handleChange = (e, i, value, setFunc) => {
    let obj = {...value};
    obj[i] = e;
    setFunc(obj);
  };
  const renderDoneModal = () => {
    const score = total.length > 0 && total.reduce((a, b) => a + b);
    const allQuestions = data.reduce(
      (acc, e) => acc + e.correct_option.length,
      0,
    );
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
              {score > allQuestions / 2 ? 'Congratulations!' : 'Oops!'}
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
                    score > allQuestions / 2 ? COLORS.success : COLORS.error,
                }}>
                {score}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: COLORS.black,
                }}>
                / {allQuestions}
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
  const exitModal = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={showExitModal}>
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
            <Text style={{fontSize: 30, fontWeight: 'bold'}}>Warning</Text>

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
                }}>
                Are you sure?
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 30,
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  backgroundColor: COLORS.error,
                  padding: 20,
                  width: 120,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontSize: 20,
                  }}>
                  Exit
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setShowExitModal(false)}
                style={{
                  backgroundColor: COLORS.accent,
                  padding: 20,
                  width: 120,
                  borderRadius: 20,
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: COLORS.white,
                    fontSize: 20,
                  }}>
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
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
                style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{width: 20}}>{i + 1}.</Text>
                  <Image
                    source={data[current].image[i]}
                    style={{width: 90, height: 90}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text style={{}}>{item[0]}</Text>
                  <TextInput
                    autoCapitalize="none"
                    value={inputValue[i]}
                    onChangeText={e =>
                      handleChange(e, i, inputValue, setInputValue)
                    }
                    placeholder="_______"
                    style={{width: 120}}
                    maxLength={item.length - 1}
                  />
                </View>
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
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              gap: 15,
              flexWrap: 'wrap',
              borderWidth: 2,
              borderRadius: 15,
              borderColor: '#66bf39e1',
            }}>
            {data[current].options.map((e, i) => {
              const through = Object.values(inputValue).includes(e.value);
              return (
                <Text
                  key={i}
                  style={{
                    textDecorationLine: through ? 'line-through' : 'none',
                    opacity: through ? 0.5 : 1,
                  }}>
                  {e.label}
                </Text>
              );
            })}
          </View>
          <Text style={{marginBottom: 10}}>{data[current].text}</Text>

          <View style={{flexDirection: 'row', gap: 15, flexWrap: 'wrap'}}>
            {data[current].options.map((item, i) => {
              const doneStyle = inputValue[i] ? true : false;
              return (
                <View key={i} style={styles.container}>
                  <Text>{i + 1}. </Text>
                  <Dropdown
                    style={[
                      styles.dropdown,
                      isFocus[i] && {borderWidth: 2},
                      {
                        borderColor: doneStyle ? '#66bf39e1' : 'black',
                        borderWidth: doneStyle ? 2 : 1,
                      },
                    ]}
                    mode="modal"
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    inputSearchStyle={styles.inputSearchStyle}
                    iconStyle={styles.iconStyle}
                    data={data[current].options}
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus[i] ? 'Select item' : '...'}
                    value={inputValue[i]}
                    onFocus={() => handleChangeFocus(true, i)}
                    onBlur={() => handleChangeFocus(false, i)}
                    onChange={item => {
                      handleChange(true, i, state, setState);
                      handleChangeType(item.value, i);
                      handleChangeFocus(false, i);
                    }}
                    renderItem={e => {
                      const through = Object.values(inputValue).includes(
                        e.value,
                      );
                      return (
                        <View
                          style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 50,
                          }}>
                          <Text
                            style={{
                              textDecorationLine: through
                                ? 'line-through'
                                : 'none',
                              opacity: through ? 0.5 : 1,
                            }}>
                            {e.label}
                          </Text>
                        </View>
                      );
                    }}
                    showsVerticalScrollIndicator="false"
                    dropdownPosition="auto"
                    backgroundColor="rgba(0, 0, 0, 0.4)"
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
        <View
          style={{
            alignItems: 'flex-end',
            marginRight: 10,
          }}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => setShowExitModal(true)}>
            <Text style={{color: 'white', fontWeight: 500, fontSize: 18}}>
              X
            </Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {data[current].type == 1 && renderQuestionType1()}
          {data[current].type == 2 && renderQuestionType2()}
          {renderDoneModal()}
          {exitModal()}
          {isNext && (
            <TouchableOpacity onPress={() => handleNext()}>
              <View style={styles.mainContainer}>
                <Text
                  style={{
                    color: 'white',
                  }}>
                  {current + 1 == data.length ? 'Submit' : 'Next'}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        </ScrollView>
      </View>
    </View>
  );
};
export default QuizScreen;
