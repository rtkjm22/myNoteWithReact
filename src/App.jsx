import { useEffect, useState } from 'react'
import './App.css'
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import uuid from 'react-uuid'

function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || [])
  const [activeNote, setActiveNote] = useState(false)

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    setActiveNote(notes[0].id)
  }, [])

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: '',
      content: '',
      modDate: Date.now()
    }

    setNotes([...notes, newNote])
  }

  const onDeleteNote = (id) => {
    const newNotes = [...notes].filter((note) => note.id !== id)
    setNotes(newNotes)
  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArr = [...notes].map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote
      } else {
        return note
      }
    })
    setNotes(updatedNotesArr)
  }

  return (
    <div className="App w-full h-screen overflow-hidden flex bg-blue-50">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main activeNote={getActiveNote()} onUpdateNote={onUpdateNote} />
    </div>
  )
}

export default App
