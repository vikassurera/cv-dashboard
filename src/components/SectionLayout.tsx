import SectionModel from "../models/SectionModel";
import CardSection from "./Section/CardSection";

export interface SectionLayoutProps {
    data: SectionModel[]
}

const SectionLayout = ({data}: SectionLayoutProps) => {
    return <>
        {
            data.map((item, index) => <CardSection key={index}
                                                   data={item}
                                                   disableBottomLine={index === data.length - 1}/>)
        }
    </>
}

export default SectionLayout;