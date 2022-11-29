import { Slider, SliderProps } from "@mui/material"


type ProbSliderProps = SliderProps & {
  onDragging: (value: number) => void
}

function ProbSlider(props: ProbSliderProps) {
  const { onDragging, ...sliderProps } = props

  const presets: SliderProps = {
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    valueLabelDisplay: 'on',
    defaultValue: 0.5,
    valueLabelFormat: (value: number) => (value * 100).toFixed(2) + '%',
    onChange: (event, value) => {
      if (!event.target) return
      if (Array.isArray(value)) return
      onDragging(value)
    }

  }
  return (
    <Slider {...{ ...presets, ...sliderProps }} />
  )
}

export default ProbSlider
