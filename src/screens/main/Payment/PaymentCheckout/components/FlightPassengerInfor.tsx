import React, {memo, useCallback, useRef} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WButton, WIcon, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import {BaseColor, PrimaryColor} from '@/constants';
import WInputField from '@/components/UIKit/Input/WInputField';
import {Calendar} from 'iconsax-react-native';

interface FlightPassengerInforProps {
  passengerNum: number;
}

function FlightPassengerInfor(props: FlightPassengerInforProps) {
  const {passengerNum} = props;
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const renderBackdrop = useCallback((p: any) => {
    return (
      <BottomSheetBackdrop
        {...p}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  return (
    <>
      <View style={styles.row}>
        <WText
          text={translate('source:passenger_info_n', {n: passengerNum})}
          typo="Heading2"
          color="Black"
        />
        <TouchableOpacity onPress={handlePresentModalPress}>
          <WText text={translate('source:edit')} typo="Body3" color="Main" />
        </TouchableOpacity>
      </View>

      <View style={styles.itemContainer}>
        <WText text="NGUYEN / MY DUYEN" typo="Body2" color="DarkGray" />
      </View>

      <View style={styles.flexItem}>
        <View style={styles.inforItemFlex}>
          <WText text="01/01/2000" typo="Body2" color="DarkGray" />
        </View>
        <View style={styles.inforItemFlex}>
          <WText text="Nữ" typo="Body2" color="DarkGray" />
        </View>
      </View>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.bottomSheetContainer}>
          <View style={styles.bottomsheetHeader}>
            <WText
              text={translate('source:customer_information')}
              typo="Heading1"
              color="Black"
            />
          </View>

          <View style={styles.bottomSheetCustomerInfor}>
            <View style={styles.flexBottomSheetItem}>
              <View style={styles.inforItemBottomsheetFlex}>
                <WInputField
                  type="Text"
                  text={translate('source:profile_info:last_name')}
                  placeholder="HO"
                />
              </View>

              <View style={styles.inforItemBottomsheetFlex}>
                <WInputField
                  type="Text"
                  text={translate('source:profile_info:first_name')}
                  placeholder="TEN DEM VA TEN"
                />
              </View>
            </View>
            <View style={styles.flexBottomSheetItem}>
              <View style={styles.inforItemBottomsheetFlex}>
                <WInputField
                  type="Text"
                  text={translate('source:profile_info:birth')}
                  placeholder="NGAY SINH"
                  iconAlign="Right"
                  icon={<Calendar size={20} color={BaseColor.Black} />}
                />
              </View>

              <View style={styles.genderItem}>
                <View style={styles.flexBottomSheetItem}>
                  <WIcon
                    icon="radio-enable"
                    size={24}
                    color={PrimaryColor.Main}
                  />
                  <WText
                    text={translate('source:profile_info:male')}
                    typo="Body2"
                    color="Black"
                  />
                </View>

                <View style={styles.flexBottomSheetItem}>
                  <WIcon
                    icon="radio-disable"
                    size={24}
                    color={PrimaryColor.Main}
                  />
                  <WText
                    text={translate('source:profile_info:female')}
                    typo="Body2"
                    color="Black"
                  />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.bottomSheetButtonContainer}>
            <WButton
              text={translate('source:confirm')}
              typo="Button1"
              color="White"
              backgroundColor="Main"
            />
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
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
    marginBottom: 16,
  },
  inforItemFlex: {
    marginTop: 8,
    flex: 0.5,
    gap: 4,
    height: 40,
    flexDirection: 'row',
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
  genderItem: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 28,
  },
  itemContainer: {
    height: 40,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  bottomSheetContainer: {
    display: 'flex',
    paddingHorizontal: 16,
    paddingBottom: 32,
  },
  bottomsheetHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: 24,
    marginTop: 24,
  },
  bottomSheetCustomerInfor: {
    marginTop: 24,
    display: 'flex',
    gap: 8,
  },
  bottomSheetButtonContainer: {
    display: 'flex',
    gap: 16,
    marginVertical: 24,
    alignItems: 'center',
  },
  bottomsheetContent: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 16,
    gap: 16,
  },
  flexBottomSheetItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  inforItemBottomsheetFlex: {
    flex: 0.5,
    gap: 4,
  },
});

export default memo(FlightPassengerInfor);
