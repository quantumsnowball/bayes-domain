import {
  Paper,
  Chip,
  InputAdornment,
  TextField,
} from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"


interface TitlePromptProps {
  i: number
}

function TitlePrompt({ i }: TitlePromptProps) {
  const dispatch = useDispatch()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.evidence[i].title),
    (txt: string) => dispatch(contentActions.setEvidenceTitle({ i, title: txt }))
  ]

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <TextField
        fullWidth
        variant="outlined"
        color='secondary'
        label='What is your Evidence? Describe what you see.'
        helperText={`Using '${title}' as evidence to support the hypothesis.`}
        InputProps={{
          startAdornment:
            <InputAdornment position="start" >
              <Chip label='E' variant='outlined' color='secondary' />
            </InputAdornment>,
          endAdornment:
            <InputAdornment position="end" >
              <Chip label='Evidence' variant='outlined' color='secondary' />
            </InputAdornment>,
        }}
        value={title}
        onChange={e => setTitle(e.target.value)}
        onFocus={e => e.target.select()}
      >
      </TextField>
    </Paper>
  )
}

export default TitlePrompt
