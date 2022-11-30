import {
  Box,
  IconButton,
  Typography,
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { useState } from "react"
import EditDialog from "./EditDialog"
import { OverwriteAlert, SavedAlert } from "./Alert"
import { Content } from "../../../types"
import { favoriteActions } from "../../../redux/slices/favoriteSlice"

function TitleSection() {
  const dispatch = useDispatch()
  const title = useSelector((s: RootState) => s.content.title)
  const hypothesis = useSelector((s: RootState) => s.content.hypothesis)
  const evidence = useSelector((s: RootState) => s.content.evidence)
  const [favorites, addFavorite] = [
    useSelector((s: RootState) => s.favorite.items),
    (c: Content) => dispatch(favoriteActions.setItem(c))
  ]
  const [editOpen, setEditOpen] = useState(false)
  const [savedAlertOpen, setSavedAlertOpen] = useState(false)
  const [overwriteAlertOpen, setOverwriteAlertOpen] = useState(false)

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
      onClick={() => {
        if (title in favorites) {
          setOverwriteAlertOpen(true)
          return
        }
        addFavorite({ title, hypothesis, evidence })
        setSavedAlertOpen(true)
      }}
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
      <OverwriteAlert {...{ overwriteAlertOpen, setOverwriteAlertOpen }} />
    </>
  )
}

export default TitleSection

