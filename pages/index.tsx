import { NextPage, GetStaticProps } from 'next'
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { pokeApi } from '@/api'
import { Layout } from '@/components/layouts'
import { PokemonListResponse, SmallPokemon } from '@/interfaces'
import { PokemonCard } from '@/components/pokemon'

interface Props {
  pokemones: SmallPokemon[]
}

const Home: NextPage<Props> = ({ pokemones }) => {
  return (
    <Layout title='Listado de Pokemones'>
      <Grid.Container gap={2} justify='flex-start'>
        {pokemones.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </Grid.Container>
    </Layout>
  )
}

/** GET STATIC PROPS
 * INFORMACIÓN ESTÁTICA
 * Se sabe que no se hará otra petición y es información que no estará cambiando
 */
export const getStaticProps: GetStaticProps = async (ctx) => {
  const { data } = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151')

  const pokemones: SmallPokemon[] = data.results.map((poke, i) => ({
    ...poke,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${
      i + 1
    }.png`,
  }))

  return {
    props: {
      pokemones,
    },
  }
}

export default Home
