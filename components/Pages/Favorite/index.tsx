import {
  Paper,
  Typography
} from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { Content } from "../../../types"
import Summary from "./Summary"




function Favorite() {
  const favorites = useSelector((s: RootState) => s.favorite.items)

  return (
    <>
      {Object.values(favorites).map((content: Content) =>
        <Summary key={content.title} content={content} />
      )}
    </>
  )
}

export default Favorite



