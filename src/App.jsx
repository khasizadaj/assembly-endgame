import Header from "./components/Header";

export default function App() {
  // state values:
  //   guessed word
  //   letters to choose from
  //   last answer (with status, i.e. correct, incorrect)
  //   languages

  // derived values:
  //   statusMessage -> from last answer
  //   gameResult -> from languages (if no language is left, game is over)

  return (
    <main className="flex flex-col justify-start items-center gap-4 min-h-screen bg-slate-900 p-4 sm:p-12">
      <Header />
      {/* Section: Status Update */}
      {/* Section: Languages */}
      {/* Section: Guessed Word */}
      {/* Section: Letters to choose from */}
      {/* Section: New Game Button */}
    </main>
  );
}
