export default function Languages(props) {
  function getBackgroundColor(languageObj) {
    if (languageObj.isActive) {
      return languageObj.backgroundColor;
    }
    return "#222";
  }

  return (
    <section className="max-w-md w-full">
      <div className="flex justify-center gap-2 flex-wrap">
        {props.languages.map((languageObj) => (
          <span
            key={languageObj.id}
            className="bg-slate-600 py-1 px-2 rounded-lg font-semibold"
            style={{
              backgroundColor: getBackgroundColor(languageObj),
              color: languageObj.color,
            }}
          >
            {!languageObj.isActive ? "☠️" : null} {languageObj.name}
          </span>
        ))}
      </div>
    </section>
  );
}
