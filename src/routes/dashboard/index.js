export default {
  path: '/',
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'dashboard',
      getComponent(nextState, cb){
        import('./containers/Dashboard').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
