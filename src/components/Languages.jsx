export default function Languages(props) {
  return (
    <section className="max-w-md w-full">
      <div className="flex justify-center gap-2 flex-wrap">
        {props.languages.map((languageObj) => (
          <span
            key={languageObj.id}
            className="bg-slate-600 py-1 px-2 rounded-lg font-semibold"
            style={{ backgroundColor: languageObj.backgroundColor, color: languageObj.color }}
          >
            {languageObj.name}
          </span>
        ))}
      </div>
    </section>
  );
}
