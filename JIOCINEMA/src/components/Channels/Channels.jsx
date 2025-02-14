import styles from './Channels.module.css'
import channel1 from '../../assets/peacock-hub.avif'
import channel2 from '../../assets/nick.avif'
import channel3 from '../../assets/mtv.avif'
import channel4 from '../../assets/hbo.avif'
import channel5 from '../../assets/colors-marathi.avif'
import channel6 from '../../assets/colors-kannada.avif'
import channel7 from '../../assets/colors-infinity.avif'



const Channels = () => {
  return (
      <div className={styles.channels}>
          
          <img src={channel1} alt="channel" />
          <img src={channel2} alt="channel" />
          <img src={channel3} alt="channel" />
          <img src={channel4} alt="channel" />
          <img src={channel5} alt="channel" />
          <img src={channel6} alt="channel" />
          <img src={channel7} alt="channel" />

    </div>
  )
}

export default Channels