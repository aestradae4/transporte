import mongoose from "mongoose";
import * as env from "../../../config/constante"; 
import { LocationModel } from "../../../entidad/localizacion/Localizacion"; 

export async function db_localizacion() {
    try {
        const config = ({
            uri: `mongodb+srv://${env.DB_CHECKOUT_USER}:${env.DB_CHECKOUT_PASS}@${env.DB_CHECKOUT_HOST}/${env.DB_CHECKOUT_DB}?retryWrites=true&w=majority`,
        }); 

        const location_schema = LocationModel.schema; 
        const connection = await mongoose.connect(config.uri); 
        const schemas = new mongoose.Schema({
            location: location_schema
        }); 
        const model_location = connection.model("location", schemas); 
        console.log("Conexion to location")
    } catch (error) {
        console.log(error);
        console.log("Error to start mongoDB connection");
    }
}
