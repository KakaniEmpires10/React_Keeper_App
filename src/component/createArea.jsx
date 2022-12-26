import React, { useState } from "react";

function CreateArea(props) {
    const [addList, setAddList] = useState({
        title: "",
        content: ""
    });

    function handleChange(event) {
        const {name, value} = event.target;
        setAddList((prev) => {
            return{
                ...prev,
                [name] : value
            }
        });
    }

    function handleClick(event) {
        props.onChange(addList);
        event.preventDefault();
        setAddList({
            title: "",
            content: ""
        });
    }

return (
    <div>
    <form onSubmit={handleClick}>
        <input onChange={handleChange} name="title" placeholder="Title" value={addList.title}/>
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={addList.content}/>
        <button type="submit">Add</button>
    </form>
    </div>
);
}

export default CreateArea;
