import { Button, styled, } from "@mui/material"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from '../../../redux/store'
import { Overflow, Stretch } from "../../styled/containers"
import { Evidence } from "../../../types/evidence"
import HypothesisCard from "./HypothesisCard"
import EvidenceCard from "./EvidenceCard"
import AddIcon from '@mui/icons-material/Add'
import { contentActions } from "../../../redux/slices/contentSlice"
import { v4 } from "uuid"
import PosteriorShow from "./PosteriorShow"


const ContentDiv = styled(Overflow(Stretch('div')))`
`

function Home() {
  const dispatch = useDispatch()
  const evidenceItems = useSelector((s: RootState) => s.content.evidence)

  return (
    <ContentDiv id='content-ctn'>
      <PosteriorShow />
      <HypothesisCard />
      {
        evidenceItems.map((item: Evidence, i: number) =>
          <EvidenceCard key={item.uuid} i={i} />)
      }
      <Button
        variant='contained'
        color='secondary'
        startIcon={<AddIcon />}
        sx={{ m: 2 }}
        onClick={() => dispatch(contentActions.addEvidence({
          uuid: v4(),
          title: 'Untitled Evidence',
          likelihood: 0.5,
          likelihoodText: '1/2',
          normalizer: 0.5,
          normalizerText: '1/2',
        }))}
      >
        New Evidence
      </Button>
    </ContentDiv>
  )
}

export default Home

