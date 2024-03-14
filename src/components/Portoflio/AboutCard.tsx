import React from "react";
import CardContainer from "./CardContainer";

const AboutCard: React.FC = () => {
    return <CardContainer id={'about-card'}>
        <div>
            <h5>
                {'<About />'}
            </h5>
            <div>
                Hey! I'm vikas, a full stack developer from IIT Kharagpur. My expertise lies in creating web and mobile
                applications.
            </div>
            <div className={'mt-2'}>
                Exploring new tech to create better solutions.
            </div>
        </div>
    </CardContainer>
}

export default AboutCard;