import { AnimalI } from "./AnimalI";



export interface AnimalRepositoryI {

    getAll () : Promise<Partial<AnimalI[]>>,
    getById (id:string) : Promise<Partial<AnimalI>>
    create (data: AnimalI) : Promise<Partial<AnimalI>>
    update (id : string , data: AnimalI) : Promise<Partial<AnimalI>>
    delete (id:string) : Promise<Partial<AnimalI>>

}