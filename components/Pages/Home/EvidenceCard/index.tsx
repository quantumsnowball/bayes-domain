import {
  Avatar,
  Box,
  Button,
  Card, CardActions, CardContent,
} from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import TitlePrompt from "./TitlePrompt"
import LikelihoodPrompt from "./LikelihoodPrompt"
import NormalizerPrompt from "./NormalizerPrompt"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Section } from "../share/Section"


interface EvidenceCardProps {
  i: number
}


function EvidenceCard({ i }: EvidenceCardProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[i].likelihood)
  const normalizer = useSelector((s: RootState) => s.content.evidence[i].normalizer)

  return (
    <Section
      expandedLeftChipProps={{
        label: `Evidence ${i + 1}`,
        color: 'secondary'
      }}
      collapsedLeftChipProps={{
        avatar: <Avatar>E{i + 1}</Avatar>,
        label: title,
        variant: 'outlined',
        color: 'secondary'
      }}
      rightChipProps={{
        avatar: <Avatar>x</Avatar>,
        label: (likelihood / normalizer).toFixed(4),
        variant: 'outlined'
      }}
    >
      <Card variant='outlined' >
        <CardContent >
          <TitlePrompt i={i} />
          <LikelihoodPrompt i={i} />
          <NormalizerPrompt i={i} />
        </CardContent>
        <CardActions disableSpacing>
          <Box sx={{ flexGrow: 1 }} />
          <Button
            color="error"
            startIcon={<DeleteIcon />}
            onClick={e => {
              e.stopPropagation()
              dispatch(contentActions.removeEvidence(i))
            }}>
            DELETE
          </Button>
        </CardActions>
      </Card>
    </Section>
  )
}

export default EvidenceCard

