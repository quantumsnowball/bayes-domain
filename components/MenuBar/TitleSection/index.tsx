import {
  Box,
  IconButton,
  Typography,
} from "@mui/material"
import EditIcon from '@mui/icons-material/Edit'
import SaveAsIcon from '@mui/icons-material/SaveAs'
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { contentActions } from "../../../redux/slices/contentSlice"

function TitleSection() {
  const dispatch = useDispatch()
  const [title, setTitle] = [
    useSelector((s: RootState) => s.content.title),
    (txt: string) => dispatch(contentActions.setTitle(txt))
  ]

  const EditTitleButton = () =>
    <IconButton
      onClick={() => setTitle('hello')}
      sx={{ color: '#fff' }}
    >
      <EditIcon />
    </IconButton>

  const SaveAsButton = () =>
    <IconButton
      sx={{ color: '#fff' }}>
      <SaveAsIcon />
    </IconButton>


  return (
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
  )
}

export default TitleSection

