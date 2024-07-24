import { createContext,  useState } from "react";

 export const StoreContext = createContext();
 export  const ContextProvider = ({children})=> {
        const [width, setWidth] = useState(0);
        const [notesAvail, setNotesAval] = useState(false);
        const [notesTitle, setNoteTitle] = useState([]);
        
        
        return (
            <StoreContext.Provider value={{width, setWidth, notesAvail, setNotesAval,notesTitle, setNoteTitle}}>{children}</StoreContext.Provider>
        )
 }
