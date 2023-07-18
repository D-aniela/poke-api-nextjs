const toggleFavorite = (id: number) => {
  // Si no regresa nada, entonces regresar el arreglo como string
  let favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  )
  if (favorites.includes(id)) {
    favorites = favorites.filter((pokeId) => pokeId !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))
}

// Necesitamos un id de tipo number
// Regresa un boolean si el id
const existInFavorites = (id: number): boolean => {
  if (typeof window === 'undefined') return false
  const favorites: number[] = JSON.parse(
    localStorage.getItem('favorites') || '[]',
  )
  return favorites.includes(id)
}

const pokemons = (): number[] => {
  return JSON.parse(localStorage.getItem('favorites') || '[]')
}

export default {
  toggleFavorite,
  existInFavorites,
  pokemons
}
