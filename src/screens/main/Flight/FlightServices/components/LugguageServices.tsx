/* eslint-disable react-native/no-inline-styles */
import {WButton, WText} from '@/components/UIKit';
import {BaseColor, Devices, PrimaryColor} from '@/constants';
import translate from '@/translations/i18n';
import React, {memo, useCallback} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';

const image =
  'https://rubee.com.vn/wp-content/uploads/2021/05/Logo-vietjet.jpg';

const DATA = [
  {
    id: 1,
    weight: '20kg',
    price: '199.000 VND',
  },
  {
    id: 2,
    weight: '30kg',
    price: '299.000 VND',
  },
  {
    id: 3,
    weight: '40kg',
    price: '399.000 VND',
  },
  {
    id: 4,
    weight: '50kg',
    price: '499.000 VND',
  },
  {
    id: 5,
    weight: '60kg',
    price: '599.000 VND',
  },
  {
    id: 6,
    weight: '70kg',
    price: '699.000 VND',
  },
  {
    id: 7,
    weight: '80kg',
    price: '799.000 VND',
  },
];

function LugguageServices() {
  const renderSeperator = useCallback(() => {
    return <View style={{width: 8}} />;
  }, []);

  const renderItem = useCallback(({item}: any) => {
    const {id, weight, price} = item;
    const isActive = id === 1;
    const background = isActive ? PrimaryColor.Light : BaseColor.White;
    const borderColor = isActive ? PrimaryColor.Main : BaseColor.MiddleGray;

    return (
      <TouchableOpacity
        style={[
          styles.luggageItem,
          {backgroundColor: background, borderColor: borderColor},
        ]}>
        <WText text={weight} typo="Body3" color="Black" />
        <WText text={price} typo="Small" color="Black" />
      </TouchableOpacity>
    );
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.content}>
          <WText
            text={translate('source:departure_title')}
            typo="Heading2"
            color="Main"
          />
          <View style={styles.item}>
            <Image source={{uri: image}} style={styles.image} />
            <WText text="SGN - PQC" typo="Body2" color="Black" />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 1" typo="Body3" color="DarkGray" />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={renderSeperator}
              style={styles.list}
            />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 2" typo="Body3" color="DarkGray" />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={renderSeperator}
              style={styles.list}
            />
          </View>
        </View>

        <View style={styles.content}>
          <WText
            text={translate('source:arrival_title')}
            typo="Heading2"
            color="Main"
          />
          <View style={styles.item}>
            <Image source={{uri: image}} style={styles.image} />
            <WText text="SGN - PQC" typo="Body2" color="Black" />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 1" typo="Body3" color="DarkGray" />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={renderSeperator}
              style={styles.list}
            />
          </View>

          <View style={styles.divider} />
          <View style={styles.info}>
            <WText text="Tui tên test 2" typo="Body3" color="DarkGray" />
            <FlatList
              data={DATA}
              renderItem={renderItem}
              horizontal
              showsHorizontalScrollIndicator={false}
              ItemSeparatorComponent={renderSeperator}
              style={styles.list}
            />
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.divider} />
        <View style={styles.flexButton}>
          <WText
            text={translate('source:total') + ':'}
            typo="Heading1"
            color="Black"
          />
          <WText text="15.980.000 VND" typo="Heading1" color="Error" />
        </View>

        <WButton
          text={translate('source:confirm')}
          typo="Button1"
          color="White"
          backgroundColor="Main"
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Devices.height - 100,
  },
  content: {
    marginTop: 24,
    padding: 8,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  item: {
    marginVertical: 16,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  image: {
    height: 24,
    width: 24,
    borderRadius: 4,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginTop: 16,
  },
  info: {
    marginTop: 16,
  },
  list: {
    marginTop: 8,
  },
  luggageItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    borderWidth: 1,
    borderRadius: 8,
    padding: 8,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
  },
  flexButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 40,
  },
});

export default memo(LugguageServices);
