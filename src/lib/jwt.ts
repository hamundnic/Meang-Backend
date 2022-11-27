import { SECRECT_KEY, MESSAGES, EXPIRETIME } from '../config/constants';
import { IUser } from '../interfaces/user.interface';
import { IJWT } from '../interfaces/jwt.interface';
import jwt from'jsonwebtoken'
class JWT{
private secrectKey= SECRECT_KEY as string;

sign(data:IJWT,expiresIn:number =EXPIRETIME.H24){
return jwt.sign({users:data.user},this.secrectKey,{expiresIn});//24 horas decaducidad
}
verify(token:string){
    try {
        return jwt.verify(token,this.secrectKey);
    } catch (err) {
        console.log(err);
        return MESSAGES.TOKEN_VERIFICATION_FAILED;
    }
}
}
export default JWT; 
