import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import images from '@/assets/images';
import {WButton, WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {AddCircle} from 'iconsax-react-native';
import {BaseColor} from '@/constants';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

function EmptyFeed() {
  const nav = useWanderlustNavigation();

  const handleCreateFeed = useCallback(() => {
    nav.navigate(Routes.feed_create);
  }, [nav]);

  return (
    <View style={styles.container}>
      <Image source={images.New} />
      <WText
        text={translate('source:create_first_feed')}
        typo="Heading2"
        color="Main"
      />
      <WText
        text={translate('source:empty_feed_description')}
        typo="Body3"
        color="Gray"
      />
      <WButton
        text={translate('source:create_feed')}
        typo="Button2"
        color="White"
        backgroundColor="Main"
        width={110}
        height={35}
        iconAlign="Left"
        icon={<AddCircle size={16} color={BaseColor.White} />}
        onPress={handleCreateFeed}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
    marginHorizontal: 25,
  },
});

export default memo(EmptyFeed);
