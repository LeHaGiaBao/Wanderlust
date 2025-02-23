import {WText} from '@/components/UIKit';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

function FeedDetailContent() {
  return (
    <View style={styles.container}>
      <WText
        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid illo esse voluptates maxime consequuntur, nobis vitae quisquam molestias in facilis deleniti ratione similique maiores, dolores facere aliquam ipsa quod nostrum!
"
        typo="Body2"
        color="Gray"
        numberOfLines={5}
      />
      <WText text="#Lansanho #PhuQuoc" typo="Body3" color="Main" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 16,
    display: 'flex',
    gap: 4,
  },
});

export default memo(FeedDetailContent);
