import { Character, Episode } from 'breakingBad/service'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { breakingBadEpisodes } from '../../services/breakingBadEpisodes'
import {
  Container,
  Content,
  EpisodesContainer,
  EpisodeText,
  Button,
  Details
} from './styles'

interface CharacterCardProps {
  character: Character
}

const { getEpisodesByCharacter } = breakingBadEpisodes

export const CharacterCard = ({ character }: CharacterCardProps) => {
  const [episodes, setEpisodes] = useState([] as Episode[])
  const [showEp, setShowEp] = useState(false)

  useEffect(() => {
    getEpisodesByCharacter(character.name)
      .then(data => setEpisodes(data))
  }, [character.name])

  const handleEpisodes = () => {
    setShowEp(!showEp)
  }

  return (
    <Container>
      <Content>
        <Image
          src={character.img}
          alt="Character Photo"
          width={200}
          height={200} />

        <h2>{character.name}</h2>

        <Details>
          <p><strong>Birthday</strong>: {character.birthday}</p>
          <p><strong>Occupations</strong>: {
            character.occupation
              .map((occ, i) => (
                i === character.occupation.length - 1 ?
                  <span key={i}>{occ}</span> :
                  <span key={i}>{occ}, </span>
              ))}</p>
          <p><strong>Status</strong>: {character.status}</p>
          <p><strong>Nickname</strong>: {character.nickname}</p>
          <p><strong>Appereance</strong>: {
            character.appearance.length > 0 ?
              character.appearance
                .map((occ, i) => (
                  <span key={i}>s0{occ.toString()} </span>
                )) : <>No appereance</>
              }
          </p>
          <p><strong>Portrayed</strong>: {character.portrayed}</p>
          <p><strong>Category</strong>: {character.category}</p>
          <p><strong>Better Call Saul appereance</strong>: {
            character.better_call_saul_appearance.length > 0 ?
              character.better_call_saul_appearance
                .map((occ, i) => (
                  <span key={i}>s0{occ.toString()} </span>
                )) : <>No appereance</>
              }
          </p>

        </Details>

        <Button onClick={handleEpisodes}>Show Episodes</Button>
        {
          showEp ?
            <EpisodesContainer>
              {episodes.map((ep, index) =>
                <EpisodeText key={index}>
                  e{ep.episode}s0{ep.season}
                </EpisodeText>)}
            </EpisodesContainer> : <></>
        }
      </Content>

    </Container>
  )
}
