export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly dob: string;
    readonly sex: boolean;
    readonly telephone: string;
    readonly address: string;
}