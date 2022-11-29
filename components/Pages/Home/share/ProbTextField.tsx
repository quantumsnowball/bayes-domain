import { Chip, ChipProps, InputAdornment, TextField, TextFieldProps } from "@mui/material"
import { ChangeEventHandler, useState } from "react"


type ProbTextFieldProps = TextFieldProps & {
  startChipProps: ChipProps
  endChipProps: ChipProps
  onTyping: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
}

function ProbTextField(props: ProbTextFieldProps) {
  const [evalError, setEvalError] = useState(false)

  const {
    startChipProps,
    endChipProps,
    onTyping,
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

  return <TextField {...{ ...presets, ...textFieldProps }} />
}

export default ProbTextField
