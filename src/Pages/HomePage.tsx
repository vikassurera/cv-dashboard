import React from 'react';
import '../styles/home_page.scss';
import {TbBrandTwitter} from "react-icons/tb";
import UserInfoCard from "../components/Portoflio/UserInfoCard";
import SocialCard from "../components/Portoflio/SocailCard";
import {SlSocialGithub} from "react-icons/sl";
import {LuLinkedin} from "react-icons/lu";
import {IoCalendarOutline} from "react-icons/io5";
import AboutCard from "../components/Portoflio/AboutCard";
import TimezoneCard from "../components/Portoflio/TimezoneCard";
import TechStackCard from "../components/Portoflio/TechStackCard";

interface HomePagePropTypes {

}

interface HomePageStateTypes {

}


export default class HomePage extends React.Component<HomePagePropTypes, HomePageStateTypes> {
    private readonly userData = {
        name: 'bloggerboy',
        avatarUrl: '/imgs/avatar.png',
        desc: 'full stack developer 🕶️',
        blog: 'https://bloggerboy.co.in'
    }

    private readonly socialData = {
        twitter: {
            icon: <TbBrandTwitter/>,
            backgroundColor: 'rgb(14 165 233)',
            link: 'https://twitter.com/vikassurera'
        },
        github: {
            icon: <SlSocialGithub/>,
            backgroundColor: 'rgb(55 65 81)',
            link: 'https://github.com/vikassurera'
        },
        linkedin: {
            icon: <LuLinkedin/>,
            backgroundColor: 'rgb(29 78 216)',
            link: 'https://www.linkedin.com/in/vikassurera/'
        },
        erpAlerts: {
            icon: <div>
                <img src={'/imgs/erp_alerts_logo.png'} alt={'erp-alerts'}
                     style={{width: '100px', height: '100px'}}/>
                <h5 className={'mt-2'}>
                    ERP Alerts
                </h5>
            </div>,
            backgroundColor: '#614dff',
            link: 'https://erpalerts.kgplife.com/'
        }
    }

    private contactData = {
        calendar: {
            icon: <IoCalendarOutline/>,
            backgroundColor: 'rgb(55 65 81)',
            link: 'https://calendly.com/vikassurera/15min'
        }
    }

    constructor(props: HomePagePropTypes) {
        super(props);

        this.state = {}
    }

    render() {
        const userData = this.userData;

        return <div id={'home-page'}>
            <div className={'container py-5 page-container'}>
                <div className={'grid-container'}>
                    <UserInfoCard name={userData.name} avatarUrl={userData.avatarUrl} desc={userData.desc}
                                  blog={userData.blog}/>
                    <SocialCard id={'twitter-card'} icon={this.socialData.twitter.icon}
                                link={this.socialData.twitter.link} cursorHint={'Connect on Twitter!'}
                                backgroundColor={this.socialData.twitter.backgroundColor}/>



                    <SocialCard id={'erpalerts-card'} icon={this.socialData.erpAlerts.icon}
                                link={this.socialData.erpAlerts.link} cursorHint={'Visit my Project!'}
                                backgroundColor={this.socialData.erpAlerts.backgroundColor}/>

                    <TimezoneCard/>

                    <SocialCard id={'github-card'} icon={this.socialData.github.icon}
                                link={this.socialData.github.link} cursorHint={'My Projects'}
                                backgroundColor={this.socialData.github.backgroundColor}/>


                    <AboutCard/>
                    <SocialCard id={'linkedin-card'} icon={this.socialData.linkedin.icon}
                                link={this.socialData.linkedin.link} cursorHint={'Connect on LinkedIn!'}
                                backgroundColor={this.socialData.linkedin.backgroundColor}/>


                    <SocialCard id={'calendar-card'} icon={this.contactData.calendar.icon}
                                link={this.contactData.calendar.link} cursorHint={'Schedule a meeting!'}
                                backgroundColor={this.contactData.calendar.backgroundColor}/>

                    <TechStackCard cursorHint={'Tech I work on!'}/>

                </div>
            </div>
        </div>
    }
}

