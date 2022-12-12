import {PropsWithChildren} from "react";

export interface SectionProps {
    title: string;
    id?: string;
    bottomLine?: boolean
    className?: string
}

const Section = ({ children, title,id,className, bottomLine = true }: PropsWithChildren<SectionProps>) => {
    return <div id={id} className={`section ${className}`}>
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