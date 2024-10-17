import React from 'react';
import {StyleSheet} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {Provider} from 'react-redux';
import {ModalPresenterParent} from '@whitespectre/rn-modal-presenter';
import {MenuProvider} from 'react-native-popup-menu';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import store from '@/hooks/context';
import MainRoutes from '@/routes';

enableFreeze(true);
const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={styles.appContainer}>
      <SafeAreaProvider initialMetrics={initialWindowMetrics}>
        <Provider store={store}>
          <QueryClientProvider client={queryClient}>
            <ModalPresenterParent>
              <MenuProvider>
                <MainRoutes />
              </MenuProvider>
            </ModalPresenterParent>
          </QueryClientProvider>
        </Provider>
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
