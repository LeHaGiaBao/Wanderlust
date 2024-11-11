import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {PrimaryColor} from '@/constants';
import {Heart, Message, Notification} from 'iconsax-react-native';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';

function AccountSubNav() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          <Heart size={20} color={PrimaryColor.Main} />
        </View>
        <WText text={translate('source:favorite')} typo="Body2" color="Black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          <Message size={20} color={PrimaryColor.Main} />
        </View>
        <WText text={translate('source:message')} typo="Body2" color="Black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemContainer}>
        <View style={styles.item}>
          <Notification size={20} color={PrimaryColor.Main} />
        </View>
        <WText
          text={translate('source:notification')}
          typo="Body2"
          color="Black"
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 44,
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  item: {
    height: 32,
    width: 32,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default memo(AccountSubNav);
