import { useEffect, useState } from "react";

import Header from "./components/Header";
import Status from "./components/Status";
import Languages from "./components/Languages";
import GuessedWord from "./components/GuessedWord";
import Keyboard from "./components/Keyboard";

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
  "Attempts",
  "To",
  "Keep",
  "The",
  "Programming",
  "World",
];

const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((letter) => {
  return {
    value: letter,
    state: "notSelected",
  };
});

export default function App() {
  const statusType = "incorrect"; // TODO derive from last answer
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "HTML",
      isActive: true,
      backgroundColor: "#E2680F",
      color: "white",
    },
    {
      id: 2,
      name: "CSS",
      isActive: true,
      backgroundColor: "#328AF1",
      color: "white",
    },
    {
      id: 3,
      name: "JavaScript",
      isActive: true,
      backgroundColor: "#F4EB13",
      color: "inherit",
    },
    {
      id: 4,
      name: "TypeScript",
      isActive: true,
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
  const [keyboardLetters, setkeyboardLetters] = useState(LETTERS);
  const [guessedWord, setGuessedWord] = useState(getRandomWord());
  const [lastAnswer, setLastAnswer] = useState(null);

  function getRandomWord() {
    const words = WORDS;
    const randomWord = words[Math.floor(Math.random() * words.length)];
    return randomWord.split("").map((letter) => {
      return {
        value: letter.toUpperCase(),
        isFound: false,
      };
    });
  }

  const gameIsOver = languages.filter((lang) => lang.isActive).length === 1;

  function onClick(letter) {
    const isCorrect = guessedWord.some(
      (letterObj) => letterObj.value === letter
    );
    setLastAnswer({
      isCorrect: isCorrect,
      value: letter,
    });
  }

  useEffect(() => {
    if (lastAnswer === null) return;

    setGuessedWord((prevWord) => {
      const newWord = prevWord.map((letterObj) => {
        if (letterObj.value === lastAnswer.letter) {
          letterObj.isFound = true;
        }
        return letterObj;
      });
      return newWord;
    });
  }, [lastAnswer]);

  useEffect(() => {
    if (lastAnswer === null) return;

    setkeyboardLetters((prevKeyboardLetters) => {
      return prevKeyboardLetters.map((letterObj) => {
        if (letterObj.value === lastAnswer.value) {
          return {
            ...letterObj,
            state: lastAnswer.isCorrect
              ? "selectedCorrect"
              : "selectedIncorrect",
          };
        }
        return letterObj;
      });
    });
  }, [lastAnswer]);

  useEffect(() => {
    if (lastAnswer === null) return;

    if (!lastAnswer.isCorrect) {
      console.log("LALA - Update Languages");
      setLanguages((prevLanguages) => {
        const index = prevLanguages.findIndex((lang) => lang.isActive);
        if (index === -1) return prevLanguages; // No active language found

        // Create a shallow copy and update only the first match
        const updatedLanguages = [...prevLanguages];
        updatedLanguages[index] = {
          ...updatedLanguages[index],
          isActive: false,
        };

        return updatedLanguages;
      });
    }
  }, [lastAnswer]);

  return (
    <main className="flex flex-col justify-start items-center gap-12 min-h-screen bg-slate-900 text-slate-950 p-4 sm:p-12">
      <Header />
      <Status statusType={statusType} />
      <Languages languages={languages} />
      <GuessedWord word={guessedWord} />
      <Keyboard onClick={onClick} keyboardLetters={keyboardLetters} />
      {gameIsOver ? (
        <button className="bg-green-600 py-2 px-4 rounded-lg text-white">
          New Game
        </button>
      ) : null}
    </main>
  );
}
