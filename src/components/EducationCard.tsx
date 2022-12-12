interface EducationCardProps {
    title: string;
    subtitle: string;
    logo: string;
    duration: string;
}

const EducationCard = ({logo, title, subtitle, duration}: EducationCardProps) => {
    return <div className={'education-card'}>
        <div className={'header'}>
            <div className={'avatar2 project-logo'}>
                <img src={logo} alt={'project-logo'}/>
            </div>
            <div className={'project-title'}>
                <p className={'title'}>
                    {title}
                </p>
                <p>
                    {subtitle} ({duration})
                </p>
            </div>
        </div>
    </div>;
}

export default EducationCard