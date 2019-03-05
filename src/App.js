import React, { Component } from 'react';
import Note from '../src/components/note';

export default class App extends Component {
    state = {
        noteText: '',
        notes: [],
    }

    updateNoteText( noteText ) {
        this.setState({ noteText : noteText.target.value })
        console.log( this.state.noteText )
    }

    addNote() {
        if ( this.state.noteText === '' ) 
        { return false }
        let notesArr = this.state.notes;
        notesArr.push( this.state.noteText );
        this.setState({ noteText : '' })
        this.textInput.focus();
    }

    deleteNote( index ) {
        let notesArr = this.state.notes;
        notesArr.splice( index, 1 );
        this.setState({ notes : notesArr })
    }

        render() {

            let notes = this.state.notes.map (( val,key ) => {
                return <Note 
                        key = {key} 
                        text = {val}
                        deleteMethod = {() => this.deleteNote( key )}/>
            })
            return (
                <div className = "container">
                
                    <div className = "header"><h1>React Todo Test</h1></div>
                    
                    {notes}
                    
                    <div className = "btn"
                         onClick = { this.addNote.bind( this ) }><h2>+</h2></div>

                    <input type = "text"
                        ref = {(( input ) => { this.textInput = input })}
                        className = "textInput"
                        value = { this.state.noteText }
                        onChange = { noteText => this.updateNoteText(noteText) }
                    />
                </div>
            )
        }
    }