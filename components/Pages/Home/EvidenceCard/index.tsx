import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card, CardActions, CardContent, Chip, Typography,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import TitlePrompt from "./TitlePrompt"
import LikelihoodPrompt from "./LikelihoodPrompt"
import NormalizerPrompt from "./NormalizerPrompt"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"


interface EvidenceCardProps {
  index: number
}


function EvidenceCard({ index }: EvidenceCardProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[index].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[index].likelihood)
  const normalizer = useSelector((s: RootState) => s.content.evidence[index].normalizer)
  const [expanded, setExpanded] = useState(false)

  return (
    <Accordion
      disableGutters
      elevation={1}
      sx={{ m: 1 }}
      expanded={expanded}
      onChange={(e, isExpanded) => {
        setExpanded(isExpanded)
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {(expanded) ?
            <Chip
              label={`${expanded ? "Evidence " : "E"}${index + 1}`}
              variant='outlined'
              color='secondary'
            />
            :
            <Chip
              avatar={<Avatar>E{index + 1}</Avatar>}
              label={title}
              variant='outlined'
              color='secondary'
            />
          }
          <Chip
            avatar={<Avatar>x</Avatar>}
            label={(likelihood / normalizer).toFixed(4)}
            variant='outlined'
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Card
          variant='outlined'
        >
          <CardContent >
            <TitlePrompt {...{ index }} />
            <LikelihoodPrompt {...{ index }} />
            <NormalizerPrompt {...{ index }} />
          </CardContent>
          <CardActions disableSpacing>
            <Box sx={{ flexGrow: 1 }} />
            <Button
              color="error"
              startIcon={<DeleteIcon />}
              onClick={e => {
                e.stopPropagation()
                dispatch(contentActions.removeEvidence(index))
              }}>
              DELETE
            </Button>
          </CardActions>
        </Card>
      </AccordionDetails>
    </Accordion>
  )
}

export default EvidenceCard

