import {
  Box,
  IconButton,
  Typography,
} from "@mui/material"
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { useState } from "react"
import EditDialog from "./EditDialog"
import { ErrorAlert, OverwriteAlert, SavedAlert } from "./Alert"
import { Content } from "../../../../types"
import { favoriteActions } from "../../../../redux/slices/favoriteSlice"


export function Toolbar() {
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
  const [titleErrorAlertOpen, setTitleErrorAlertOpen] = useState(false)

  const ResetButton = () =>
    <IconButton
      sx={{ color: '#ccc' }}
      aria-label='Reset WorkSpace'
      onClick={() => setEditOpen(true)}
    >
      <RestartAltIcon />
    </IconButton>

  const SaveAsButton = () =>
    <IconButton
      sx={{ color: '#ccc' }}
      aria-label='Save As Favorite'
      onClick={() => {
        if (title.length === 0) {
          setTitleErrorAlertOpen(true)
          return
        }
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
        <ResetButton />
        <Typography
          component="span"
          sx={{ cursor: 'pointer' }}
          onClick={() => setEditOpen(true)}
        >
          {title}
        </Typography>
        <SaveAsButton />
      </Box>
      <EditDialog {...{ editOpen, setEditOpen }} />
      <SavedAlert {...{ savedAlertOpen, setSavedAlertOpen }} />
      <OverwriteAlert {...{
        overwriteAlertOpen,
        setOverwriteAlertOpen,
        setSavedAlertOpen
      }} />
      <ErrorAlert
        text='Please enter a title before saving.'
        open={titleErrorAlertOpen}
        setOpen={setTitleErrorAlertOpen}
      />
    </>
  )
}
