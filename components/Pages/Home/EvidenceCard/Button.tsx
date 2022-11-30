import { Button, IconButton, } from "@mui/material"
import DeleteIcon from '@mui/icons-material/Delete'
import { useDispatch } from "react-redux"
import { contentActions } from "../../../../redux/slices/contentSlice"
import { FC, useState } from "react"


export const DoubleTapDeleteButton: FC<{ i: number }> = ({ i }) => {
  const dispatch = useDispatch()
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {
        !expanded ?
          <IconButton
            color="error"
            size='small'
            onClick={e => {
              setExpanded(true)
              e.stopPropagation()
            }}
          >
            <DeleteIcon />
          </IconButton>
          :
          <Button
            color="error"
            size='small'
            onClick={e => {
              dispatch(contentActions.removeEvidence(i))
              e.stopPropagation()
            }}
          >
            delete
          </Button>
      }
    </>
  )
}

