/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor, SecondaryColor} from '@/constants';
import {
  ArrowCircleDown,
  Calendar,
  Location,
  Profile2User,
  SearchNormal1,
} from 'iconsax-react-native';
import {WButton, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {
  Buildings,
  Profile,
  Pet,
  ArrowDown2,
  ArrowLeft2,
  ArrowRight2,
} from 'iconsax-react-native';
import ChooseRoomDropdown from './ChooseRoomDropdown';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import ChooseDateDropdown from './ChooseDateDropdown';
import dayjs from 'dayjs';

function BookingSearchHotel() {
  const now = dayjs();
  const [calendarDropdownVisible, setCalendarDropdownVisible] = useState(false);
  const [roomDropdownVisible, setRoomDropdownVisible] = useState(false);
  const [isChooseMonth, setIsChooseMonth] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(now.format('MM-YYYY'));

  const handleNextMonth = useCallback(() => {
    setSelectedMonth(prevMonth => {
      const [month, year] = prevMonth.split('-');
      const currentDate = dayjs(`${year}-${month}-01`);
      const nextMonth = currentDate.add(1, 'month');
      return nextMonth.format('MM-YYYY');
    });
  }, []);

  const handlePreviousMonth = useCallback(() => {
    setSelectedMonth(prevMonth => {
      const [month, year] = prevMonth.split('-');
      const currentDate = dayjs(`${year}-${month}-01`);
      const previousMonth = currentDate.subtract(1, 'month');

      // Prevent navigating before current month
      if (previousMonth.isBefore(now, 'month')) {
        return now.format('MM-YYYY');
      }

      return previousMonth.format('MM-YYYY');
    });
  }, [now]);

  const dropdownTranslateY = useSharedValue(-200);
  const dropdownOpacity = useSharedValue(0);

  const handleCalendarDropdown = useCallback(() => {
    if (calendarDropdownVisible) {
      dropdownTranslateY.value = withTiming(-200, {duration: 300});
      dropdownOpacity.value = withTiming(0, {duration: 300});
    } else {
      dropdownTranslateY.value = withTiming(0, {duration: 300});
      dropdownOpacity.value = withTiming(1, {duration: 300});
    }
    setCalendarDropdownVisible(!calendarDropdownVisible);
  }, [calendarDropdownVisible, dropdownTranslateY, dropdownOpacity]);

  const handleOpenRoomDropdown = useCallback(() => {
    if (roomDropdownVisible) {
      dropdownTranslateY.value = withTiming(-200, {duration: 300});
      dropdownOpacity.value = withTiming(0, {duration: 300});
    } else {
      dropdownTranslateY.value = withTiming(0, {duration: 300});
      dropdownOpacity.value = withTiming(1, {duration: 300});
    }
    setRoomDropdownVisible(!roomDropdownVisible);
  }, [roomDropdownVisible, dropdownTranslateY, dropdownOpacity]);

  const animatedDropdownStyle = useAnimatedStyle(() => ({
    transform: [{translateY: dropdownTranslateY.value}],
    opacity: dropdownOpacity.value,
  }));

  const handleChooseMonth = useCallback(() => {
    setIsChooseMonth(!isChooseMonth);
  }, [isChooseMonth]);

  const calendarDropdown = useMemo(() => {
    const IconWrapper = isChooseMonth ? ArrowDown2 : ArrowRight2;

    return (
      <Animated.View
        style={[styles.selectedDropdown, animatedDropdownStyle, {top: 100}]}>
        <View style={styles.dropdownHeader}>
          <TouchableOpacity style={styles.leftNode} onPress={handleChooseMonth}>
            <WText
              text={translate('source:month-n', {month: selectedMonth})}
              typo="Button1"
              color="Main"
            />
            <IconWrapper size={20} variant="Linear" color={PrimaryColor.Main} />
          </TouchableOpacity>

          <View style={styles.rightNode}>
            <TouchableOpacity onPress={handlePreviousMonth}>
              <ArrowLeft2
                size={20}
                variant="Linear"
                color={PrimaryColor.Main}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleNextMonth}>
              <ArrowRight2
                size={20}
                variant="Linear"
                color={PrimaryColor.Main}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.calendarView}>
          <ChooseDateDropdown
            isChooseMonth={isChooseMonth}
            onPressArrowLeft={handlePreviousMonth}
            onPressArrowRight={handleNextMonth}
          />
        </View>

        <View style={styles.dropdownButton}>
          <WButton
            text={translate('source:confirm')}
            backgroundColor="Light"
            color="Main"
            typo="Body2"
            height={45}
          />
        </View>
      </Animated.View>
    );
  }, [
    animatedDropdownStyle,
    handleChooseMonth,
    handleNextMonth,
    handlePreviousMonth,
    isChooseMonth,
    selectedMonth,
  ]);

  const roomDropDown = useMemo(() => {
    return (
      <Animated.View
        style={[styles.selectedDropdown, animatedDropdownStyle, {top: 50}]}>
        <ChooseRoomDropdown
          iconWrapper={Buildings}
          text="source:num_of_room"
          value="1"
          onMinusPress={() => {}}
          onPlusPress={() => {}}
        />
        <View style={styles.divider} />
        <ChooseRoomDropdown
          iconWrapper={Profile}
          text="source:adult"
          value="1"
          onMinusPress={() => {}}
          onPlusPress={() => {}}
        />
        <View style={styles.divider} />
        <ChooseRoomDropdown
          iconWrapper={Profile}
          text="source:child"
          value="1"
          onMinusPress={() => {}}
          onPlusPress={() => {}}
        />
        <View style={styles.divider} />
        <ChooseRoomDropdown
          iconWrapper={Pet}
          text="source:pet"
          value="1"
          onMinusPress={() => {}}
          onPlusPress={() => {}}
        />
        <View style={styles.dropdownButton}>
          <WButton
            text={translate('source:confirm')}
            backgroundColor="Light"
            color="Main"
            typo="Body2"
            height={45}
          />
        </View>
      </Animated.View>
    );
  }, [animatedDropdownStyle]);

  return (
    <>
      <View style={styles.formField}>
        <View style={styles.fieldItem}>
          <Location size={24} variant="Linear" color={PrimaryColor.Main} />
          <WText
            text={translate('source:find_hotel_placeholder')}
            typo="Body2"
            color="Main"
          />
        </View>

        <TouchableOpacity
          style={styles.fieldItem}
          onPress={handleCalendarDropdown}>
          <Calendar size={24} variant="Linear" color={PrimaryColor.Main} />
          <WText
            text={translate('source:dd_mm_placeholder')}
            typo="Body2"
            color="Main"
          />
          <ArrowCircleDown
            size={24}
            variant="Linear"
            color={PrimaryColor.Main}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>

        {calendarDropdownVisible && calendarDropdown}

        <View>
          <TouchableOpacity
            style={styles.fieldItem}
            onPress={handleOpenRoomDropdown}>
            <Profile2User
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
            />
            <WText
              text={translate('source:room_placeholder')}
              typo="Body2"
              color="Main"
            />
            <ArrowCircleDown
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
              style={styles.arrowIcon}
            />
          </TouchableOpacity>

          {roomDropdownVisible && roomDropDown}
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <SearchNormal1 size={20} variant="Linear" color={BaseColor.Black} />
        <WText text={translate('source:find')} typo="Body2" color="Black" />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  formField: {
    zIndex: 1,
    display: 'flex',
    gap: 8,
  },
  fieldItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: BaseColor.White,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
    zIndex: 2,
  },
  arrowIcon: {
    position: 'absolute',
    right: 0,
    marginRight: 16,
  },
  button: {
    marginTop: 24,
    borderRadius: 25,
    paddingVertical: 12,
    backgroundColor: SecondaryColor.Yellow,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  selectedDropdown: {
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.25,
    shadowColor: '#5B5B5B',
    elevation: 8,
    width: Devices.width - 32,
    borderRadius: 12,
    padding: 16,
    position: 'absolute',
    zIndex: 1000,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 16,
  },
  dropdownButton: {
    marginTop: 16,
  },
  dropdownHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  rightNode: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  calendarView: {
    marginTop: 16,
  },
});

export default memo(BookingSearchHotel);
