interface EducationCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
}

const EducationCard = ({logo, title, subtitle, duration}: EducationCardProps) => {
    return <div className={'project-card education-card'}>
        <div className={'project-header'}>
            <div className={'avatar2 project-logo'}>
                <img src={logo} alt={'project-logo'}/>
            </div>
            <div className={'project-title'}>
                <h4>
                    {title}
                </h4>
                <p>
                    {subtitle} ({duration})
                </p>
            </div>
        </div>
    </div>;
}

export default EducationCard