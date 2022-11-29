import { Slider, SliderProps } from "@mui/material"


export function NormalSlider(props: SliderProps) {
  const presets: SliderProps = {
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    valueLabelDisplay: 'on',
    defaultValue: 0.5,
    valueLabelFormat: (value: number) => (value * 100).toFixed(2) + '%',
  }

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

