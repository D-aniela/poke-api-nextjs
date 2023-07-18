import { Card, Grid } from '@nextui-org/react'
import { useRouter } from 'next/router'

const FavoriteCardPokemon = ({ pokemonId }: { pokemonId: number }) => {
  const router = useRouter()
  const onFavoriteClicked = (id: number) => {
    return () => {
      router.push(`/pokemon/${id}`)
    }
  }
  return (
    <Grid
      xs={6}
      sm={3}
      md={2}
      lg={1}
      key={pokemonId}
      onClick={onFavoriteClicked(pokemonId)}
    >
      <Card isHoverable isPressable css={{ padding: 10 }}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`}
          width={'100%'}
          height={140}
        />
      </Card>
    </Grid>
  )
}

export default FavoriteCardPokemon
