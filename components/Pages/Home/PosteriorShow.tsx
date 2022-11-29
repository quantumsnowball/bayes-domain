import { Avatar, Paper, Typography, useTheme, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { NormalSlider } from "./share/Slider"
import { NormalTextField } from "./share/TextField"
import { useEffect, useState } from "react"
import { Evidence } from "../../../types/evidence"
import { Section } from "./share/Section"


function PosteriorShow() {
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)
  const theme = useTheme()

  useEffect(() => {
    const posterior = evidence.reduce(
      (p_H: number, ev: Evidence) => {
        const p_H_null = 1 - p_H
        const p_E_given_H = ev.likelihood
        const p_E_given_H_null = ev.normalizer
        const p_E = (p_H * p_E_given_H + p_H_null * p_E_given_H_null)
        const p_H_given_E = p_E_given_H / p_E * p_H
        return p_H_given_E
      },
      prior)
    setPosteriorLocal(posterior)
  }, [prior, evidence])

  const tag = evidence.length == 0 ?
    '( H )' : evidence.length == 1 ?
      '( H | E1 )' : `( H | E1 ... E${evidence.length})`

  const SharpAvatar = (name: string) =>
    <Avatar sx={{ bgcolor: theme.palette.error.main }}>
      <span style={{ color: 'white' }}>{name}</span>
    </Avatar>

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
        variant='outlined'
        sx={{ m: 1, p: 1, pt: 4, bgcolor: posteriorLocal > 1 ? 'red' : null }}>
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
