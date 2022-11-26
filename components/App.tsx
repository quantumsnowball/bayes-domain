import styled from "@emotion/styled"
import Main from "./Main"
import MenuBar from "./MenuBar"
import { CenterContent } from "./styled/containers"


const FlexColumnDiv = styled(CenterContent('div'))`
  /* cover full viewport */
  position: fixed;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  /* theme */
  /* TODO */
`

const App = () => {
  return (
    <FlexColumnDiv id="app-ctn">
      <MenuBar />
      <Main />
    </FlexColumnDiv>
  )
}

export default App
