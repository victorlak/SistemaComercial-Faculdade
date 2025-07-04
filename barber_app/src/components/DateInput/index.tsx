import React from 'react';
import { useState } from 'react';
import { View, Pressable, Platform, Modal } from 'react-native'; 
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import Input from '../Input';
import Button from '../Button';
import { styles } from './styles';

type DateInputProps = {
  label?: string;
  value?: string;
  onDateChange?: (date: string) => void;
}

export default function DateInput({ label, value, onDateChange }: DateInputProps) {
    const [date, setDate] = useState(new Date());
    const [showPicker, setShowPicker] = useState(false);
    const [datePeriod, setDatePeriod] = useState(value || '');

    const toggleDatePicker = () => {
        setShowPicker(!showPicker);
    };

    const onChange = (event: DateTimePickerEvent, selectedDate?: Date) => {
        if (event.type === "set") {
            const currentDate = selectedDate || new Date(event.nativeEvent.timestamp);
            setDate(currentDate);

            if (Platform.OS === 'android') {
                toggleDatePicker();
                const formatted = formatDate(currentDate);
                setDatePeriod(formatted);
                if (onDateChange) {
                    onDateChange(formatted);
                }
            }
        } else {
            toggleDatePicker();
        }
    };

    const confirmIOSDate = () => {
        const formatted = formatDate(date);
        setDatePeriod(formatted);
        if (onDateChange) {
            onDateChange(formatted);
        }
        toggleDatePicker();
    };

    const formatDate = (rawDate: Date | string | number) => {
        let date = new Date(rawDate);

        let year = date.getFullYear();
        let monthNum = date.getMonth() + 1;
        let dayNum = date.getDate();

        let formattedMonth = monthNum < 10 ? `0${monthNum}` : `${monthNum}`;
        let formattedDay = dayNum < 10 ? `0${dayNum}` : `${dayNum}`;

        return `${formattedDay}/${formattedMonth}/${year}`;
    }

    React.useEffect(() => {
      if (value !== undefined) {
        setDatePeriod(value);
      }
    }, [value]);


    return (
        <View>
            <Pressable onPress={toggleDatePicker}>
                <Input
                    style={styles.inputDate}
                    value={datePeriod}
                    label={label}
                    editable={false}
                    onPressIn={toggleDatePicker}
                    placeholder='dd/mm/aaaa'
                />
            </Pressable>

            <Modal
                transparent={true}
                animationType="fade" 
                visible={showPicker}
                onRequestClose={toggleDatePicker} 
            >
                <Pressable style={styles.centeredView} onPress={toggleDatePicker}>
                    <Pressable style={styles.modalView} onPress={(e) => e.stopPropagation()}> 
                        {showPicker && ( 
                            <DateTimePicker
                                mode='date'
                                display='spinner' 
                                value={date}
                                onChange={onChange}
                                style={styles.datePicker}
                            />
                        )}

                        {Platform.OS === 'ios' && (
                            <View style={styles.iosButtonContainer}>
                                <Button label='Cancelar' style={styles.buttonDate} textStyle={styles.textButtonDate} onPress={toggleDatePicker} />
                                <Button label='Confirmar' style={styles.buttonDate} textStyle={styles.textButtonDate} onPress={confirmIOSDate} />
                            </View>
                        )}
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    );
}