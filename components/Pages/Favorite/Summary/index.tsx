import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material"
import { FC, useState } from "react"
import { Content } from "../../../../types"
import { TitleRow } from "./Title"
import { PosteriorRow } from "./Posterior"
import { HypothesisRow } from "./Hypothesis"
import { EvidenceRows } from "./Evidence"
import { OperationRow } from "./Operation"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Accordion
      disableGutters
      elevation={1}
      sx={{ m: 1 }}
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
    >
      <AccordionSummary  >
        <TitleRow {...{ expanded, content }} />
      </AccordionSummary>
      <AccordionDetails>
        <PosteriorRow {...{ content }} />
        <HypothesisRow {...{ content }} />
        <EvidenceRows {...{ content }} />
        <OperationRow {...{ content }} />
      </AccordionDetails>
    </Accordion>
  )
}

export default Summary
