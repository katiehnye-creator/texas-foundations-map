import { useEffect, useState } from 'react'
import MapPage from './MapPage'

function App() {
  const [counties, setCounties] = useState(null)

  useEffect(() => {
    fetch('/texas-counties.geojson')
      .then(res => res.json())
      .then(setCounties)
  }, [])

  if (!counties) {
    return <p style={{ padding: '1rem' }}>Loading map…</p>
  }

  return <MapPage countiesGeoJson={counties} />
}

export default App
