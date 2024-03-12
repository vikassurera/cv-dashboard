import {FiArrowUpRight} from 'react-icons/fi';
import {FaGraduationCap} from 'react-icons/fa';
import {AiOutlineDownload} from 'react-icons/ai';
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
                <img src={'imgs/profile3.jpeg'} alt={'banner-avatar'}/>
            </div>
            <h1>
                Vikas Surera
            </h1>
            <h3>
                lead-engineer@OneTap
            </h3>
            <Attachments {...{
                website: 'https://vikassurera.com',
                otherLink: 'https://bloggerboy.co.in',
                github: 'https://github.com/vikassurera',
                linkedin: 'https://www.linkedin.com/in/vikassurera/',
            }}/>
            <div className={'avatar-cta'}>
                <a className={'button'} style={{display:'flex'}} href={'cv.pdf'} target={'_blank'} rel={"noreferrer"}>
                    <AiOutlineDownload size={20}/>&nbsp; Download CV
                </a>
            </div>
        </div>
        <div className={'cv-body-container'}>
            <div className={'cv-body cv-body-left'}>
                <Section id={'about'} title={'About Me'} className={'desktop'}>
                    <p>
                        Lead Engineer @ OneTap graduated from the Indian Institute of Technology, Kharagpur (B.Tech in Mechanical Engineering). I'm from Alwar, Rajasthan, India. Coding is my passion
                        <br/>
                        <br/>
                        I have worked on a variety of projects ranging from web applications to mobile applications.
                    </p>
                </Section>
                <Section id={'projects'} title={'Projects'}>
                    <br/>
                    <div className={'project-grid'}>
                        <ProjectCard title={'PaperHub'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/paperhub_logo.png'}
                                     duration={'Jan 2023 - Present'}
                                     description={'Developed a question paper website for all IIT Kharagpur students.'}
                                     links={{
                                         website: 'https://paperhub.vikassurera.com'
                                     }}
                        />
                        <ProjectCard title={'ERP Alerts App'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/erp_alerts_logo.png'}
                                     duration={'Nov 2022 - Dec 2022'}
                                     description={'Designed and Developed a push notifications app from scratch for all placement related notifications and updates for IIT Kharagpur students.'}
                                     links={{
                                         github: 'https://github.com/vikassurera/erp-alerts-app',
                                         website: 'https://oreo.vikassurera.com/notifications'
                                     }}
                        />

                        <ProjectCard title={'Buy an Oreo'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/oreo_logo2.png'}
                                     duration={'Nov 2022 - Dec 2022'}
                                     description={'A central platform to buy subscription to all the apps and services of the products developed by Vikas Surera.'}
                                     links={{
                                         github: 'https://github.com/vikassurera/erp-alerts-app',
                                         website: 'https://oreo.vikassurera.com'
                                     }}
                        />

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
                        I have an experience of more than 2 years in the field of fullstack web development including
                        1.5 years at a US based startup.
                    </p>
                    <br/>
                    <WorkCard title={'Full-stack Developer'}
                              subtitle={'OneTap'}
                              logo={'imgs/onetap.png'}
                              duration={'Apr 2021 - Jan 2022 & Apr 2022 - Present'}
                              data={[
                                  'Created CI/CD pipeline using Github Action, Docker with automatic slack notifications for tests and deployments',
                                  'Set up frontend automated UI testing - build, test and deploy using Jest and Puppeteer with scalable setup',
                                  'Frontend development - UI/UX (React, Bootstrap) and backend development (Express, Node Js, APIs)',
                                  'I was part of product planning discussions and responsible for the development of new features in productiongoDB.',
                              ]}
                              links={{
                                  website: 'https://www.onetapcheckin.com/',
                                  certificate: 'https://drive.google.com/file/d/124-ThwJtnHn6Bcq63fXnxrzzgMMO6t9I/view?usp=share_link',
                              }}
                    />
                    <WorkCard title={'Frontend Developer'}
                              subtitle={'Bitpack'}
                              logo={'imgs/bitpack.jpeg'}
                              duration={'Feb 2022 - Jul 2022'}
                              data={[
                                  'Flutter app and web development with razorpay payment gateway integration, REST API, Git and Github use',
                                  'React frontend app and UI designs implementation from designs provided via Adobe XD files',
                              ]}
                              links={{
                                  website: 'https://bitpack.me/',
                                  certificate: 'https://drive.google.com/file/d/1jPk9VH1fzH8TVO405i1ZA7zqpSelADSn/view?usp=share_link'
                              }}
                    />
                    <WorkCard title={'Web Developer'}
                              subtitle={'Assurance Technologies'}
                              logo={'imgs/assurance2.png'}
                              duration={'Apr 2021 - Jun 2021'}
                              data={[
                                  'Designed and developed complete website UI and deployed it on Express server on AWS ec2',
                                  'Developed automatic email delivery on form submission on website using Simple Email Service',
                                  'Developed a feature for administrators to get all forms submitted on website directly into their email inbox',
                              ]}
                              links={{
                                  website: 'http://assurancevoice.com/',
                                  certificate: 'https://drive.google.com/file/d/10K-7MWf0rrLENiouV_EZvfV7gR_EBr7K/view?usp=share_link',
                              }}
                    />
                    <WorkCard title={'App Developer'}
                              subtitle={'Escola Learning Management System'}
                              logo={'imgs/test-logo2.png'}
                              duration={'Dec 2020 - Jun 2021'}
                              data={[
                                  'Initiated the work on flutter (by Google) apps with tech specs REST API integration, Git and Github',
                                  'Developed 2 apps where teachers can assign homework to students and students can submit the same',
                                  'Implemented caching (image, files and data), UI and state management (used provider package)',
                              ]}
                              links={{
                                  website: 'http://www.vishistbusinesssolutions.com/',
                                  certificate: 'https://drive.google.com/file/d/10N7iQiO7XeSaCI4xF0TDB2xzqKZdZSsC/view?usp=share_link'
                              }}
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
                <div className={'card side-card'}>
                    <ul>
                        <li>
                            <p>
                                Consistent, Dedication and Curious to discover new areas of interest
                            </p>
                        </li>
                        <li>
                            <p className={'title'}>Fluent</p>
                            <p>
                                C++, C, Javascript, HTML, CSS
                            </p>
                        </li>
                        <li>
                            <p className={'title'}>Familiar</p>
                            <p>
                                React, Node, Express, TypeScript, Dart, Flutter, Docker, Git, Github and SolidWorks
                            </p>
                        </li>

                    </ul>
                </div>
                <div id={'education'} className={'card side-card'}>
                    <p className={'side-card-header'}> <FaGraduationCap size={28}/>&nbsp; Education</p>
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
                <div className={'card side-card'}>
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
                <div className={'card side-card'}>

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
                <div className={'card side-card'}>
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
                            <a href={'https://vikassurera.com'} target={'_blank'} rel={"noreferrer"}>vikassurera.com <FiArrowUpRight/></a>
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
                            <p>contact@vikassurera.com</p>
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