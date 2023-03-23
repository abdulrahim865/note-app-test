import { useState } from "react";
const NoteDetail = () => {
  const [note, setNote] = useState({
    id: 2,
    content: "lorem iprussum",
  });
  const createNote = () => {};
  return (
    <div className=" container m-auto">
      <h1 className=" text-t1">Notes</h1>
      <div className="flex flex-col gap-5 ">
        <form onSubmit={createNote}>
          <textarea
            className=" border border-gray-500 p-6"
            name="note"
            id="note"
            cols="30"
            rows="10"
            value={note.content}
            onChange={(e) => setNote({ ...note, content: e.target.value })}
          ></textarea>
          <div className="flex justify-end">
            <button
              type="submit"
              className=" border p-3 border-gray-700 grow-0 px-8"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NoteDetail;
