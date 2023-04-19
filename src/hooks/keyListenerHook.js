import { useEffect, useCallback } from 'react';

export const useKeyPressCallback = (callBack, deps) => {
    const cb = useCallback(callBack, deps); // eslint-disable-line react-hooks/exhaustive-deps
    useEffect(() => {
        document.addEventListener('keydown', cb);

        return () => document.removeEventListener('keydown', cb);
    }, [cb]);
};