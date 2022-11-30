import { Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"


export const TitleRow: FC<{ content: Content }> = ({ content }) => {
  return (
    <Paper
      elevation={1}
      variant='outlined'
      sx={{ p: 1, textAlign: 'center' }}
    >
      <Typography variant='h5'>
        {content.title}
      </Typography>
    </Paper>
  )
}

