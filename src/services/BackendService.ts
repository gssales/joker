import { Joke } from '../types/Joke';

class BackendService {

  async requestJoke() : Promise<Joke | null> {
    try {
      let res = await fetch(`https://api.allorigins.win/get?url=${process.env.REACT_APP_BACKEND_API}random_joke`);      

      if (res.status === 200) {
        const result = await res.json();        
        return await JSON.parse(result.contents);
      }
      return null;

    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async requestJokeFile() : Promise<Joke[] | null> {
    try {
      let res = await fetch(`https://api.allorigins.win/get?url=${process.env.REACT_APP_GITHUB_JOKES_SOURCE}`);

      if (res.status === 200) {
        const result = await res.json();        
        return await JSON.parse(result.contents);
      }
      return null;

    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async getRandomJoke() : Promise<Joke | null> {
    const jokeList = await this.requestJokeFile();
    if (!jokeList) 
      return null;
    return jokeList[Math.floor(Math.random() * jokeList.length)];
  }
}

export default BackendService;
