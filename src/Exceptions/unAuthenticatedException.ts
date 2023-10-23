export default class UnAuthenticatedException extends Error {
    public status: number;
  
    constructor(message: string) {
      super(message || "You are not authenticated");
  
      this.status = 403;
    }
  }
  