import { Alert, Button, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { favoriteActions } from "../../../../redux/slices/favoriteSlice";
import { RootState } from "../../../../redux/store";
import { Content } from "../../../../types";


interface SavedAlertProps {
  savedAlertOpen: boolean
  setSavedAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function SavedAlert({ savedAlertOpen, setSavedAlertOpen }: SavedAlertProps) {
  const title = useSelector((s: RootState) => s.content.title)

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={10000}
      open={savedAlertOpen}
      onClose={() => setSavedAlertOpen(false)}
      sx={{ mt: 8 }}

    >
      <Alert
        sx={{ py: 2, width: '100%' }}
        onClick={() => setSavedAlertOpen(false)}
      >
        Worksheet saved as {"'"}{title}{"'"} successfully.
      </Alert>
    </Snackbar>
  )
}


interface OverwriteAlertProps {
  overwriteAlertOpen: boolean
  setOverwriteAlertOpen: Dispatch<SetStateAction<boolean>>
  setSavedAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function OverwriteAlert({
  overwriteAlertOpen,
  setOverwriteAlertOpen,
  setSavedAlertOpen
}: OverwriteAlertProps) {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const hypothesis = useSelector((s: RootState) => s.content.hypothesis)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const replaceFavorite = (c: Content) => dispatch(favoriteActions.setItem(c))

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      autoHideDuration={20000}
      open={overwriteAlertOpen}
      onClose={() => setOverwriteAlertOpen(false)}
      sx={{ mt: 8 }}
    >
      <Alert
        color='warning'
        sx={{ py: 2, width: '100%' }}
        onClick={() => setOverwriteAlertOpen(false)}
        action={
          <Button
            size='small'
            color='warning'
            variant='outlined'
            onClick={e => {
              replaceFavorite({ title, hypothesis, evidence })
              setOverwriteAlertOpen(false)
              e.stopPropagation()
              setSavedAlertOpen(true)
            }}
          >
            Overwrite
          </Button>
        }
      >
        Worksheet {"'"}{title}{"'"} already exists!
      </Alert>
    </Snackbar>
  )
}


interface ErrorAlertProps {
  text: string
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function ErrorAlert({ text, open, setOpen }: ErrorAlertProps) {
  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'center'
      }}
      open={open}
      onClose={() => setOpen(false)}
      autoHideDuration={10000}
      sx={{ mt: 8 }}
    >
      <Alert
        color='error'
        variant='filled'
        sx={{ py: 2, width: '100%' }}
        onClick={() => setOpen(false)}
      >
        {text}
      </Alert>
    </Snackbar>
  )
}
