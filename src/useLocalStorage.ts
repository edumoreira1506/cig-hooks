import { useCallback } from 'react';

import isJson from './utils/isJson';

export default function useLocalStorage<T>(key: string) {
  const set = useCallback((newValue: T) => {
    if (typeof newValue === 'object') {
      window.localStorage.setItem(key, JSON.stringify(newValue));
    } else {
      window.localStorage.setItem(key, String(newValue));
    }
  }, [key]);

  const get = useCallback(() => {
    const value = window.localStorage.getItem(key);

    if (!value) return null;

    if (isJson(value)) return JSON.parse(value);

    if (!isNaN(parseInt(value))) return Number(value);

    if (['true', 'false'].includes(value)) return value === 'true' ? true : false;

    return value;
  }, [key]);

  const remove = useCallback(() => {
    window.localStorage.removeItem(key);
  }, [key]);

  return { set, get, remove };
}
