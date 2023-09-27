const storage = {
  setItem(key, value) {
    if (process.client) {
      localStorage.setItem(key, JSON.stringify(value));
    }
    return value;
  },
  getItem(key) {
    if (process.client) {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  },
  removeItem(key) {
    if (process.client) {
      localStorage.removeItem(key);
    }
  },
  mergeItem(key, newData) {
    const existingData = storage.getItem(key) || {};
    const mergedValue = { ...existingData, ...newData };
    storage.setItem(key, mergedValue);
    return mergedValue;
  },
};

export default storage;
