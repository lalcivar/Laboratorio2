import Logger from "bunyan";
import { config } from "dotenv";
import { createClient } from "redis";


export type RedisClient = ReturnType<typeof createClient>

export abstract class BaseCache {
    client: RedisClient;
    log: Logger;

    constructor(cacheName: string) {
        this.client = createClient ({ url: config.REDIS_HOST });
        this.log = this.logger.createLogger(cacheName);
        this.cacheError();


    }

    private cacheError(): void {
        this.client.on('error', (error: unknown) => {
            this.log.error(error);
        });
    }

}