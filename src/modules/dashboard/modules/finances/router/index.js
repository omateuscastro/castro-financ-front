const RecordsHome = () => import('./../views/RecordsHome.vue')

export default [
  {
    path: 'records',
    components: RecordsHome,
    meta: { requiresAuth: true },
    alias: ['home', '']
  }
]
