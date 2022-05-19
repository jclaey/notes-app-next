import React, { useState, useEffect } from 'react'
import CreateForm from '../components/createForm'
import ListItem from '../components/listItem'

const HomePage = () => {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    if (!localStorage.getItem('notes')) {
      localStorage.setItem('notes', '[]')
    } else {
      setNotes(JSON.parse(localStorage.getItem('notes')))
    }
  }, [])

  const onCreateSubmit = (e, title, body) => {
    e.preventDefault()
  
    const storedNotes = JSON.parse(localStorage.getItem('notes'))
  
    const hasLength = storedNotes.length > 0 ? true : false
  
    const note = {
      id: hasLength ? storedNotes[storedNotes.length - 1].id + 1 : 1,
      title,
      body
    }
  
    storedNotes.push(note)
    localStorage.setItem('notes', JSON.stringify(storedNotes))

    setNotes(storedNotes)
  }

  const renderedNotes = notes.map(note => {
    return <ListItem note={note} key={note.id} />
  })

   return (
     <>
       <h1 className='text-5xl pb-10'>Create Note</h1>
       <CreateForm onCreateSubmit={onCreateSubmit} />
       <h3 className='text-3xl'>My Notes</h3>
       {notes.length > 0 ? renderedNotes : <p>No notes yet.</p>}
     </>
   )
}

export default HomePage