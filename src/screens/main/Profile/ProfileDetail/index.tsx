/* eslint-disable react-native/no-inline-styles */
import React, {memo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WText} from '@/components/UIKit';
import {Facebook, Google} from 'iconsax-react-native';

function ProfileDetail() {
  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:customer_information')} />
      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          <WText
            text={translate('source:profile_information')}
            typo="Heading2"
            color="Black"
          />
          <TouchableOpacity>
            <WText text={translate('source:edit')} typo="Body3" color="Main" />
          </TouchableOpacity>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.inforItem}>
            <WText
              text={translate('source:profile_info:full_name')}
              typo="Label"
              color="DarkGray"
            />
            <View style={styles.item}>
              <WText text="Test Name" typo="Body2" color="DarkGray" />
            </View>
          </View>
        </View>

        <View style={styles.flexItem}>
          <View style={styles.inforItemFlex}>
            <WText
              text={translate('source:profile_info:birth')}
              typo="Label"
              color="DarkGray"
            />
            <View style={styles.itemFlex}>
              <WText text="01/01/2000" typo="Body2" color="DarkGray" />
            </View>
          </View>

          <View style={styles.inforItemFlex}>
            <WText
              text={translate('source:profile_info:gender')}
              typo="Label"
              color="DarkGray"
            />
            <View style={styles.itemFlex}>
              <WText text="Nữ" typo="Body2" color="DarkGray" />
            </View>
          </View>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.inforItem}>
            <WText
              text={translate('source:profile_info:email')}
              typo="Label"
              color="DarkGray"
            />
            <View style={styles.item}>
              <WText text="abc@gmail.com" typo="Body2" color="DarkGray" />
            </View>
          </View>
        </View>

        <View style={styles.informationContainer}>
          <View style={styles.inforItem}>
            <WText
              text={translate('source:profile_info:phone')}
              typo="Label"
              color="DarkGray"
            />
            <View style={styles.item}>
              <WText text="0343123456" typo="Body2" color="DarkGray" />
            </View>
          </View>
        </View>

        <View style={[styles.flexContainer, {marginTop: 32}]}>
          <WText
            text={translate('source:account_linked')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <View style={styles.socialContainer}>
          <View style={styles.socialItem}>
            <View style={styles.socialIcon}>
              <Google size={24} color={PrimaryColor.Main} variant="Bold" />
            </View>
            <View style={styles.socialItemContent}>
              <WText text="Google" typo="Body2" color="Black" />
              <WText
                text={translate('source:account_is_linked', {name: 'Google'})}
                typo="Body2"
                color="Black"
              />
            </View>
          </View>

          <View style={styles.divider} />

          <View style={styles.socialItem}>
            <View style={styles.socialIcon}>
              <Facebook size={24} color={PrimaryColor.Main} variant="Bold" />
            </View>
            <View style={styles.socialItemContent}>
              <WText text="Google" typo="Body2" color="Black" />
              <WText
                text={translate('source:account_not_linked')}
                typo="Body2"
                color="Black"
              />
              <TouchableOpacity style={styles.buttonLinked}>
                <WText
                  text={translate('source:linked')}
                  typo="Body2"
                  color="White"
                />
              </TouchableOpacity>
            </View>
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
  },
  contentContainer: {
    marginTop: 16,
  },
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informationContainer: {
    marginTop: 16,
  },
  inforItem: {
    display: 'flex',
    gap: 4,
  },
  item: {
    width: '100%',
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  flexItem: {
    marginTop: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  inforItemFlex: {
    flex: 0.5,
    gap: 4,
  },
  itemFlex: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 4,
  },
  socialContainer: {
    display: 'flex',
    marginTop: 16,
    gap: 8,
  },
  socialItem: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  socialIcon: {
    height: 40,
    width: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
  },
  socialItemContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    gap: 4,
  },
  buttonLinked: {
    height: 40,
    width: 80,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: PrimaryColor.Main,
    position: 'absolute',
    right: 48,
  },
});

export default memo(ProfileDetail);
