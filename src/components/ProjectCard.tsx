import Attachments, {AttachmentsProps} from "./Attachments";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
    description?: string;
    links?:AttachmentsProps
}

const ProjectCard = ({logo, title, subtitle ,duration, links, description }:ProjectCardProps ) => {
    return <div className={'project-card custom-card'}>
        <div className={'project-header'}>
            <div className={'avatar2 project-logo'}>
                <img src={logo} alt={'project-logo'}/>
            </div>
            <div className={'project-title'}>
                <h5>
                    {title}
                </h5>
                <p>
                    {subtitle}
                </p>
            </div>

        </div>
        {/*<br/>*/}
        <p>
            {duration}
        </p>
        {/*<br/>*/}
        <div className={'project-body'}>
            {
                description && <p>
                    {description}
                </p>
            }
            {
                links && <Attachments {...links}/>
            }
        </div>

    </div>;
}

export default ProjectCard