import { Slider, SliderProps } from "@mui/material"
import { DEFAULT_SLIDER_PRESETS } from "../../../../constants/layout"


export function NormalSlider(props: SliderProps) {
  const presets = DEFAULT_SLIDER_PRESETS

  return (
    <Slider {...{ ...presets, ...props }} />
  )
}

type ProbSliderProps = SliderProps & {
  onDragging: (value: number) => void
}

export function ProbSlider(props: ProbSliderProps) {
  const { onDragging, ...otherProps } = props

  const presets: SliderProps = {
    onChange: (event, value) => {
      if (!event.target) return
      if (Array.isArray(value)) return
      onDragging(value)
    }
  }
  return (
    <NormalSlider {...{ ...presets, ...otherProps }} />
  )
}

