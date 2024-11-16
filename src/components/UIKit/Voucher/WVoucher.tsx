import React, {memo, useCallback, useMemo, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TicketDiscount, AddCircle, TickCircle} from 'iconsax-react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import WText from '../Text/WText';
import translate from '@/translations/i18n';
import {VoucherProps} from '@/@types/styles';

function WVoucher(props: VoucherProps) {
  const {name, description, condition, isExpired} = props;
  const [selected, setSelected] = useState(false);

  const voucherStyle = useMemo(() => {
    const voucherBackground = isExpired ? BaseColor.LightGray : BaseColor.White;
    const footerBackground = isExpired
      ? BaseColor.MiddleGray
      : PrimaryColor.Light;
    const iconColor = isExpired ? BaseColor.DarkGray : PrimaryColor.Main;

    return {
      voucherBackground,
      footerBackground,
      iconColor,
    };
  }, [isExpired]);

  const handleSelectedVoucher = useCallback(() => {
    if (!isExpired) {
      setSelected(!selected);
    }
  }, [isExpired, selected]);

  const Wrapper = selected ? TickCircle : AddCircle;

  return (
    <View
      style={[
        styles.container,
        {backgroundColor: voucherStyle.voucherBackground},
      ]}>
      <View style={styles.header}>
        <View style={styles.leftHeader}>
          <TicketDiscount size={24} color={voucherStyle.iconColor} />
          <View style={styles.content}>
            <WText
              text={name}
              typo="Body2"
              color={isExpired ? 'DarkGray' : 'Main'}
            />
            <WText
              text={description}
              typo="Label"
              color={isExpired ? 'Gray' : 'DarkGray'}
            />
          </View>
        </View>
        <TouchableOpacity onPress={handleSelectedVoucher}>
          <Wrapper
            size={24}
            color={voucherStyle.iconColor}
            variant={selected ? 'Bold' : 'Linear'}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          styles.footer,
          {backgroundColor: voucherStyle.footerBackground},
        ]}>
        <WText
          text={condition}
          typo="Small"
          color={isExpired ? 'DarkGray' : 'Main'}
        />
        <WText
          text={translate('source:detail')}
          typo="Small"
          color={isExpired ? 'DarkGray' : 'Main'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    borderRadius: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.25,
    shadowColor: BaseColor.Gray,
    elevation: 5,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  leftHeader: {
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  content: {
    display: 'flex',
    gap: 4,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
  },
});

export default memo(WVoucher);
