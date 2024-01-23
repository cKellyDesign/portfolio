import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App/App.tsx'
import './scss/index.scss'
import { store } from './store/store.ts'
import { RouterProvider } from 'react-router-dom'
import { initPortfolioRouter } from './routes/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <RouterProvider
      router={initPortfolioRouter(<App />)}
      fallbackElement={<h5>Loading...</h5>} />
  </Provider>
)
