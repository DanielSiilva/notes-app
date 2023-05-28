import {useState, useEffect} from 'react'
import { api } from './lib/api'

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
      return 
    }
  }

  console.log(notes);
  
  useEffect(() =>{
    fetchNotes()
  }, [])
 

  return (
    <div>
      <h1> Notes App - Hello Word</h1>
    </div>
  )
}