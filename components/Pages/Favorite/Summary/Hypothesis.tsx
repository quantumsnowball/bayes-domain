import { Avatar, Box, Chip } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"


export const HypothesisRow: FC<{ content: Content }> = ({ content }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between',
        my: 1
      }}
    >
      <Chip
        avatar={<Avatar>H</Avatar>}
        label={content.hypothesis.title}
        variant='outlined'
        color='primary'
      />
      <Chip
        avatar={<Avatar>P</Avatar>}
        label={content.hypothesis.prior.toFixed(4)}
        variant='outlined'
        color='primary'
      />
    </Box>
  )
}

