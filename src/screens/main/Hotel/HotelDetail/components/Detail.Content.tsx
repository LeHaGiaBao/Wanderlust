import {WIcon, WText} from '@/components/UIKit';
import React, {memo, useCallback, useMemo} from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {Star1, Location, Map1, Wifi} from 'iconsax-react-native';
import {BaseColor, PrimaryColor, SecondaryColor} from '@/constants';
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
          <WText text="4.5" typo="Body1" color="Black" />
          <WText
            text={translate('source:n_review', {n: '4.5K'})}
            typo="Body2"
            color="DarkGray"
          />
        </View>
        <View style={styles.itemNode}>
          <Location size={20} color={PrimaryColor.Main} variant="Bold" />
          <WText
            text="Phú Quốc, Kiên Giang, Việt Nam"
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
    <>
      <View style={styles.pageContainer}>
        <View style={styles.container}>
          <WText
            text="Khu nghỉ dưỡng Vinpearl Wonderworld Phú Quốc"
            typo="Heading1"
            color="Black"
            numberOfLines={2}
          />
          <View style={styles.content}>
            {renderContentNode}
            {renderMap}
          </View>
        </View>

        <View style={styles.convenienceContainer}>
          <WText
            text={translate('source:convenience')}
            typo="Heading2"
            color="Black"
          />
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <Wifi size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:wifi')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <WIcon icon="knife" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:restaurant')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <WIcon icon="beach" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:private_beach')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
          </View>
          <View style={styles.itemContainer}>
            <View style={styles.item}>
              <WIcon icon="parking" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:parking')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <WIcon icon="swim" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:swim')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
            <View style={styles.item}>
              <WIcon icon="bar" size={20} color={PrimaryColor.Pressed} />
              <WText
                text={translate('source:bar')}
                typo="Body2"
                color="DarkGray"
              />
            </View>
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
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    display: 'flex',
    gap: 16,
    backgroundColor: BaseColor.White,
  },
  container: {
    display: 'flex',
    marginTop: 16,
    marginHorizontal: 16,
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
  convenienceContainer: {
    display: 'flex',
    gap: 12,
    backgroundColor: PrimaryColor.Light,
    padding: 16,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 24,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
});

export default memo(DetailContent);
