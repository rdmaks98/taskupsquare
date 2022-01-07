class CustomErrorHandler extends Error {
    constructor(status,message)
    {
        super();
        this.status = status;
        this.message = message;
    }

    static alreadyExist(message)
    {
        return new CustomErrorHandler(409,message);
    }

    static invalidEmail(message='Username and password is wrong')
    {
        return new CustomErrorHandler(401,message);
    }
}

export default CustomErrorHandler;