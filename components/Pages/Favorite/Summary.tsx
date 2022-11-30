import { Avatar, Chip, IconButton, Paper, Typography, useTheme } from "@mui/material"
import { FC } from "react"
import { Content } from "../../../types"
import DeleteIcon from '@mui/icons-material/Delete'
import DownloadIcon from '@mui/icons-material/Download'
import { useDispatch } from "react-redux"
import { favoriteActions } from "../../../redux/slices/favoriteSlice"
import { contentActions } from "../../../redux/slices/contentSlice"
import { Box } from "@mui/system"
import { Evidence } from "../../../types/evidence"
import { calPosterior, genPosteriorProbTag } from "../utils"


interface SummaryProps {
  content: Content
}

const Summary: FC<SummaryProps> = ({ content }) => {
  const dispatch = useDispatch()
  const removeFavorite = (title: string) => dispatch(favoriteActions.removeItem(title))
  const setContent = (content: Content) => dispatch(contentActions.setContent(content))
  const theme = useTheme()

  const TitleRow = () => {
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
  const PosteriorRow = () => {
    const posterior = calPosterior(content.evidence, content.hypothesis.prior)

    const SharpAvatar = (name: string) =>
      <Avatar sx={{ bgcolor: theme.palette.error.main }}>
        <span style={{ color: 'white' }}>{name}</span>
      </Avatar>

    return (
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Chip
          avatar={SharpAvatar('P')}
          label={genPosteriorProbTag(content.evidence.length)}
          variant='outlined'
          color='error'
        />
        <Chip
          avatar={SharpAvatar('P')}
          label={posterior.toFixed(4)}
          variant='outlined'
          color='error'
        />
      </Box >
    )
  }

  const HypothesisRow = () =>
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
      <TitleRow />
      <PosteriorRow />
      <HypothesisRow />
      {
        Object.values(content.evidence).map((ev, i) =>
          <EvidenceRow key={ev.title} {...{ ev, i }} />)
      }
      <OperationRow />
    </Paper>
  )
}

export default Summary
