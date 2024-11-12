import {WText} from '@/components/UIKit';
import {BaseColor, PrimaryColor} from '@/constants';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import {More} from 'iconsax-react-native';

interface NotificationItemProps {
  image: string;
  date: string;
  title: string;
  content: string;
}

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function NotificationItem(props: NotificationItemProps) {
  const {image, date, title, content} = props;
  const [isExpanded, setIsExpanded] = useState(false);
  const [isTruncated, setIsTruncated] = useState(false);

  const onTextLayout = useCallback((e: any) => {
    setIsTruncated(e.nativeEvent.lines.length >= 5);
  }, []);

  const renderHeader = useMemo(() => {
    return (
      <View style={styles.header}>
        <View style={styles.leftContainer}>
          <Image source={{uri: image ?? IMAGE}} style={styles.avatar} />
          <View style={styles.headerContent}>
            <WText text={date} color="Gray" typo="Body3" numberOfLines={1} />
            <WText
              text={title}
              color="Main"
              typo="Heading2"
              numberOfLines={1}
            />
          </View>
        </View>
        <More size={24} color={BaseColor.Gray} />
      </View>
    );
  }, [date, image, title]);

  const renderContent = useMemo(() => {
    return (
      <View style={styles.contentContainer}>
        <WText
          text={content}
          color="Gray"
          typo="Body2"
          numberOfLines={isExpanded ? undefined : 5}
          onTextLayout={onTextLayout}
        />
        {!isExpanded && isTruncated && (
          <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
            <WText text="Xem thêm" color="Main" typo="Button2" />
          </TouchableOpacity>
        )}
      </View>
    );
  }, [content, isExpanded, onTextLayout, isTruncated]);

  return (
    <View style={styles.container}>
      {renderHeader}
      {renderContent}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: 'auto',
  },
  header: {
    marginHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 8,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 100,
    backgroundColor: PrimaryColor.Light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent: {
    display: 'flex',
    gap: 4,
  },
  contentContainer: {
    marginVertical: 8,
    marginHorizontal: 16,
    display: 'flex',
    gap: 8,
  },
});

export default memo(NotificationItem);
