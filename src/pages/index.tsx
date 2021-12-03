import { Character } from 'breakingBad/service'
import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { CharacterCard } from '../components/CharacterCard'
import { breakingBadCharacters } from '../services/breakingBadCharacters'
import { GlobalStyles } from '../styles/global'
import {
  Container,
  Content
} from './styles'

const { getAllCharacters } = breakingBadCharacters



const Home: NextPage = () => {
  const [characters, setCharacters] = useState([] as Character[])


  useEffect(() => {
    getAllCharacters()
      .then(data => setCharacters(data))
  }, [])


  return (
    <Container>
      <Content>
        {characters.map((char, i) =>
          <CharacterCard
            character={char}
            key={i} />)}
      </Content>
      <GlobalStyles />
    </Container>
  )
}

export default Home
