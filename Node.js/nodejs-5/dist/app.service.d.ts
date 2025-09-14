import { InfoUserDto, ResultInfoUserDto } from "./app.dto";
export declare class AppService {
    getUserInfo(data: InfoUserDto): Promise<ResultInfoUserDto>;
}
