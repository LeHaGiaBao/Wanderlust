import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {WIcon, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {ArrowCircleDown, ArrowCircleUp, Calendar} from 'iconsax-react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import WInputField from '@/components/UIKit/Input/WInputField';

interface FlightPassengerInforProps {
  passengerNum: number;
}

function FlightPassengerInfor(props: FlightPassengerInforProps) {
  const {passengerNum} = props;

  const [isShow, setIsShow] = useState(true);
  const IconWrapper = isShow ? ArrowCircleUp : ArrowCircleDown;

  const handleSetShowData = useCallback(() => {
    setIsShow(!isShow);
  }, [isShow]);

  return (
    <>
      <View style={styles.row}>
        <WText
          text={translate('source:passenger_info_n', {n: passengerNum})}
          typo="Heading2"
          color="Black"
        />
        <TouchableOpacity onPress={handleSetShowData}>
          <IconWrapper size={20} variant="Bold" color={PrimaryColor.Main} />
        </TouchableOpacity>
      </View>

      {isShow ? (
        <>
          <View style={styles.flexItem}>
            <View style={styles.inforItemFlex}>
              <WInputField
                type="Text"
                text={translate('source:profile_info:last_name')}
                placeholder="HO"
              />
            </View>

            <View style={styles.inforItemFlex}>
              <WInputField
                type="Text"
                text={translate('source:profile_info:first_name')}
                placeholder="TEN DEM VA TEN"
              />
            </View>
          </View>
          <View style={styles.flexItem}>
            <View style={styles.inforItemFlex}>
              <WInputField
                type="Text"
                text={translate('source:profile_info:birth')}
                placeholder="NGAY SINH"
                iconAlign="Right"
                icon={<Calendar size={20} color={BaseColor.Black} />}
              />
            </View>

            <View style={styles.genderItem}>
              <View style={styles.flexItem}>
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

              <View style={styles.flexItem}>
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
        </>
      ) : null}
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
});

export default memo(FlightPassengerInfor);
