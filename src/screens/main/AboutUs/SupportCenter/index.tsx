import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, StatusColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {CloseCircle, MessageQuestion} from 'iconsax-react-native';
import {WText} from '@/components/UIKit';

function SupportCenter() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:support_center')} />
      <View style={styles.listItem}>
        <View style={styles.itemContainer}>
          <CloseCircle size={24} color={StatusColor.Error} variant="Bold" />
          <View style={styles.content}>
            <WText
              text={translate('source:cancel_services')}
              typo="Body2"
              color="Black"
            />
            <WText
              text={translate('source:cancel_services_description')}
              typo="Body3"
              color="DarkGray"
            />
          </View>
        </View>
        <View style={styles.itemContainer}>
          <MessageQuestion size={24} color={BaseColor.Black} />
          <View style={styles.content}>
            <WText
              text={translate('source:question_support')}
              typo="Body2"
              color="Black"
            />
            <WText
              text={translate('source:question_support_description')}
              typo="Body3"
              color="DarkGray"
            />
            <TouchableOpacity>
              <WText
                text={translate('source:customer_services_contact')}
                typo="Body3"
                color="Main"
              />
            </TouchableOpacity>
          </View>
        </View>
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
    width: Devices.width,
  },
  listItem: {
    marginTop: 24,
    display: 'flex',
    gap: 24,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    maxWidth: Devices.width - 55,
    display: 'flex',
    gap: 4,
  },
});

export default memo(SupportCenter);
