import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import EditForm from '../components/editForm'

const EditPage = () => {
  const router = useRouter()

  const notes = JSON.parse(localStorage.getItem('notes'))
  const note = notes.find(item => item.id === Number(router.query.id))

  useEffect(() => {
    if (!note) {
      router.push('/')
    }
  }, [router, note])

  const onEditSubmit = (e, title, body) => {
    e.preventDefault()
  
    note.title = title
    note.body = body

    localStorage.setItem('notes', JSON.stringify(notes))

    navigate('/')
  };

  return (
    <>
      <h1>Edit Note</h1>
      <EditForm onEditSubmit={onEditSubmit} note={note} />
    </>
  )
}

export default EditPage