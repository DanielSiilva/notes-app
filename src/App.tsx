import {useState, useEffect} from 'react'
import { api } from './lib/api'
import { Header } from './components/Header'

interface NotesData {
  id: number,
  text: string,
  date: string
}

export function App(){
  const [notes, setNotes] = useState<NotesData[]>()

  async function fetchNotes(){
    const response = await api.get('notes')
    try {
      setNotes(response.data)
    } catch (error) {
      return error
    }
  }

  console.log(notes);
  
  useEffect(() =>{
    fetchNotes()
  }, [])
 

  return (
    <div>
      <Header />
      <h1> Notes App - Hello Word</h1>
    </div>
  )
}