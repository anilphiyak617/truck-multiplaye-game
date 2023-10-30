import { createContext } from "react";

export interface ScoreModelInterface { 
    data: { [key: string ]: number; },
    setNewPosWithId:(id:string,value:number)=>void
}


export const scoreContext = createContext<ScoreModelInterface>({ data: {},setNewPosWithId(id, value) {
    
},})

