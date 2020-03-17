export function getNodeJokes(list) {
    const jokes = [];
    for (let i = 0; i < list.length; ++i) {
      const joke = list[i];
      if (joke.tags.indexOf("node") !== -1) {
        jokes.push(joke);
      }
    }
    return jokes;
  }
  
  export function getJavaScriptJokes(list) {
    const jokes = [];
    for (let i = 0; i < list.length; ++i) {
      const joke = list[i];
      if (joke.tags.indexOf("javascript") !== -1) {
        jokes.push(joke);
      }
    }
    return jokes;
  }