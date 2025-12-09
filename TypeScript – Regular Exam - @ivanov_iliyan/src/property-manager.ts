import { ApplyCommission } from './decorators';
import { Client } from './models';
import { BasePropertyItem, findItemById } from './property-types';

export class PropertyManager {
   private propertyItems: BasePropertyItem[] = [];
   private clients: Map<number, Client[]> = new Map();

   addProperty(item: BasePropertyItem): string {
      this.propertyItems.push(item);
      this.clients.set(item.id, []);

      return `Property "${item.address}" (ID: ${item.id}) has been added.`;
   }

   //    @ApplyCommission
   registerClient(propertyId: number, client: Client) {
      const propertyList = this.clients.get(propertyId);

      if (propertyList) {
         propertyList.push(client);
         return `Client ${client.name} registered for property ID ${propertyId} successfully.`;
      } else {
         return `ERROR: Property with ID ${propertyId} not found.`;
      }
   }

   listAllProperties(): string[] {
      console.log('--- List of All Properties ---');
      return this.propertyItems.map((item) => item.getDetails());
   }

   findProperty(propertyId: number): BasePropertyItem | undefined {
      return findItemById(this.propertyItems, propertyId);
   }
}
