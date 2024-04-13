import Map from "../../molecules/map";
import styles from "./styles.module.css";

const MapPanel = () => {
  return (
    <section className={styles.mapPanel}>
      <div className={styles.mapHeader}>
        <h1>Map Panel</h1>
        {/* This should contain the details of what is being shown on the map */}
      </div>
      <div className={styles.mapContainer}>
        <Map address="98 Hartshorn St. Reading, MA 01867" />
      </div>
    </section>
  )
};

export default MapPanel;
