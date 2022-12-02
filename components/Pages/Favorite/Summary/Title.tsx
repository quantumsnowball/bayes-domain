import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"


interface TitleRowProps {
  expanded: boolean
  content: Content
}

export const TitleRow: FC<TitleRowProps> = ({
  expanded,
  content
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {!expanded ?
        <Typography
          sx={{
            flex: 1,
            textAlign: 'left'
          }}
        >
          Left Very Long
        </Typography> : null}
      <Typography
        variant='h5'
        sx={{
          flex: 1,
          textAlign: 'center'
        }}
      >
        {content.title}
      </Typography>

      {!expanded ?
        <Typography
          sx={{
            flex: 1,
            textAlign: 'right'
          }}
        >
          Right
        </Typography> : null}
    </Box>
  )
}

