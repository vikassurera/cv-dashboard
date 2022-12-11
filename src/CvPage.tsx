import {FiArrowUpRight} from 'react-icons/fi';
import {AiFillGithub, AiFillYoutube, AiOutlineLink,AiOutlineShareAlt} from 'react-icons/ai';
import './cv_page.scss';
import Section from "./components/Section";
import ProjectCard from "./components/ProjectCard";
import WorkCard from "./components/WorkCard";

const CvPage = () => {
    return <div className={'cv-container'}>
        <div className={'banner'}>

        </div>
        <div className={'banner-avatar'}>
            <div className={'avatar white-border'}>
                <img src={'imgs/profile2.jpeg'} alt={'banner-avatar'}/>
            </div>
            <h2>
                Vikas Surera
            </h2>
            <h4>
                fullstack-developer
            </h4>
            <div className={'avatar-cta'}>
                <button className={'button'}>
                    Contact Me
                </button>
                <button className={'button'}>
                    Share <AiOutlineShareAlt />
                </button>
            </div>
        </div>
        <div className={'cv-body-container'}>
            <div className={'cv-body cv-body-left'}>
                <Section title={'About Me'}>
                    <p>
                        I am a final year undergraduate student at the Indian Institute of Technology, Kharagpur
                        enrolled in its B.Tech course. I'm from Alwar, Rajasthan, India. My hobbies are playing football
                        and coding.
                        <br/>
                        <br/>
                        I have worked on a variety of projects ranging from web applications to mobile applications.
                    </p>
                </Section>
                <Section title={'Projects'}>
                    <br/>
                    <div className={'project-grid'}>
                        <ProjectCard title={'ERP Alerts App'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/erp_alerts_logo.png'}
                                     duration={'Nov 2022 - Dec 2022'}
                                     description={'Developed a push notifications app for all placement related notifications and updates for IIT Kharagpur students.'}
                                     links={{
                                         github: 'https://github.com/Vikas-Surera/erp-alerts-app',
                                         website: 'https://oreo.vikassurera.com/notifications'
                                     }}
                        />

                        <ProjectCard title={'Buy an Oreo'}
                                     subtitle={'Self Initiated Project'}
                                     logo={'imgs/oreo_logo2.png'}
                                     duration={'Nov 2022 - Dec 2022'}
                                     description={'A central platform to buy subscription to all the apps and services of the products developed by Vikas Surera.'}
                                     links={{
                                            github: 'https://github.com/Vikas-Surera/erp-alerts-app',
                                            website: 'https://oreo.vikassurera.com'
                                     }}
                        />

                        <ProjectCard title={'Optimal Path Navigator'}
                                     subtitle={'AIFA | IIT Kharagpur'}
                                     logo={'imgs/iit_kgp_logo.png'}
                                     duration={'Aug 2022 - Nov 2022'}
                                     description={'A web application that helps users find the optimal path to their destination based on A* (heuristic) search algorithm.'}
                                     links={{
                                            github: 'https://github.com/Vikas-Surera/project_AIFA',
                                            website: 'https://aifa-2022.vikassurera.com/',
                                         youtube:'https://youtu.be/njq03n2HIXs?list=PLe3yOhtTcUkCsOCrrvqphQ6FfkIaZrwWQ'
                                     }}
                        />
                        <ProjectCard title={'Parallel Jaw Plier Mechanism'}
                                     subtitle={'Mechanism Sessional | IIT Kharagpur'}
                                     logo={'imgs/iit_kgp_logo.png'}
                                     duration={'May 2020 - Present'}
                                     description={'Designed and simulated a parallel jaw plier mechanism using SolidWorks and performed analytical calculations and graphical analysis.'}
                                     links={{
                                         youtube:'https://youtu.be/yb3j_eGvBms'
                                     }}
                        />
                    </div>
                    <br/>
                </Section>
                <Section title={'Work Experience'}>
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
                    />
                    <WorkCard title={'Frontend Developer'}
                              subtitle={'Bitpack'}
                              logo={'imgs/bitpack.jpeg'}
                              duration={'Feb 2022 - Jul 2022'}
                              data={[
                                  'Flutter app and web development with razorpay payment gateway integration, REST API, Git and Github use',
                                  'React frontend app and UI designs implementation from designs provided via Adobe XD files',
                              ]}
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
                    />

                </Section>

                <Section title={'Position of Responsibility'} bottomLine={false}>
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
                    />
                    <WorkCard title={'Sub-Head'}
                              subtitle={'Space Technology Student\' Society | IIT Kharagpur'}
                              logo={'imgs/spats-logo.png'}
                              duration={'Aug 2020 - Apr 2021'}
                              data={[
                                  'Responsible for management of the spAts and NSSC website (design, development and maintenance)',
                                  'Successfully designed and developed a quiz platform for Space Quiz event with participants of over 350+',
                                  'Designed and developed NSSC 20, a space-themed, user-friendly website on React. (nssc-react.web.app)',
                              ]}
                    />


                </Section>

            </div>
            <div className={'cv-body cv-body-right'}>

                <div className={'card side-card'}>
                    <ul>
                        <li>
                            <p className={'title'}>Location</p>
                            <p className={'location'}>
                        <span className={'avatar'}>
                            <img src={'imgs/india_flag.png'}/>
                        </span>
                                &nbsp; IIT Kharagpur, India
                            </p>
                        </li>

                        <li>
                            <p className={'title'}>Website</p>
                            <a href={'https://vikassurera.com'} target={'_blank'}>vikassurera.com <FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>LinkedIn</p>
                            <a href={'https://www.linkedin.com/in/vikassurera/'} target={'_blank'}>Vikas Surera<FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>Blog</p>
                            <a href={'https://bloggerboy.co.in'}
                               target={'_blank'}>bloggerboy.co.in <FiArrowUpRight/></a>
                        </li>
                        <li>
                            <p className={'title'}>Email</p>
                            <p>contact@vikassurera.com</p>
                        </li>
                    </ul>
                </div>
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