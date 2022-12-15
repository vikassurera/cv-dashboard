import {FiArrowUpRight} from 'react-icons/fi';
import {FaGraduationCap} from 'react-icons/fa';
import {AiOutlineDownload} from 'react-icons/ai';
import './cv_page.scss';
import Section from "./components/Section/Section";
import Attachments from "./components/Attachments";
import EducationCard from "./components/EducationCard";
import AwardCard, {AwardType} from "./components/AwardsCard";
import SectionLayout from "./components/SectionLayout";

import data from "./data";

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
                <img src={'imgs/profile2.jpeg'} alt={'banner-avatar'}/>
            </div>
            <h1>
                Vikas Surera
            </h1>
            <h3>
                fullstack-developer
            </h3>
            <Attachments {...{
                website: 'https://vikassurera.com',
                otherLink: 'https://bloggerboy.co.in',
                github: 'https://github.com/Vikas-Surera',
                linkedin: 'https://www.linkedin.com/in/vikassurera/',
            }}/>
            <div className={'avatar-cta'}>
                {/*<button className={'button'}>*/}
                {/*    Contact Me*/}
                {/*</button>*/}
                {/*<button className={'button'}>*/}
                {/*    Share <AiOutlineShareAlt/>*/}
                {/*</button>*/}
                <a className={'button'} style={{display:'flex'}} href={'cv.pdf'} target={'_blank'}>
                    <AiOutlineDownload size={20}/>&nbsp; Download CV
                </a>
            </div>
        </div>
        <div className={'cv-body-container'}>
            <div className={'cv-body cv-body-left'}>
                <Section id={'about'} title={'About Me'} className={'desktop'}>
                    <p>
                        I am a final year undergraduate student at the Indian Institute of Technology, Kharagpur
                        enrolled in its B.Tech course. I'm from Alwar, Rajasthan, India. My hobbies are playing football
                        and coding.
                    </p>
                    <br/>
                    <p>
                        I have worked on a variety of projects ranging from web applications to mobile applications.
                    </p>
                </Section>
                <SectionLayout data={data.sections}/>
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
                            <a href={'https://www.linkedin.com/in/vikassurera/'} target={'_blank'}>Vikas
                                Surera<FiArrowUpRight/></a>
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