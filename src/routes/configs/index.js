export default {
  path: '/',
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'configs',
      getComponent(nextState, cb){
        import('./containers/Configurations').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
