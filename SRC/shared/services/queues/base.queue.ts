
import Queue  from 'bull';
import Logger from 'bunyan';
import { ExpressAdapter, createBullBoard, BullAdapter } from '@bull-board/express';
import { config } from '@configs/configEnvs';
import { logger } from '@configs/configLogs';
import { IAuthJob } from '@auth/interfaces/authJob.inteface';
import { IUserJob } from '@user/interfaces/userJob.interface';
import { IEmailJob } from '@user/interfaces/emailJob.interface';

type IBaseJobData = IAuthJob | IEmailJob | IUserJob;
let bullAdapter: BullAdapter[] = [];
export let serverAdapter: ExpressAdapter;

export abstract class  BaseQueue {
    
    queue: Queue.Queue;
    log: Logger;
    
    constructor(queueName: string) {
        this.queue = new Queue(queueName, `${config.REDIS_HOST}`);
        bullAdapter.push(new BullAdapter(this.queue));
        bullAdapter = [ ...new Set(bullAdapter)];
        serverAdapter = new ExpressAdapter();
        serverAdapter.setBasePath('/queues');

        createBullBoard({
            queues: bullAdapter,
            serverAdapter 
        });

        this.log = logger.createLogger(`${queueName}Queue`);

        /*this.queue.on('completed', (job: Job) => {
            //

        });*/

        this.queue.on('global:completed', (jobId: string) => {
           this.log.info(`Job ${jobId} completed`)

        });

        this.queue.on('stalled', (jobId: string) => {
            this.log.info(`Job ${jobId} completed`)
 
         });

         this.queue.on('error', (jobId: string) => {
            this.log.info(`Job ${jobId} has an error`)
 
         });



    }

    protected addJob(name: string, data: IBaseJobData): void {
        this.queue.add(name, data, { attempts: 3, backoof: {type: 'fixed, delay: 5000'} });

    }

    protected processJob(name: string, concurrency: number, callback: Queue.ProcessCallbackFunction<void>): void {

        this.queue.process(name, concurrency, callback);
    }
}