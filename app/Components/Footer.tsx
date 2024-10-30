
import style from '@/app/Style/Footer/Footer.module.scss'

import UIButtonTXT from '../UIKit/UIButtonTXT';


const Footer = () => {
    return (
        <>
            <div className={style['Footer']}>
                <div className={style['Footer__pxpy']}>

                    <UIButtonTXT type="icon-conversation" text='Открыть чат с оператором' size='14'/>

                    <UIButtonTXT type="icon-clock" text='История обращений' size='14'/>

                </div>
            </div>
        </>
    );
}

export default Footer;