import {
  SliderProps,
  TextFieldProps
} from "@mui/material"


export const SUCCESS_ALERT_DURATION = 10000
export const ERROR_ALERT_DURATION = 10000
export const CONSENT_ALERT_DURATION = 20000

export const DEFAULT_SLIDER_PRESETS: SliderProps = {
  min: 0.0,
  max: 1.0,
  step: 0.0001,
  valueLabelDisplay: 'on',
  defaultValue: 0.5,
  valueLabelFormat: (value: number) => (value * 100).toFixed(2) + '%',
}

export const DEFAULT_TEXTFIELD_PRESETS: TextFieldProps = {
  fullWidth: true,
  variant: 'outlined',
  onFocus: e => e.target.select(),
}
