import GridCardLayout from "../CardLayout/GridCardLayout";
import Section from "./Section";
import {CSSProperties} from "react";
import {DataCardI} from "../DataCard";
import SectionModel, {CardType} from "../../models/SectionModel";
import TimelineCardLayout from "../CardLayout/TimelineCardLayout";

export interface CardSectionProps {
    className?: string;
    style?: CSSProperties;
    id?: string;
    data: SectionModel
    disableBottomLine?: boolean
}

const CardSection = ({className, style, id, data, disableBottomLine}: CardSectionProps) => {
    const renderCards = (cards: DataCardI[], type: CardType) => {
        switch (type) {
            case CardType.timelineView:
                return <TimelineCardLayout data={data.data}/>
            case CardType.gridView1:
                return <GridCardLayout columns={1} data={data.data}/>
            case CardType.gridView2:
                return <GridCardLayout columns={2} data={data.data}/>
        }
    }
    return <Section id={id} title={data.title} className={`${className ?? ''}`} style={style} bottomLine={!disableBottomLine}>
            {
                typeof data.description !== 'undefined' && <>
                    {
                        data.description.map((item) => <p>{item}</p>)
                    }
                </>
            }
            <br/>

            {
                renderCards(data.data, data.cardType)
            }

            <br/>

        </Section>
}

export default CardSection