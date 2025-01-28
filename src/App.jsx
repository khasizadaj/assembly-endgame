import { useState } from "react";

import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import GuessedWord from "./components/GuessedWord";

const WORDS = [
  "Hello",
  "World",
  "Assembly",
  "Endgame",
  "Programming",
  "Language",
  "Game",
  "Guess",
  "The",
  "Word",
  "In",
  "Under",
  "8",
  "Attempts",
  "To",
  "Keep",
  "The",
  "Programming",
  "World",
];

export default function App() {
  const statusType = "incorrect"; // TODO derive from last answer
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "HTML",
      status: "inactive",
      backgroundColor: "#E2680F",
      color: "white",
    },
    {
      id: 2,
      name: "CSS",
      status: "inactive",
      backgroundColor: "#328AF1",
      color: "white",
    },
    {
      id: 3,
      name: "JavaScript",
      status: "inactive",
      backgroundColor: "#F4EB13",
      color: "inherit",
    },
    {
      id: 4,
      name: "TypeScript",
      status: "inactive",
      backgroundColor: "#298EC6",
      color: "white",
    },
    {
      id: 5,
      name: "React",
      isActive: true,
      backgroundColor: "#2ED3E9",
      color: "inherit",
    },
    {
      id: 6,
      name: "C",
      isActive: true,
      backgroundColor: "#D02B2B",
      color: "white",
    },
    {
      id: 7,
      name: "C++",
      isActive: true,
      backgroundColor: "#F5C400",
      color: "inherit",
    },
    {
      id: 8,
      name: "Rust",
      isActive: true,
      backgroundColor: "#599137",
      color: "white",
    },
    {
      id: 9,
      name: "Assembly",
      isActive: true,
      backgroundColor: "#2D519F",
      color: "white",
    },
  ]);
  const [guessedWord, setGuessedWord] = useState(getRandomWord());

  function getRandomWord() {
    const words = WORDS;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord.split("").map((letter) => {
      return {
        value: letter.toUpperCase(),
        // isFound: false,
        isFound: Math.random() < 0.5,
      };
    });
  }

  // state values:
  //   letters to choose from
  //   last answer (with status, i.e. correct, incorrect)

  // derived values:
  //   gameResult -> from languages (if no language is left, game is over)
  return (
    <main className="flex flex-col justify-start items-center gap-12 min-h-screen bg-slate-900 text-slate-950 p-4 sm:p-12">
      <Header />
      <Status statusType={statusType} />
      <Languages languages={languages} />
      {/* Section: Guessed Word */}
      <GuessedWord word={guessedWord} />
      {/* Section: Letters to choose from */}
      {/* Section: New Game Button */}
    </main>
  );
}
