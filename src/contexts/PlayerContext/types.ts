import { ReactNode } from "react"

export type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
}

export type PlayerContextData = {
  episodeList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  play: (episode: Episode) => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
}

export type PlayerProviderProps = {
  children: ReactNode;
}