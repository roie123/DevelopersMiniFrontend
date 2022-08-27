import { Mistake } from "./mistake"

export interface Developer{
    id : number,
    name : string
    mistakes : Mistake[]
}