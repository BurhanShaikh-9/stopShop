
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap';

interface HeadingProps {
    headingText: string;
  }
export const Heading : React.FC<HeadingProps>  = ({ headingText }) => {

    const characters = headingText.split('');
    useEffect(() => {
        const characterElements = document.querySelectorAll('.character');
        const positionObj = [
            { y: -10, rotation: 10 },
            { y: 5, rotation: 10 },
        ];

        characterElements.forEach((char, keyId) => {
            char.addEventListener('mouseenter', () => {
                const randomIndex = Math.floor(Math.random() * positionObj.length);
                const randomPosition = positionObj[randomIndex];
                gsap.to(char, randomPosition);
            });

            char.addEventListener('mouseleave', () => {
                gsap.to(char, { y: 0, rotation: 0 });
            });
        });

        return () => {
            characterElements.forEach((char, keyId) => {
                char.removeEventListener('mouseenter', () => {
                    const randomIndex = Math.floor(Math.random() * positionObj.length);
                    const randomPosition = positionObj[randomIndex];
                    gsap.to(char, randomPosition);
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
