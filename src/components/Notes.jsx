import notesData from "../notes.json";

const Notes = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold mb-2">SAA-C03 Notes</h1>
      {/* table of contents */}
      <h2 className="text-2xl font-semibold mb-1">Table of Contents</h2>
      <ol className="list-decimal ml-12 mb-8 text-xl">
        {notesData.map(({chapter, index}) => (
          <li key={index + 1}>
            <a href={`#chapter-${index + 1}`}>{chapter}</a>
          </li>
        ))}
      </ol>
      {notesData.map(({ chapter, section }, index) => (
        <div key={chapter} id={`#chapter-${index + 1}`} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Chapter {index + 1}: {chapter}</h2>
          {section.map(({ header, notes }) => (
            <div key={header} className="mb-4 ml-4">
              <h3 className="text-xl font-semibold mb-2">Section: {header}</h3>
              <ul className="list-disc list-inside ml-4">
                {notes.map((note, noteIndex) => (
                  <div key={noteIndex}>
                    <li key={noteIndex} className="mb-2 text-lg font-semibold">
                      {note[0]}
                    </li>
                    <ul className="list-disc list-inside ml-4">
                      {note.slice(1).map((subnote, subindex) => (
                        <li key={subindex} className="mb-1">
                          {subnote}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Notes;
