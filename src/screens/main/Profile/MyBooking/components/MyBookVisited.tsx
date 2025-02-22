import React, {memo, useCallback} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {BaseColor, PrimaryColor, SecondaryColor} from '@/constants';
import {WText} from '@/components/UIKit';
import translate from '@/translations/i18n';
import {Star1, Location} from 'iconsax-react-native';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

interface MyBookVisitedProps {
  isReview: boolean;
}

const image =
  'https://media-cdn-v2.laodong.vn/Storage/NewsPortal/2022/9/6/1089730/Heritage-Cruise-1.jpg';

function MyBookVisited(props: MyBookVisitedProps) {
  const nav = useWanderlustNavigation();
  const {isReview} = props;

  const handleReview = useCallback(() => {
    if (!isReview) {
      nav.navigate(Routes.add_new_review);
    }
  }, [isReview, nav]);

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.bookingContent}>
        <View style={styles.leftColumn}>
          <WText
            text="Vinpearl Phú Quốc"
            typo="Body3"
            color="Black"
            numberOfLines={1}
          />
          <View style={styles.flexRow}>
            <Star1 size={9} variant="Bold" color={SecondaryColor.Yellow} />
            <WText text="-" typo="Label" color="Black" numberOfLines={1} />
          </View>
          <View style={styles.flexRow}>
            <Location size={9} variant="Bold" color={PrimaryColor.Main} />
            <WText
              text="Kiên Giang, Việt Nam"
              typo="Label"
              color="Black"
              numberOfLines={1}
            />
          </View>
        </View>

        <View style={styles.rightColumn}>
          <WText
            text="10/11/2023"
            typo="Body3"
            color="Gray"
            numberOfLines={1}
          />
          <TouchableOpacity onPress={handleReview}>
            <WText
              text={
                isReview
                  ? translate('source:view_review')
                  : translate('source:review_now')
              }
              typo="Label"
              color={isReview ? 'Main' : 'Yellow'}
              numberOfLines={1}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    padding: 4,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  bookingContent: {
    marginVertical: 8,
    width: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default memo(MyBookVisited);
