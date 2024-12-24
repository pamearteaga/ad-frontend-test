import Catalog from "./catalog/page"

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24 font-bold text-4xl text-blue-600'>
      <Catalog />
    </main>
  )
}
