import React from 'react';
import Header from './header';
import Footer from './footer';
import Note from './note';
import notes from "../note";

function App() {
    return <div>
        <Header />
        {notes.map(noteList => <Note 
            key = {noteList.id}
            title = {noteList.title}
            content = {noteList.content}
            />
        )}
        <Footer />
    </div>
}

export default App;