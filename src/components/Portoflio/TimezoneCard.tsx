import CardContainer from "./CardContainer";
import React from "react";

const TimezoneCard = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false}));

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false}))
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <CardContainer id={'timezone-card'} className={'text-light'}>
        {/* Show HH:mm time (no pm or am) */}
        <h4>
            {time}
        </h4>
        <p>
            in India
        </p>
    </CardContainer>

}

export default TimezoneCard;