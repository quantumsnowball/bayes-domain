import {
  Box,
  IconButton,
  Typography,
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useState } from "react"
import EditDialog from "./EditDialog"
import { SavedAlert } from "./Alert"

function TitleSection() {
  const title = useSelector((s: RootState) => s.content.title)
  const [editOpen, setEditOpen] = useState(false)
  const [savedAlertOpen, setSavedAlertOpen] = useState(false)

  const EditTitleButton = () =>
    <IconButton
      sx={{ color: '#ccc' }}
      onClick={() => setEditOpen(true)}
    >
      <EditIcon />
    </IconButton>

  const SaveAsButton = () =>
    <IconButton
      sx={{ color: '#ccc' }}
      onClick={() => setSavedAlertOpen(true)}
    >
      <SaveAsIcon />
    </IconButton>

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <EditTitleButton />
        <Typography
          component="span"
          sx={{ cursor: 'pointer' }}
        >
          {title}
        </Typography>
        <SaveAsButton />
      </Box>
      <EditDialog {...{ editOpen, setEditOpen }} />
      <SavedAlert {...{ savedAlertOpen, setSavedAlertOpen }} />
    </>
  )
}

export default TitleSection

