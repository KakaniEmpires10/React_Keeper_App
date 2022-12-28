import React, { useState } from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import CreateArea from './createArea';

function App() {
    const [note, setNote] = useState([]);

    function addNote(addList) {
        setNote((prevNote) => {
            return [
                ...prevNote,
                addList
            ]
        });
    };

    function delNote(id) {
        setNote((prev) => {
            return prev.filter((item, index) => {
                return index !== id;
            })
        })
    }

    return <div>
        <Header />
        <CreateArea 
            onChange = {addNote}
        />
        {note.map((noteItem, index) => (
        <Note 
            key={index} 
            id={index}
            title={noteItem.title} 
            content={noteItem.content}
            onCheck={delNote}/>
        ))}
        <Footer />
    </div>
}

export default App;