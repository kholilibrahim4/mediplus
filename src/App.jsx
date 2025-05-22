import Layout from "./components/Layout"
import './assets/css/style.css'
import './assets/css/icofont.css'

import './assets/css/fontawesome.6.7.2.css'

import '../node_modules/owl.carousel/dist/assets/owl.carousel.css';
import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css';


import DataContextProvider from "./components/contextApi/DataContext"

function App() {

  return (
    <DataContextProvider>
      <Layout />
    </DataContextProvider>

  )
}

export default App
