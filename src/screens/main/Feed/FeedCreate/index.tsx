import React, {memo, useCallback, useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor, StatusColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WButton, WText} from '@/components/UIKit';
import {AddCircle} from 'iconsax-react-native';
import Modal from 'react-native-modal';
import {useWanderlustNavigation} from '@/hooks/core/core';

function FeedCreate() {
  const nav = useWanderlustNavigation();
  const [content, setContent] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = useCallback(() => {
    setModalVisible(!isModalVisible);
  }, [isModalVisible]);

  const handleCancelConfirm = useCallback(() => {
    if (content || hashtags) {
      setModalVisible(!isModalVisible);
    } else {
      nav.goBack();
    }
  }, [content, hashtags, isModalVisible, nav]);

  const handleCancel = useCallback(() => {
    setModalVisible(!isModalVisible);
    nav.goBack();
  }, [isModalVisible, nav]);

  const handleCreateFeed = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <>
      <View style={styles.container}>
        <TopNavigation
          title={translate('source:feed_create')}
          onPress={handleCancelConfirm}
        />
        <View style={styles.addImage}>
          <TouchableOpacity style={styles.buttonNewImage}>
            <AddCircle size={24} variant="Bold" color={PrimaryColor.Main} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNewImage}>
            <AddCircle size={24} variant="Bold" color={PrimaryColor.Main} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonNewImage}>
            <AddCircle size={24} variant="Bold" color={PrimaryColor.Main} />
          </TouchableOpacity>
        </View>
        <TextInput
          autoCapitalize="none"
          multiline
          style={styles.textInput}
          placeholder={translate('source:review_placeholder')}
          placeholderTextColor={BaseColor.DarkGray}
          value={content}
          onChangeText={setContent}
        />
        <TextInput
          autoCapitalize="none"
          multiline
          style={styles.textInput}
          placeholder="#Hashtag"
          placeholderTextColor={PrimaryColor.Main}
          value={hashtags}
          onChangeText={setHashtags}
        />
      </View>
      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:add_new_feed')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={handleCreateFeed}
        />
      </View>

      <Modal isVisible={isModalVisible}>
        <View style={styles.modal}>
          <WText
            text={translate('source:cancel_new_feed')}
            typo="Heading2"
            color="Main"
          />
          <WText
            text={translate('source:cancel_new_feed_des')}
            typo="Body2"
            color="Black"
          />
          <TouchableOpacity
            style={styles.buttonContinueEdit}
            onPress={toggleModal}>
            <WText
              text={translate('source:continue_edit')}
              typo="Body2"
              color="Main"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonSaveDraff}
            onPress={handleCancel}>
            <WText
              text={translate('source:save_draff')}
              typo="Body2"
              color="Main"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonCancel} onPress={handleCancel}>
            <WText
              text={translate('source:confirm_cancel')}
              typo="Body2"
              color="Error"
            />
          </TouchableOpacity>
        </View>
      </Modal>
    </>
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
  addImage: {
    marginTop: 24,
    display: 'flex',
    flexDirection: 'row',
    gap: 8,
  },
  buttonNewImage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 80,
    height: 80,
    borderRadius: 8,
    backgroundColor: BaseColor.LightGray,
  },
  buttonContainer: {
    bottom: 50,
    paddingHorizontal: 16,
    width: '100%',
    position: 'absolute',
  },
  textInput: {
    marginTop: 24,
    width: '100%',
  },
  modal: {
    borderRadius: 8,
    padding: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: BaseColor.White,
    gap: 24,
    height: 300,
  },
  buttonContinueEdit: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 25,
    backgroundColor: PrimaryColor.Light,
  },
  buttonSaveDraff: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: BaseColor.White,
    borderColor: PrimaryColor.Main,
  },
  buttonCancel: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 40,
    borderRadius: 25,
    borderWidth: 1,
    backgroundColor: BaseColor.White,
    borderColor: StatusColor.Error,
  },
});

export default memo(FeedCreate);
