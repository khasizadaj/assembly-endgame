import Header from "./components/Header";
import Status from "./components/Status";

export default function App() {
  const statusType = "incorrect"; // TODO derive from last answer

  // state values:
  //   guessed word
  //   letters to choose from
  //   last answer (with status, i.e. correct, incorrect)
  //   languages
  // derived values:
  //   gameResult -> from languages (if no language is left, game is over)
  return (
    <main className="flex flex-col justify-start items-center gap-12 min-h-screen bg-slate-900 p-4 sm:p-12">
      <Header />
      <Status statusType={statusType} />
      {/* Section: Languages */}
      {/* Section: Guessed Word */}
      {/* Section: Letters to choose from */}
      {/* Section: New Game Button */}
    </main>
  );
}
