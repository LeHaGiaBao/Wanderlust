import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WButton, WIcon, WText} from '@/components/UIKit';
import {BaseColor, Devices} from '@/constants';
import translate from '@/translations/i18n';
import WInputField from '@/components/UIKit/Input/WInputField';

const VISA =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1000px-Visa_Inc._logo.svg.png';

function PaymentEdit() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:add_new_card')} />
      <View style={styles.contentContainer}>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <WText text="CREDIT" typo="Body3" color="DarkGray" />
            <WText text="ABC BANK" typo="Body3" color="DarkGray" />
          </View>

          <WIcon
            icon="card"
            size={48}
            color={BaseColor.DarkGray}
            style={styles.cardIcon}
          />

          <WText
            text="4321 9876 5432 1234"
            typo="Description"
            color="DarkGray"
          />

          <View style={styles.cardFooter}>
            <View>
              <WText text="NGUYEN MY DUYEN" typo="Body2" color="DarkGray" />
              <WText text="08/2023" typo="Body2" color="DarkGray" />
            </View>
            <Image
              source={{uri: VISA}}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        </View>

        <View style={styles.cardInput}>
          <WInputField
            type="Text"
            text={translate('source:card_user_name')}
            placeholder={translate('source:card_user_name')}
            isNotification={false}
          />

          <WInputField
            type="Text"
            text={translate('source:card_number')}
            placeholder={translate('source:card_number')}
            isNotification={false}
          />

          <WInputField
            type="Text"
            text={translate('source:card_date')}
            placeholder={translate('source:card_date')}
            isNotification={false}
          />

          <WInputField
            type="Text"
            text={translate('source:card_cvv')}
            placeholder={translate('source:card_cvv')}
            isNotification={false}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:add_card')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  contentContainer: {
    marginTop: 16,
  },
  card: {
    display: 'flex',
    backgroundColor: BaseColor.LightGray,
    borderRadius: 12,
    padding: 16,
  },
  cardHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardFooter: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardIcon: {
    marginTop: 16,
    marginBottom: 32,
  },
  logo: {
    width: 70,
    height: 50,
  },
  cardInput: {
    marginTop: 32,
    display: 'flex',
    gap: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 24,
    paddingHorizontal: 16,
  },
});

export default memo(PaymentEdit);
