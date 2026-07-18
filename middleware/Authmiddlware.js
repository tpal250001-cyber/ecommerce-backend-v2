const JWT_SECRET = process.env.JWT_SECRET;


 function Middleware(req,res,next){
    
    const token  = req.headers.token;

    const decodeddata = jwt.verify(token,JWT_SECRET)



 }