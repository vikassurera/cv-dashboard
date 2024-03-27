import CardContainer from "./CardContainer";
import React from "react";
import {SiDart, SiExpress, SiFlutter, SiGithubactions, SiMysql, SiPuppeteer, SiTypescript} from "react-icons/si";
import {FaBootstrap, FaCss3Alt, FaDigitalOcean, FaDocker, FaGitAlt, FaHtml5, FaNodeJs, FaReact} from "react-icons/fa";
import {DiMongodb} from "react-icons/di";
import {TbBrandReactNative} from "react-icons/tb";
import {IoLogoJavascript} from "react-icons/io";
// import {BiLogoTypescript} from "react-icons/bi";

interface TechStackCardProps {
    cursorHint?: string
}

const TechStackCard: React.FC<TechStackCardProps> = (props) => {
    return <CardContainer id={'tech-stack-card'} cursorHint={props.cursorHint}>
        <div className={'tech-grid'}>
            <SiTypescript/>
            <FaReact/>
            <FaDocker/>
            <FaDigitalOcean/>
            <FaGitAlt/>
            <DiMongodb/>
            <SiExpress/>
            <SiGithubactions/>
            <SiPuppeteer/>
            <SiDart/>
            <SiFlutter/>
            <TbBrandReactNative/>
            <FaNodeJs/>
            <FaHtml5/>
            <FaCss3Alt/>
            <IoLogoJavascript/>
            <SiMysql/>
            <FaBootstrap/>
        </div>
    </CardContainer>
}

export default TechStackCard;