import { Router, Response, Request } from "express";
import { ShoeControllerService } from "../controllers/Shoe.controller.service";



export class ShoesRoutes {

    private controller : ShoeControllerService
    private router : Router

    constructor(
        controller : ShoeControllerService,
        router : Router
    ){
        this.controller = controller,
        this.router = router
    }

    initRouteShoes () {
        try {
            
            this.router.get("/shoes", (req:Request, res:Response) => this.controller.getAll(req, res))
            this.router.get("/shoes/:id", (req:Request, res:Response) => this.controller.getById(req, res))
            this.router.post("/shoes", (req:Request, res:Response) => this.controller.create(req, res))

            this.router.put("/shoes/:id", (req:Request, res:Response) => this.controller.updateById(req, res))
            this.router.delete("/shoes/:id", (req:Request, res:Response) => this.controller.deleteByid(req, res))

            return this.router


        } catch (error) {
            throw new Error(error as string);
            
        }
    }

}