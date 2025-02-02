import clsx from "clsx";

export default function Status(props) {
  const messages = {
    incorrect: ["Farewell belowed programing language.", "Seriously!?"],
    correct: [
      "Good job!",
      "You got it right!",
      "One more step to save the world.",
    ],
    gameOver: ["Game Over"],
  };

  const statusMessage =
    messages[props.statusType][
      Math.floor(Math.random() * messages[props.statusType].length)
    ];

  const className = clsx(
    "flex flex-col justify-center items-center h-20 rounded-lg",
    props.lastAnswer.value &&
      (props.lastAnswer.isCorrect ? "bg-green-600" : "bg-red-600")
  );

  return (
    <section className="max-w-md w-full" aria-live="polite" role="status">
      <div className={className}>
        {props.lastAnswer.value && (
          <h1 className="text-base sm:text-xl text-center">{statusMessage}</h1>
        )}
      </div>
    </section>
  );
}
