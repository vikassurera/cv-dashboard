import Attachments, {AttachmentsProps} from "./Attachments";

export interface WorkCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
    data: string[],
    links?: AttachmentsProps
}

const WorkCard = ({logo, title, subtitle, duration, data, links}: WorkCardProps) => {
    return <div className={'work-bond'}>
        <div className={'card project-card'}>
            <div className={'project-header'}>
                <div className={'avatar2 project-logo'}>
                    <img src={logo} alt={'project-logo'}/>
                </div>
                <div className={'project-title'}>
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
            <div className={'project-body'}>
                <ul>
                    {
                        data.map((item) => <li>{item}</li>)
                    }
                </ul>
                {
                    links && <Attachments {...links}/>
                }
            </div>

        </div>
    </div>;
}

export default WorkCard