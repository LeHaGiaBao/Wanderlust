import React, {memo, useCallback, useEffect, useState} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor, StatusColor} from '@/constants';
import translate from '@/translations/i18n';
import {AddCircle, Trash, Verify} from 'iconsax-react-native';
import PaymentItem from './components/PaymentItem';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import Modal from 'react-native-modal';

const VISA =
  'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1000px-Visa_Inc._logo.svg.png';
const MASTERCARD =
  'https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png';
const JCB = 'https://www.jcbusa.com/JCB-logos/EmblemColor.png';

function PaymentCardList() {
  const [isConfirmModal, setConfirmModal] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const nav = useWanderlustNavigation();

  const handleCard = useCallback(() => {
    nav.navigate(Routes.payment_edit);
  }, [nav]);

  const toggleModal = useCallback(() => {
    setConfirmModal(!isConfirmModal);
    setModalVisible(false);
  }, [isConfirmModal]);

  const handleDeleteCard = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  useEffect(() => {
    if (isConfirmModal) {
      const timer = setTimeout(() => {
        setConfirmModal(!isConfirmModal);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isConfirmModal]);

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
            icon={
              <Trash
                size={20}
                variant="Bold"
                color={StatusColor.Error}
                onPress={toggleModal}
              />
            }
          />
          <PaymentItem
            image={MASTERCARD}
            title="**** **** **** 1234"
            icon={
              <Trash
                size={20}
                variant="Bold"
                color={StatusColor.Error}
                onPress={toggleModal}
              />
            }
          />
          <PaymentItem
            image={JCB}
            title="**** **** **** 1234"
            icon={
              <Trash
                size={20}
                variant="Bold"
                color={StatusColor.Error}
                onPress={toggleModal}
              />
            }
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

      <Modal isVisible={isConfirmModal}>
        {isModalVisible ? (
          <View style={styles.modal}>
            <WText
              text={translate('source:notification')}
              typo="Heading2"
              color="Main"
            />
            <Verify size={55} color={PrimaryColor.Main} variant="Bold" />
            <WText
              text={translate('source:edit_card_status:delete_success')}
              typo="Body2"
              color="Black"
            />
          </View>
        ) : (
          <View style={styles.modal}>
            <WText
              text={translate('source:notification')}
              typo="Heading2"
              color="Main"
            />
            <WText
              text={translate('source:edit_card_status:delete_confirm')}
              typo="Body2"
              color="Black"
            />
            <View style={styles.modalButton}>
              <TouchableOpacity
                style={styles.buttonMainStyle}
                onPress={handleDeleteCard}>
                <WText
                  text={translate('source:confirm')}
                  typo="Body2"
                  color="White"
                />
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonErrorStyle}
                onPress={toggleModal}>
                <WText
                  text={translate('source:cancel')}
                  typo="Body2"
                  color="Error"
                />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Modal>
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
  modal: {
    borderRadius: 8,
    padding: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.White,
    gap: 24,
    height: 200,
  },
  modalButton: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
  },
  buttonMainStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 25,
    backgroundColor: PrimaryColor.Main,
  },
  buttonErrorStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: StatusColor.Error,
    backgroundColor: BaseColor.White,
  },
});

export default memo(PaymentCardList);
