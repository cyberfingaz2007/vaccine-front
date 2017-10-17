export default {
  path: 'projects',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/projects/new-project') },

  childRoutes: [
    {
      path: 'new-project',
      getComponent(nextState, cb){
        import('./containers/NewProject').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'list-projects',
      getComponent(nextState, cb){
        import('./containers/Projects').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
