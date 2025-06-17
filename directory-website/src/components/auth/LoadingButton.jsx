"use client"

import { Button, CircularProgress } from "@mui/material"

const LoadingButton = ({ loading, children, ...props }) => {
  return (
    <Button
      {...props}
      disabled={loading || props.disabled}
      sx={{
        position: "relative",
        ...props.sx,
      }}
    >
      {loading && (
        <CircularProgress
          size={20}
          sx={{
            position: "absolute",
            color: "inherit",
          }}
        />
      )}
      <span style={{ opacity: loading ? 0 : 1 }}>{children}</span>
    </Button>
  )
}

export default LoadingButton
