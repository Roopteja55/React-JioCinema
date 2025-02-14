import styles from './featured-show.module.css'
// import featured1 from '../../assets/featured1.avif'



const featuredShow = (props) => {
  return (
      <>
      <div className={styles.featuredShow}>
        <img src={props.movie.imageUrl} alt="featured image" />
        <div className={styles.movieTitle}> {props.movie.name } </div>
        </div>
      </>
  )
}

export default featuredShow