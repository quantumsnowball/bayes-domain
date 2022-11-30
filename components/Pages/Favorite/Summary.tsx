import { IconButton, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { favoriteActions } from "../../../redux/slices/favoriteSlice"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))

  return (
    <Paper
      key={content.title}
      elevation={1}
      sx={{
        p: 1,
        textAlign: 'left'
      }}
    >
      <Typography
        variant='h5'
      >
        {content.title}
      </Typography>
      <Typography>
        Hypothesis: {content.hypothesis.title}
      </Typography>
      <Typography>Evidence:</Typography>
      {Object.values(content.evidence).map((ev) =>
        <Typography>
          {ev.title}
        </Typography>
      )}

      <IconButton
        color="error"
        size='small'
        onClick={e => {
          removeFavorite(content.title)
          e.stopPropagation()
        }}>
        <DeleteIcon />
      </IconButton>
    </Paper>
  )
}

export default Summary
