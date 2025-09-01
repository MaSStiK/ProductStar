import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    niceToSee(): Promise<string>;
    sayHey(): Promise<string>;
    sayBye(): Promise<string>;
}
