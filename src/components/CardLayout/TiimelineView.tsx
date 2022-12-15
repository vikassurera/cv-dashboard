import {PropsWithChildren} from "react";

export interface TimelineViewProps {

}

const TimelineView = ({children}: PropsWithChildren<TimelineViewProps>) => {
    return <div className={'timeline-view'}>
        {children}
    </div>
}

export default TimelineView;