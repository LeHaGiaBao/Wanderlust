import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import {ModalPresenterParent} from '@whitespectre/rn-modal-presenter';
import {MenuProvider} from 'react-native-popup-menu';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
import Toast from 'react-native-toast-message';
import MainRoutes from '@/routes';
import {QueryProvider} from '@/services/query';
import StoreProvider from '@/services/store/StoreProvider';
import {toastConfig} from '@/utils/toast';
import {AuthProvider} from '@/services/provider/auth/AuthProvider';

enableFreeze(true);

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <QueryProvider>
          <StoreProvider>
            <ModalPresenterParent>
              <MenuProvider>
                <BottomSheetModalProvider>
                  <AuthProvider>
                    <MainRoutes />
                  </AuthProvider>
                  <Toast
                    config={toastConfig}
                    position="bottom"
                    visibilityTime={1500}
                    bottomOffset={50}
                    keyboardOffset={30}
                  />
                </BottomSheetModalProvider>
              </MenuProvider>
            </ModalPresenterParent>
          </StoreProvider>
        </QueryProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
});

export default App;
