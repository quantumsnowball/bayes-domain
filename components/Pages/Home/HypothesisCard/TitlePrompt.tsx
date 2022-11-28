import {
  Chip,
  InputAdornment,
  Paper,
  TextField,
} from "@mui/material"
import { RootState } from '../../../../redux/store'
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useDispatch, useSelector } from "react-redux"


function TitlePrompt() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.hypothesis.title)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}>
      <TextField
        fullWidth
        variant="outlined"
        color='primary'
        label='What is your Hypothesis? Please make a prediction.'
        helperText={`Your hypothesis is '${title}'.`}
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label=' H ' variant='outlined' color='primary' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Hypothesis' variant='outlined' color='info' />
            </InputAdornment>,
        }}
        value={title}
        onChange={e => dispatch(contentActions.setHypothesisTitle(e.target.value))}
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default TitlePrompt
