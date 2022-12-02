import { Avatar, Box, Chip, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"
import { calPosterior, SharpAvatar } from "../../utils"


interface TitleRowProps {
  expanded: boolean
  content: Content
}

export const TitleRow: FC<TitleRowProps> = ({
  expanded,
  content
}) => {
  const LeftChip = () =>
    <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
      <Chip
        avatar={<Avatar>P</Avatar>}
        label={content.hypothesis.prior.toFixed(4)}
        variant='outlined'
        color='primary'
      />
    </Box>

  const CenterText = () =>
    <Typography
      variant='h5'
      sx={{ flex: 1, textAlign: 'center' }}
    >
      {content.title}
    </Typography>

  const RightChip = () => {
    const posterior = calPosterior(content.evidence, content.hypothesis.prior)
    return (
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Chip
          avatar={SharpAvatar('P')}
          label={posterior.toFixed(4)}
          variant='outlined'
          color='error'
        />
      </Box>
    )
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {!expanded ? <LeftChip /> : null}
      <CenterText />
      {!expanded ? <RightChip /> : null}
    </Box>
  )
}

