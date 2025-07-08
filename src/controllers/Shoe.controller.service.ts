import { ShoeRepository } from "../repositories/ShoeRepository";
import {Request, Response} from "express"

export class ShoeControllerService {

    private repository : ShoeRepository

    constructor(

        repository : ShoeRepository

    ){
        this.repository = repository
    }


    async create (req: Request, res:Response) {


        try {
            
            const makeShoe = await this.repository.create(req.body)

            res.status(201).json({
                msj : "zapato creado exitosamente",
                data : makeShoe
            })

        } catch (error) {
            throw new Error(error as string);
            
        }

    }

    async getAll ( req:Request, res : Response) {
        try {
            
            const getShoes = await this.repository.getAll()

            res.status(200).json({
                msj : "zapatos obtenidos exitosamente",
                data : getShoes
            })

        } catch (error) {
            throw new Error(error as string);
            
        }
    }

    async getById (req:Request , res: Response) {

        const {id} = req.params
        try {

            const getShoe = await this.repository.getById(id)
            res.status(200).json({
                msj : "zapato obtenido exitosamente",
                data : getShoe
            })   
        } catch (error) {
            res.status(500).json({
                msj : "error de servidor",
                error : error as string
            })
        }
    }

    async updateById (req:Request, res : Response) {
        const {id} = req.params
        try {
            const shoeUpdate = await this.repository.updateById(id, req.body)
            res.status(200).json({
                msj : "zapato actualizado exitosamente",
                data : shoeUpdate
            })
        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : error as string
            })
        }
    }


    async deleteByid (req:Request, res:Response ) {
        const {id} = req.params
        try {
            const deleteShoe = await this.repository.deleteById(id)

            res.status(200).json({
                msj : "zapato eliminado exitosamente",
                data : deleteShoe
            })
            
        } catch (error) {
            res.status(500).json({
                msj : "server error",
                error : error as string
            })
        }
    }
 
}