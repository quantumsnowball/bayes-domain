import { FC, PropsWithChildren } from "react"
import { Evidence } from "./evidence"
import { Hypothesis } from "./hypothesis"


export type CustomFC = FC<PropsWithChildren>

export type ColorMode = 'light' | 'dark'

export type ThemeName = 'elementary' | 'beach' | 'forest' | 'rose' | 'sunset' | 'ocean'

export type Content = {
    title: string,
    hypothesis: Hypothesis,
    evidence: Evidence[]
}
