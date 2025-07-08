import { shoeInterface } from "./ShoeInterface";


export interface shoeRepositoryInterface {

    getById (id:string): Promise<shoeInterface>,

    getAll () : Promise<shoeInterface[]> 

    create (data : Partial<shoeInterface>) : Promise<shoeInterface>

    updateById (id: string, data : Partial<shoeInterface>) : Promise<shoeInterface>

    deleteById (id:string) : Promise<shoeInterface>



}