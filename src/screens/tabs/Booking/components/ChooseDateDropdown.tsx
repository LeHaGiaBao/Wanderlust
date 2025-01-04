import {WText} from '@/components/UIKit';
import {
  BaseColor,
  Devices,
  FontFamily,
  FontSize,
  PrimaryColor,
} from '@/constants';
import dayjs from 'dayjs';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Calendar, LocaleConfig} from 'react-native-calendars';

interface ChooseDateDropdownProps {
  isChooseMonth: boolean;
  onPressArrowLeft: () => void;
  onPressArrowRight: () => void;
}

LocaleConfig.locales.en = {
  monthNames: [
    'Tháng 1',
    'Tháng 2',
    'Tháng 3',
    'Tháng 4',
    'Tháng 5',
    'Tháng 6',
    'Tháng 7',
    'Tháng 8',
    'Tháng 9',
    'Tháng 10',
    'Tháng 11',
    'Tháng 12',
  ],
  monthNamesShort: [
    'Th.1',
    'Th.2',
    'Th.3',
    'Th.4',
    'Th.5',
    'Th.6',
    'Th.7',
    'Th.8',
    'Th.9',
    'Th.10',
    'Th.11',
    'Th.12',
  ],
  dayNames: ['Chủ nhật', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'],
  dayNamesShort: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
  today: 'Hôm nay',
};
LocaleConfig.defaultLocale = 'en';

const months = [
  'Tháng 1',
  'Tháng 2',
  'Tháng 3',
  'Tháng 4',
  'Tháng 5',
  'Tháng 6',
  'Tháng 7',
  'Tháng 8',
  'Tháng 9',
  'Tháng 10',
  'Tháng 11',
  'Tháng 12',
];

function ChooseDateDropdown(props: ChooseDateDropdownProps) {
  const {isChooseMonth = false, onPressArrowLeft, onPressArrowRight} = props;

  const currentYear = new Date().getFullYear();
  const years = Array.from({length: 20}, (_, i) => currentYear - 10 + i);

  // const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  // const [selectedYear, setSelectedYear] = useState(currentYear);
  const [visibleMonthIndex, setVisibleMonthIndex] = useState(-1);
  const [visibleYearIndex, setVisibleYearIndex] = useState(-1);

  const keyExtractor = useCallback(
    (item: any, index: {toString: () => any}) => index.toString(),
    [],
  );

  const handleScroll = useCallback(
    (event: {nativeEvent: {contentOffset: {y: number}}}, type: string) => {
      const {contentOffset} = event.nativeEvent;
      const offsetY = contentOffset.y;

      // Dimensions
      const itemHeight = 48; // Height of each list item
      const backgroundStart = 48; // Starting Y position of backgroundContainer
      const backgroundHeight = 48; // Height of backgroundContainer

      // Calculate center position of backgroundContainer
      const backgroundCenter = backgroundStart + backgroundHeight / 2;

      // Determine visible index based on the center alignment
      const visibleIndex = Math.floor(
        (backgroundCenter + offsetY) / itemHeight,
      );

      if (type === 'month') {
        setVisibleMonthIndex(visibleIndex);
      } else if (type === 'year') {
        setVisibleYearIndex(visibleIndex);
      }
    },
    [],
  );

  const renderMonth = useCallback(
    ({item, index}: {item: string; index: number}) => (
      <View style={styles.item}>
        <WText
          text={item}
          color={visibleMonthIndex === index ? 'Main' : 'Gray'}
          typo="Button1"
        />
      </View>
    ),
    [visibleMonthIndex],
  );

  const renderYear = useCallback(
    ({item, index}: {item: number; index: number}) => (
      <View style={styles.item}>
        <WText
          text={String(item)}
          color={visibleYearIndex === index ? 'Main' : 'Gray'}
          typo="Button1"
        />
      </View>
    ),
    [visibleYearIndex],
  );

  const renderCalendar = useMemo(() => {
    return (
      <Calendar
        // Initially visible month. Default = now
        //initialDate={'2012-03-01'}
        // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
        //minDate={'2012-05-10'}
        // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
        //maxDate={'2012-05-30'}
        // Handler which gets executed on day press. Default = undefined
        //   onDayPress={day => {
        //     console.log('selected day', day);
        //   }}
        //   onDayLongPress={day => {
        //     console.log('selected day', day);
        //   }}
        monthFormat={'MM yyyy'}
        // current={currentMonth}
        // onMonthChange={onMonthChange}
        hideArrows={true}
        hideExtraDays={false}
        hideDayNames={false}
        showWeekNumbers={false}
        disableMonthChange={false}
        firstDay={1}
        disableArrowLeft={true}
        disableArrowRight={true}
        onPressArrowLeft={() => onPressArrowLeft()}
        onPressArrowRight={() => onPressArrowRight()}
        //   onPressArrowLeft={subtractMonth => subtractMonth()}
        //   onPressArrowRight={addMonth => addMonth()}
        disableAllTouchEventsForDisabledDays={true}
        renderHeader={() => {}}
        style={styles.calendar}
        theme={{
          textDayStyle: styles.textDay,
          todayTextColor: PrimaryColor.Main,
          todayBackgroundColor: PrimaryColor.Light,
          contentStyle: styles.contentStyle,
          selectedDayTextColor: BaseColor.White,
          selectedDayBackgroundColor: PrimaryColor.Main,
          'stylesheet.calendar.header': {
            dayHeader: {
              FontFamily: FontFamily.FontMedium,
              fontSize: FontSize.FontSize20,
              fontWeight: 'medium',
              color: BaseColor.DarkGray,
              marginBottom: 16,
            },
          },
        }}
        markingType={'period'}
        markedDates={{
          [dayjs().format('YYYY-MM-DD')]: {
            disabled: true,
            startingDay: true,
            color: PrimaryColor.Light,
            textColor: PrimaryColor.Main,
            endingDay: true,
          },
        }}
        // markingType={'period'}
        // markedDates={{
        //   '2025-01-04': {
        //     disabled: true,
        //     startingDay: true,
        //     color: PrimaryColor.Light,
        //     textColor: PrimaryColor.Main,
        //     endingDay: true,
        //   },
        //   '2025-01-16': {
        //     startingDay: true,
        //     color: PrimaryColor.Main,
        //     textColor: BaseColor.White,
        //   },
        //   '2025-01-17': {color: PrimaryColor.Main, textColor: 'white'},
        //   '2025-01-18': {color: PrimaryColor.Main, textColor: 'white'},
        //   '2025-01-19': {
        //     endingDay: true,
        //     color: PrimaryColor.Main,
        //     textColor: BaseColor.White,
        //   },
        // }}
      />
    );
  }, [onPressArrowLeft, onPressArrowRight]);

  const renderMonthChoose = useMemo(() => {
    return (
      <View style={styles.container}>
        <View style={styles.listItem}>
          <FlatList
            data={months}
            keyExtractor={keyExtractor}
            renderItem={renderMonth}
            showsVerticalScrollIndicator={false}
            onScroll={event => handleScroll(event, 'month')}
            scrollEventThrottle={16}
          />
        </View>

        <View style={styles.listItem}>
          <FlatList
            data={years}
            keyExtractor={item => item.toString()}
            renderItem={renderYear}
            showsVerticalScrollIndicator={false}
            onScroll={event => handleScroll(event, 'year')}
            scrollEventThrottle={16}
          />
        </View>

        <View style={styles.backgroundContainer} />
      </View>
    );
  }, [handleScroll, keyExtractor, renderMonth, renderYear, years]);

  return (
    <>
      {isChooseMonth && renderMonthChoose}
      {!isChooseMonth && renderCalendar}
    </>
  );
}

const styles = StyleSheet.create({
  calendar: {
    display: 'flex',
  },
  contentStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 36,
  },
  textDay: {
    fontFamily: FontFamily.FontMedium,
    fontWeight: 'medium',
    color: PrimaryColor.Main,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 140,
    width: Devices.width - 64,
  },
  listItem: {
    width: '50%',
  },
  item: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 48,
  },
  backgroundContainer: {
    position: 'absolute',
    top: 48,
    backgroundColor: PrimaryColor.Light,
    height: 48,
    width: Devices.width - 64,
    borderRadius: 8,
    zIndex: -1,
  },
});

export default memo(ChooseDateDropdown);
