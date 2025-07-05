import { Router, Request, Response } from "express";
import { AnimalControllerService } from "../controllers/Animal.controller.service";


export class AnimalRoutes  {


    private controlller : AnimalControllerService
    private router : Router

    constructor(
        controlller : AnimalControllerService,
        router : Router,
    ){
        this.controlller = controlller,
        this.router = router
    }

    initRoutes () {

        this.router.post("/animal", (req:Request, res:Response) => this.controlller.create(req, res))
        this.router.get("/animal", (req:Request, res:Response) => this.controlller.getAll(req, res))
        this.router.get("/animal/:id", (req:Request, res:Response) => this.controlller.getById(req, res))
        this.router.put("/animal/:id", (req:Request, res:Response) => this.controlller.updateByid(req, res))
        this.router.delete("/animal/:id", (req:Request, res:Response) => this.controlller.deleteAnimal(req, res))

        return this.router

    }

}