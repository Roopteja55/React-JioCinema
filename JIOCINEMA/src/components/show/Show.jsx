import styles from './show.module.css'

const show = (props) => {
  return (
      <>
        <div className={styles.show}>
              <img src={props.movie.imageUrl} alt="Devara" />
               <div className={styles.movieTitle}> {props.movie.name } </div>
        </div>
      </>

)
}

export default show