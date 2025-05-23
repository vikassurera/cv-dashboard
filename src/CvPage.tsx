import {FiArrowUpRight} from 'react-icons/fi';
import {FaGraduationCap} from 'react-icons/fa';
// import {AiOutlineDownload} from 'react-icons/ai';
import './cv_page.scss';
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import WorkCard from "./components/WorkCard";
import Attachments from "./components/Attachments";
import EducationCard from "./components/EducationCard";
import AwardCard, {AwardType} from "./components/AwardsCard";

const CvPage = () => {
    return <div className={'cv-container'}>
        <div className={'banner'}>
            <ul className={'navbar'}>
                <li><a href={'#about'}>About</a></li>
                <li><a href={'#education'}>Education</a></li>
                <li><a href={'#projects'}>Projects</a></li>
                <li><a href={'#work_experience'}>Work Experience</a></li>
                <li><a href={'#por'}>Position of Responsibilities</a></li>
            </ul>
        </div>

        <div className={'banner-avatar'}>
            <div className={'avatar white-border'}>
                <img src={'imgs/profile5.jpeg'} alt={'banner-avatar'}/>
            </div>
            <h1>
                Vikas Surera
            </h1>
            <h3>
                fullstack-devloper
            </h3>
            <Attachments {...{
                website: 'https://vikassurera.com',
                otherLink: 'https://bloggerboy.co.in',
                github: 'https://github.com/vikassurera',
                linkedin: 'https://www.linkedin.com/in/vikassurera/',
                twitter: 'https://twitter.com/vikassurera'
            }}/>
            {/*<div className={'avatar-cta'}>*/}
            {/*    <a className={'button'} style={{display: 'flex'}} href={'cv2.pdf'} target={'_blank'} rel={"noreferrer"}>*/}
            {/*        <AiOutlineDownload size={20}/>&nbsp; Download CV*/}
            {/*    </a>*/}
            {/*</div>*/}
        </div>
        <div className={'cv-body-container'}>
            <div className={'cv-body cv-body-left'}>
                <Section id={'about'} title={'About Me'} className={'desktop'}>
                    <p>
                        Hey! I'm a fullstack developer from IIT Kharagpur.
                        My expertise lies in creating web and mobile applications.
                        <br/>
                        <br/>
                        Exploring new tech to create better solutions.
                    </p>
                </Section>
                <Section id={'projects'} title={'Projects'}>
                    <br/>
                    <div className={'project-grid'}>
                        {/*<ProjectCard title={'PaperHub'}*/}
                        {/*             subtitle={'Self Initiated Project'}*/}
                        {/*             logo={'imgs/paperhub_logo.png'}*/}
                        {/*             duration={'Jan 2023 - Present'}*/}
                        {/*             description={'Developed a question paper website for all IIT Kharagpur students.'}*/}
                        {/*             links={{*/}
                        {/*                 website: 'https://paperhub.vikassurera.com'*/}
                        {/*             }}*/}
                        {/*/>*/}
                        <ProjectCard title={'ERP Alerts App'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/erp_alerts_logo.png'}
                                     duration={'Nov 2022 - May 2024'}
                                     description={'Developed a push notifications app and chrome extension from scratch with payment gateway for all placement related notifications and updates for IIT Kharagpur students. I had deployed the app on PlayStore and Chrome Web Store for 1.5 years with 100s of downloads.'}
                                     links={{
                                         github: 'https://github.com/vikassurera/erp-alerts-app-public',
                                         website: 'https://erpalerts.kgplife.com',
                                         otherLink: 'https://chromewebstore.google.com/detail/erp-alerts/hnnjfmjhhdmajofafjndhpmohfodakco',
                                         youtube: 'https://youtu.be/e18FubXjUzY?si=fv53UwynGgzAcAXc'
                                     }}
                        />

                        {/*<ProjectCard title={'Buy an Oreo'}*/}
                        {/*             subtitle={'Self Initiated Project'}*/}
                        {/*             logo={'imgs/oreo_logo2.png'}*/}
                        {/*             duration={'Nov 2022 - Dec 2022'}*/}
                        {/*             description={'A central platform to buy subscription to all the apps and services of the products developed by Vikas Surera.'}*/}
                        {/*             links={{*/}
                        {/*                 github: 'https://github.com/vikassurera/erp-alerts-app',*/}
                        {/*                 website: 'https://oreo.vikassurera.com'*/}
                        {/*             }}*/}
                        {/*/>*/}

                        <ProjectCard title={'Optimal Path Navigator'}
                                     subtitle={'AIFA | IIT Kharagpur'}
                                     logo={'imgs/iit_kgp_logo.png'}
                                     duration={'Aug 2022 - Nov 2022'}
                                     description={'A web application that helps users find the optimal path to their destination based on A* (heuristic) search algorithm.'}
                                     links={{
                                         github: 'https://github.com/vikassurera/project_AIFA',
                                         website: 'https://aifa-2022.vikassurera.com/',
                                         youtube: 'https://youtu.be/njq03n2HIXs?list=PLe3yOhtTcUkCsOCrrvqphQ6FfkIaZrwWQ'
                                     }}
                        />
                        <ProjectCard title={'Parallel Jaw Plier Mechanism'}
                                     subtitle={'Mechanism Sessional | IIT Kharagpur'}
                                     logo={'imgs/iit_kgp_logo.png'}
                                     duration={'May 2020 - Present'}
                                     description={'Designed and simulated a parallel jaw plier mechanism using SolidWorks and performed analytical calculations and graphical analysis.'}
                                     links={{
                                         youtube: 'https://youtu.be/yb3j_eGvBms'
                                     }}
                        />
                    </div>
                    <br/>
                </Section>
                <Section id={'work_experience'} title={'Work Experience'}>
                    <p>
                        Working for startups from the past 4 years in web and app development.
                    </p>
                    <br/>
                    <WorkCard title={'Fullstack Developer'}
                              subtitle={'Verisian'}
                              logo={'imgs/verisian.png'}
                              duration={'May 2024 - Present'}
                              data={[
                                'Develop responsive UIs based on Figma and wireframe designs.',
                                'Implement and optimize graph algorithms, including merging complex graph structures.',
                                'Optimize PostgreSQL queries for efficient traversal and manipulation of large-scale graphs.',
                             ]}
                              links={{
                                  website: 'https://www.verisian.com/',
                                  // certificate: 'https://drive.google.com/file/d/124-ThwJtnHn6Bcq63fXnxrzzgMMO6t9I/view?usp=share_link',
                              }}
                              technologies={['React', 'Typescript','Nextjs', 'Postgres', 'Python', 'Java', 'Turborepo']}
                    />
                    <WorkCard title={'Fullstack Developer'}
                              subtitle={'OneTap'}
                              logo={'imgs/onetap.png'}
                              duration={'Apr 2021 - May 2024'}
                              data={[
                                  'Prioritising the product features to impact 35,000+ users.',
                                  'Understanding customer requirements and UI/UX improvements.',
                                  'Developed visitor facing react native app for ios and android with CI/CD for auto deployment on respective stores.',
                                  'Increased development efficiency by moving all manual deployment process into one commit action with automated tests and deployments.',
                                  'Backend API tests and frontend tests with Jest and Puppeteer.',
                              ]}
                              links={{
                                  website: 'https://www.onetapcheckin.com/',
                                  // certificate: 'https://drive.google.com/file/d/124-ThwJtnHn6Bcq63fXnxrzzgMMO6t9I/view?usp=share_link',
                              }}
                                technologies={['MERN','Typescript', 'React Native', 'Docker', 'Github Actions', 'Mixpanel', 'Digital Ocean']}

                    />
                    <WorkCard title={'Fullstack Developer (Intern)'}
                              subtitle={'Bitpack'}
                              logo={'imgs/bitpack.jpeg'}
                              duration={'Feb 2022 - Jul 2022'}
                              data={[
                                  'Flutter app development with razorpay payment gateway integration, REST API, Git and Github use.',
                                  'React (Next & Typescript) frontend development with REST API and UI designs implementation.',
                                  'UI implementation based on designs provided in Adobe XD files'
                              ]}
                              links={{
                                  website: 'https://bitpack.me/',
                                  certificate: 'https://drive.google.com/file/d/1jPk9VH1fzH8TVO405i1ZA7zqpSelADSn/view?usp=share_link'
                              }}
                                technologies={['Flutter', 'React', 'Typescript']}
                    />
                    <WorkCard title={'Web Developer (Contract)'}
                              subtitle={'Assurance Technologies'}
                              logo={'imgs/assurance2.png'}
                              duration={'Apr 2021 - Jun 2021'}
                              data={[
                                  'Built and deployed the website on AWS EC2 instance ',
                                  'Added automatic email delivery on form submission on website using Simple Email Service (AWS SES).',
                              ]}
                              links={{
                                  website: 'http://assurancevoice.com/',
                                  certificate: 'https://drive.google.com/file/d/10K-7MWf0rrLENiouV_EZvfV7gR_EBr7K/view?usp=share_link',
                              }}
                                technologies={['HTML', 'CSS', 'Javascript']}
                    />
                    <WorkCard title={'App Developer (Intern)'}
                              subtitle={'Escola Learning Management System'}
                              logo={'imgs/test-logo2.png'}
                              duration={'Dec 2020 - Jun 2021'}
                              data={[
                                  'Initiated the work on flutter apps with tech specs REST API integration, Git and Github',
                                  'Developed 2 apps where teachers can assign homework to students and students can submit the same',
                                  'Implemented caching (image, files and data), UI and state management (provider package)',
                              ]}
                              links={{
                                  website: 'http://www.vishistbusinesssolutions.com/',
                                  certificate: 'https://drive.google.com/file/d/10N7iQiO7XeSaCI4xF0TDB2xzqKZdZSsC/view?usp=share_link'
                              }}
                                technologies={['Flutter', 'REST API', 'Git', 'Github']}
                    />

                </Section>

                <Section id={'por'} title={'Position of Responsibility'} bottomLine={false}>
                    <br/>
                    <WorkCard title={'Web & Design Head'}
                              subtitle={'Space Technology Student\' Society | IIT Kharagpur'}
                              logo={'imgs/nssc-logo.jpeg'}
                              duration={'Aug 2021 - Apr 2022'}
                              data={[
                                  'Managed a design and web team of 4 and 5 members respectively to successfully conduct NSSC 2021 online fest',
                                  'Designed and developed the NSSC 2021 fest (with registered participants of 900+) and spAts websites',
                                  'Led a design team to create and release audience-engaging posters for the NSSC 2021 (Photoshop &Illustrator)',
                              ]}
                              links={{
                                  website: 'https://2021.nssc.in/',
                                  certificate: 'https://drive.google.com/file/d/1Kw1ky2ET3kTSESCkdoe7yN8FPZd9lu45/view?usp=share_link',
                              }}
                    />
                    <WorkCard title={'Sub-Head'}
                              subtitle={'Space Technology Student\' Society | IIT Kharagpur'}
                              logo={'imgs/spats-logo2.png'}
                              duration={'Aug 2020 - Apr 2021'}
                              data={[
                                  'Responsible for management of the spAts and NSSC website (design, development and maintenance)',
                                  'Successfully designed and developed a quiz platform for Space Quiz event with participants of over 350+',
                                  'Designed and developed NSSC 20, a space-themed, user-friendly website on React.',
                              ]}
                              links={{
                                  website: 'https://spats.co.in/',
                                  certificate: 'https://drive.google.com/file/d/1V7DtQUvd10cRN93YS-v_IO7vT6rWPw0r/view?usp=share_link'
                              }}
                    />


                </Section>

            </div>
            <div className={'cv-body cv-body-right'}>
                <Section id={'about'} title={'About Me'} className={'mobile'}>
                    <p>
                        I am a final year undergraduate student at the Indian Institute of Technology, Kharagpur
                        enrolled in its B.Tech course. I'm from Alwar, Rajasthan, India. My hobbies are playing football
                        and coding.
                        <br/>
                        <br/>
                        I have worked on a variety of projects ranging from web applications to mobile applications.
                    </p>
                </Section>
                <div className={'custom-card side-card'}>
                    <ul>
                        <li>
                            <p>
                                Consistent, Dedication and Curious to discover new areas of interest
                            </p>
                        </li>
                        <li>
                            <p className={'title'}>Fluent</p>
                            <p>
                                C++, C, Javascript, HTML, CSS, React, Node, Express, Typescript
                            </p>
                        </li>
                        <li>
                            <p className={'title'}>Familiar</p>
                            <p>
                                Nextjs, Postgres, Dart, Flutter, Docker, Git, Github, React Native, MongoDB, MySQL, GitHub Actions, CI/CD, Turborepo, Tailwind, Puppeteer, Mixpanel, Razorpay Gateway Integration
                            </p>
                        </li>

                    </ul>
                </div>
                <div id={'education'} className={'custom-card side-card'}>
                    <p className={'side-card-header'}><FaGraduationCap size={28}/>&nbsp; Education</p>
                    {/*<br/>*/}
                    <EducationCard title={'Mechanical Engineering (B.Tech)'}
                                   subtitle={'IIT Kharagpur'}
                                   logo={'imgs/iit_kgp_logo.png'}
                                   duration={'2019 - 2023'}
                    />
                    <EducationCard title={'AISSCE (CBSE)'}
                                   subtitle={'Kendriya Vidyalaya Sector 30 Gandhinagar'}
                                   logo={'imgs/Kendriya_Vidyalaya_logo.png'}
                                   duration={'2018 - 2019'}
                    />
                    <EducationCard title={'AISSE (CBSE)'}
                                   subtitle={'Kendriya Vidyalaya Sector 30 Gandhinagar'}
                                   logo={'imgs/Kendriya_Vidyalaya_logo.png'}
                                   duration={'2016 - 2017'}
                    />
                </div>
                <div className={'custom-card side-card'}>
                    <p className={'side-card-header'}> Academic Awards</p>
                    <AwardCard title={'International Rank 112 & Zonal Rank 15'}
                               subtitle={'National Cyber Olympiad'}
                               year={'2019'}
                               awardType={AwardType.RANK}
                    />
                    <AwardCard title={'Rank 79 of the top 100 National Achievers'}
                               subtitle={'class 12-PCM in NTSE'}
                               year={'2019'}
                               awardType={AwardType.RANK}
                    />
                    <AwardCard title={'International Rank 102 & Zonal Rank 7'}
                               subtitle={'National Cyber Olympiad'}
                               year={'2016'}
                               awardType={AwardType.RANK}
                    />
                </div>
                <div className={'custom-card side-card'}>

                    <p className={'side-card-header'}>Sports Awards</p>
                    <AwardCard title={'4x400 relay (silver)'}
                               subtitle={'Interhall tournament IIT Kharagpur'}
                               year={'2022'}
                               awardType={AwardType.SILVER}
                    />
                    <AwardCard title={'Long Jump (bronze)'}
                               subtitle={'Athletics Regional Meet (Gujarat Region)'}
                               year={'2016'}
                               awardType={AwardType.BRONZE}
                    />
                    <AwardCard title={'Football (silver)'}
                               subtitle={'Sports Regional Meet (Rajasthan Region)'}
                               year={'2012'}
                               awardType={AwardType.SILVER}
                    />

                </div>
                <div className={'custom-card side-card'}>
                    <ul>
                        <li>
                            <p className={'title'}>Location</p>
                            <p className={'location'}>
                        <span className={'avatar'}>
                            <img src={'imgs/india_flag.png'} alt={"india_flag"}/>
                        </span>
                                &nbsp; IIT Kharagpur, India
                            </p>
                        </li>

                        <li>
                            <p className={'title'}>Website</p>
                            <a href={'https://vikassurera.com'} target={'_blank'}
                               rel={"noreferrer"}>vikassurera.com <FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>LinkedIn</p>
                            <a href={'https://www.linkedin.com/in/vikassurera/'} rel={"noreferrer"} target={'_blank'}>Vikas
                                Surera<FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>Blog</p>
                            <a href={'https://bloggerboy.co.in'} rel={"noreferrer"}
                               target={'_blank'}>bloggerboy.co.in <FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>Email</p>
                            <p>vikassurera@gmail.com</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <footer>
            <p>
                All rights reserved &copy; Vikas Surera
            </p>
        </footer>
    </div>
}

export default CvPage;