import { Paper, } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import ProbSlider from "../share/ProbSlider"
import PropTextField from "../share/ProbTextField"


interface NormalizerPromptProps {
  i: number
}

function NormalizerPrompt({ i }: NormalizerPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const normalizer = useSelector((s: RootState) => s.content.evidence[i].normalizer)
  const normalizerText = useSelector((s: RootState) => s.content.evidence[i].normalizerText)
  const [valSync, setValSync] = useState(normalizer)

  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1 }}
    >
      <ProbSlider
        value={valSync}
        onDragging={value => setValSync(value)}
        onChangeCommitted={_ => {
          dispatch(contentActions.setEvidenceNormalizer({
            i, normalizer: valSync
          }))
          dispatch(contentActions.setEvidenceNormalizerText({
            i, normalizerText: valSync.toFixed(4)
          }))
        }}
      />
      <PropTextField
        label='Probability of seeing this evidence in general?'
        helperText={`In general, your expect to see '${title}' about ${(normalizer * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( E ) ', color: 'secondary' }}
        endChipProps={{ label: 'Normalizer', color: 'secondary' }}
        value={normalizerText}
        onTyping={e => {
          dispatch(contentActions.setEvidenceNormalizerText({
            i, normalizerText: e.target.value
          }))
          const numericValue = parseFloat(eval(e.target.value))
          setValSync(numericValue)
          dispatch(contentActions.setEvidenceNormalizer({
            i, normalizer: numericValue
          }))
        }}
      />
    </Paper>
  )
}

export default NormalizerPrompt

