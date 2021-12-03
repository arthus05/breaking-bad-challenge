declare module 'breakingBad/service' {
  interface Character {
    char_id: number
    name: string
    birthday: Date
    occupation: string[]
    img: string
    status: string
    appearance: number[]
    nickname: string
    portrayed: string
    category: string
    better_call_saul_appearance: number[]
  }

  interface Episode {
    episode_id: number
    title: string
    season: string
    air_date: Date
    characters: strin[]
    episode: string
    series: string
  }

}