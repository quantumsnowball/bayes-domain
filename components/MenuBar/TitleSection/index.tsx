import { useRouter } from "next/router"
import { Header } from "./Header"
import { Toolbar } from "./Toolbar"

function TitleSection() {
  const router = useRouter()

  return router.pathname === '/' ?
    <Toolbar /> : <Header />
}

export default TitleSection

