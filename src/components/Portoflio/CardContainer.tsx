import React from "react";

interface CardContainerProps{
    id: string
    className?: string
    style?: React.CSSProperties
}

const CardContainer: React.FC<React.PropsWithChildren<CardContainerProps>> = (props) => {
    return <div className={`card-container card rounded-4 p-4 ${props.className ?? ''}`} id={props.id} style={props.style}>
        {
            props.children
        }
    </div>
}

export default CardContainer;