import '../styles/global.scss'

import { Header } from '../components/Header';
import { Player } from '../components/Player';

import { PlayerProvider } from '../contexts';

import styles from '../styles/app.module.scss';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerProvider>
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>

        <Player />
      </div>
    </PlayerProvider>
  );
}

export default MyApp
