import { Chip, ChipProps, InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { ChangeEventHandler, useState } from "react"


type NormalTextFieldProps = TextFieldProps & {
  startChipProps: ChipProps
  endChipProps: ChipProps
}

export function NormalTextField(props: NormalTextFieldProps) {
  const {
    startChipProps,
    endChipProps,
    ...textFieldProps
  } = props

  const presets: TextFieldProps = {
    fullWidth: true,
    variant: 'outlined',
    onFocus: e => e.target.select(),
    InputProps: {
      startAdornment:
        <InputAdornment position="start" >
          <Chip {...{
            variant: 'outlined',
            ...startChipProps
          }} />
        </InputAdornment>,
      endAdornment:
        <InputAdornment position="end" >
          <Chip {...{
            variant: 'outlined',
            ...endChipProps
          }} />
        </InputAdornment>,
    },
  }

  return <TextField {...{ ...presets, ...textFieldProps }} />
}


type ProbTextFieldProps = NormalTextFieldProps & {
  onTyping: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function ProbTextField(props: ProbTextFieldProps) {
  const [evalError, setEvalError] = useState(false)

  const { onTyping, ...normalTextFieldProps } = props

  const defaults: TextFieldProps = {
    error: evalError,
    onChange: e => {
      try {
        onTyping(e)
        setEvalError(false)
      } catch (error) {
        setEvalError(true)
      }
    }
  }
  return <NormalTextField {...{ ...defaults, ...normalTextFieldProps }} />
}

