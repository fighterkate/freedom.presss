import { useEffect, useRef, useState } from "react";

export default function usePrevious (value: any) {
    const valueRef = useRef(value);

    useEffect(() => {
        valueRef.current = value;
    }, [value]);

    return valueRef.current;
}