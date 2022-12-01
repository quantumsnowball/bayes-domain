import { styled, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from "../../../redux/store"
import { Content } from "../../../types"
import { Overflow, Stretch } from "../../styled/containers"
import Summary from "./Summary"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Favorite() {
  const favorites = useSelector((s: RootState) => s.favorite.items)

  return (
    <ContentDiv id='content-ctn'>
      {Object.values(favorites).map((content: Content) =>
        <Summary key={content.title} content={content} />
      )}
    </ContentDiv>
  )
}

export default Favorite



