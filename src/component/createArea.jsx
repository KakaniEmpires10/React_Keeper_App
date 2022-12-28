import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [addList, setAddList] = useState({
        title: "",
        content: ""
    });

    const [checked, setChecked] = useState(false);

    function checkedValue() {
        setChecked(true);
    }

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
    <form className="create-note">
        <input onChange={handleChange} type={checked? "text" : "hidden"} name="title" placeholder="Title" value={addList.title}/>
        <textarea onClick={checkedValue} onChange={handleChange} name="content" placeholder="Take a note..." rows={checked? 3 : 1} value={addList.content}/>
        <Zoom in={checked}>
            <Fab onClick={handleClick}>
                <AddIcon />
            </Fab>
        </Zoom>
    </form>
    </div>
);
}

export default CreateArea;
