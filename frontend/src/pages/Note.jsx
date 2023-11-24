import NoteForm from "../components/NoteForm";
import { useState, useEffect } from 'react';
import NoteCard from "../components/NoteCard";
import axios from 'axios';

function Note() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/notes/', {
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `JWT ${localStorage.getItem('access')}`,
          },
        });

        setNotes(response.data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const addNote = async (note) => {
    try {
      const response = await axios.post('http://localhost:8000/api/notes/', note, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
        },
      });

      const newNote = response.data;
      setNotes(currentNotes => [...currentNotes, newNote]);
    } catch (error) {
      console.error('Error adding note:', error);
      if (error.response) {
        console.error('Response data:', error.response.data);
      }
    }
  }; 

  const deleteNote = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8000/api/notes/${id}/`, {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization': `JWT ${localStorage.getItem('access')}`,
        },
        withCredentials: true,
      });
  
      console.log('Note deleted successfully');
  
      setNotes((currentNotes) => currentNotes.filter((note) => note.note_id !== id));
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };
  

  return (
    <div>
      <NoteForm addNote={addNote} />
      {notes.map(n => <NoteCard key={n.note_id} noteId={n.note_id} noteTitle={n.title} noteContent={n.content} deleteNote={deleteNote}/>)}
    </div>
  );
}

export default Note;
