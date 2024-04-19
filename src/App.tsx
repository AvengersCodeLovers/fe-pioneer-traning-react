import Header from './components/Header.tsx'
import ListActicle from './components/ListActicle.tsx'
import './assets/index.css'

function App() {
  return (
    <>
      <Header/>
      <div className="container">
        <ListActicle/>
      </div>
    </>
  )
}

export default App
