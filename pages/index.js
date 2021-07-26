export default function Home() {
  return (
    <div style={{textAlign: 'center'}}>
      <h1>Staging</h1>
      <h1>{process.env.NEXT_PUBLIC_API_URL}</h1>
    </div>
  )
}
