import { renderHook } from '@testing-library/react-hooks';

import useLocalStorage from '../../hooks/useLocalStorage';

describe('useLocalStorage', () => {
  afterEach(() => {
    window.localStorage.clear();
  });

  describe('.set', () => {
    it('stores the string', () => {
      const key = 'key';
      const value = 'value';
      const { result } = renderHook(() => useLocalStorage(key));
  
      result.current.set(value);

      expect(window.localStorage.getItem(key)).toBe(value);
    });

    it('stores the object as a string', () => {
      const key = 'key';
      const value = {};
      const expectedValue = '{}';
      const { result } = renderHook(() => useLocalStorage(key));

      result.current.set(value);

      expect(window.localStorage.getItem(key)).toBe(expectedValue);
    });
  });

  describe('.set', () => {
    it('returns null when value does not exist on local storage', () => {
      const key = 'key';
      const { result } = renderHook(() => useLocalStorage(key));

      expect(result.current.get()).toBeNull();
    });

    it('returns an object when value is a json string', () => {
      const key = 'key';
      const value = '{}';

      window.localStorage.setItem(key, value);

      const { result } = renderHook(() => useLocalStorage(key));

      expect(result.current.get()).toMatchObject({});
    });

    it('returns an number when value is a number', () => {
      const key = 'key';
      const value = '1234.567';

      window.localStorage.setItem(key, value);

      const { result } = renderHook(() => useLocalStorage(key));

      expect(result.current.get()).toBe(1234.567);
    });

    it('returns a boolean when value is boolean', () => {
      const key = 'key';
      const value = 'true';

      window.localStorage.setItem(key, value);

      const { result } = renderHook(() => useLocalStorage(key));

      expect(result.current.get()).toBe(true);
    });

    it('returns a string when value is string', () => {
      const key = 'key';
      const value = 'string';

      window.localStorage.setItem(key, value);

      const { result } = renderHook(() => useLocalStorage(key));

      expect(result.current.get()).toBe(value);
    });
  });

  describe('.remove', () => {
    it('removes the value from local storage', () => {
      const key = 'key';
      const value = 'value';

      window.localStorage.setItem(key, value);

      const { result } = renderHook(() => useLocalStorage(key));

      result.current.remove();

      expect(window.localStorage.getItem(value)).toBe(null);
    });
  });
});
