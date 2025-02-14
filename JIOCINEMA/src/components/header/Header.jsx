/* eslint-disable react/prop-types */
import styles from './Header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import avatarGuestIcon from '../../assets/avatar_guest.svg'
import { useEffect, useState } from 'react'
import Show from '../show/Show'

const Header = (props) => {

  let navLinks = ["Home", "Sports", "Movies", "Tv Shows", "More "]
  let [searchTitle, setSearchTitle] = useState("");

  let [filteredMovies, setFilteredMovies] = useState([])

  useEffect(() => {
  if (searchTitle === "") {
    // Show all movies when search input is empty
    setFilteredMovies([]);
  } else {
    // Filter movies based on search input
    let filterMovies = props.movies.filter((movie) =>
      movie.name.toUpperCase().includes(searchTitle.toUpperCase())
    );
    setFilteredMovies(filterMovies);
  }
}, [searchTitle]);




  return (
    <>
    <header className={styles.header}>
      
      {/* This is for nav tag */}
      <nav className={styles.navigation}>
        <div className={styles.logo}>
            <img src={JCLogo} alt="logo" />
          <div className={styles.premium}>
            <img src={crown} alt="premiuncrown" /><p>Go Premium</p> 
          </div>
        </div>
        

        <ul className={styles.navLinks}>
          {
            navLinks.map((link) => {
              // eslint-disable-next-line react/jsx-key
              return <li className={ styles.navLink }>{ link }</li>
            })
          }
        </ul>
      </nav>
      
      {/* this for the search tag */}
      <div className={styles.search}>
        <div className={styles.searchbox}>
          <div className={styles.headerIcon}>
                      <img src={searchIcon} alt="search-icon"  />
          </div>
          <input type="text"
            onChange={(event) => setSearchTitle(event.target.value)}
            className={styles.searchInput}
            placeholder='Movies, Shows and more' />
          <div className={styles.headerIcon}>
            <img src={ voiceSearchIcon } alt="Vioce-icon" />
          </div>
          
        </div>

        <img className= { styles.usericon } src={ avatarGuestIcon } alt="Avatar-Guest-Icon" />
        
      </div>
      </header>

      {
  filteredMovies.length !== 0 ? (
    <div className={styles.searchResults}>
      {filteredMovies.map((movie) => (
        <Show movie={movie} />
      ))}
    </div>
  ) : null
}


      </>
      
  )
}

export default Header