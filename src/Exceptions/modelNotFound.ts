export default class ModelNotFound extends Error {
    public status: number;
    public model: string;
  
    constructor(model: string) {
      super();
  
      this.model = model;
      this.message = `No record found for given details in ${this.model}.`;
      this.status = 404;
    }
  }
  