function setItem(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function getItem(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

function removeItem(key) {
  localStorage.removeItem(key);
}

function mergeItem(key, newData) {
  const existingData = getItem(key) || {};
  const mergedValue = { ...existingData, ...newData };
  setItem(key, mergedValue);
  return mergedValue;
}

export { setItem, getItem, mergeItem, removeItem };
