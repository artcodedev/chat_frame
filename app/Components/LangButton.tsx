

'use client'

import React from 'react';

import { useStorefaqAnswer } from '@/app/Store/Store'
import style from '@/app/Style/Header/LangButton.module.scss'

const LangButton = () => {

    const { faqAnswer } = useStorefaqAnswer();
    const [listLang, setListLang] = React.useState<boolean>(false);

    return (
        <>
            {
                !faqAnswer ? <div className={style['LangButton__lang']}>

                    <button className={style['LangButton__lang__select']} onClick={() => { setListLang(listLang ? false : true) }}>RU</button>

                    <div className={`${style['LangButton__lang__menu']} ${listLang ? '' : style['LangButton__lang__menu-d-none']}`} >

                        <div className={style['LangButton__lang__menu_list']}>
                            <div className={style['LangButton__lang__menu_list_ps']}>
                                <div className={style['LangButton__lang__menu_list_ps_txt']}>
                                    <span className={style['LangButton__lang__menu_list_ps_txt_st']}>RU</span>
                                </div>
                            </div>
                        </div>

                    </div>

                </div> : ''
            }
        </>
    );
}

export default LangButton;