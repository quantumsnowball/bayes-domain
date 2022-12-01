import { Paper } from "@mui/material"
import { FC } from "react"
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
  return (
    <Paper
      key={content.title}
      elevation={1}
      sx={{
        m: 1,
        p: 1,
        textAlign: 'left'
      }}
    >
      <TitleRow {...{ content }} />
      <PosteriorRow {...{ content }} />
      <HypothesisRow {...{ content }} />
      <EvidenceRows {...{ content }} />
      <OperationRow {...{ content }} />
    </Paper>
  )
}

export default Summary
