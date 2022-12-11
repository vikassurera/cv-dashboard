import {AiFillGithub, AiFillYoutube, AiOutlineLink} from "react-icons/ai";

interface ProjectCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
    description: string;
    links:{
        github?: string;
        website?: string;
        youtube?: string;
    }
}

const ProjectCard = ({logo, title, subtitle ,duration, links, description }:ProjectCardProps ) => {
    return <div className={'card project-card'}>
        <div className={'project-header'}>
            <div className={'avatar project-logo'}>
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
            <p>
                {description}
            </p>
            <ul className={'cta-section'}>
                {
                    links.github && <li>
                        <a className={'github'} href={links.github}>
                            <AiFillGithub size={30}/>
                        </a>
                    </li>
                }
                {
                    links.website && <li>
                        <a className={'link'} href={links.website} target={'_blank'}>
                            <AiOutlineLink size={30}/>
                        </a>
                    </li>

                }
                {
                    links.youtube && <li>
                        <a className={'youtube'}
                           href={links.youtube}>
                            <AiFillYoutube size={30}/>
                        </a>
                    </li>
                }
            </ul>
        </div>

    </div>;
}

export default ProjectCard