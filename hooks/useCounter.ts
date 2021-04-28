import { useCallback, useMemo, useState } from 'react';

export function useCounter() {
    const [counter, setCounter] = useState(0);
    const incrementCounter = useCallback(() => {
        setCounter(pre => ++pre)
    }, []);

    const decrementCounter = useCallback(() => {
        setCounter(pre => --pre)
    }, []);

    const resetCounter = useCallback(() => {
        setCounter(0);
    }, []);

    const counterValue = useMemo(
        () => ({ counter, incrementCounter, decrementCounter, resetCounter }),
    );
    return counterValue;
}