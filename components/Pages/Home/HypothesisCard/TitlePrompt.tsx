import { Paper, } from "@mui/material"
import { RootState } from '../../../../redux/store'
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useDispatch, useSelector } from "react-redux"
import { NormalTextField } from "../share/TextField"


function TitlePrompt() {
  const dispatch = useDispatch()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.hypothesis.title),
    (txt: string) => dispatch(contentActions.setHypothesisTitle(txt))
  ]

  return (
    <Paper
      elevation={1}
      sx={{ p: 1 }}
    >
      <NormalTextField
        label='What is your Hypothesis? Please make a prediction.'
        helperText={`Your hypothesis is '${title}'.`}
        startChipProps={{ label: ' H ', variant: 'outlined', color: 'primary' }}
        endChipProps={{ label: 'Hypothesis', variant: 'outlined', color: 'primary' }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </Paper>
  )
}

export default TitlePrompt
