import React, {memo, useCallback, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor, StatusColor} from '@/constants';
import {ExportCurve, Heart} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

interface FeedItemProps {
  id: string;
  image: string;
  avatar: string;
  name: string;
  content: string;
  tags: string;
  onPressItem?: () => void;
  onPressFavorite?: () => void;
}

function FeedItem(props: FeedItemProps) {
  const nav = useWanderlustNavigation();
  const [isFavorite, setIsFavorite] = useState(false);
  const {image, avatar, name, content, tags, onPressItem, onPressFavorite} =
    props;

  const handleOnPressFavorite = useCallback(() => {
    setIsFavorite(!isFavorite);
    onPressFavorite?.();
  }, [isFavorite, onPressFavorite]);

  const handleOnPressItem = useCallback(() => {
    onPressItem?.();
    nav.navigate(Routes.feed_detail);
  }, [onPressItem, nav]);

  return (
    <TouchableOpacity style={styles.container} onPress={handleOnPressItem}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <View style={styles.headerContent}>
          <View style={styles.headerItem}>
            <Image source={{uri: avatar}} style={styles.circleAvatar} />
            <WText text={name} typo="Body1" color="Black" />
          </View>
          <View style={styles.headerItem}>
            <ExportCurve size={20} color={PrimaryColor.Main} />
            <TouchableOpacity onPress={handleOnPressFavorite}>
              <Heart
                size={20}
                color={StatusColor.Error}
                variant={isFavorite ? 'Bold' : 'Linear'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.overviewContent}>
          <WText text={content} typo="Body2" color="Gray" numberOfLines={5} />
          <WText text={tags} typo="Body3" color="Main" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
    borderRadius: 12,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowColor: '#D9D9D9',
    elevation: 12,
  },
  image: {
    width: '100%',
    height: 235,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  headerContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  circleAvatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overviewContent: {
    marginTop: 16,
    display: 'flex',
    gap: 4,
  },
});

export default memo(FeedItem);
