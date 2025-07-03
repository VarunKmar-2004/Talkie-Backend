import jwt from 'jsonwebtoken'
export const generateToken=(User_id,res)=>{
    const token=jwt.sign({User_id},process.env.JWT_SECRET,{
        expiresIn:"3d"
    })
    res.cookie('jwt',token,{
        maxAge:7*24*60*60*1000,
        httpOnly:true,
        sameSite:'strict',
        secure:process.env.JWT_SECRET!=='development'
    })
    return token;
  }
