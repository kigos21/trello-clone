import { FaSquarePollHorizontal } from "react-icons/fa6";

import { useState } from "react";
import DashboardButton from "./DashboardButton";
import Board from "./Board";

import { workspaceButtons, boards } from "../data";

export default function YourWorkspaces() {
  const [favorites, setFavorites] = useState([]);
  const [reactiveBoards, setReactiveBoards] = useState([...boards]);

  const handleClick = (index) => {
    const isFavorite = reactiveBoards[index].isFavorite;

    const newBoards = reactiveBoards.map((board, i) => {
      if (index === i) {
        return { ...board, isFavorite: !isFavorite };
      } else {
        return { ...board };
      }
    });

    setReactiveBoards(newBoards);

    const newFavorites = newBoards.filter((board) => board.isFavorite);
    setFavorites(newFavorites);
  };

  return (
    <div className="flex flex-col gap-6">
      <h1 className="mt-6 font-bold uppercase">Your Workspaces</h1>

      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <FaSquarePollHorizontal className="text-2xl text-green-500" />
          <span className="font-semibold">ICS26010 - SE Group 5</span>
        </div>

        <div className="flex items-center gap-2">
          {workspaceButtons.map((button) => (
            <DashboardButton
              key={button.title}
              icon={button.icon}
              title={button.title}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-4 gap-4">
        {reactiveBoards.map((board, i) => (
          <Board
            key={board.title}
            title={board.title}
            className={board.className}
            isFavorite={board.isFavorite}
            handleClick={() => handleClick(i)}
          />
        ))}
        <Board
          title="Create new board"
          className="font-sm flex items-center justify-center bg-[#282d33] text-sm font-normal hover:bg-slate-700"
        />
      </div>

      <h1 className="mt-6 font-bold uppercase">FAVORITES</h1>
      {/* conditional rendering */}
      {favorites.length === 0 && (
        <p className="italic">
          Click the star icon to start adding to your favorites.
        </p>
      )}

      <div className="grid grid-cols-4 gap-4">
        {favorites.map((board) => (
          <Board
            key={board.title}
            title={board.title}
            className={board.className}
          />
        ))}
      </div>

      <div className="mt-12">
        <DashboardButton title="View all closed boards" />
      </div>
    </div>
  );
}
