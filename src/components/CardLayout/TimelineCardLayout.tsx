import DataCard, {DataCardI} from "../DataCard";
import TimelineView from "./TiimelineView";

export interface TimelineCardLayoutProps {
    data: DataCardI[];
}

const TimelineCardLayout = ({data}: TimelineCardLayoutProps) => {
    return <div>
        {
            data.map((item) => <TimelineView><DataCard {...item} /></TimelineView>)
        }
    </div>
}

export default TimelineCardLayout