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
import {Buildings, Profile, Pet} from 'iconsax-react-native';
import ChooseRoomDropdown from './ChooseRoomDropdown';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

function BookingSearchHotel() {
  const [roomDropdownVisible, setRoomDropdownVisible] = useState(false);

  // Shared value for animation
  const dropdownTranslateY = useSharedValue(-200);
  const dropdownOpacity = useSharedValue(0);

  const handleOpenRoomDropdown = useCallback(() => {
    if (roomDropdownVisible) {
      // Hide dropdown
      dropdownTranslateY.value = withTiming(-200, {duration: 300});
      dropdownOpacity.value = withTiming(0, {duration: 300});
    } else {
      // Show dropdown
      dropdownTranslateY.value = withTiming(0, {duration: 300});
      dropdownOpacity.value = withTiming(1, {duration: 300});
    }
    setRoomDropdownVisible(!roomDropdownVisible);
  }, [roomDropdownVisible, dropdownTranslateY, dropdownOpacity]);

  // Animated styles for dropdown
  const animatedDropdownStyle = useAnimatedStyle(() => ({
    transform: [{translateY: dropdownTranslateY.value}],
    opacity: dropdownOpacity.value,
  }));

  const roomDropDown = useMemo(() => {
    return (
      <Animated.View style={[styles.selectedDropdown, animatedDropdownStyle]}>
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

        <View style={styles.fieldItem}>
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
        </View>

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
    zIndex: 2,
    top: 50,
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
});

export default memo(BookingSearchHotel);
