import React, {memo} from 'react';
import {View} from 'react-native';
import {PrimaryColor} from '@/constants';
import {
  LoginCurve,
  LogoutCurve,
  Buildings,
  Profile,
  Pet,
} from 'iconsax-react-native';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';
import {styles} from './styles';

function BookingEdit() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <LoginCurve size={20} variant="Linear" color={PrimaryColor.Main} />
          <View>
            <WText
              text={translate('source:check_in')}
              typo="Label"
              color="Gray"
            />
            <WText text="2:00 PM, Thứ 3, 07/11" typo="Body3" color="Black" />
          </View>
        </View>

        <View style={styles.headerItem}>
          <LogoutCurve size={20} variant="Linear" color={PrimaryColor.Main} />
          <View>
            <WText
              text={translate('source:check_out')}
              typo="Label"
              color="Gray"
            />
            <WText text="12:00 PM, CN, 10/11" typo="Body3" color="Black" />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.contentContainer}>
        <View style={styles.contentItem}>
          <Buildings size={20} variant="Linear" color={PrimaryColor.Main} />
          <WText text="1 phòng" typo="Body3" color="Black" />
        </View>

        <View style={styles.contentItem}>
          <Profile size={20} variant="Linear" color={PrimaryColor.Main} />
          <WText text="2 người" typo="Body3" color="Black" />
        </View>

        <View style={styles.contentItem}>
          <Profile size={20} variant="Linear" color={PrimaryColor.Main} />
          <WText text="1 trẻ" typo="Body3" color="Black" />
        </View>

        <View style={styles.contentItem}>
          <Pet size={20} variant="Linear" color={PrimaryColor.Main} />
          <WText text="1 bé" typo="Body3" color="Black" />
        </View>
      </View>
    </View>
  );
}

export default memo(BookingEdit);
