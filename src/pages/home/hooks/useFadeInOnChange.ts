import { useEffect, useState } from "react";

export default function useFadeInOnChange<T>(output: T) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (output) setVisible(false);
    }, [output]);
    useEffect(() => {
        if (!visible && output) {
            requestAnimationFrame(() => setVisible(true));
        }
    }, [visible, output]);

    return visible
}