import { RESTDataSource } from "apollo-datasource-rest";
//const { RESTDataSource } = require("apollo-datasource-rest");

export class Camunda extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:9080/engine-rest/";
  }

  async getDeployments() {
    const url = "deployment";
    try {
      const data = await this.get(
        `${this.baseURL}${url}`,
        // `https://api.iextrading.com/1.0/stock/${symbol}/quote`,
        null,
        {
          cacheOptions: { ttl: 60 }
        }
      );
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
