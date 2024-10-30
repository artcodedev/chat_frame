

import style from '@/app/Style/Header/BackButton.module.scss';
import { useStorefaqAnswer } from '@/app/Store/Store';


const BackButton = () => {

    const { faqAnswer, setFaqAnswer } = useStorefaqAnswer();

    return (
        <>
            {
                faqAnswer ? <div className={style['BackButton__back']}>

                    <button className={style['BackButton__back__but']} onClick={() => setFaqAnswer(false)}>

                        <div className={style['BackButton__back__but__svg']}>
                            <i className='icon icon-whole-arrow-left'></i>
                        </div>

                        <span className={style['BackButton__back__but__sp']}>Назад</span>

                    </button>

                </div> : ''
            }
        </>
    );
}


export default BackButton;