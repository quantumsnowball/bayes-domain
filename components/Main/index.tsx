import { Stretch, CenterContent, Overflow } from '../styled/containers'
import { styled } from '@mui/material'


// .main-ctn
const CenteredDiv = styled(Overflow(Stretch(CenterContent('div'))))`
`

const Main = () => {
  return (
    <CenteredDiv id='main-ctn'>
      <span>Main Area</span>
    </CenteredDiv>
  )
}

export default Main

