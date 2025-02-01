import clsx from "clsx";

function LetterBox(props) {
  const classes = clsx(
    "py-1 px-2 rounded-lg font-semibold w-8 h-8 text-center",
    props.isFound ? "bg-green-500" : "text-transparent bg-slate-600"
  );
  return <span className={classes}>{props.value}</span>;
}

export default function GuessedWord(props) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {props.word.map((letter, index) => (
        <LetterBox key={index} value={letter.value} isFound={letter.isFound} />
      ))}
    </div>
  );
}
