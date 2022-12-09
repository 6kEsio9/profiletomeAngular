const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const secret = '90w45gh783fvtn';

const jwtVerify = promisify(jwt.verify);

exports.auth = async (req, res, next) => {
    let token = req.cookies['user'];
    if(token){
        try{
            let decodedToken = await jwtVerify(token, secret);

            req.user = decodedToken;
        }catch(err){
            console.log(err);
            return res.redirect('/404');
        }
    }

    next();
};

exports.isAuth = (req, res, next) => {
    const user = req.cookies['user'];

    if(!user){
        return res.redirect('/404');
    }

    next();
};