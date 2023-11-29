import mongoose from 'mongoose';
import Logger from 'bunyan';
import { config } from '@configs/configEnvs'
import { logger } from '@configs/configLogs';
import { redisConnection } from '@services/redis/redis.connection';

const log: Logger = logger.createLogger('database');

export default () => {
    const connect = () => {
       mongoose
       .connect(`${config.DATABASE_URL}`)
       .then(() => {
        log.info('successfully connect to database.');
        redisConnection.connect();
       })

       .catch(error => {
        log.error('Error connecting to database', error);
        return process.exit(1);
       });
    };

    connect();
    mongoose.connection.on('disconnected', connect);
};