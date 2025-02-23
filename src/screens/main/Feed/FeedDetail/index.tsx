/* eslint-disable react-native/no-inline-styles */
import React, {memo, useCallback} from 'react';
import {View, StyleSheet, FlatList, Image, TextInput} from 'react-native';
import {BaseColor, Devices, PrimaryColor, StatusColor} from '@/constants';
import {TopNavigation} from '@/components/containers';
import translate from '@/translations/i18n';
import {WButton, WText} from '@/components/UIKit';
import {ExportCurve, Heart} from 'iconsax-react-native';
import FeedDetailHeader from './components/FeedDetail.Header';
import FeedDetailContent from './components/FeedDetail.Content';

const image =
  'https://r2.nucuoimekong.com/wp-content/uploads/tour-lan-ngam-san-ho-phu-quoc-1-ngay.jpg';

const avatar =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

const DATA = [{id: 1}, {id: 2}, {id: 3}];

function FeedDetail() {
  const renderItem = useCallback(() => {
    return (
      <View style={styles.commentItem}>
        <View style={styles.commentHeaderItem}>
          <View style={styles.headerLeft}>
            <Image source={{uri: avatar}} style={styles.circleAvatar} />
            <WText text="Tui ten testing" typo="Body2" color="Black" />
          </View>
          <Heart size={20} color={StatusColor.Error} />
        </View>
        <WText
          text="Ôi trải nghiệm của bạn thật thú vị"
          typo="Body2"
          color="DarkGray"
          numberOfLines={10}
        />
      </View>
    );
  }, []);

  const renderSeparator = useCallback(() => {
    return <View style={{height: 20}} />;
  }, []);

  const renderFooter = useCallback(() => {
    return <View style={styles.footer} />;
  }, []);

  return (
    <>
      <FlatList
        style={styles.container}
        data={DATA}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={renderSeparator}
        ListFooterComponent={renderFooter}
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <TopNavigation title={translate('source:feed_detail')} />
            </View>
            <FeedDetailHeader image={image} />
            <FeedDetailContent />
            <View style={styles.commentInput}>
              <View style={styles.divider} />
              <View style={styles.textFiled}>
                <Image source={{uri: avatar}} style={styles.avatar} />
                <TextInput
                  autoCapitalize="none"
                  multiline
                  style={styles.textInput}
                  placeholder={translate('source:review_placeholder')}
                  placeholderTextColor={BaseColor.DarkGray}
                />
              </View>
              <View style={styles.divider} />
            </View>
          </>
        }
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <WButton
            text={translate('source:share')}
            typo="Body2"
            color="Main"
            backgroundColor="White"
            buttonStyles={{
              borderWidth: 1,
              borderColor: PrimaryColor.Main,
            }}
            icon={<ExportCurve size={24} color={PrimaryColor.Main} />}
            iconAlign="Left"
          />
        </View>
        <View style={styles.button}>
          <WButton
            text={translate('source:favorite')}
            typo="Body2"
            color="White"
            backgroundColor="Main"
            icon={<Heart size={24} color={BaseColor.White} />}
            iconAlign="Left"
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 77,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
  header: {
    marginBottom: 24,
    paddingHorizontal: 16,
  },
  buttonContainer: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 16,
    paddingBottom: 24,
    gap: 8,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: -10},
    shadowOpacity: 0.05,
    shadowColor: '#000000',
  },
  button: {
    width: '50%',
  },
  footer: {
    width: '100%',
    height: 200,
  },
  commentInput: {
    paddingHorizontal: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
    marginVertical: 16,
  },
  textFiled: {
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
  commentItem: {
    display: 'flex',
    paddingHorizontal: 16,
  },
  commentHeaderItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  circleAvatar: {
    width: 18,
    height: 18,
    borderRadius: 100,
  },
  headerLeft: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(FeedDetail);
