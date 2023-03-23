import { useState } from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
  const navigate = useNavigate();
  const [notes, setNote] = useState([
    {
      id: 1,
      content: "lorem iprussum",
    },
    {
      id: 2,
      content: "lorem iprussum",
    },
    {
      id: 3,
      content: "lorem iprussum",
    },
    {
      id: 4,
      content: "lorem iprussum",
    },
    {
      id: 5,
      content: "lorem iprussum",
    },
    {
      id: 6,
      content: "lorem iprussum",
    },
  ]);
  return (
    <div className=" container m-auto">
      <h1 className=" text-t1">Notes</h1>
      <div className="flex flex-col gap-5 ">
        {notes.map((note) => {
          return (
            <div
              className="flex border hover:scale-[1.01] transition-all duration-300 border-gray-600 hover:border-gray-800 p-5 "
              onClick={(e) => navigate(`/notes/${note.id}`)}
            >
              <h2 className=" text-lg">{note.content}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
