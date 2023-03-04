import React from 'react'

function Main({ activeNote, onUpdateNote }) {
  const onEditNote = (key, value) => {
    onUpdateNote({
      ...activeNote,
      [key]: value,
      modDate: Date.now()
    })
  }

  if (!activeNote) {
    return (
      <div className="w-[70%] flex justify-center items-center text-center text-2xl text-gray-400">
        ノートが選択されていません
      </div>
    )
  }

  return (
    <div className="w-[70%] h-screen">
      <div className="h-1/2 p-6">
        <input
          id="title"
          type="text"
          className="block border mb-5 w-full h-[50px] p-1 resize-none rounded"
          value={activeNote.title}
          onChange={(e) => onEditNote('title', e.target.value)}
        />
        <textarea
          id="content"
          placeholder="ノートの内容を記入"
          className="block border w-full h-[calc(50vh-130px)] p-1 resize-none rounded"
          onChange={(e) => onEditNote('content', e.target.value)}
          value={activeNote.content}
        ></textarea>
      </div>
      <div className="h-1/2 bg-pink-50 overflow-y-scroll border-t">
        <h1 className="pt-6 px-6 mb-6">{activeNote.title}</h1>
        <div className="px-6 ">{activeNote.content}</div>
      </div>
    </div>
  )
}

export default Main
