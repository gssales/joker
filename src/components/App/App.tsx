import React, { useEffect, useState } from 'react';
import BackgroundStyle from '../BackgroundStyle/BackgroundStyle';
import JokePresenter from '../JokePresenter/JokePresenter';
import { Joke } from "../../types/Joke";
import BackendService from '../../services/BackendService';

function App() {
  const backendService = new BackendService();
  const [joke, setJoke] = useState<Joke|null>(null);

  useEffect(() => {
    backendService.getRandomJoke().then(res => {
      setJoke(res);
    })
  }, [])

  return (
    <BackgroundStyle>
      <JokePresenter joke={joke} />
    </BackgroundStyle>
  );
}

export default App;
