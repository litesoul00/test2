import React, { Component } from 'react';

export default class App extends Component {
    state = {
        noteText: '',
        note: [],
    }

    updateNoteText(noteText) {
        this.setState({noteText: noteText.target.value})
    }
    
    addNote = (event) => {
        event.preventDefault()
        if (this.state.noteText === '')
            {return false}
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText:''});
        this.textInput.focus();
        console.log('add')
    }

    render() {
        return (
            <form onSubmit = {this.addNote}>
                <input 
                    type = "text"
                    placeholder = "add task"
                    onChange = {noteText => this.updateNoteText(noteText)}
                />
                <input 
                    type = "submit" 
                    value = "Add to list"
                />
            </form>
        );
    }
}