import { useState } from 'react'
import styles from './Tags.module.css'

const Tags = () => {
    // eslint-disable-next-line no-unused-vars
    let [tags, setTags] = useState([
            "For You",
            "Action",
            "Drama",
            "Sci-Fi",
            "Comedy",
            "Thriller",
            "Fantasy",
            "Mystery",
            "Horror",
            "Adventure",
        "Romance",
            "Crime",
  "Animation",
  "Supernatural",
  "Historical",
  "Western",
  "Musical",
  "War",
    ])

  return (
      <>
          <div className={styles.tags}>
            
              {
                  tags.map((tag)=>{
                  // eslint-disable-next-line react/jsx-key
                  return <p className={ styles.tag }>{ tag }</p>
            })
              }
            

        </div>
      </>
  )
}

export default Tags