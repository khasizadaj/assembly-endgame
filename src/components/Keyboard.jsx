import clsx from "clsx";

function LetterBox(props) {
  const stateClasses = {
    notSelected: "bg-slate-600",
    selectedCorrect: "bg-green-600",
    selectedIncorrect: "bg-red-600",
  };

  const classes = clsx(
    "rounded-lg font-semibold w-10 h-10 text-center",
    stateClasses[props.state]
  );

  return (
    <button onClick={() => props.onClick(props.value)} className={classes} disabled={props.disabled}>
      {props.value}
    </button>
  );
}

export default function Keyboard(props) {
  return (
    <section className="max-w-sm w-full space-y-4">
      <div className="flex gap-2 justify-center flex-wrap">
        {props.keyboardLetters.map((letter, index) => {
          return (
            <LetterBox
              key={index}
              onClick={props.onClick}
              value={letter.value}
              state={letter.state}
              aria-disabled={letter.state === "notSelected" ? false : true}
              aria-label={`Letter ${letter.value}`}
              disabled={props.statusType === "gameOver" ? true : false}
            />
          );
        })}
      </div>
    </section>
  );
}
