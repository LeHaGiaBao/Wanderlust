import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {WIcon, WText} from '@/components/UIKit';
import {BaseColor} from '@/constants';
import {Calendar, Ticket, Clock} from 'iconsax-react-native';

function MyFlightVisited() {
  return (
    <View style={styles.container}>
      <View style={styles.flexColumn}>
        <View style={styles.flexRow}>
          <WIcon icon="flight_go_disable" size={20} color={BaseColor.Gray} />
          <WText text="SGN - PQC" typo="Body3" color="Gray" />
        </View>

        <View style={styles.flexRow}>
          <Calendar size={20} color={BaseColor.Gray} />
          <WText text="Thứ 3, 07 tháng 11" typo="Body3" color="Gray" />
        </View>
      </View>

      <View style={styles.flexColumn}>
        <View style={styles.flexRow}>
          <Ticket size={20} color={BaseColor.Gray} />
          <WText text="Economy Classic" typo="Body3" color="Gray" />
        </View>

        <View style={styles.flexRow}>
          <Clock size={20} color={BaseColor.Gray} />
          <WText text="10:30 - 11:30" typo="Body3" color="Gray" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  flexColumn: {
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default memo(MyFlightVisited);
