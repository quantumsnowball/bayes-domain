import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField
} from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { contentActions } from "../../../../redux/slices/contentSlice";
import { RootState } from "../../../../redux/store";


interface EditDialogProps {
  editOpen: boolean
  setEditOpen: Dispatch<SetStateAction<boolean>>
}

function EditDialog({ editOpen, setEditOpen }: EditDialogProps) {
  const dispatch = useDispatch()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.title),
    (txt: string) => dispatch(contentActions.setTitle(txt))
  ]
  const [titleLocal, setTitleLocal] = useState(title)

  const handleClose = () => setEditOpen(false)

  const handleSubmit = () => {
    if (titleLocal.length > 0) {
      setTitle(titleLocal)
      setEditOpen(false)
    }
  }

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
          value={titleLocal}
          onChange={e => setTitleLocal(e.target.value)}
          onSubmit={handleSubmit}
          onKeyUp={e => {
            if (e.code === 'Enter') handleSubmit()
          }}
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
          disabled={titleLocal.length === 0}
          color='primary'
          variant='contained'
          type='submit'
          onClick={handleSubmit}
        >
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default EditDialog
