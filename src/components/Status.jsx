export default function Status(props) {
  const messages = {
    incorrect: ["Farewell belowed programing language.", "Seriously!?"],
    correct: ["Correct"],
    gameOver: "Game Over",
  };

  const statusMessage =
    messages[props.statusType][
      Math.floor(Math.random() * messages[props.statusType].length)
    ];

  return (
    <section className="max-w-md w-full">
      <div className="flex flex-col justify-center items-center h-20 bg-green-600 rounded-lg">
        <h1 className="text-base sm:text-xl text-center">{statusMessage}</h1>
      </div>
    </section>
  );
}
