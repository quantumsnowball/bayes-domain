import {
  Card, CardContent,
  Chip,
  InputAdornment,
  TextField,
  Typography
} from "@mui/material"
import { useSelector, useDispatch } from "react-redux"
import { RootState } from '../../../redux/store'
import { contentActions } from "../../../redux/slices/contentSlice"


function HypothesisCard() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.hypothesis.title)

  return (
    <Card>
      <CardContent>
        <TextField
          fullWidth
          variant="outlined"
          color='primary'
          label='What is your Hypothesis?'
          helperText="Make a guess or forecast about anything"
          InputProps={{
            startAdornment:
              <InputAdornment
                position="start"
                sx={{ fontsize: 30 }}
              >
                <Chip label='Hypothesis' variant='outlined' color='primary' />
              </InputAdornment>,
          }}
          value={title}
          onChange={e => dispatch(contentActions.setHypothesisTitle(e.target.value))}
          onFocus={e => e.target.select()}
        >
        </TextField>
        <Typography variant="h5" sx={{ textAlign: 'left' }} color="text.secondary">Prior:</Typography>
        <Typography variant="h4">P(H) = ?</Typography>
        <Typography variant="h4" sx={{ textAlign: 'left' }} color="text.secondary">Posterior:</Typography>
        <Typography variant="h3">P(H|E) = 0.863746</Typography>
      </CardContent>
    </Card >
  )
}

export default HypothesisCard
