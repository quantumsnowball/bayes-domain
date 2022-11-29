import { Chip, ChipProps, InputAdornment, TextField, TextFieldProps } from "@mui/material"


type ProbTextFieldProps = TextFieldProps & {
  startChipProps: ChipProps
  endChipProps: ChipProps
}

function ProbTextField(props: ProbTextFieldProps) {
  const { startChipProps, endChipProps, ...textFieldProps } = props

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
    }
  }

  return <TextField {...{ ...presets, ...textFieldProps }} />
}

export default ProbTextField
