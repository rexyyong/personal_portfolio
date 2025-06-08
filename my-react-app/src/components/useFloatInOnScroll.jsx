import { useEffect, useRef, useState } from "react";

export function useFloatInOnScroll() {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new window.IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.2 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return [ref, visible];
}