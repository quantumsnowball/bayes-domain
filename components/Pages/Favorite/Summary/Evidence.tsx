import { Avatar, Box, Chip } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"
import { Evidence } from "../../../../types/evidence"


type EvidenceRowProps = {
  prior: number,
  ev: Evidence,
  i: number
}

const EvidenceRow: FC<EvidenceRowProps> = ({ prior, ev, i }) => {
  const bayesFactor = ev.likelihood /
    (prior * ev.likelihood + (1 - prior) * ev.normalizer)

  return (
    <Box
      key={ev.title}
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        my: 1
      }}
    >
      <Chip
        avatar={<Avatar>E{i + 1}</Avatar>}
        label={ev.title}
        variant='outlined'
        color='secondary'
      />
      <Chip
        avatar={<Avatar>x</Avatar>}
        label={bayesFactor.toFixed(4)}
        variant='outlined'
      />
    </Box>
  )
}

export const EvidenceRows: FC<{ content: Content }> = ({ content }) => {
  const prior = content.hypothesis.prior

  return (
    <>
      {
        Object.values(content.evidence).map(
          (ev, i) => <EvidenceRow key={ev.title} {...{ prior, ev, i }} />
        )
      }
    </>
  )
}

