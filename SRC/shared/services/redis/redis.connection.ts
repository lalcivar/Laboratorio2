import Logger from "bunyan";
import { logger } from "@configs/configLogs";
import { BaseCache } from "./base.cache";

const log: Logger.createLogger('redisConnection');

class RedisConnection extends BaseCache {

    constructor() {
        super('RedisConnection');
    }

    async connect(): Promise<void> {
        try{
            await this.client.connect();
            log.info(`redis connection : ${await  this.client.ping()}`)
        }
        catch(error){
            log.error(error);
            
        }     
    }
}

export const redisConnection: RedisConnection = new RedisConnection();