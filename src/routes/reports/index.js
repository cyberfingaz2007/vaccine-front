export default {
  path: 'reports',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/dashboard/daily-reports') },

  childRoutes: [
    {
      path: 'daily-reports',
      getComponent(nextState, cb){
        import('./containers/DailyReports').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'project-progress',
      getComponent(nextState, cb){
        import('./containers/ProjectProgress').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
