


import style from '@/app/Style/UIKit/UIButtonTXT.module.scss'

type Props = {
    size: string
    type: string
    text: string
    onclick?: () => void
}

const UIButtonTXT = ({ ...pr }: Props) => {

    return (
        <>

            <button className={`${style['UIButtonTXT__but']} ${style['UIButtonTXT__size_' + pr.size]}`} onClick={pr.onclick}>
                
                <div className={style['UIButtonTXT__but__wrap']}>
                    <i className={'icon ' + pr.type}></i>
                </div>

                <span className={style['UIButtonTXT__txt']}>{pr.text}</span>

            </button>

        </>
    );
}


export default UIButtonTXT;