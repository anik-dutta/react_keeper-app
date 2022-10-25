import React from "react";
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';

function CreateArea(props) {
    const [isExpanded, setExpanded] = React.useState(false);
    const [note, setNote] = React.useState({
        title: '',
        content: ''
    });

    function expand() {
        setExpanded(true);
    }
    function handleChange(event) {
        const { name, value } = event.target;
        setNote(prevValue => {
            return ({
                ...prevValue,
                [name]: value
            });
        });
    }
    function handleClick(event) {
        props.onAdd(note);
        setNote({
            title: '',
            content: ''
        });
        event.preventDefault();
    }

    return (
        <div>
            <form className="create-note">
                {isExpanded && <input name="title" placeholder="Title" onChange={handleChange} value={note.title} maxlength="64" />}

                <textarea name="content" placeholder="Take a note..." onChange={handleChange} value={note.content} onClick={expand} rows={isExpanded ? "3" : "1"} />

                <Zoom in={isExpanded}>
                    <button onClick={handleClick} ><AddIcon /></button>
                </Zoom>
            </form>
        </div>
    );
}
export default CreateArea;