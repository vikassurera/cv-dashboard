export interface WorkCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
    data: string[],
}

const WorkCard = ({logo, title, subtitle, duration, data}: WorkCardProps) => {
    return <div className={'work-bond'}>
        <div className={'card project-card'}>
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
                <ul>
                    {
                        data.map((item) => <li>{item}</li>)
                    }
                </ul>
            </div>

        </div>
    </div>;
}

export default WorkCard