'use client';

import ChatPanel from './components/organisms/chat-panel';
import MapPanel from './components/organisms/map-panel';
import { PropertyDataProvider } from './_contexts/property-data-context';
import './_design-system/global.css';
import styles from "./page.module.css";


export default function Home() {
  return (
    <PropertyDataProvider>
      <main className={styles.main}>
        <ChatPanel />
        <MapPanel />
      </main>
    </PropertyDataProvider>
  );
};
