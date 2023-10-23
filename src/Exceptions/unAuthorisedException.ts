export default class UnAuthorisedException extends Error {
    public status: number;
  
    constructor(message: string) {
      super(message || "You are not authorized");
  
      this.status = 401;
    }
  }
  