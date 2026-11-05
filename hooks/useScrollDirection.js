import { useState, useRef, useEffect } from 'react';

const useScrollDirection = () => {
    const [show, setShow] = useState(true);
    const scrollPosRef = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;

            if (currentScrollPos < scrollPosRef.current) {
                setShow(true);
            } else {
                setShow(false);
            }

            scrollPosRef.current = currentScrollPos;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return show;
};

export default useScrollDirection;