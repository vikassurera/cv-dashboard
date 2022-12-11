import {PropsWithChildren} from "react";

export interface SectionProps {
    title: string;
    bottomLine?: boolean
}

const Section = ({ children, title, bottomLine = true }: PropsWithChildren<SectionProps>) => {
    return <div className={'section'}>
        <div className={'section-heading'}>
            <h3>
                {title}
            </h3>

        </div>
        <div className={'section-body'}>
            {children}
        </div>
        <br/>
        {
            bottomLine && <hr/>
        }
    </div>;
}

export default Section;