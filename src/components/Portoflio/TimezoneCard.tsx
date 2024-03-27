import CardContainer from "./CardContainer";
import React from "react";

const TimezoneCard = () => {
    const [time, setTime] = React.useState(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false}));
    const [greeting, setGreeting] = React.useState<string | undefined>(undefined);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute: '2-digit', hour12: false}))
            // get greetings (morning, afternoon, evening, night) + emoji
            const currentHour = new Date().getHours();
            if (currentHour >= 0 && currentHour < 12) {
                setGreeting('Good Morning 🌅');
            } else if (currentHour >= 12 && currentHour < 16) {
                setGreeting('Good Afternoon 🌞');
            } else if (currentHour >= 16 && currentHour < 20) {
                setGreeting('Good Evening 🌆');
            } else {
                setGreeting('Good Night 🌙');
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return <CardContainer id={'timezone-card'} className={'text-light'} cursorHint={greeting}>
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