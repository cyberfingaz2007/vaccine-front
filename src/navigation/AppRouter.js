import React,{Component} from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import createTStore, { history } from '../Redux/Store/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import Main from '../Containers/Main'
import Trailers from '../Containers/Trailers'
import AddTrailers from '../Containers/AddTrailers'
import Seriz from '../Containers/Seriz'
import AddSeriz from '../Containers/AddSeriz'
import Seasons from '../Containers/Seasons'
import AddSeason from '../Containers/AddSeason'
import Episodes from '../Containers/Episodes'
import AddEpisode from '../Containers/AddEpisode'
import Muviz from '../Containers/Muviz'
import AddMuviz from '../Containers/AddMuviz'
import MuzVids from '../Containers/MuzVids'
import AddMuzVids from '../Containers/AddMuzVids'
import AuthVids from '../Containers/AuthVids'
import Akantin from '../Containers/Akantin'
import UsaAkants from '../Containers/UsaAkants'
import Usas from '../Containers/Usas'
import Login from '../Containers/Login'

function requireAuth(nextState, replace) {
  let { isLoggedIn } = this.props
  console.log(isLoggedIn);
  if (!isLoggedIn) {
    replace({
      pathname: '/admin/login'
    })
  }
}

const router = (
  <Router history={history}>
    <Route path="/admin">
      <IndexRoute component={Main} />
      <Route path="/admin/trailers" component={Trailers} />
      <Route path="/admin/trailers/add" component={AddTrailers}/>
      <Route path="/admin/seriz" component={Seriz}/>
      <Route path="/admin/seriz/add" component={AddSeriz}/>
      <Route path="/admin/seriz/seasons/:serieId" component={Seasons}/>
      <Route path="/admin/seriz/seasonsadd" component={AddSeason}/>
      <Route path="/admin/seriz/episodes/:seasonId" component={Episodes}/>
      <Route path="/admin/seriz/episodesadd" component={AddEpisode} />
      <Route path="/admin/muviz" component={Muviz} />
      <Route path="/admin/muviz/add" component={AddMuviz} />
      <Route path="/admin/muzvids" component={MuzVids} />
      <Route path="/admin/muzvids/add" component={AddMuzVids} />
      <Route path="/admin/authvids" component={AuthVids} />
      <Route path="/admin/usas" component={Usas} />
      <Route path="/admin/akantin" component={Akantin} />
      <Route path="/admin/usaakant" component={UsaAkants} />
    </Route>
    <Route path="/admin/login" component={Login} />
  </Router>
)


const mapStateToProps = state => ({
  isLoggedIn: state.userStatus.isLoggedIn,
});
/*
const mapDispatchToProps = dispatch => ({
  episodesRequest: () => dispatch(episodesActions.episodesRequest())
})
*/


//export default connect(mapStateToProps,null)(router);
export default router
