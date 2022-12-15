import DataCard, {DataCardI} from "../DataCard";

export interface GridCardLayoutProps {
    className?: string;
    columns?: number;
    data: DataCardI[];
}

const GridCardLayout = ({data, className, columns}: GridCardLayoutProps) => {
    return <div className={`grid-card-layout ${columns===1 ? 'grid-card-layout-1' : 'grid-card-layout-2'} ${className ? className : ''}`}>
        {
            data.map((item) => <DataCard {...item} />)
        }
    </div>
}

export default GridCardLayout