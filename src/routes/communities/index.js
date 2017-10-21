export default {
  path: 'communities',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/communities/list-communities') },

  childRoutes: [
    {
      path: 'new-community',
      getComponent(nextState, cb){
        import('./containers/NewCommunity').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'list-communities',
      getComponent(nextState, cb){
        import('./containers/Communities').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
