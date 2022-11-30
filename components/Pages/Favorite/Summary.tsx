import { IconButton, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import { useDispatch } from "react-redux"
import { favoriteActions } from "../../../redux/slices/favoriteSlice"
import { contentActions } from "../../../redux/slices/contentSlice"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))

  return (
    <Paper
      key={content.title}
      elevation={1}
      sx={{
        m: 1,
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
      <IconButton
        color="primary"
        size='small'
        onClick={e => {
          // alert(`TODO: gonna replace the workspace by ${content.title}`)
          setContent(content)
          e.stopPropagation()
        }}>
        <DownloadIcon />
      </IconButton>
    </Paper>
  )
}

export default Summary
