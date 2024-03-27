// Context Provider to show a string message
import React, {createContext, PropsWithChildren, useEffect, useState} from 'react';

interface CursorHintContextI {
    cursorHint: string;
    setCursorHint: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultCursorHint = 'Hello there 👋';

export const CursorHintContext = createContext<CursorHintContextI>({
    cursorHint: defaultCursorHint,
    setCursorHint: () => {
    }
});

export const CursorHintProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [cursorHint, setCursorHint] = useState<string>(defaultCursorHint);

    // use effect on mouse move
    useEffect(() => {
        window.addEventListener("mousemove", function (e) {
            // console.log(`X: ${e.clientX}, Y: ${e.clientY}`);
            const cursor = document.getElementById("custom-cursor");
            if (!cursor) {
                console.warn("Cursor not found")
                return;
            }

            const posX = e.clientX;
            const posY = e.clientY;

            // cursor.style.left = posX + "px";
            // cursor.style.top = posY + "px";
            cursor.animate([
                {left: `${posX}px`, top: `${posY}px`},
                {left: `${posX}px`, top: `${posY}px`},
            ], {
                duration: 100,
                iterations: 1,
                fill: "forwards"
            })
        });

        return () => {
            window.removeEventListener("mousemove", function (e) {
                console.log("Mouse move event removed")
            });
        }
    }, []);

    const renderCursor = () => {
        return <div id="custom-cursor">
            <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 19" viewBox="0 0 24 24" id="cursor">
                <defs>
                    <linearGradient id="a" x1="1.543" x2="16.457" y1="6.043" y2="20.957" gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#8e2de2"></stop>
                        <stop offset="1" stopColor="#4a00e0"></stop>
                    </linearGradient>
                </defs>
                <path fill="url(#a)"
                      d="m18.676 13.263-12-11A1 1 0 0 0 5 3v16a1 1 0 0 0 1.707.707l4.074-4.074 3.351 5.867a1 1 0 1 0 1.736-.992L12.723 15H18a1 1 0 0 0 .676-1.737ZM11 13a1 1 0 0 0-.707.293L7 16.586V5.273L15.43 13H11Z"></path>
            </svg>
            <div id="cursor-hint">
                {cursorHint}
            </div>
        </div>
    }

    return (
        <CursorHintContext.Provider value={{cursorHint, setCursorHint}}>
            {renderCursor()}
            {children}
        </CursorHintContext.Provider>
    );
};