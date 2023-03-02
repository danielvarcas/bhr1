import files from "../data/files.json"

export function getFiles() {
  return JSON.parse(JSON.stringify(files))
}
