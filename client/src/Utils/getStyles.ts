import { Theme, useTheme } from "@mui/material/styles";

function getStyles(key: string, state: readonly string[], theme: Theme) {
  return {
    fontWeight:
      state.indexOf(key) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export { getStyles };
