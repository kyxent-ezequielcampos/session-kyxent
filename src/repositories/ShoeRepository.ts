import { shoeInterface } from "../interfaces/shoes/ShoeInterface";
import { shoeRepositoryInterface } from "../interfaces/shoes/ShoeRepositoryInterface";
import { ModelShoe } from "../models/Model.shoe";




export class ShoeRepository implements shoeRepositoryInterface {

    private model : typeof ModelShoe

    constructor(
        model : typeof ModelShoe
    ){
        this.model = model
    }


    async getById(id: string): Promise<shoeInterface> {
        try {

            const shoeRequest = await this.model.findById(id)

            return shoeRequest!

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

    async getAll(): Promise<shoeInterface[]> {
        try {

            const shoeRequest = await this.model.find()

            return shoeRequest

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

    async create(data: Partial<shoeInterface>): Promise<shoeInterface> {
        try {

            const requestShoe = await this.model.create(data)

            return requestShoe

        } catch (error) {
            throw new Error(error as string);
            
        }
    }

    async updateById(id: string, data: Partial<shoeInterface>): Promise<shoeInterface> {
        try {

            const requestShoe = await this.model.findByIdAndUpdate(id, data)

            return requestShoe!

        } catch (error) {
            throw new Error(error as string);
            
        }
    }

    async deleteById(id: string): Promise<shoeInterface> {
        try {

            const requestShoe = await this.model.findByIdAndDelete(id)

            return requestShoe!
        } catch (error) {
            throw new Error(error as string);
            
        }
    }

}