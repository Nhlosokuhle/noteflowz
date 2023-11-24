function NoteCard({ noteId, noteTitle, noteContent, deleteNote }) {
  const handleDelete = async () => {
    await deleteNote(noteId);
  };

  return (
    <div className="note">
      <h1>{noteTitle}</h1>
      <p>{noteContent}</p>
      <button onClick={handleDelete}>🗑️</button>
    </div>
  );
}

export default NoteCard;