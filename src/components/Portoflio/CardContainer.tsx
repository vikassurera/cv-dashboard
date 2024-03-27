import React, {useEffect} from "react";
import useCursorHint from "../../hooks/cursorHint";

interface CardContainerProps {
    id: string
    className?: string
    style?: React.CSSProperties
    cursorHint?: string
}

const CardContainer: React.FC<React.PropsWithChildren<CardContainerProps>> = (props) => {
    const cardRef = React.createRef<HTMLDivElement>();
    const {cursorHint} = props;
    const {setHint} = useCursorHint();

    useEffect(() => {
        if (cursorHint) {
            // if the mouse hovers in side the card, change the cursor hint
            const card = cardRef.current;
            if (!card) {
                console.warn("Card not found")
                return;
            }

            card.addEventListener("mouseenter", function (e) {
                setHint(cursorHint)
            });

            card.addEventListener("mouseleave", function (e) {
                setHint(undefined)
            });

            return () => {
                card.removeEventListener("mouseenter", function (e) {
                    console.log("Mouse enter event removed")
                });
                card.removeEventListener("mouseleave", function (e) {
                    console.log("Mouse leave event removed")
                });
            }
        }

    }, [cursorHint, cardRef, setHint]);

    return <div ref={cardRef} className={`card-container card rounded-4 p-4 ${props.className ?? ''}`} id={props.id}
                style={props.style}>
        {
            props.children
        }
    </div>
}

export default CardContainer;