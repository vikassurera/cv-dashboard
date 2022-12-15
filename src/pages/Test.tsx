import Section from "../components/Section/Section";
import DataCard, {DataCardI} from "../components/DataCard";
import GridCardLayout from "../components/CardLayout/GridCardLayout";
import TimelineCardLayout from "../components/CardLayout/TimelineCardLayout";



const card1 = {
    title: 'ERP Alerts App',
    subtitle: 'Self Initiated Project',
    logo: 'imgs/erp_alerts_logo.png',
    duration: 'Nov 2022 - Dec 2022',
};

const card2 = {
    title: 'ERP Alerts App',
    subtitle: 'Self Initiated Project',
    logo: 'imgs/erp_alerts_logo.png',
    duration: 'Nov 2022 - Dec 2022',
    data: [
        'Responsible for management of the spAts and NSSC website (design, development and maintenance)',
        'Successfully designed and developed a quiz platform for Space Quiz event with participants of over 350+',
        'Designed and developed NSSC 20, a space-themed, user-friendly website on React.',
    ],
    links: {
        github: 'https://github.com/Vikas-Surera/erp-alerts-app',
        website: 'https://oreo.vikassurera.com/notifications'
    }
}

const card3 = {
    title: 'ERP Alerts App',
    subtitle: 'Self Initiated Project',
    logo: 'imgs/erp_alerts_logo.png',
    duration: 'Nov 2022 - Dec 2022',
    data: 'Developed a push notifications app for all placement related notifications and updates for IIT Kharagpur students.',
    links: {
        github: 'https://github.com/Vikas-Surera/erp-alerts-app',
        website: 'https://oreo.vikassurera.com/notifications'
    }
}

const data1: DataCardI[] = [
    card1,
    card1,
    card1,
    card1,
]

const data2: DataCardI[] = [
    card2,
    card2,
    card2,
    card2,
]

const data3: DataCardI[] = [
    card3,
    card3,
    card3,
    card3,
]

const Test = () => {
    return <div>
        <br/>
        <br/>

        <Section title={'Projects'}>
            <GridCardLayout data={data1}/>
            <br/>
            <TimelineCardLayout data={data3}/>
            <br/>
            <DataCard title={'Buy an Oreo'}
                      subtitle={'Self Initiated Project'}
                      logo={'imgs/oreo_logo2.png'}
                      duration={'Nov 2022 - Dec 2022'}
            />
            <br/>
            <DataCard title={'ERP Alerts App'}
                      subtitle={'Self Initiated Project'}
                      logo={'imgs/erp_alerts_logo.png'}
                      duration={'Nov 2022 - Dec 2022'}
                      data={'Developed a push notifications app for all placement related notifications and updates for IIT Kharagpur students.'}
                      links={{
                          github: 'https://github.com/Vikas-Surera/erp-alerts-app',
                          website: 'https://oreo.vikassurera.com/notifications'
                      }}
            />
            <br/>

            <br/>

            <DataCard title={'Optimal Path Navigator'}
                      subtitle={'AIFA | IIT Kharagpur'}
                      logo={'imgs/iit_kgp_logo.png'}
                      duration={'Aug 2022 - Nov 2022'}
                      data={[
                          'Responsible for management of the spAts and NSSC website (design, development and maintenance)',
                          'Successfully designed and developed a quiz platform for Space Quiz event with participants of over 350+',
                          'Designed and developed NSSC 20, a space-themed, user-friendly website on React.',
                      ]}
                      links={{
                          github: 'https://github.com/Vikas-Surera/project_AIFA',
                          website: 'https://aifa-2022.vikassurera.com/',
                          youtube: 'https://youtu.be/njq03n2HIXs?list=PLe3yOhtTcUkCsOCrrvqphQ6FfkIaZrwWQ'
                      }}
            />
            <br/>

            <DataCard title={'Parallel Jaw Plier Mechanism'}
                      subtitle={'Mechanism Sessional | IIT Kharagpur'}
                      logo={'imgs/iit_kgp_logo.png'}
                      duration={'May 2020 - Present'}
                      data={'Designed and simulated a parallel jaw plier mechanism using SolidWorks and performed analytical calculations and graphical analysis.'}
                      links={{
                          youtube: 'https://youtu.be/yb3j_eGvBms'
                      }}
            />
            <br/>
        </Section>

        <br/>
        <br/>
    </div>
}

export default Test