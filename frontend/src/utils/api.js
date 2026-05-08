export const fetchEvents = async () => {
  try {
    // Trae la URL directamente del entorno de Vite
    const response = await fetch(`${import.meta.env.VITE_API_URL}/events.json`)
    
    if (!response.ok) throw new Error('Error cargando eventos')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return { upcoming: [], past: [] }
  }
}