import styled from "styled-components";

export const Container = styled.section`
  width: 240px;
  height: max-content;
  margin: 10px;
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);

  border-radius: 10px;
`

export const Content = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

`

export const EpisodesContainer = styled.div`
  margin: 10px 0;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 10px;
  row-gap: 6px;
`

export const EpisodeText = styled.div`

`

export const Button = styled.button`
  margin-top: 10px;
`

export const Details = styled.legend`
  margin: 10px 0;

  p {
    margin: 6px 0;
  }
`