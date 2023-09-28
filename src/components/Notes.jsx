import notesData from '../notes.json';

const Notes = () => {
  return (
    <div>
      {notesData.map(({ chapter, section }) => (
        <div key={chapter} className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">{chapter}</h3>
          {section.map(({ header, notes }) => (
            <div key={header} className="ml-4 mb-4">
              <h4 className="text-xl font-semibold mb-2">{header}</h4>
              <ul className="list-disc list-inside">
                {notes.map((note, index) => (
                  <li key={index} className="mb-1">
                    {note}
                  </li>
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