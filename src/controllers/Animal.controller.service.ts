import { Request ,Response } from "express";
import { AnimalRepositoryService } from "../repositories/AnimalRepository";



export class AnimalControllerService  {

    private repository : AnimalRepositoryService

    constructor(
        repository : AnimalRepositoryService
    ){
        this.repository = repository
    }


    async create (req:Request , res:Response) {

        try {
            
            const animal = await this.repository.create(req.body)

            res.status(201).json({
                msj : "Animal creado exitosamente",
                data : animal
            })

        } catch (error) {

            res.status(500).json({
                msj : "server error",
                error : `${error}`

            })
            throw new Error(`${error}`);
            
        }
    }

    async getAll (req:Request, res : Response){

        try {

            const animal = await this.repository.getAll()



            res.status(200).json({
                msj : "animales obtenidos exitosamente",
                data : animal
            })

            
        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : `${error}`

            })
            throw new Error(`${error}`);
        }
    }

    async getById (req:Request, res : Response) {

        const {id} = req.params

        try {
            
            const animal = await this.repository.getById(id as string)

            res.status(200).json({
                msj : "animal obtenido por su id exitosamente",
                data : animal
            })

        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : `${error}`

            })
            throw new Error(`${error}`);
        }

    }

    async updateByid (req:Request, res : Response) {
        const {id} = req.params

        try {
            
            const animalUpdate = await this.repository.update(id, req.body)

            res.status(200).json({
                msj : "animal actualizado exitosamente",
                data : animalUpdate
            })


        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : `${error}`

            })
            throw new Error(`${error}`);
        }
    }

    async deleteAnimal (req:Request, res:Response) {

        const {id} = req.params
        try {
            

            const deletedAnimal = await this.repository.delete(id)

            res.status(200).json({
                msj : "animal borrado exitosamente",
                data : deletedAnimal
            })


        } catch (error) {
            
            res.status(500).json({
                msj : "server error",
                error : `${error}`

            })

            throw new Error(`${error}`);
            
        }
    }
 
}

