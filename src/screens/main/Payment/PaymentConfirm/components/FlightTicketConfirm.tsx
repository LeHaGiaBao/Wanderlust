import React, {memo} from 'react';
import {StyleSheet, View} from 'react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {WIcon, WText} from '@/components/UIKit';
import {Calendar, Clock, Ticket} from 'iconsax-react-native';

function FlightTicketConfirm() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.flexColumn}>
          <View style={styles.flexRow}>
            <WIcon icon="airplane-go" size={20} />
            <WText text="SGN - PQC" typo="Body3" color="Black" />
          </View>

          <View style={styles.flexRow}>
            <Calendar size={20} color={PrimaryColor.Main} />
            <WText text="Thứ 3, 07 tháng 11" typo="Body3" color="Black" />
          </View>
        </View>

        <View style={styles.flexColumn}>
          <View style={styles.flexRow}>
            <Ticket size={20} color={PrimaryColor.Main} />
            <WText text="Economy Classic" typo="Body3" color="Black" />
          </View>

          <View style={styles.flexRow}>
            <Clock size={20} color={PrimaryColor.Main} />
            <WText text="10:30 - 11:30" typo="Body3" color="Black" />
          </View>
        </View>
      </View>

      <View style={styles.divider} />

      <View style={styles.content}>
        <View style={styles.flexColumn}>
          <View style={styles.flexRow}>
            <WIcon icon="airplane-landing" size={20} />
            <WText text="SGN - PQC" typo="Body3" color="Black" />
          </View>

          <View style={styles.flexRow}>
            <Calendar size={20} color={PrimaryColor.Main} />
            <WText text="Thứ 3, 07 tháng 11" typo="Body3" color="Black" />
          </View>
        </View>

        <View style={styles.flexColumn}>
          <View style={styles.flexRow}>
            <Ticket size={20} color={PrimaryColor.Main} />
            <WText text="Economy Classic" typo="Body3" color="Black" />
          </View>

          <View style={styles.flexRow}>
            <Clock size={20} color={PrimaryColor.Main} />
            <WText text="10:30 - 11:30" typo="Body3" color="Black" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    gap: 8,
    padding: 12,
    borderRadius: 8,
    backgroundColor: BaseColor.White,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.3,
    shadowColor: '#C9C9C9',
    elevation: 5,
  },
  content: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
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
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
  },
});

export default memo(FlightTicketConfirm);
