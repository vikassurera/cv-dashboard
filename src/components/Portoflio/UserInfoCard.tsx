import {MdArrowOutward} from "react-icons/md";
import React from "react";
import CardContainer from "./CardContainer";

interface UserInfoCardPropTypes {
    name: string,
    avatarUrl: string,
    desc: string,
    blog: string
}

const UserInfoCard: React.FC<UserInfoCardPropTypes> = (props) => {

    const userData = {
        name: props.name,
        avatarUrl: props.avatarUrl,
        desc: props.desc,
        blog: props.blog
    }

    return <CardContainer id={'info-card'} cursorHint={'bloggerboy'}>
        <div className={'card-body d-flex align-items-center justify-content-start'}>
            <div className={'m-sm-3'}>
                <img id={'avatar'} src={userData.avatarUrl} alt={userData.name}
                     className={'rounded-circle shadow'}/>
            </div>
            <div className={''}>
                <h5>
                    {userData.name}
                </h5>
                <h6>
                    {userData.desc}
                </h6>
                <h6>
                    <a href={userData.blog} target={'_blank'} rel={'noreferrer'}>
                        blog <MdArrowOutward/>
                    </a>
                </h6>
            </div>
        </div>
    </CardContainer>
}

export default UserInfoCard;