export default {
  path: 'records',
  component: require('../../components/common/Layout').default,

  indexRoute: { onEnter: (nextState, replace) => replace('/communities/list-patients') },

  childRoutes: [
    {
      path: 'new-patient',
      getComponent(nextState, cb){
        import('./containers/NewPatient').then((m)=> {
          cb(null, m.default)
        })
      }
    }
    ,
    {
      path: 'list-patients',
      getComponent(nextState, cb){
        import('./containers/Patients').then((m)=> {
          cb(null, m.default)
        })
      }
    }
  ]


};
