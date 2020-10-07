import { Joke } from '../types/Joke';

class BackendService {

  async requestJoke() : Promise<Joke | null> {
    try {
      let res = await fetch(`${process.env.REACT_APP_BACKEND_API}jokes/random`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });      

      if (res.status === 200) {
        return await res.json();
      }
      return null;

    } catch (err) {
      console.log(err);
      return null;
    }
  }
}

export default BackendService;
