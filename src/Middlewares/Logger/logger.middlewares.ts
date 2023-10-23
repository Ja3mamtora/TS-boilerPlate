import winston from "winston";
import moment from "moment";
import fs from "fs";

const mylogger = winston.createLogger({
 level: "info",
      format: winston.format.json(),
      transports: [new winston.transports.Console()],
});
const logger = (req : any, res: any, next: any) => {
    mylogger.info({
      method: req.method,
      url: req.url,
      statusCode: res.statusCode,
      Time: Date.now(),
    });
    
  const currentDateTime = moment().format('ddd, D MMM YYYY HH:mm:ss [GMT]');
    let logMessage = req.method + " " + res.statusCode + " " + req.url + " " + currentDateTime;
    fs.writeFile(
      __dirname + "/serverLogs",
      logMessage + "\r\n",
      { flag: "a+" },
      (e) => {
        if (e) console.log(e);
      }
    );
    next();
  }
export default logger;