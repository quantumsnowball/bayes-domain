import { Avatar, Chip, IconButton, Paper } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import { useDispatch } from "react-redux"
import { favoriteActions } from "../../../../redux/slices/favoriteSlice"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { Box } from "@mui/system"
import { Evidence } from "../../../../types/evidence"
import { TitleRow } from "./Title"
import { PosteriorRow } from "./Posterior"
import { HypothesisRow } from "./Hypothesis"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))


  const EvidenceRow = ({ ev, i }: { ev: Evidence, i: number }) => {
    const prior = content.hypothesis.prior
    const bayesFactor = ev.likelihood / (prior * ev.likelihood + (1 - prior) * ev.normalizer)

    return (
      < >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            my: 1
          }}
        >
          <Chip
            avatar={<Avatar>E{i + 1}</Avatar>}
            label={ev.title}
            variant='outlined'
            color='secondary'
          />
          <Chip
            avatar={<Avatar>x</Avatar>}
            label={bayesFactor.toFixed(4)}
            variant='outlined'
          />
        </Box>
      </>
    )
  }

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
      <TitleRow {...{ content }} />
      <PosteriorRow {...{ content }} />
      <HypothesisRow {...{ content }} />
      {
        Object.values(content.evidence).map((ev, i) =>
          <EvidenceRow key={ev.title} {...{ ev, i }} />)
      }
      <OperationRow />
    </Paper>
  )
}

export default Summary
