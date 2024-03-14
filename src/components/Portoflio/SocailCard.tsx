import React from "react";
import CardContainer from "./CardContainer";

interface SocialCardPropTypes {
    link: string
    icon: React.ReactNode,
    backgroundColor: string,
    id: string
}

const SocialCard: React.FC<SocialCardPropTypes> = (props) => {
    return <CardContainer id={props.id}
                          className={'social-card d-flex justify-content-center align-items-center text-white'}
                          style={{backgroundColor: props.backgroundColor}}>
        <a href={props.link} target={'_blank'} rel={'noreferrer'}>
            {props.icon}
        </a>
    </CardContainer>
}

export default SocialCard;