import { getModelForClass, prop } from "@typegoose/typegoose";
import { Field, ID, ObjectType} from "type-graphql";

@ObjectType({ description: "The location model"})
export class Location {
    @Field(() => ID)
    _id!: number; 

    @Field()
    @prop({required: true})
    codigo_sap!: number; 
    
    @Field()
    @prop({ required: true})
    nombre_localizacion!: string;

    @Field()
    @prop({ required: true})
    estado!: string; 

    @Field(() => [String])
    @prop({ required: true})
    vista_tienda!: string[]; 

    @Field()
    @prop({ required: true})
    pais!: string; 

    @Field()
    @prop({ required: true})
    ciudad!: string; 


    @Field()
    @prop({ required: true})
    direccion!: string; 

    @Field()
    @prop({ required: false})
    posicion?: number; 

    @Field()
    @prop({ required: false})
    descripcion?: string; 

    @Field()
    @prop({ required: false})
    provincia?: string; 

    @Field()
    @prop({ required: false})
    telefono?: number; 

    @Field()
    @prop({ required: false })
    email?: string; 

    @Field()
    @prop({ required: false })
    website?: string; 

    @Field()
    @prop({ required: false })
    latitude?: number; 

    @Field()
    @prop({ required: false})
    longitude?: number; 

    @Field()
    @prop({ required: false})
    image?: string; 

    @Field()
    @prop({ required: true})
    dateCreated!: string; 

    @Field()
    @prop({ required: false})
    dateUpdated?: string; 
}

export const LocationModel = getModelForClass(Location);
