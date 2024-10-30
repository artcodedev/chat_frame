

'use client'

import style from '@/app/Style/Faq/Faq.module.scss'
import UIButtonTXT from '../UIKit/UIButtonTXT';
import  { useStorefaqAnswer }  from '@/app/Store/Store'
import Console from '../Utils/Console';
import FaqQuestions from '@/app/Jsons/FaqQuestions.json'




const Faq = () => {

    const { setFaqAnswer, setFaqAnswerItem } = useStorefaqAnswer();

    const ShowQust = (i: string) => {    

        Console.log("[+] " + i)

        setFaqAnswer(true);
        setFaqAnswerItem(i);

    } 

    return (
        <>
            <div className={style['Faq']}>
                <div className={style['Faq__wrapp']}>

                    <div className={style['Faq__wrapp__title']}>Что вас интересует? </div>

                    <div className={style['Faq__wrapp__ps']}>

                        <div className={style['Faq__wrapp__ps_wr']}>

                            {/* {FaqQuestions.questions.map((e) => <UIButtonTXT type={e.icon} text={e.question} size={'14'} onclick={ () => ShowQust(e.item) }/>)} */}

                        </div>

                    </div>

                </div>
            </div>
        </>
    );

}


export default Faq;