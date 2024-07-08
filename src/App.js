import {useState} from 'react'
import {Switch, Route} from 'react-router-dom'
import CreatePost from './components/CreatePost'
import ShowPost from './components/ShowPost'
import './App.css'

const App = () => {
  const [chaild, setChaild] = useState('')

  const handleData = val => {
    setChaild(val)
    console.log(val)
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          <ShowPost data={chaild} />
        </Route>
        <Route exact path="/show">
          <CreatePost ondata={handleData} />
        </Route>
      </Switch>
    </>
  )
}

export default App
