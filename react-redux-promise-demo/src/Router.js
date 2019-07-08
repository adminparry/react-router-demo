import Loadable from 'react-loadable'

import Loading from './routers/Loading';


const Router = Loadable({
  loader: () => import(/* webpackChunkName:"Router" */'./routers'),
  loading: Loading
})

export default Router