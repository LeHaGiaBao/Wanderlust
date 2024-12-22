import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, PrimaryColor, SecondaryColor} from '@/constants';
import {
  ArrowCircleDown,
  Calendar,
  Location,
  Profile2User,
  SearchNormal1,
} from 'iconsax-react-native';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';

function BookingSearchHotel() {
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

        <View style={styles.fieldItem}>
          <Profile2User size={24} variant="Linear" color={PrimaryColor.Main} />
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
});

export default memo(BookingSearchHotel);
