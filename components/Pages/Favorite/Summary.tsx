import { Avatar, Chip, IconButton, Paper, Typography } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import { useDispatch } from "react-redux"
import { favoriteActions } from "../../../redux/slices/favoriteSlice"
import { contentActions } from "../../../redux/slices/contentSlice"
import { Box } from "@mui/system"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))

  const TitleRow = () =>
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
      }}
    >
      <Typography variant='h5'>
        {content.title}
      </Typography>
      <Chip />
    </Box>

  const HypothesisRow = () =>
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        justifyContent: 'space-between'
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

  const EvidenceRows = () =>
    <>
      <Typography>Evidence:</Typography>
      {Object.values(content.evidence).map((ev) =>
        <Typography>
          {ev.title}
        </Typography>
      )}
    </>

  const OperationRow = () =>
    <Box sx={{
      display: 'flex',
      flexFlow: 'row nowrap',
      justifyContent: 'space-between'
    }}>
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
          setContent(content)
          e.stopPropagation()
        }}>
        <DownloadIcon />
      </IconButton>
    </Box>

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
      <TitleRow />
      <HypothesisRow />
      <EvidenceRows />
      <OperationRow />
    </Paper>
  )
}

export default Summary
