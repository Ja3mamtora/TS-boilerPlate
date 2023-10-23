export default class InternalServerException extends Error {
    public status: number;
  
    constructor() {
      super("Internal server error");
  
      this.status = 500;
    }
  }
  