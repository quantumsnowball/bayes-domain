import { Avatar } from "@mui/material"
import TitlePrompt from "./TitlePrompt"
import LikelihoodPrompt from "./LikelihoodPrompt"
import NormalizerPrompt from "./NormalizerPrompt"
import { useSelector } from "react-redux"
import { RootState } from "../../../../redux/store"
import { Section } from "../share/Section"
import { DoubleTapDeleteButton } from "./Button"



interface EvidenceCardProps {
  i: number
}


function EvidenceCard({ i }: EvidenceCardProps) {
  const title = useSelector((s: RootState) => s.content.evidence[i].title)
  const likelihood = useSelector((s: RootState) => s.content.evidence[i].likelihood)
  const normalizer = useSelector((s: RootState) => s.content.evidence[i].normalizer)
  const prior = useSelector((s: RootState) => s.content.hypothesis.prior)

  const bayesFactor = likelihood / (prior * likelihood + (1 - prior) * normalizer)

  return (
    <Section
      expandedLeftChipProps={{
        label: `Evidence ${i + 1}`,
        color: 'secondary'
      }}
      collapsedLeftChipProps={{
        avatar: <Avatar>E{i + 1}</Avatar>,
        label: title,
        variant: 'outlined',
        color: 'secondary'
      }}
      rightChipProps={{
        avatar: <Avatar>x</Avatar>,
        label: bayesFactor.toFixed(4),
        variant: 'outlined'
      }}
      expandedActionComponent={
        <DoubleTapDeleteButton {...{ i }} />
      }
    >
      <TitlePrompt i={i} />
      <LikelihoodPrompt i={i} />
      <NormalizerPrompt i={i} />
    </Section>
  )
}

export default EvidenceCard

