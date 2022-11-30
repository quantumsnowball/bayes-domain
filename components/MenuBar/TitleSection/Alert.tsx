import { Alert, Snackbar } from "@mui/material";
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
        variant='filled'
        onClick={() => setSavedAlertOpen(false)}
      >
        Worksheet saved as '{title}' successfully.
      </Alert>
    </Snackbar>
  )
}

