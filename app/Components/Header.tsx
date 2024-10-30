

'use client'

import style from '@/app/Style/Header/Header.module.scss'

import UIButton from '../UIKit/UIButton';
import BackButton from '@/app/Components/BackButton'
import LangButton from '@/app/Components/LangButton'


const Header = () => {

    return (
        <>

            <div className={style['Header']}>

                <div className={style['Header__wrap']}>

                    <BackButton />

                    <div className={style['Header__actions']}>

                        <LangButton />

                        <UIButton type='icon-collapse' size='16' onclick={() => { }} />

                        <UIButton type='icon-cross' size='16' onclick={() => { }} />

                    </div>

                </div>

            </div>
        </>
    );
}

export default Header;