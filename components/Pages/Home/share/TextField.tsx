import { Chip, ChipProps, InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { ChangeEventHandler, useState } from "react"
import { DEFAULT_TEXTFIELD_PRESETS } from "../../../../constants/layout"


type NormalTextFieldProps = TextFieldProps & {
  startChipProps: ChipProps
  endChipProps: ChipProps
}

export function NormalTextField(props: NormalTextFieldProps) {
  const {
    startChipProps,
    endChipProps,
    ...otherProps
  } = props

  const presets: TextFieldProps = {
    ...DEFAULT_TEXTFIELD_PRESETS,
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

  return <TextField {...{ ...presets, ...otherProps }} />
}


type ProbTextFieldProps = NormalTextFieldProps & {
  onTyping: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

export function ProbTextField(props: ProbTextFieldProps) {
  const [evalError, setEvalError] = useState(false)

  const { onTyping, ...otherProps } = props

  const presets: TextFieldProps = {
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
  return <NormalTextField {...{ ...presets, ...otherProps }} />
}

