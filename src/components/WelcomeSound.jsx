import { useEffect } from 'react';

const WelcomeSound = () => {
    useEffect(() => {
        const w95Sound = new Audio('../assets/w95_startup.mp3');

        w95Sound.play();
    }, []);

    return null;
};

export default WelcomeSound;
