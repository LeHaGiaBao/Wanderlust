import {WText} from '@/components/UIKit';
import React, {memo, useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Star1, Location, Map1} from 'iconsax-react-native';
import {PrimaryColor, SecondaryColor} from '@/constants';
import translate from '@/translations/i18n';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

function DetailContent() {
  const nav = useWanderlustNavigation();

  const renderContentNode = useMemo(() => {
    return (
      <View style={styles.contentNode}>
        <View style={styles.itemNode}>
          <Star1 size={20} color={SecondaryColor.Yellow} variant="Bold" />
          <WText text="4.8" typo="Body1" color="Black" />
          <WText
            text={translate('source:n_review', {n: '4.5K'})}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <View style={styles.itemNode}>
          <Location size={20} color={PrimaryColor.Main} variant="Bold" />
          <WText
            text="Sapa, Lào Cai, Việt Nam"
            typo="Body2"
            color="DarkGray"
            numberOfLines={1}
          />
        </View>
      </View>
    );
  }, []);

  const renderMap = useMemo(() => {
    return (
      <TouchableOpacity style={styles.mapNode}>
        <Map1 size={24} color={PrimaryColor.Main} />
        <WText text={translate('source:map')} typo="Button2" color="Main" />
      </TouchableOpacity>
    );
  }, []);

  const onPressViewMore = useCallback(() => {
    nav.navigate(Routes.accomodation_overview);
  }, [nav]);

  return (
    <View style={styles.pageContainer}>
      <View style={styles.container}>
        <WText
          text="Săn mây Sapa ngắm bình minh sớm - Nửa ngày"
          typo="Heading1"
          color="Black"
        />
        <View style={styles.content}>
          {renderContentNode}
          {renderMap}
        </View>
      </View>
      <View style={styles.container}>
        <WText
          text={translate('source:overview')}
          typo="Heading2"
          color="Black"
        />
        <View style={styles.overviewContent}>
          <WText
            text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem magni architecto dignissimos maxime praesentium labore esse dicta minima consectetur possimus nihil fugit, dolores omnis nisi nostrum deleniti dolore, quidem facilis?"
            typo="Body2"
            color="Gray"
            numberOfLines={4}
          />
          <TouchableOpacity onPress={onPressViewMore}>
            <WText
              text={translate('source:view_more')}
              typo="Helper"
              color="Main"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    marginHorizontal: 16,
    gap: 16,
  },
  container: {
    display: 'flex',
    marginTop: 16,
    gap: 12,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentNode: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 8,
  },
  itemNode: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  mapNode: {
    display: 'flex',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overviewContent: {
    display: 'flex',
    gap: 4,
  },
});

export default memo(DetailContent);
