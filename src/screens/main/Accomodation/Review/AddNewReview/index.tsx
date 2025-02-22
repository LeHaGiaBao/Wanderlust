import React, {memo, useCallback, useState} from 'react';
import {Image, StyleSheet, TextInput, View} from 'react-native';
import {BaseColor, Devices, PrimaryColor, SecondaryColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {Star1} from 'iconsax-react-native';
import {WButton} from '@/components/UIKit';
import {useWanderlustNavigation} from '@/hooks/core/core';

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function AddNewReview() {
  const nav = useWanderlustNavigation();
  const [review, setReview] = useState('');

  const handleReview = useCallback(() => {
    nav.goBack();
  }, [nav]);

  return (
    <View style={styles.container}>
      <TopNavigation title={translate('source:review')} />
      <View style={styles.listStar}>
        <Star1 size={48} variant="Linear" color={SecondaryColor.Yellow} />
        <Star1 size={48} variant="Linear" color={SecondaryColor.Yellow} />
        <Star1 size={48} variant="Linear" color={SecondaryColor.Yellow} />
        <Star1 size={48} variant="Linear" color={SecondaryColor.Yellow} />
        <Star1 size={48} variant="Linear" color={SecondaryColor.Yellow} />
      </View>
      <View style={styles.textFiled}>
        <Image source={{uri: IMAGE}} style={styles.avatar} />
        <TextInput
          autoCapitalize="none"
          multiline
          style={styles.textInput}
          placeholder={translate('source:review_placeholder')}
          placeholderTextColor={BaseColor.DarkGray}
          value={review}
          onChangeText={setReview}
        />
      </View>
      <View style={styles.divider} />

      <View style={styles.buttonContainer}>
        <WButton
          text={translate('source:review')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
          onPress={handleReview}
        />
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
  listStar: {
    marginTop: 48,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 16,
  },
  textFiled: {
    marginTop: 48,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatar: {
    height: 36,
    width: 36,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
  },
  textInput: {
    width: '90%',
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 16,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 16,
  },
});

export default memo(AddNewReview);
