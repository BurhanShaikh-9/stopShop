
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

export const Heading = ({ headingText }) => {
    const characters = headingText.split('');

    useEffect(() => {
        const characterElements = document.querySelectorAll('.character');

        characterElements.forEach((char, keyId) => {
            char.addEventListener('mouseenter', () => {
                gsap.to(char, { y: -10, rotation: 10 });
            });

            char.addEventListener('mouseleave', () => {
                gsap.to(char, { y: 0, rotation: 0 });
            });
        });

        return () => {
            characterElements.forEach((char, keyId) => {
                char.removeEventListener('mouseenter', () => {
                    gsap.to(char, { y: -10, rotation: 10 });
                });

                char.removeEventListener('mouseleave', () => {
                    gsap.to(char, { y: 0, rotation: 0 });
                });
            });
        };
    }, []);

    return (
        <div className="headingComponent">
            {characters.map((char, keyId) => (
                <div key={keyId} className={`character character-${keyId}`}>
                    {char}
                </div>
            ))}
        </div>
    )
}
