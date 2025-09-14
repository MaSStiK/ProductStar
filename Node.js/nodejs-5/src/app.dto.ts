import {IsString, IsNumber, IsNotEmpty, IsEmail} from 'class-validator';

export class InfoUserDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly age: number;

    @IsString()
    @IsNotEmpty()
    readonly region: string;

    @IsString()
    @IsNotEmpty()
    readonly number: string;
}

export class ResultInfoUserDto {
    @IsString()
    @IsNotEmpty()
    readonly userInfo: string;

    @IsString()
    @IsNotEmpty()
    readonly phone: string;
}