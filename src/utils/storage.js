import AsyncStorage from '@react-native-community/async-storage';

const setItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(`Error saving ${key}`);
  }
};

const getItem = async key => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key);
    return JSON.parse(retrievedItem);
  } catch (error) {
    return error;
  }
};

const removeItem = async key => {
  try {
    await AsyncStorage.removeItem(key);
    return `${key} removed sucessfully!`;
  } catch (error) {
    return error;
  }
};

const clearCache = async keys => {
  try {
    await AsyncStorage.multiRemove(keys);
    return `${keys} removed successfully!`;
  } catch (error) {
    return error;
  }
};

export {setItem, getItem, removeItem, clearCache};
