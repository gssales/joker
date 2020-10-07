import React, {useState} from 'react';
import { JokePresenterProps } from './JokePresenter.types';
import './JokePresenter.scss';

const JokePresenter: React.FC<JokePresenterProps> = ({ joke }) => {
  const [showPunchline, setShowPunchline] = useState(false);

  const handlePunchline = () => {
    if (joke)
      setShowPunchline(true);
  }

  return (
  <div className="joke-wrapper"
    onClick={() => handlePunchline()}>
    <div className="joke-col">
      <p className={`joke setup ${!joke ? 'preload' : ''}`}>
        { joke && joke.setup }
      </p>
      <p className={`joke punchline ${showPunchline ? 'show' : ''}`}> 
        { joke && joke.punchline } 
      </p>
    </div>
  </div>
  );
}

export default JokePresenter;
