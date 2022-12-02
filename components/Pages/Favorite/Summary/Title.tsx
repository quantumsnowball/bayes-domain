import { Box, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"


export const TitleRow: FC<{ content: Content }> = ({ content }) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography
        variant='h5'
        sx={{
          flex: 1,
          textAlign: 'center'
        }}
      >
        {content.title}
      </Typography>

    </Box>
  )
}

