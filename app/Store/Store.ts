

import { create } from 'zustand'


interface Store {
  
    faqAnswer: boolean
    faqAnswerItem: string
    setFaqAnswer: (s:boolean) => void
    setFaqAnswerItem: (s: string) => void

}


export const useStorefaqAnswer = create<Store>((set) => ({

    faqAnswer: false,
    faqAnswerItem: '',
    setFaqAnswer: (s) => set(() => ({ faqAnswer: s })),
    setFaqAnswerItem: (s) => set(() => ({ faqAnswerItem: s })),


}))

  