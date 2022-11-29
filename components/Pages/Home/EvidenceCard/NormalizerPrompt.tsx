import { Paper, } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { RootState } from "../../../../redux/store"
import { validateProb } from "../share/math"
import { ProbSlider } from "../share/Slider"
import { ProbTextField } from "../share/TextField"


interface NormalizerPromptProps {
  i: number
}

function NormalizerPrompt({ i }: NormalizerPromptProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const [normalizer, setNormalizer] = [
    useSelector((s: RootState) => s.content.evidence[i].normalizer),
    (val: number) => dispatch(contentActions.setEvidenceNormalizer({ i, val }))
  ]
  const [normalizerText, setNormalizerText] = [
    useSelector((s: RootState) => s.content.evidence[i].normalizerText),
    (txt: string) => dispatch(contentActions.setEvidenceNormalizerText({ i, txt }))
  ]
  const hypothesisTitle = useSelector((s: RootState) => s.content.hypothesis.title)
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
          setNormalizer(valSync)
          setNormalizerText(valSync.toFixed(4))
        }}
      />
      <ProbTextField
        label='Probability of seeing this evidence if hypothesis is false?'
        helperText={`Even if hypothesis '${hypothesisTitle}' is false, your expect '${title}' is STILL true about ${(normalizer * 100).toFixed(2)}% of time.`}
        startChipProps={{ label: ' P ( E | H\' ) ', color: 'secondary' }}
        endChipProps={{ label: 'Normalizer', color: 'secondary' }}
        value={normalizerText}
        onTyping={e => {
          setNormalizerText(e.target.value)
          const numericValue = validateProb(parseFloat(eval(e.target.value)))
          setValSync(numericValue)
          setNormalizer(numericValue)
        }}
      />
    </Paper>
  )
}

export default NormalizerPrompt

