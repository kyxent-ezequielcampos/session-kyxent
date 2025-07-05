import envs from "env-var"
import "dotenv/config"

export const Enviroments = {

    PORT : envs.get("PORT").required().asPortNumber(),
    MONGO : envs.get("MONGODB_URI").required().asUrlString()
}