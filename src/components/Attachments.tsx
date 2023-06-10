import {
    AiFillGithub,
    AiOutlineTwitter,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillFacebook,
    AiFillYoutube,
    AiOutlineLink
} from "react-icons/ai";
import {TbFileCertificate} from "react-icons/tb";
import {BsGlobe} from "react-icons/bs";

export interface AttachmentsProps {
    github?: string;
    otherLink?: string;
    website?: string;
    youtube?: string;
    certificate?: string;
    facebook?: string;
    linkedin?: string;
    twitter?: string;
    instagram?: string;
}

const Attachments = (links: AttachmentsProps) => {
    return <ul className={'link-attachments'}>
        {
            links && links.website && <li>
                <a className={'link'} href={links.website} target={'_blank'} rel={"noreferrer"}>
                    <BsGlobe size={26}/>
                </a>
            </li>

        }
        {
            links && links.otherLink && <li>
                <a className={'link'}
                   rel={"noreferrer"}
                   href={links.otherLink} target={'_blank'}>
                    <AiOutlineLink size={30}/>
                </a>
            </li>
        }
        {
            links && links.github && <li>
                <a className={'github'} rel={"noreferrer"} href={links.github} target={'_blank'}>
                    <AiFillGithub size={30}/>
                </a>
            </li>
        }
        {
            links && links.youtube && <li>
                <a className={'youtube'}
                   rel={"noreferrer"}
                   href={links.youtube} target={'_blank'}>
                    <AiFillYoutube size={30}/>
                </a>
            </li>
        }
        {
            links && links.certificate && <li>
                <a className={'link'}
                   rel={"noreferrer"}
                   href={links.certificate} target={'_blank'}>
                    <TbFileCertificate size={30}/>
                </a>
            </li>
        }
        {
            links && links.facebook && <li>
                <a className={'facebook'}
                   rel={"noreferrer"}
                   href={links.facebook} target={'_blank'}>
                    <AiFillFacebook size={30}/>
                </a>
            </li>
        }
        {
            links && links.linkedin && <li>
                <a className={'linkedin'}
                   rel={"noreferrer"}
                   href={links.linkedin} target={'_blank'}>
                    <AiFillLinkedin size={30}/>
                </a>
            </li>
        }
        {
            links && links.instagram && <li>
                <a className={'instagram'}
                   rel={"noreferrer"}
                   href={links.instagram} target={'_blank'}>
                    <AiFillInstagram size={30}/>
                </a>
            </li>
        }
        {
            links && links.twitter && <li>
                <a className={'twitter'}
                   rel={"noreferrer"}
                   href={links.twitter} target={'_blank'}>
                    <AiOutlineTwitter size={30}/>
                </a>
            </li>
        }
    </ul>
}

export default Attachments