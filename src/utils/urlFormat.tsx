export const urlFormat = (genre: string, page?: number) => {
  return `/catalog?genre=${encodeURIComponent(genre)}&page=${page ? page : 1}`
}