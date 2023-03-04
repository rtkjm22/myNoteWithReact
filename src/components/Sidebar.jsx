import React from 'react'

function Sidebar({
  onAddNote,
  notes,
  onDeleteNote,
  activeNote,
  setActiveNote
}) {

  const sortedNotes = notes.sort((a, b) => b.modDate - a.modDate)

  return (
    <div className="w-[30%] h-screen border-r">
      <div className="flex justify-between p-6">
        <h1>ノート</h1>
        <button
          className="text-blue-500 text-base cursor-pointer"
          onClick={onAddNote}
        >
          追加
        </button>
      </div>
      <div className="h-[100vh - 78px] overflow-y-scroll">
        {sortedNotes.map(({ id, title, content, modDate }) => (
          <div
            className={`p-6 hover:bg-gray-200 transition-all ${
              activeNote === id && 'bg-gray-200'
            }`}
            key={id}
            onClick={() => setActiveNote(id)}
          >
            <div className="flex justify-between">
              <strong>{title}</strong>
              <button onClick={() => onDeleteNote(id)}>削除</button>
            </div>
            <p className="my-2.5">{content}</p>
            <small className="text-gray-400">
              最後の修正日：
              {new Date(modDate).toLocaleDateString('ja-JP', {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </small>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sidebar
