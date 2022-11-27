import { styled, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../redux/store'
import { Overflow, Stretch } from "../../styled/containers"
import { Evidence } from "../../../types/evidence"
import HypothesisCard from "./HypothesisCard"
import EvidenceCard from "./EvidenceCard"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const evidenceItems = useSelector((s: RootState) => s.content.evidence)

  return (
    <ContentDiv id='content-ctn'>
      <HypothesisCard />
      {
        evidenceItems.map((item: Evidence, i: number) =>
          <EvidenceCard key={item.uuid} index={i} />)
      }
    </ContentDiv>
  )
}

export default Home

