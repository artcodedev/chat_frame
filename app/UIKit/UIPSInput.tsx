
'use client'

import { useState, useRef } from 'react'

import useMutationObserver from '@/app/Hooks/useMutationObserver'

import style from '@/app/Style/UIKit/UIPSInput.module.scss'


const UIPSInput = () => {

    const [placeholder, setPlaceholder] = useState<boolean>(false);
    const mutationRef = useRef<HTMLDivElement | null>(null);

    const incrementMutationCount = () => {

        const pr = mutationRef.current?.innerHTML
        setPlaceholder(pr == '<br>' || pr?.length == 0 ? false : true);
        
    };

    useMutationObserver(mutationRef, incrementMutationCount);

    return (

        <>
            <div className={style['UIPSInput']}>
                <div className={style['UIPSInput__custom']}>

                    <div className={style['UIPSInput__custom__input']} disable-resize-check='true' contentEditable='true' ref={mutationRef}></div>

                    {placeholder ? '' : <div className={style['UIPSInput__custom__placeholder']}>Напишите для поиска</div>}

                </div>
            </div>

        </>

    );

}


export default UIPSInput;