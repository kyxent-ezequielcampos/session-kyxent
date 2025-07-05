import { AnimalI } from "../interfaces/AnimalI";
import { AnimalRepositoryI } from "../interfaces/AnimalRepositoryI";
import { ModelAnimal } from "../models/Model.animal";



export class AnimalRepositoryService implements AnimalRepositoryI {

    private model : typeof ModelAnimal

    constructor(
        model : typeof ModelAnimal
    ){
        this.model = model
    }


    async getAll(): Promise<Partial<AnimalI[]>> {
        try {


            const findAll = await this.model.find()

            return findAll


        } catch (error) {
            throw new Error("Method not implemented.");
            
        }
    }
    async getById(id: string): Promise<Partial<AnimalI>> {
        try {

            const getAnimalById = await this.model.findById(id)

            return getAnimalById! 

        } catch (error) {
            throw new Error("Method not implemented.");
            
        }
    }
    async create(data: AnimalI): Promise<Partial<AnimalI >> {
        try {
            
            const createAnimal = await this.model.create(data)

            return createAnimal!

        } catch (error) {
            throw new Error("Method not implemented.");
        }
    }
    async update(id: string, data: AnimalI): Promise<Partial<AnimalI>> {
        try {


            const updateAnimal = await this.model.findByIdAndUpdate(id, data)

            return updateAnimal!


        } catch (error) {
            throw new Error("Method not implemented.");
            
        }
    }
    async delete(id: string): Promise<Partial<AnimalI>> {
        try {

            const deleteAnimal = await this.model.findByIdAndDelete(id)

            return deleteAnimal!

        } catch (error) {
            throw new Error("Method not implemented.");
            
        }
    }

}