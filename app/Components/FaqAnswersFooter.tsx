
import style from '@/app/Style/FaqAnswersFooter/FaqAnswersFooter.module.scss';
import { useStorefaqAnswer } from '@/app/Store/Store';

const FaqAnswersFooter = () => {

    const { setFaqAnswer } = useStorefaqAnswer();

    return (
        <>
            <div className={style['FaqAnswersFooter']}>
                <div className={style['FaqAnswersFooter__wrapp']}>
                    <div className={style['FaqAnswersFooter__wrapp__title']}>
                        Ваш вопрос решен?
                    </div>

                    <div className={style['FaqAnswersFooter__wrapp__buttons']}>

                        <button className={style['FaqAnswersFooter__wrapp__buttons__pn']}>

                            <span className={style['FaqAnswersFooter__wrapp__buttons__pn_sp']}>
                                Нет
                                <span data-v-620d8812="" className={style['FaqAnswersFooter__wrapp__buttons__pn_sp_size']}>(перейти в чат)</span>
                            </span>

                        </button>

                        <button className={
                            `${style['FaqAnswersFooter__wrapp__buttons__pn']} ${style['FaqAnswersFooter__wrapp__buttons__ps']}`}
                            onClick={() => setFaqAnswer(false)}
                            >

                            <span className={style['FaqAnswersFooter__wrapp__buttons__pn_sp']}>
                                Да
                            </span>

                        </button>

                        

                    </div>

                </div>
            </div>

        </>
    );
}

export default FaqAnswersFooter;