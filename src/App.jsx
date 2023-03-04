import { useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from "react-uuid";

function App() {
  const [notes, setNotes] = useState([])
  const [activeNote, setActiveNote] = useState(false)

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '新しいノート',
      content: '新しいノートの内容',
      modDate: Date.now()
    }

    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id) => {
    const newNotes = [...notes].filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  return (
    <div className="App w-full h-screen overflow-hidden text-base flex bg-blue-50">
      <Sidebar onAddNote={onAddNote} notes={notes} onDeleteNote={onDeleteNote} activeNote={activeNote} setActiveNote={setActiveNote} />
      <Main />
    </div>
  )
}

export default App
