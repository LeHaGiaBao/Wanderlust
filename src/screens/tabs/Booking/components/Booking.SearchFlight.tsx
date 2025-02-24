import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor, SecondaryColor} from '@/constants';
import {
  ArrowCircleDown,
  Profile2User,
  SearchNormal1,
  ArrowSwapVertical,
} from 'iconsax-react-native';
import {WIcon, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import DatePicker from 'react-native-date-picker';

const ITEM_WIDTH = (Devices.width - 40) / 2;

function BookingSearchFlight() {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleOpenDatePicker = useCallback(() => {
    setOpen(true);
  }, []);

  const onConfirm = useCallback(() => {
    setOpen(false);
    setDate(date);
  }, [date]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <View style={styles.formField}>
        <View style={styles.flexContainer}>
          <View style={styles.flexItem}>
            <WText
              text={translate('source:one_way')}
              typo="Body2"
              color="Main"
            />
            <WIcon icon="radio-enable" size={24} color={PrimaryColor.Main} />
          </View>

          <View style={styles.flexItem}>
            <WText
              text={translate('source:round_trip')}
              typo="Body2"
              color="Main"
            />
            <WIcon icon="radio-disable" size={24} color={PrimaryColor.Main} />
          </View>
        </View>

        <View style={styles.formField}>
          <View style={styles.fieldItem}>
            <WIcon icon="airplane-go" size={24} color={PrimaryColor.Main} />
            <WText
              text={translate('source:departure_placeholder')}
              typo="Body2"
              color="Main"
            />
          </View>

          <View style={styles.switchIcon}>
            <ArrowSwapVertical
              size={20}
              variant="Linear"
              color={BaseColor.White}
            />
          </View>

          <View style={styles.fieldItem}>
            <WIcon
              icon="airplane-landing"
              size={24}
              color={PrimaryColor.Main}
            />
            <WText
              text={translate('source:arrival_placeholder')}
              typo="Body2"
              color="Main"
            />
          </View>
        </View>

        <View style={styles.flexContainer}>
          <TouchableOpacity
            style={[styles.fieldItem, {width: ITEM_WIDTH}]}
            onPress={handleOpenDatePicker}>
            <WIcon icon="calendar-in" size={24} color={PrimaryColor.Main} />
            <WText
              text={translate('source:departure_date')}
              typo="Body2"
              color="Main"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.fieldItem, {width: ITEM_WIDTH}]}
            onPress={handleOpenDatePicker}>
            <WIcon icon="calender-out" size={24} color={PrimaryColor.Main} />
            <WText
              text={translate('source:return_date')}
              typo="Body2"
              color="Main"
            />
          </TouchableOpacity>
        </View>

        <View style={styles.flexContainer}>
          <View style={[styles.fieldItem, {width: ITEM_WIDTH}]}>
            <Profile2User
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
            />
            <WText
              text={translate('source:passenger')}
              typo="Body2"
              color="Main"
            />
            <ArrowCircleDown
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
              style={styles.arrowIcon}
            />
          </View>

          <View style={[styles.fieldItem, {width: ITEM_WIDTH}]}>
            <WText
              text={translate('source:flight_ticket_type')}
              typo="Body2"
              color="Main"
            />
            <ArrowCircleDown
              size={24}
              variant="Linear"
              color={PrimaryColor.Main}
              style={styles.arrowIcon}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.button}>
        <SearchNormal1 size={20} variant="Linear" color={BaseColor.Black} />
        <WText text={translate('source:find')} typo="Body2" color="Black" />
      </TouchableOpacity>

      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={onConfirm}
        onCancel={onCancel}
      />
    </>
  );
}

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  flexItem: {
    width: ITEM_WIDTH,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
    backgroundColor: BaseColor.White,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  formField: {
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
  switchIcon: {
    position: 'absolute',
    top: 27,
    right: 36,
    width: 32,
    height: 32,
    backgroundColor: PrimaryColor.Main,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
});

export default memo(BookingSearchFlight);
