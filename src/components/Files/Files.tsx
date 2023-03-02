import React from "react"
import { getFiles } from "../../utils/files"

export function Files() {
  const files = React.useMemo(() => {
    return getFiles()
  }, [getFiles])

  React.useEffect(() => {
    console.log(files)
  }, [files])

  return <div></div>
}
