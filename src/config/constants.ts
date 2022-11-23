
import enviroment from './environments';

if(process.env.NODE_ENV !== 'production'){
    const env= enviroment;
}

export const SECRECT_KEY= process.env.SECRECT || 'awwwwwwwddddeeee';

export enum COLLECTIONS {
USER='users'
}