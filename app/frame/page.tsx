

'use client'

import Test from "@/app/Components/Test";

import Header from '@/app/Components/Header';
import Audio_s from '@/app/Components/Audio';
import Footer from '@/app/Components/Footer';
import Faq from '@/app/Components/Faq';
import UIPSInput from '@/app/UIKit/UIPSInput';
import FaqAnswers from "@/app/Components/FaqAnswers";
import FaqAnswersFooter from '@/app/Components/FaqAnswersFooter';
import { useStorefaqAnswer } from '@/app/Store/Store';


import style from '@/app/Style/Main.module.scss'

export default function Index() {

  const { faqAnswer } = useStorefaqAnswer();

  return (
    <>

      <div id="main-app" className={style['Main']}>

        <div className={style['Main__container']}>

          <Header />

          {
            faqAnswer ?

              <>
                <FaqAnswers />

                <FaqAnswersFooter />

              </>

              :

              <>

                <Faq />

                <UIPSInput />

                <Footer />

              </>
          }


          <Audio_s />


        </div>
      </div>

    </>
  );

}
