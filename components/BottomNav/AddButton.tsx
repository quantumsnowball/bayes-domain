import {
  Box,
  Fab
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'


interface AddButtonProps {
  handleAction: () => void
}

function AddButton({ handleAction }: AddButtonProps) {
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
        onClick={() => handleAction()}
      >
        <AddIcon />
        ADD
      </Fab>
    </Box>
  )
}

export default AddButton

