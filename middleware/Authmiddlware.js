const JWT_SECRET = ;
const  =

 function Middleware(req,res,next){
    
    const token  = req.headers.token;

    const decodeddata = jwt.verify(token,JWT_SECRET)



 }