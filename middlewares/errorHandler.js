import { DEBUG_MODE } from "../config";
import {ValidationError} from "joi";
import CustomErrorHandler from "../services/CustomErrorHandler";

const errorHandler = (err,req,res,next) => {
    let statusCode = 500;
    let data = {
        msg:"internal server error",
        ...(DEBUG_MODE === 'true' && {originalError:err.msg})
    }

    if(err instanceof ValidationError){
        statusCode = 422;
        data : {
            msg:err.msg
        }
    }

    if(err instanceof CustomErrorHandler)
    {
        statusCode = err.status;
        data = {
            message:err.message
        }
    }

    return res.status(statusCode).json(data);
}

export default errorHandler;