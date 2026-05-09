export const fetchEvents = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/events.json`)
    
    if (!response.ok) throw new Error('Error cargando eventos')
    return await response.json()
  } catch (error) {
    console.error('Error:', error)
    return { upcoming: [], past: [] }
  }
}

export const fetchPrograms = async () => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/programs.json`);
    
    if (!response.ok) {
      throw new Error(`Error ${response.status}: No se pudo cargar programas`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error en fetchPrograms:', error);
    // Retorna un array vacío para evitar errores de .map() en el componente
    return [];
  }
};