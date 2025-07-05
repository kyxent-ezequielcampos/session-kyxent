import express, { json, Router } from "express"
import { Enviroments } from "./utils/Enviroment.service"
import { AnimalRepositoryService } from "./repositories/AnimalRepository"
import { ModelAnimal } from "./models/Model.animal"
import { AnimalControllerService } from "./controllers/Animal.controller.service"
import { AnimalRoutes } from "./routes/Animal.routes"
import cors from "cors"
import { connect } from "mongoose"

class Server {

    private server : typeof express.application
    private port : typeof Enviroments.PORT
    
    constructor(
        server : typeof express.application,
         port : typeof Enviroments.PORT
    )
    {
        this.server = server,
        this.port = port
    }


    async mongoService () {
        try {
          
            await connect(Enviroments.MONGO)
            console.log("mongo connect successfully");
            
            
        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }


    initServices () {

        const repository = new AnimalRepositoryService(ModelAnimal)

        const controller = new AnimalControllerService(repository)

        const routes = new AnimalRoutes(controller, Router())

        this.server.use(cors())
        this.server.use(json())

        this.server.use("/api", routes.initRoutes())

    }



    initServer () {

        try {

            this.mongoService()
            this.initServices()
            
            this.server.listen(this.port, () => {
                console.log(`server corriendo en la url http://localhost:${this.port}`);
                
            })

        } catch (error) {
            throw new Error(`${error}`);
            
        }
    }

}


const server = new Server(express(), Enviroments.PORT)

server.initServer()