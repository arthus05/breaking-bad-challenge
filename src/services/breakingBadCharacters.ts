import { Character } from 'breakingBad/service'
import {breakingBadApi} from './api/breakingBad'

const service = () => {
  const resource = 'characters'

  const getAllCharacters = async () => {
    const path = `${resource}/`

    const response = await breakingBadApi.get<Character[]>(path)

    return response.data
  }

  return {
    getAllCharacters
  }
}

export const breakingBadCharacters = service()