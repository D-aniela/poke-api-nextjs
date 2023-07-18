import { useEffect, useState } from 'react'

import { Layout } from '@/components/layouts'
import NoFavorites from '@/components/ui/NoFavorites'
import { localFavorites } from '@/utild'
import FavoritesPokemon from '@/components/ui/Favorites'

const Favorites = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([])
  useEffect(() => {
    setFavoritePokemons(localFavorites.pokemons())
  }, [])

  return (
    <Layout title='Pokemones Favoritos'>
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
        <FavoritesPokemon pokemons={favoritePokemons} />
      )}
    </Layout>
  )
}

export default Favorites
