import {useState, useRef, useEffect} from 'react'
import {v4 as uuidv4} from 'uuid'
import EachPost from '../EachPost'
import './index.css'

const CreatePost = () => {
  const [input, setInput] = useState('')
  const [text, setText] = useState('')
  const [list, setList] = useState([])
  const [err, setErr] = useState(false)
  const ml = useRef(null)

  useEffect(() => {
    ml.current.focus()
  }, [])

  const onChangeInput = event => {
    setInput(event.target.value)
  }

  const onChangeText = event => {
    setText(event.target.value)
  }

  const create = () => {
    if (input !== '' && text !== '') {
      const newItem = {
        id: uuidv4(),
        input,
        text,
        isActive: true,
      }
      setList([...list, newItem])
      setErr(false)
      setInput('')
      setText('')
    } else {
      setErr(true)
    }
  }
  const changes = id => {
    const updateItem = list.map(each =>
      each.id === id ? {...each, isActive: !each.isActive} : each,
    )
    setList(updateItem)
    console.log(id)
  }

  const changeInput = id => {
    const updateItem = list.map(each =>
      each.id === id ? {...each, isActive: !each.isActive} : each,
    )
    setList(updateItem)
  }

  const editList = (id, editText) => {
    const updateItem = list.map(each =>
      each.id === id ? {...each, text: editText} : each,
    )
    setList(updateItem)
  }

  return (
    <div className="userInterFace">
      <div className="sub">
        <h1 className="heading">Create Post</h1>
        <div className="inputCont">
          <span>Enter Name :</span>
          <br />
          <input
            type="text"
            className="input"
            onChange={onChangeInput}
            ref={ml}
            value={input}
          />
        </div>
        <div>
          <span>Comment :</span>
          <br />
          <textarea
            type="text"
            className="textArea"
            onChange={onChangeText}
            value={text}
          />
        </div>
        <button type="button" onClick={create} className="createBet">
          Create Post
        </button>
        <p className="err">{err ? '* Enter Valid Value' : null}</p>
      </div>
      <div className="sub1">
        {list.map(each => (
          <EachPost
            posts={each}
            key={each.id}
            changeState={changes}
            changeInput={changeInput}
            editList={editList}
          />
        ))}
      </div>
    </div>
  )
}

export default CreatePost
