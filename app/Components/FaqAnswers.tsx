

import style from '@/app/Style/FaqAnswers/FaqAnswers.module.scss'
import { useStorefaqAnswer } from '@/app/Store/Store';

import FaqQuestionsAnswer from '@/app/Jsons/FaqQuestionsAnswer.json'


const FaqAnswers = () => {

    const { faqAnswer, faqAnswerItem } = useStorefaqAnswer();

    const an = faqAnswer ? FaqQuestionsAnswer.answers[faqAnswerItem.toString()] : '';

    return (

        <>
            <div className={style['FaqAnswers']}>
                <article className={style['FaqAnswers__wrapp']}>s

                    <span className={style['FaqAnswers__wrapp__title']}>{an.title}</span>

                    <p className={style['FaqAnswers__wrapp__txt']}>{an.txt}</p>

                </article>
            </div>
        </>
    );
}

export default FaqAnswers