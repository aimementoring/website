const myOwnStorage = {};

// inspired by this https://michalzalecki.com/why-using-localStorage-directly-is-a-bad-idea/
function isSupported(storage) {
  try {
    const key = '__some_key_we_are_just_using_to_check__';
    storage.setItem(key, key);
    storage.removeItem(key);
    return true;
  } catch (e) {
    return false;
  }
}

export function setOnStorage(key, value) {
  if (isSupported(localStorage)) {
    localStorage.setItem(key, JSON.stringify({
      createdAt: Date.now(),
      value,
    }));
  } else {
    myOwnStorage[key] = value;
  }
}

export function getFromStorage(key) {
  try {
    if (isSupported(localStorage)) {
      const item = JSON.parse(localStorage.getItem(key));
      return item && item.value;
    }
    return myOwnStorage[key];
  } catch (e) {
    return null;
  }
}

export function removeFromStorage(key) {
  if (isSupported(localStorage)) {
    localStorage.removeItem(key);
  } else {
    delete myOwnStorage.key;
  }
}
