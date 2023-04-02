import { User } from '../entities/user.entity';
import { IsOptional, IsString } from 'class-validator';

export class CreateUserDto extends User {
  
    @IsString()
    email: string;

    @IsString()
    name: string;

    @IsString()
    role: string;              

    @IsString()
    password: string;  

    @IsString()
    @IsOptional()
    salt? : string | null;
    
    @IsString()
    confirmationToken : string;     
   
    @IsString()
    recoverToken: string;          
    
    @IsString()
    @IsOptional()
    createdAt?: Date | null;             
    
    @IsString()
    @IsOptional()
    updatedAt?: Date | null;     
}