import React, {memo} from 'react';
import {Image, View} from 'react-native';
import {styles} from './styles';
import {WText} from '@/components/UIKit';
import {Star1} from 'iconsax-react-native';
import {SecondaryColor} from '@/constants';

interface ReviewCardItemProps {
  id?: string;
  image: string;
  name: string;
  rating: string;
  content: string;
}

function ReviewCardItem(props: ReviewCardItemProps) {
  const {image, name, rating, content} = props;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerItem}>
          <Image source={{uri: image}} style={styles.circleImage} />
          <WText text={name} typo="Body2" color="Black" />
        </View>
        <View style={styles.headerItem}>
          <Star1 size={20} color={SecondaryColor.Yellow} variant="Bold" />
          <WText text={rating} typo="Body2" color="Black" />
        </View>
      </View>
      <View style={styles.content}>
        <WText text={content} typo="Body3" color="DarkGray" numberOfLines={2} />
      </View>
    </View>
  );
}

export default memo(ReviewCardItem);
