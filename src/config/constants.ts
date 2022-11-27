
import enviroment from './environments';

if(process.env.NODE_ENV !== 'production'){
    const env= enviroment;
}

export const SECRECT_KEY= process.env.SECRECT || 'awwwwwwwddddeeee';

export enum COLLECTIONS {
CLIENT='clients',
SUPPLY='supply',
ADMIN='admin'
}
export enum MESSAGES{
    TOKEN_VERIFICATION_FAILED="Token no valido , inicia sesion de nuevo" 
}
/**
 * H= horas
 * M=Minutos
 * D=Dias
 */
export enum EXPIRETIME{
H1=60*60,
H24= 24*H1,
M15=H1/4,
M20=H1/3,
D3=H24*3

}