import { Resolver, Subscription, Root, Arg } from "type-graphql";
import { Location, LocationModel } from "../entidad/localizacion/Localizacion";
import { PubSub } from "graphql-subscriptions";

export const pubSubLocation = new PubSub();

@Resolver()
export class Localizacion {
  @Subscription(() => [Location], {
    topics: "LOCATIONS",
  })
  async getSubscriptionLocation(
    @Arg("codigo_sap", () => Number, { nullable: true }) codigo_sap?: number,
    @Arg("pais", () => String, { nullable: true }) pais?: string,
    @Arg("ciudad", () => String, { nullable: true }) ciudad?: string
  ) {
    try {
      const filter: { [key: string]: any } = {};

      if(codigo_sap !== undefined && codigo_sap !== null){
        filter["codigo_sap"] = codigo_sap; 
      }

      if (ciudad !== undefined && ciudad !== null) {
        filter["ciudad"] = ciudad;
      }

      if (pais !== undefined && pais !== null) {
        filter["pais"] = pais;
      }

      if (Object.keys(filter).length === 0) {
        return LocationModel.find();
      }

      const allLocations = await LocationModel.find(filter);

      if (!allLocations) {
        throw new Error("No se encontro el dato location");
      }
      return allLocations;
    } catch (error) {
      console.log("Location", error);
    }
  }

  @Subscription(() => [Location], {
    topics: "LOCATION_COUNTRY",
  })
  async getSubscriptionCountry(
    @Arg("pais", () => String, { nullable: true }) pais?: string,
  ) {
    try {
      const filter: { [key: string]: any } = {};

      if (pais !== undefined && pais !== null) {
        filter["pais"] = pais;
      }

      if (Object.keys(filter).length === 0) {
        return LocationModel.find();
      }

      const allLocations = await LocationModel.find(filter);

      if (!allLocations) {
        throw new Error("No se encontro el dato location");
      }
      return allLocations;
    } catch (error) {
      console.log("Location", error);
    }
  }
}
