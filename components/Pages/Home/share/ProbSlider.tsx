import { Slider, SliderProps } from "@mui/material"


function ProbSlider(props: SliderProps) {
  const presets: SliderProps = {
    defaultValue: 0.5,
    valueLabelFormat: (value: number) => (value * 100).toFixed(2) + '%',
    min: 0.0,
    max: 1.0,
    step: 0.0001,
    valueLabelDisplay: 'on',
  }
  return (
    <Slider {...{ ...presets, ...props }} />
  )
}

export default ProbSlider
