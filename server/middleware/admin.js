let admin = (req,res,next) => {

if(req.user.role === 0){
     
    return res.send('get out now ')

}
next();
}

module.exports={ admin }