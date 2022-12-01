import { Box, Chip } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"
import { calPosterior, genPosteriorProbTag, SharpAvatar } from "../../utils"


export const PosteriorRow: FC<{ content: Content }> = ({ content }) => {
  const posterior = calPosterior(content.evidence, content.hypothesis.prior)

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Chip
        avatar={SharpAvatar('P')}
        label={genPosteriorProbTag(content.evidence.length)}
        variant='outlined'
        color='error'
      />
      <Chip
        avatar={SharpAvatar('P')}
        label={posterior.toFixed(4)}
        variant='outlined'
        color='error'
      />
    </Box >
  )
}

