import { Paper, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { NormalSlider } from "./share/Slider"
import { NormalTextField } from "./share/TextField"
import { useEffect, useState } from "react"
import { Section } from "./share/Section"
import { calPosterior, genPosteriorProbTag, SharpAvatar } from "../utils"


function PosteriorShow() {
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)

  useEffect(() => {
    const posterior = calPosterior(evidence, prior)
    setPosteriorLocal(posterior)
  }, [prior, evidence])

  const tag = genPosteriorProbTag(evidence.length)

  return (
    <Section
      expandedLeftChipProps={{
        label: `Posterior`,
        color: 'error'
      }}
      collapsedLeftChipProps={{
        avatar: SharpAvatar('P'),
        label: tag,
        variant: 'outlined',
        color: 'error'
      }}
      rightChipProps={{
        avatar: SharpAvatar('P'),
        label: posteriorLocal.toFixed(4),
        variant: 'outlined',
        color: 'error'
      }}
    >
      <Paper
        elevation={1}
        sx={{ p: 1 }}>
        <NormalSlider value={posteriorLocal} />
        <NormalTextField
          disabled
          label='How does probability change after updating by evidence?'
          helperText={`After ${evidence.length} piece${evidence.length > 1 ? "s" : ""} of evidence, `
            + `the hypothesis '${title}' is true about ${(posteriorLocal * 100).toFixed(2)}% of time.`}
          startChipProps={{ label: ' P ( H | E ) ', color: 'error' }}
          endChipProps={{ label: 'Posterior', color: 'error' }}
          value={posteriorLocal.toFixed(4)}
        />
      </Paper>
    </Section>
  )
}

export default PosteriorShow
