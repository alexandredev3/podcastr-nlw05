import { createContext, useState } from 'react';

import {
  PlayerContextData,
  Episode,
  PlayerProviderProps
} from './types';

const PlayerContext = createContext({} as PlayerContextData);

function PlayerProvider({ children }: PlayerProviderProps) {
  const [episodeList, setEpisodeList] = useState([]);
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(oldValue => !oldValue);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      isPlaying,
      play,
      togglePlay,
      setPlayingState,
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export {
  PlayerContext,
  PlayerProvider
}