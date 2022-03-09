import { renderHook } from '@testing-library/react-hooks';

import useDebouncedEffect from '../../hooks/useDebouncedEffect';

jest.useFakeTimers();

describe('useDebouncedEffect', () => {
  it('calls callback', () => {
    const effect = jest.fn();
    const delay = 2000;
    const deps = [] as any[];

    renderHook(() => useDebouncedEffect(effect, delay, deps));

    jest.runAllTimers();

    expect(effect).toHaveBeenCalledTimes(1);
  });
});
