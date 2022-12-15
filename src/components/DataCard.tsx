import Attachments, {AttachmentI} from "./Attachments";

export interface DataCardI {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
    data?: string | string[];
    links?:AttachmentI
}

const DataCard = ({logo, title, subtitle ,duration, links, data }:DataCardI ) => {
    const renderDescription = () => {
        if (typeof data === 'string') {
            return <p>{data}</p>
        } else if (Array.isArray(data)) {
            return <ul>
                {
                    data.map((item) => <li>{item}</li>)
                }
            </ul>
        }
        return null;
    }
    return <div className={'card data-card'}>
        <div className={'data-card-header'}>
            <div className={'avatar2 data-card-logo'}>
                <img src={logo} alt={'project-logo'}/>
            </div>
            <div className={'data-card-title'}>
                <h3>
                    {title}
                </h3>
                <p>
                    {subtitle}
                </p>
            </div>

        </div>
        <br/>
        <p>
            {duration}
        </p>
        <br/>
        <div className={'data-card-body'}>
            {
                data && renderDescription()
            }
            {
                links && <Attachments {...links}/>
            }
        </div>

    </div>;
}

export default DataCard;