// hook to set the cursor hint
import {useContext} from 'react';
import {CursorHintContext, defaultCursorHint} from '../context/cursorHint';

const useCursorHint = () => {
    const {setCursorHint} = useContext(CursorHintContext);

    const setHint = (cursorHint: string | undefined) => {
        setCursorHint(cursorHint || defaultCursorHint);
    }


    return {
        setHint
    }
};

export default useCursorHint;