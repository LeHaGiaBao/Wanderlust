import React, {memo, useCallback} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WText} from '@/components/UIKit';
import {BaseColor, Devices, StatusColor} from '@/constants';
import translate from '@/translations/i18n';
import {AddCircle, Trash} from 'iconsax-react-native';
import PaymentItem from './components/PaymentItem';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const VISA =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1000px-Visa_Inc._logo.svg.png';
const MASTERCARD =
  'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png';
const JCB = 'https://www.jcbusa.com/JCB-logos/EmblemColor.png';

function PaymentCardList() {
  const nav = useWanderlustNavigation();

  const handleCard = useCallback(() => {
    nav.navigate(Routes.payment_edit);
  }, [nav]);

  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:card_list')} />
      <View style={styles.contentContainer}>
        <View style={styles.flexContainer}>
          <WText
            text={translate('source:credit_or_debit')}
            typo="Heading2"
            color="Black"
          />
        </View>

        <View style={styles.listItem}>
          <PaymentItem
            image={VISA}
            title="**** **** **** 9090"
            icon={<Trash size={20} variant="Bold" color={StatusColor.Error} />}
          />
          <PaymentItem
            image={MASTERCARD}
            title="**** **** **** 1234"
            icon={<Trash size={20} variant="Bold" color={StatusColor.Error} />}
          />
          <PaymentItem
            image={JCB}
            title="**** **** **** 1234"
            icon={<Trash size={20} variant="Bold" color={StatusColor.Error} />}
          />
        </View>

        <TouchableOpacity style={styles.addNewCard} onPress={handleCard}>
          <AddCircle size={24} variant="Linear" color={BaseColor.Black} />
          <WText
            text={translate('source:add_new_card')}
            typo="Body2"
            color="Black"
          />
        </TouchableOpacity>
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
  flexContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentContainer: {
    marginTop: 16,
  },
  addNewCard: {
    marginVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  listItem: {
    marginVertical: 16,
    display: 'flex',
    gap: 8,
  },
});

export default memo(PaymentCardList);
