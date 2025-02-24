/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WButton, WIcon, WText} from '@/components/UIKit';
import WInputField from '@/components/UIKit/Input/WInputField';
import {Calendar} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';

function ProfileEdit() {
  const nav = useWanderlustNavigation();

  const onPressNavigate = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation title={translate('source:update_information')} />
      <View style={styles.contentContainer}>
        <WText
          text={translate('source:profile_information')}
          typo="Heading2"
          color="Black"
        />

        <View style={[styles.flexItem, {marginTop: 16}]}>
          <WInputField
            type="Text"
            text={translate('source:profile_info:full_name')}
            placeholder={translate('source:profile_info:full_name_placeholder')}
          />
        </View>
        <View style={styles.flexItem}>
          <View style={styles.inforItemFlex}>
            <WInputField
              type="Text"
              text={translate('source:profile_info:birth')}
              placeholder={translate('source:profile_info:birth_placeholder')}
              iconAlign="Right"
              icon={<Calendar size={20} color={BaseColor.Black} />}
            />
          </View>

          <View style={styles.genderItem}>
            <View style={styles.flexItem}>
              <WIcon icon="radio-enable" size={24} color={PrimaryColor.Main} />
              <WText
                text={translate('source:profile_info:male')}
                typo="Body2"
                color="Black"
              />
            </View>

            <View style={styles.flexItem}>
              <WIcon icon="radio-disable" size={24} color={PrimaryColor.Main} />
              <WText
                text={translate('source:profile_info:female')}
                typo="Body2"
                color="Black"
              />
            </View>
          </View>
        </View>
        <View style={[styles.flexItem]}>
          <WInputField
            type="Text"
            text={translate('source:profile_info:email')}
            placeholder={translate('source:profile_info:email_placeholder')}
          />
        </View>
        <View style={[styles.flexItem]}>
          <WInputField
            type="Text"
            text={translate('source:profile_info:phone')}
            placeholder={translate('source:profile_info:phone')}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:save')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={onPressNavigate}
        />
      </View>
    </ScrollView>
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
    height: Devices.height - 200,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  flexItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  inforItemFlex: {
    flex: 0.5,
    gap: 4,
  },
  genderItem: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});

export default memo(ProfileEdit);
