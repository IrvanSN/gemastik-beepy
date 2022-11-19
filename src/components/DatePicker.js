import React, {useState} from "react";
import {
  NativeBaseProvider,
  Icon,
  Pressable
} from "native-base";
import InputField from "../components/InputField";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from '@expo/vector-icons';

const DatePicker = (props) => {
    const [isShowDate, setIsShowDate] = useState(false);
    // const [isShowTime, setIsShowTime] = useState(false);
    const [dateValue, setDateValue] = useState(`${new Date().toLocaleDateString('ja-JP-u-ca-japanese')}`);
    // const [timeValue, setTimeValue] = useState(`${new Date().getHours()}:${new Date().getMinutes()}`);

    const setDate = (event, date, mode) => {
    const {
      type,
    } = event;

    if (type === 'set' || type === 'dismissed') {
      setIsShowDate(false)
    //   setIsShowTime(false)
    }

    if (mode === 'date') {
      setDateValue(`${new Date(date).toLocaleDateString('ja-JP-u-ca-japanese')}`)
    //   console.log(dateValue)
    } else if (mode === 'time') {
    //   setTimeValue(`${new Date(date).getHours()}:${new Date().getMinutes()}`)
    }
  };

  return(
    <NativeBaseProvider>
        <InputField shadow='4' size='xl' borderRadius='10' placeholder='Ex. John Smith' value={dateValue} InputRightElement={
        <Pressable onPress={() => setIsShowDate(true)}>
            <Icon as={<Fontisto name='date' />} size={5} mr="2" color="muted.400" />
        </Pressable>
        } />
        {isShowDate && <RNDateTimePicker mode='date' value={new Date()} onChange={(event, date) => setDate(event, date, 'date')} />}
    </NativeBaseProvider>
  )
}

export default DatePicker;