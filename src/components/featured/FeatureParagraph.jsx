import React, { useRef } from 'react';
import { useInView } from 'framer-motion';
import classNames from 'classnames';

const FeatureParagraph = ({children}) => {
    const ref = useRef(null); // Removed TypeScript annotation
    const isInView = useInView(ref, {
        margin: '-1% 0px -30% 0px',
    });

    return (
        <p
            ref={ref}
            className={classNames(
                'text-[6rem] fontTitle text-zinc-950 font-[600] leading-[90px] uppercase',
                isInView ? 'text-zinc-950' : 'text-violet-600 '
            )}
        >
            {children}
        </p>
    );
}

export default FeatureParagraph;
