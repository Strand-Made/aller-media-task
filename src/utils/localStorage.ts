function saveToStorage(items: [], key: string) {
  const stringifyArray = JSON.stringify(items);
  localStorage.setItem(key, stringifyArray);
}

function getFromStorage(key: string) {
  const items = localStorage.getItem(key);
  if (items) {
    const parsedItems = JSON.parse(items);
    return parsedItems;
  }
  return [];
}

function clearStorage(key: string) {
  localStorage.removeItem(key);
}

export { saveToStorage, getFromStorage, clearStorage };
