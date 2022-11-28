import { Accordion, AccordionDetails, AccordionSummary, Card, CardContent, Paper, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../../redux/store'
import { useEffect, useState } from "react"
import TitlePrompt from "./TitlePrompt"
import PriorPrompt from "./PriorPrompt"
import PosteriorShow from "./PosteriorShow"
import { Evidence } from "../../../../types/evidence"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


function HypothesisCard() {
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [priorLocal, setPriorLocal] = useState(prior)
  const [posteriorLocal, setPosteriorLocal] = useState(prior)
  const [expanded, setExpanded] = useState(true)


  useEffect(() => {
    const posterior = evidence.reduce(
      (a: number, e: Evidence) => a * e.likelihood / e.normalizer,
      prior)
    setPosteriorLocal(posterior)
  }, [prior, evidence])

  return (
    <>
      <PosteriorShow {...{ posteriorLocal }} />
      <Accordion
        disableGutters
        elevation={1}
        sx={{ m: 1 }}
        expanded={expanded}
        onChange={(e, isExpanded) => {
          setExpanded(isExpanded)
        }}
        defaultExpanded
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
        >
          Hypothesis
        </AccordionSummary>
        <AccordionDetails>
          <Card
            elevation={Math.round(24 * posteriorLocal)}
          >
            <CardContent>
              <TitlePrompt />
              <PriorPrompt {...{ priorLocal, setPriorLocal }} />
            </CardContent>
          </Card >
        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default HypothesisCard
