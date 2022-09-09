import { useMemo, useState } from 'react';

import useDebouncedEffect from './useDebouncedEffect';

export const useRefetch = () => {
  const [refetch, setRefetch] = useState(false);

  useDebouncedEffect(() => {
    if (refetch) {
      setRefetch(false);
    }
  }, 1000, [refetch]);

  return useMemo(() => ({
    refetch,
    setRefetch
  }), [refetch]);
};
