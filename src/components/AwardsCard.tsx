import {BiMedal} from 'react-icons/bi';
import {RiShieldStarFill} from 'react-icons/ri';

export enum AwardType {
    GOLD = 'gold',
    SILVER = 'silver',
    BRONZE = 'bronze',
    RANK = 'rank'
}

export interface AwardCardProps {
    title: string;
    subtitle: string;
    year: string;
    awardType: AwardType
}

const AwardCard = ({title, subtitle, year, awardType}: AwardCardProps) => {
    const getIcon = () => {
        switch (awardType) {
            case AwardType.GOLD:
                return <BiMedal size={30} className={'gold'}/>;
            case AwardType.SILVER:
                return <BiMedal size={30} className={'silver'}/>;
            case AwardType.BRONZE:
                return <BiMedal size={30} className={'bronze'}/>;
            case AwardType.RANK:
                return <RiShieldStarFill size={22} className={'gold'}/>;
        }
    }
    return <div className={'award-card'}>
        <div className={'header'}>
            <div className={'award-logo'}>
                {getIcon()}
            </div>
            <div className={'award-title'}>
                <p className={'title'}>
                    {title}
                </p>
                <p>
                    {subtitle} ({year})
                </p>
            </div>
        </div>
    </div>;
}

export default AwardCard