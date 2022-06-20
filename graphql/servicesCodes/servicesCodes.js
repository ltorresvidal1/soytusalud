import {Schema } from 'mongoose';
import mongoose from "mongoose";

const ServiceCodeSchema = new Schema({
    DESCRIPCION_SERVICIO:{
        type: String,
    },
    CODIGO:{
        type: String,
    },
    COBERTURA:{
        type: String,
    },
    TIPO_DE_SERVICIO:{
        type: String,
    }
},)

export default mongoose.models.ServiceCodes || mongoose.model("ServiceCodes", ServiceCodeSchema);