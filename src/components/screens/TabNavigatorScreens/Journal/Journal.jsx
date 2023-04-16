import React, { useState } from 'react'
import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { DraxProvider, DraxList } from 'react-native-drax'
import { RectButton } from 'react-native-gesture-handler'
//components
import Implementations from '../../../components/implementations/Implementations'
import ModalCalendar from '../../../components/Modal/ModalCalendar/ModalCalendar'
//styles
import styles from './styles'
//assets
import AddJournal from '../../../assets/Icons/AddJournal'

const dates = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const Journal = () => {
  const { bottom, top } = useSafeAreaInsets()
  const paddingStyle = { paddingTop: top + 15, paddingBottom: bottom + 15 }
  //useState
  const [openIds, setOpenIds] = useState([])
  const [selectedDateIndex, setSelectedDateIndex] = useState(0)
  const [addComponent, setAddComponent] = useState([])
  const [isVisible, setIsVisible] = useState(false)
  const [str, setStr] = useState('')
  //function
  const toggleOpen = (id) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter((openId) => openId !== id))
    } else {
      setOpenIds([id])
    }
  }

  const AddNewComponents = () => {
    const list = addComponent
    setAddComponent([...list, str])
  }
  const renderItem = ({ item, index }) => {
    const isSelected = index === selectedDateIndex
    return (
      <TouchableOpacity style={styles.dateItem}>
        <Text style={[styles.dateText, isSelected && styles.selectedDateText]}>
          {item}
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <DraxProvider>
      <View style={[styles.container, paddingStyle]}>
        <View>
          <Pressable onPress={() => setIsVisible(!isVisible)}>
            <AddJournal />
          </Pressable>
          <View style={styles.calendar}>
            <FlatList
              data={dates}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
        <View>
          <DraxList
            data={addComponent}
            renderItemContent={({ item, index }) => (
              <RectButton>
                <View style={styles.alphaItem}>
                  <Implementations
                    key={index}
                    title={item}
                    id={index}
                    isOpen={openIds.includes(index)}
                    onPressed={() => toggleOpen(index)}
                    onClick={(values) => setSelectedDateIndex(values)}
                    number={selectedDateIndex}
                  />
                </View>
              </RectButton>
            )}
            onItemReorder={({ fromIndex, toIndex }) => {
              const newData = addComponent.slice()
              newData.splice(toIndex, 0, newData.splice(fromIndex, 1)[0])
              setAddComponent(newData)
            }}
            keyExtractor={(item) => item}
          />
        </View>
        <View>
          <ModalCalendar
            string={str}
            setString={(str) => setStr(str)}
            isVisible={isVisible}
            onBackdropPress={() => setIsVisible(false)}
            onPress={() => AddNewComponents()}
          />
        </View>
      </View>
    </DraxProvider>
  )
}

export default Journal
