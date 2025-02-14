/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import styles from './Featured.module.css'
import FeaturedShow from '../featured-show/FeaturedShow'

const Featured = (props) => {
  return (
    <>
      <section className={styles.featured}>

      <h1 className={styles.sectionTitle}>Hot Right Now 🔥</h1>
      
      <div className={styles.shows}>
        
          {
            props.movies.map((movie) => {
              return <FeaturedShow movie={ movie } />
            })
          }

          
          
      </div>
      

    </section>
    </>
    
  )
}

export default Featured