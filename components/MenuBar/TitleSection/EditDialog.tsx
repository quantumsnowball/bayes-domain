import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";


interface EditDialogProps {
  editOpen: boolean
  setEditOpen: Dispatch<SetStateAction<boolean>>
}

function EditDialog({ editOpen, setEditOpen }: EditDialogProps) {

  const handleClose = () => setEditOpen(false)

  return (
    <Dialog
      open={editOpen}
      onClose={handleClose}
    >
      <DialogTitle>Worksheet Title</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Please enter a unique title for your worksheet. Your can use save your work to favorite under this title.
        </DialogContentText>
        <TextField
          fullWidth
          autoFocus
          margin="normal"
          label="Worksheet Title"
          type="text"
          onFocus={e => e.target.select()}
        />
      </DialogContent>
      <DialogActions>
        <Button
          color='primary'
          variant='outlined'
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          color='primary'
          variant='contained'
          onClick={handleClose}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditDialog
