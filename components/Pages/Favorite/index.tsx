import { Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { Content } from "../../../types"

function Favorite() {
  const favorites = useSelector((s: RootState) => s.favorite.items)

  return (
    <>
      {Object.values(favorites).map((content: Content) =>
        <div key={content.title}>
          <Typography> {content.title}: {content.hypothesis.title} </Typography>
          {Object.values(content.evidence).map((ev) =>
            <Typography>{ev.title}</Typography>
          )}
        </div>
      )}
    </>
  )
}

export default Favorite



