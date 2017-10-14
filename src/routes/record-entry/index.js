export default {
  path: '/',
  component: require('../../components/common/Layout').default,
  childRoutes: [
    {
      path: 'record-entry',
      getComponent(nextState, cb){
        import('./containers/Entry').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
