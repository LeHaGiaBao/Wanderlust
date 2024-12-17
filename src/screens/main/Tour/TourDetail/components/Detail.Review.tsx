import {ReviewCardItem} from '@/components/containers';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';
import {NavigationHeader} from '@/screens/main/_components';
import translate from '@/translations/i18n';
import React, {memo, useCallback} from 'react';
import {StyleSheet, View} from 'react-native';

const IMAGE =
  'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?semt=ais_hybrid';

function DetailReview() {
  const nav = useWanderlustNavigation();

  const onPressNavigate = useCallback(() => {
    nav.navigate(Routes.all_review);
  }, [nav]);

  return (
    <View style={styles.container}>
      <View style={styles.reviewHeader}>
        <NavigationHeader
          title={translate('source:review')}
          navigateTitle={translate('source:view_all')}
          onPress={onPressNavigate}
        />
      </View>
      <ReviewCardItem
        image={IMAGE}
        name="Tui tên Testing"
        rating="4.8"
        content="“Thủy cung rất đẹp, mình như được lạc giữa chốn đại dương bao la để thưởng thức cảnh đẹp của biển cả.”"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 16,
    marginHorizontal: 16,
    gap: 12,
  },
  reviewHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default memo(DetailReview);
