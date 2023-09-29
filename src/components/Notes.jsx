import notesData from '../notes.json';

const Notes = () => {
  return (
    <div>
      {notesData.map(({ chapter, section }) => (
        <div key={chapter} className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Chapter: {chapter}</h2>
          {section.map(({ header, notes }) => (
            <div key={header} className="mb-4 ml-4">
              <h3 className="text-xl font-semibold mb-2">Section: {header}</h3>
              <ul className="list-disc list-inside ml-4">
                {notes.map((note, index) => (
                  <div key={index}>
                    <li key={index} className="mb-2 text-lg font-semibold">{note[0]}</li>
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