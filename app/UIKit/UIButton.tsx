

import style from '@/app/Style/UIKit/UIButton.module.scss'

type Props = {
    size: string
    type: string
    onclick: () => void
}

const UIButton = ({ ...pr }: Props) => {

    return (
        <>
            <button className={`${style['UIButton__but_hidden']} ${style['UIButton__size_' + pr.size]}`} onClick={pr.onclick}>
                <div className={style['UIButton__but_hidden__wrapIcon']}>
                    <i className={'icon ' + pr.type}></i>
                </div>
            </button>
        </>
    );
}

export default UIButton;