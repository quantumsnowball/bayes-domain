import {
  Box,
  Fab
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useDispatch } from 'react-redux'
import { contentActions } from '../../redux/slices/contentSlice'


function AddButton() {
  const dispatch = useDispatch()

  return (
    <Box sx={{
      position: 'fixed',
      bottom: 100,
      left: '50%',
      transform: "translateX(-50%)"
    }}>
      <Fab
        variant="extended"
        color="primary"
        aria-label="new"
        onClick={() => dispatch(contentActions.addEvidence(true))}
      >
        <AddIcon />
        ADD
      </Fab>
    </Box>
  )
}

export default AddButton

