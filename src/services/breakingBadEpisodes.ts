import { Episode } from 'breakingBad/service'
import {breakingBadApi} from './api/breakingBad'

const service = () => {
  const resource = 'episodes'

  const getEpisodesByCharacter = async (charName: string) => {
    const path = `${resource}/`

    const { data } = await breakingBadApi.get<Episode[]>(path)

    const episodes = data.filter(episode => episode.characters.includes(charName))

    return episodes
  }

  return {
    getEpisodesByCharacter
  }
}

export const breakingBadEpisodes = service()