import { Card, CardContent, Paper, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../../redux/store'
import { useEffect, useState } from "react"
import TitlePrompt from "./TitlePrompt"
import PriorPrompt from "./PriorPrompt"
import PosteriorShow from "./PosteriorShow"


function HypothesisCard() {
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const [priorLocal, setPriorLocal] = useState(prior)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)


  useEffect(() => {
    setPosteriorLocal(prior * 1.0)
  }, [prior])

  return (
    <Card>
      <CardContent>
        <TitlePrompt />
        <PriorPrompt {...{ priorLocal, setPriorLocal }} />
        <PosteriorShow {...{ posteriorLocal }} />
      </CardContent>
    </Card >
  )
}

export default HypothesisCard