import {
  Avatar,
  Card,
  CardContent,
} from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../../redux/store'
import { useEffect, useState } from "react"
import TitlePrompt from "./TitlePrompt"
import PriorPrompt from "./PriorPrompt"
import PosteriorShow from "./PosteriorShow"
import { Evidence } from "../../../../types/evidence"
import { Section } from "../share/Section"


function HypothesisCard() {
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)


  useEffect(() => {
    const posterior = evidence.reduce(
      (a: number, e: Evidence) => a * e.likelihood / e.normalizer,
      prior)
    setPosteriorLocal(posterior)
  }, [prior, evidence])

  return (
    <>
      <PosteriorShow {...{ posteriorLocal }} />
      <Section
        expandedLeftChipProps={{
          label: 'Hypothesis',
          color: 'primary'
        }}
        collapsedLeftChipProps={{
          avatar: <Avatar>H</Avatar>,
          label: title,
          variant: 'outlined',
          color: 'primary'
        }}
        rightChipProps={{
          avatar: <Avatar>P</Avatar>,
          label: prior.toFixed(4),
          variant: 'outlined',
          color: 'primary'
        }}
      >
        <Card>
          <CardContent>
            <TitlePrompt />
            <PriorPrompt />
          </CardContent>
        </Card >
      </Section >
    </>
  )
}

export default HypothesisCard
