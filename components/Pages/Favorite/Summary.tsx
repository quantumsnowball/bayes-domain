import { Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../types"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  return (
    <Paper
      key={content.title}
      elevation={1}
      sx={{ p: 1 }}
    >
      <Typography> {content.title}: {content.hypothesis.title} </Typography>
      {Object.values(content.evidence).map((ev) =>
        <Typography>{ev.title}</Typography>
      )}
    </Paper>
  )
}

export default Summary
