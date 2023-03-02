export interface File {
  id: string
  type: "pdf" | "folder" | "doc" | "csv" | "mov"
  name: string
  added: string
  files?: File[]
}
