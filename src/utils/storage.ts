import AsyncStorage from '@react-native-async-storage/async-storage';

export const keyStorage = {
  user: 'user',
};

export const storageData = async (key: any, value: string | any) => {
  try {
    const val = typeof value === 'string' ? value : JSON.stringify(value);
    await AsyncStorage.setItem(key, val);
  } catch (e) {
    // saving error
  }
};

export const getStorageData = async (key: any) => {
  try {
    const val = await AsyncStorage.getItem(key);
    return val != null
      ? typeof val === 'string'
        ? val
        : JSON.parse(val)
      : null;
  } catch (e) {
    // error reading value
  }
};

export const removeStorageData = async (key: any) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (e) {
    // error reading value
  }
};
