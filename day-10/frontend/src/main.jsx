
import { createRoot } from 'react-dom/client'
import './index.css'

import {Provider} from 'react-redux'
import { store } from './app/store.jsx'
import Approutes from './routes/Approutes.jsx'
createRoot(document.getElementById('root')).render(
<Provider store={store}>
  <Approutes />
</Provider>
)
