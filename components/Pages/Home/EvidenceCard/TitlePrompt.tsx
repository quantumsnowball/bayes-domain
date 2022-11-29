import { Paper, } from "@mui/material"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import { NormalTextField } from "../share/TextField"


interface TitlePromptProps {
  i: number
}

function TitlePrompt({ i }: TitlePromptProps) {
  const dispatch = useDispatch()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.evidence[i].title),
    (txt: string) => dispatch(contentActions.setEvidenceTitle({ i, txt }))
  ]

  return (
    <Paper
      elevation={1}
      sx={{ p: 1 }}
    >
      <NormalTextField
        label='What is your Evidence? Describe what you see.'
        helperText={`Using '${title}' as evidence to support the hypothesis.`}
        startChipProps={{ label: 'E', variant: 'outlined', color: 'secondary' }}
        endChipProps={{ label: 'Evidence', variant: 'outlined', color: 'secondary' }}
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    </Paper>
  )
}

export default TitlePrompt
