import { Avatar, } from "@mui/material"
import { useSelector } from "react-redux"
import { RootState } from '../../../../redux/store'
import TitlePrompt from "./TitlePrompt"
import PriorPrompt from "./PriorPrompt"
import { Section } from "../share/Section"


function HypothesisCard() {
  const title = useSelector((s: RootState) => s.content.hypothesis.title)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)

  return (
    <Section
      expandedLeftChipProps={{
        label: 'Hypothesis',
        color: 'primary'
      }}
      collapsedLeftChipProps={{
        avatar: <Avatar>H</Avatar>,
        label: title,
        variant: 'outlined',
        color: 'primary'
      }}
      rightChipProps={{
        avatar: <Avatar>P</Avatar>,
        label: prior.toFixed(4),
        variant: 'outlined',
        color: 'primary'
      }}
    >
      <TitlePrompt />
      <PriorPrompt />
    </Section >
  )
}

export default HypothesisCard
