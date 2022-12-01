import { Box, Typography } from "@mui/material";
import { VERSION } from "../../../constants";


export function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography
        component="span"
        sx={{ cursor: 'pointer' }}
      >
        Bayes, v{VERSION}
      </Typography>
    </Box>
  )
}
