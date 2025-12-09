export enum PropertyType {
   'Apartment' = 'Apartment',
   'House' = 'House',
   'LandPlot' = 'LandPlot',
}

export interface BaseProperty {
   id: number;
   address: string;
   areaSqM: number; //(Area in square meters)
   type: PropertyType;
}

export interface Client {
   name: string;
   phone: string;
}

export interface IdConstraint {
   id: number;
}
