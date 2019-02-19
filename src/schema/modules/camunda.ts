import { Camunda } from "../../rest/camunda";

export const typeDef = `
  type Process_Type {
    id: String	
    name: String	
    source: String	
    tenantId: String	
    deploymentTime: String
  }

# Root Query
type Query {
    cam_processes: String
   
}
`;

export const resolver = {
  Query: {
    cam_processes() {
      const camunda = new Camunda();
      return camunda.getDeployments();
      // return " Camunda it Works!";
    }
  }
};
