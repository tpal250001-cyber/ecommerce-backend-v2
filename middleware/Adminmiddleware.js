

 function Admin(req,res,next){

    if(req.user && req.user.role === 'admin'){

        next()
    }
    else{
        console.log("only admin")
        res.json({
            message:"Access admin only"
        })
    }



}
module.exports = {Admin}