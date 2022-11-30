import { Alert, Button, Snackbar } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";


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
        Worksheet saved as '{title}' successfully.
      </Alert>
    </Snackbar>
  )
}


interface OverwriteAlertProps {
  overwriteAlertOpen: boolean
  setOverwriteAlertOpen: Dispatch<SetStateAction<boolean>>
}

export function OverwriteAlert({ overwriteAlertOpen, setOverwriteAlertOpen }: OverwriteAlertProps) {
  const title = useSelector((s: RootState) => s.content.title)

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
              alert('TODO: save to state')
              setOverwriteAlertOpen(false)
              e.stopPropagation()
            }}
          >
            Overwrite
          </Button>
        }
      >
        Worksheet '{title}' already exists!
      </Alert>
    </Snackbar>
  )
}

