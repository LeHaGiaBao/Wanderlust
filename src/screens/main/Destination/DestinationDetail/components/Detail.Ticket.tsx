import {WPlaceTicket} from '@/components/UIKit';
import {NavigationHeader} from '@/screens/main/_components';
import translate from '@/translations/i18n';
import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';

function DetailTicket() {
  return (
    <View style={styles.container}>
      <View style={styles.ticketHeader}>
        <NavigationHeader title={translate('source:ticket_type')} />
      </View>
      <WPlaceTicket
        title="Vé vào cổng"
        numberOfGuest="1"
        numerOfChildren="2"
        price="59.000 - 129.000 VND/ vé"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginTop: 24,
    marginHorizontal: 8,
    gap: 12,
  },
  ticketHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 8,
  },
});

export default memo(DetailTicket);
