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
    <Chip
      avatar={<Avatar>P</Avatar>}
      label={content.hypothesis.prior.toFixed(4)}
      variant='outlined'
      color='primary'
    />

  const CenterText = () =>
    <Typography
      sx={{ flex: 1, textAlign: 'center' }}
    >
      {content.title}
    </Typography>

  const RightChip = () => {
    const posterior = calPosterior(content.evidence, content.hypothesis.prior)
    return (
      <Chip
        avatar={SharpAvatar('P')}
        label={posterior.toFixed(4)}
        variant='outlined'
        color='error'
      />
    )
  }

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline'
      }}
    >
      {!expanded ? <LeftChip /> : null}
      <CenterText />
      {!expanded ? <RightChip /> : null}
    </Box>
  )
}

