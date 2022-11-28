import { Card, CardContent, Paper, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../../redux/store'
import { useEffect, useState } from "react"
import TitlePrompt from "./TitlePrompt"
import PriorPrompt from "./PriorPrompt"
import PosteriorShow from "./PosteriorShow"
import { Evidence } from "../../../../types/evidence"


function HypothesisCard() {
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [priorLocal, setPriorLocal] = useState(prior)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)


  useEffect(() => {
    const posterior = evidence.reduce(
      (a: number, e: Evidence) => a * e.likelihood / e.normalizer,
      prior)
    setPosteriorLocal(posterior)
  }, [prior, evidence])

  return (
    <Card
      elevation={Math.round(24 * posteriorLocal)}
      sx={{ m: 1 }}>
      <CardContent>
        <PosteriorShow {...{ posteriorLocal }} />
        <TitlePrompt />
        <PriorPrompt {...{ priorLocal, setPriorLocal }} />
      </CardContent>
    </Card >
  )
}

export default HypothesisCard
