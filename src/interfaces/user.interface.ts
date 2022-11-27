export interface IUser{
    id?: string;
    name:string;
    lastname:string;
    email:string;
    password:string;
    verifyPassword?:string;
    registerDate?:String;
    telefon:string;
    birthday:string;
    role:Role;
    address:[Adress]
}
enum Role{
    CLIENT='clients',
    SUPPLY='supply',
    ADMIN='admin'
}
interface Adress{
    street:string;
    appartament:string;
    zipcode:string;
    state:string;
    country:string;
}