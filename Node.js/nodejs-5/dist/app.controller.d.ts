import { AppService } from './app.service';
import { InfoUserDto, ResultInfoUserDto } from "./app.dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUser(data: InfoUserDto): Promise<ResultInfoUserDto>;
}
