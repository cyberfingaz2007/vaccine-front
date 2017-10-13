import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import SeriesReducer from './SeriesReducer'
import SeasonsReducer from './SeasonsReducer'
import EpisodesReducer from './EpisodesReducer'
import MoviesReducer from './MoviesReducer'
import CategoryReducer from './CategoryReducer'
import TrailersReducer from './TrailersReducer'
import MusicalVideosReducer from './MusicalVideosReducer'
import MusicalVideosCatReducer from './MusicalVideosCatReducer'
import LoginReducer from './LoginReducer'
//import UserReducer from './UserReducer'

export default () => {
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = combineReducers({
    series: SeriesReducer,
    movies: MoviesReducer,
    seasons: SeasonsReducer,
    episodes: EpisodesReducer,
    categories: CategoryReducer,
    routing: routerReducer,
    trailers: TrailersReducer,
    musVids: MusicalVideosReducer,
    musVidsCat: MusicalVideosCatReducer,
    userStatus: LoginReducer,
    //account: require('./AccountReducer'),
    //user: UserReducer,
  //  routing: routerReducer,
    //comedy: require('./ComedyReducer'),
    //videos: require('./VideoReducer'),
  })

  return rootReducer
}
