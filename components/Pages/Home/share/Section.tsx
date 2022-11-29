import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  Box,
  Chip,
  ChipProps
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { FC, ReactElement, useState } from "react";


type SectionProps = AccordionProps & {
  collapsedLeftChipProps: ChipProps
  expandedLeftChipProps: ChipProps
  expandedActionComponent?: ReactElement | null
  rightChipProps: ChipProps
}

export const Section: FC<SectionProps> = ({
  collapsedLeftChipProps,
  expandedLeftChipProps,
  expandedActionComponent = null,
  rightChipProps,
  children,
  ...otherProps
}) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <Accordion
      disableGutters
      elevation={1}
      sx={{ m: 1 }}
      expanded={expanded}
      onChange={(_, isExpanded) => setExpanded(isExpanded)}
      {...otherProps}
    >
      <AccordionSummary expandIcon={<ExpandMoreIcon />} >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          {expanded ?
            <>
              <Chip {...expandedLeftChipProps} />
              {expandedActionComponent}
            </>
            :
            <Chip {...collapsedLeftChipProps} />
          }
          <Chip {...rightChipProps} />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        {children}
      </AccordionDetails>
    </Accordion>
  )
}
