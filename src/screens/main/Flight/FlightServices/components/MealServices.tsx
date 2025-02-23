import React, {memo} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WButton, WIcon, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {Add, Minus} from 'iconsax-react-native';

const image =
  'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

function MealServices() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <WText
            text={translate('source:departure_title')}
            typo="Heading2"
            color="Main"
          />
          <View style={styles.item}>
            <Image source={{uri: image}} style={styles.image} />
            <WText text="SGN - PQC" typo="Body2" color="Black" />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 1" typo="Body3" color="DarkGray" />
            <View style={styles.customerServices}>
              <View style={styles.left}>
                <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
                <View>
                  <WText
                    text="Bánh mì + Nước suối"
                    typo="Body2"
                    color="Black"
                  />
                  <WText text="59.000VND" typo="Body3" color="DarkGray" />
                </View>
              </View>

              <View style={styles.right}>
                <TouchableOpacity>
                  <Minus
                    size={20}
                    variant="Linear"
                    color={BaseColor.DarkGray}
                  />
                </TouchableOpacity>

                <WText text="1" typo="Body1" color="Main" />

                <TouchableOpacity>
                  <Add size={20} variant="Linear" color={BaseColor.DarkGray} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 2" typo="Body3" color="DarkGray" />
            <View style={styles.customerServices}>
              <View style={styles.left}>
                <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
                <View>
                  <WText
                    text="Bánh mì + Nước suối"
                    typo="Body2"
                    color="Black"
                  />
                  <WText text="59.000VND" typo="Body3" color="DarkGray" />
                </View>
              </View>

              <View style={styles.right}>
                <TouchableOpacity>
                  <Minus
                    size={20}
                    variant="Linear"
                    color={BaseColor.DarkGray}
                  />
                </TouchableOpacity>

                <WText text="1" typo="Body1" color="Main" />

                <TouchableOpacity>
                  <Add size={20} variant="Linear" color={BaseColor.DarkGray} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <WText
            text={translate('source:arrival_title')}
            typo="Heading2"
            color="Main"
          />
          <View style={styles.item}>
            <Image source={{uri: image}} style={styles.image} />
            <WText text="SGN - PQC" typo="Body2" color="Black" />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 1" typo="Body3" color="DarkGray" />
            <View style={styles.customerServices}>
              <View style={styles.left}>
                <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
                <View>
                  <WText
                    text="Bánh mì + Nước suối"
                    typo="Body2"
                    color="Black"
                  />
                  <WText text="59.000VND" typo="Body3" color="DarkGray" />
                </View>
              </View>

              <View style={styles.right}>
                <TouchableOpacity>
                  <Minus
                    size={20}
                    variant="Linear"
                    color={BaseColor.DarkGray}
                  />
                </TouchableOpacity>

                <WText text="1" typo="Body1" color="Main" />

                <TouchableOpacity>
                  <Add size={20} variant="Linear" color={BaseColor.DarkGray} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 2" typo="Body3" color="DarkGray" />
            <View style={styles.customerServices}>
              <View style={styles.left}>
                <WIcon icon="knife" size={20} color={PrimaryColor.Main} />
                <View>
                  <WText
                    text="Bánh mì + Nước suối"
                    typo="Body2"
                    color="Black"
                  />
                  <WText text="59.000VND" typo="Body3" color="DarkGray" />
                </View>
              </View>

              <View style={styles.right}>
                <TouchableOpacity>
                  <Minus
                    size={20}
                    variant="Linear"
                    color={BaseColor.DarkGray}
                  />
                </TouchableOpacity>

                <WText text="1" typo="Body1" color="Main" />

                <TouchableOpacity>
                  <Add size={20} variant="Linear" color={BaseColor.DarkGray} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.divider} />
        <View style={styles.flexButton}>
          <WText
            text={translate('source:total') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="15.980.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:confirm')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Devices.height - 100,
  },
  content: {
    marginTop: 24,
    padding: 8,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  item: {
    marginVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    height: 24,
    width: 24,
    borderRadius: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginTop: 16,
  },
  info: {
    marginTop: 16,
  },
  customerServices: {
    marginTop: 8,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  left: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  right: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  flexButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 40,
  },
});

export default memo(MealServices);
