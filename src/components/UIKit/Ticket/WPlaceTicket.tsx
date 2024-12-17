import React, {memo, useCallback, useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '@/assets/images';
import WText from '../Text/WText';
import translate from '@/translations/i18n';
import {Profile2User, Minus, Add, Calendar} from 'iconsax-react-native';
import {BaseColor, PrimaryColor} from '@/constants';
import {PlaceTicketProps} from '@/@types/styles';
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import WButton from '../Button/WButton';
import {useWanderlustNavigation} from '@/hooks/core/core';
import {Routes} from '@/routes/routes';

const TICKET = images.Ticket;

function WTicket(props: PlaceTicketProps) {
  const {title, numberOfGuest, numerOfChildren, price, onEdit} = props;
  const nav = useWanderlustNavigation();
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleEdit = useCallback(() => {
    onEdit?.();
    handlePresentModalPress();
  }, [onEdit, handlePresentModalPress]);

  const renderBackdrop = useCallback((p: any) => {
    return (
      <BottomSheetBackdrop
        {...p}
        opacity={0.8}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
      />
    );
  }, []);

  const goToTicketDetail = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
    nav.navigate(Routes.ticket_detail);
  }, [nav]);

  return (
    <>
      <ImageBackground
        source={TICKET}
        resizeMode="stretch"
        style={styles.imageBackground}>
        <View style={styles.leftContainer}>
          <View style={styles.leftContentHeader}>
            <WText text={title} typo="Body3" color="Black" numberOfLines={2} />
            <WText
              text={translate('source:detail')}
              typo="Label"
              color="Pressed"
            />
          </View>
          <View style={styles.leftContentContainer}>
            <View style={styles.leftContentHeader}>
              <View style={styles.item}>
                <Profile2User size={16} color={BaseColor.DarkGray} />
                <WText
                  text={translate('source:number_of_guests', {
                    n: numberOfGuest,
                  })}
                  typo="Label"
                  color="DarkGray"
                />
              </View>
              <View style={styles.item}>
                <Profile2User size={16} color={BaseColor.DarkGray} />
                <WText
                  text={translate('source:number_of_children', {
                    n: numerOfChildren,
                  })}
                  typo="Label"
                  color="DarkGray"
                />
              </View>
            </View>
            <View style={styles.price}>
              <WText text={price} typo="Body2" color="Error" />
            </View>
          </View>
        </View>
        <View style={styles.rightContainer}>
          <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
            <WText
              text={translate('source:edit')}
              typo="Button2"
              color="Main"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <BottomSheetModal
        ref={bottomSheetModalRef}
        handleComponent={null}
        backdropComponent={renderBackdrop}>
        <BottomSheetView style={styles.contentContainer}>
          <View style={styles.bottomsheetHeader}>
            <WText
              text={translate('source:ticket_info')}
              typo="Heading1"
              color="Black"
            />
          </View>
          <View style={styles.ticketContainer}>
            <View style={styles.ticket}>
              <View style={styles.ticketLeft}>
                <WText
                  text={translate('source:adult_ticket')}
                  typo="Heading2"
                  color="Black"
                />
                <WText text="129.000 VND" typo="Body2" color="DarkGray" />
              </View>

              <View style={styles.control}>
                <TouchableOpacity style={styles.controlComponent}>
                  <Minus size={20} variant="Linear" color={BaseColor.White} />
                </TouchableOpacity>

                <WText text="01" typo="Body2" color="DarkGray" />

                <TouchableOpacity style={styles.controlComponent}>
                  <Add size={20} variant="Linear" color={BaseColor.White} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.ticket}>
              <View style={styles.ticketLeft}>
                <WText
                  text={translate('source:child_ticket')}
                  typo="Heading2"
                  color="Black"
                />
                <WText text="59.000 VND" typo="Body2" color="DarkGray" />
              </View>

              <View style={styles.control}>
                <TouchableOpacity style={styles.controlComponent}>
                  <Minus size={20} variant="Linear" color={BaseColor.White} />
                </TouchableOpacity>

                <WText text="01" typo="Body2" color="DarkGray" />

                <TouchableOpacity style={styles.controlComponent}>
                  <Add size={20} variant="Linear" color={BaseColor.White} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.ticket}>
              <View style={styles.ticketLeft}>
                <WText
                  text={translate('source:ticket_day')}
                  typo="Heading2"
                  color="Black"
                />
              </View>

              <View style={styles.calendar}>
                <Calendar
                  size={20}
                  variant="Linear"
                  color={PrimaryColor.Main}
                />
                <WText text="12/12/2023" typo="Body2" color="Main" />
              </View>
            </View>

            <View style={styles.divider} />

            <View style={styles.ticketFooter}>
              <WText
                text={translate('source:price_detail')}
                typo="Heading2"
                color="Black"
              />
            </View>

            <View style={styles.ticketPrice}>
              <View style={styles.ticketPriceLeft}>
                <WText
                  text={translate('source:num_of_adult_ticket', {x: 1})}
                  typo="Body2"
                  color="DarkGray"
                />
                <WText
                  text={translate('source:num_of_child_ticket', {x: 1})}
                  typo="Body2"
                  color="DarkGray"
                />
              </View>

              <View style={styles.ticketPriceRight}>
                <WText text="129.000 VND" typo="Body2" color="DarkGray" />
                <WText text="59.000 VND" typo="Body2" color="DarkGray" />
              </View>
            </View>

            <View style={styles.bottomContainer}>
              <View style={styles.divider} />

              <View style={styles.ticketBottom}>
                <View style={styles.ticketPriceLeft}>
                  <WText
                    text={translate('source:total_payment') + ':'}
                    typo="Heading1"
                    color="Black"
                  />
                </View>

                <View style={styles.ticketPriceRight}>
                  <WText text="188.000 VND" typo="Heading1" color="Error" />
                </View>
              </View>
            </View>

            <View style={styles.buttonContainer}>
              <WButton
                text={translate('source:continue')}
                typo="Button1"
                color="White"
                backgroundColor="Main"
                onPress={goToTicketDetail}
              />
            </View>
          </View>
        </BottomSheetView>
      </BottomSheetModal>
    </>
  );
}

const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: 110,
  },
  leftContainer: {
    width: '55%',
    position: 'absolute',
    top: 0,
    left: 0,
    margin: 16,
    display: 'flex',
    gap: 24,
  },
  leftContentHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContentContainer: {
    display: 'flex',
    gap: 8,
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  price: {
    display: 'flex',
    alignSelf: 'flex-end',
  },
  rightContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    marginRight: 32,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editButton: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: PrimaryColor.Main,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  contentContainer: {
    display: 'flex',
    paddingBottom: 32,
  },
  bottomsheetHeader: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 24,
  },
  ticketContainer: {
    marginTop: 16,
  },
  ticket: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  divider: {
    width: '100%',
    height: 1,
    backgroundColor: BaseColor.MiddleGray,
  },
  ticketLeft: {
    display: 'flex',
    gap: 4,
  },
  control: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  controlComponent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 32,
    width: 32,
    backgroundColor: PrimaryColor.Main,
    borderRadius: 100,
  },
  calendar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  ticketPrice: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  ticketPriceLeft: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: 4,
  },
  ticketPriceRight: {
    display: 'flex',
    alignItems: 'flex-end',
    gap: 4,
  },
  ticketFooter: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  bottomContainer: {
    marginHorizontal: 16,
  },
  ticketBottom: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  buttonContainer: {
    paddingHorizontal: 16,
  },
});

export default memo(WTicket);
