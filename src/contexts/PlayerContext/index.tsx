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
  const [isLooping, setIsLooping] = useState(false);
  const [isShuffling, setIsShuffling] = useState(false);

  const hasNext = isShuffling || (currentEpisodeIndex + 1) < episodeList.length;
  const hasPrevious = currentEpisodeIndex > 0;

  function play(episode: Episode) {
    setEpisodeList([episode]);
    setCurrentEpisodeIndex(0);
    setIsPlaying(true);
  }

  function playList(list: Episode[], index: number) {
    setEpisodeList(list);
    setCurrentEpisodeIndex(index);
    setIsPlaying(true);
  }

  function togglePlay() {
    setIsPlaying(oldValue => !oldValue);
  }

  function toggleLoop() {
    setIsLooping(oldValue => !oldValue);
  }

  function toggleShuffle() {
    setIsShuffling(oldValue => !oldValue);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function playNext() {
    const nextEpisodeIndex = currentEpisodeIndex + 1

    if (isShuffling) {
      const nextRandomEpisodeIndex = Math.floor(Math.random() * episodeList.length);
      setCurrentEpisodeIndex(nextRandomEpisodeIndex);
    } else if (hasNext) {
      setCurrentEpisodeIndex(nextEpisodeIndex);
    }
  }

  function playPrevious() {
    const previousEpisodeIndex = currentEpisodeIndex - 1

    if (hasPrevious) {
      setCurrentEpisodeIndex(previousEpisodeIndex);
    }
  }

  function clearPlayerState() {
    setEpisodeList([]);
    setCurrentEpisodeIndex(0);
  }

  return (
    <PlayerContext.Provider value={{
      episodeList,
      currentEpisodeIndex,
      isPlaying,
      isLooping,
      isShuffling,
      hasNext,
      hasPrevious,
      play,
      togglePlay,
      toggleLoop,
      toggleShuffle,
      setPlayingState,
      playList,
      playNext,
      playPrevious,
      clearPlayerState,
    }}>
      {children}
    </PlayerContext.Provider>
  )
}

export {
  PlayerContext,
  PlayerProvider
}