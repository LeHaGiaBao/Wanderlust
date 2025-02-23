import React, {memo, useCallback, useMemo} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {TopNavigation} from '@/components/containers';
import {BaseColor, Devices} from '@/constants';
import {useWanderlustNavigationParams} from '@/hooks/core/core';
import translate from '@/translations/i18n';
import FreeServices from './components/FreeServices';
import LugguageServices from './components/LugguageServices';
import MealServices from './components/MealServices';

type FlightServices = 'free' | 'luggage' | 'meal';

function FlightServices() {
  const params =
    (useWanderlustNavigationParams() as {services?: FlightServices}) || {};
  const services = params.services ?? '';

  const title = useMemo(() => {
    if (services === 'free') {
      return translate('source:free_flight_services');
    }
    if (services === 'luggage') {
      return translate('source:checked_baggage');
    } else {
      return translate('source:meal');
    }
  }, [services]);

  const renderComponent = useCallback(() => {
    if (services === 'free') {
      return <FreeServices />;
    } else if (services === 'luggage') {
      return <LugguageServices />;
    } else {
      return <MealServices />;
    }
  }, [services]);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <TopNavigation title={title} />
      {renderComponent()}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 77,
    paddingHorizontal: 16,
    backgroundColor: BaseColor.White,
    height: Devices.height,
  },
});

export default memo(FlightServices);
