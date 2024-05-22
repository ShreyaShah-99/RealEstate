
import bcrypt from "bcrypt";
export const register= async (req,res)=>{

    const {username,email,password}=req.body;

    //Hash Password
    const hashedpassword = await bcrypt.hash(password,10);

    //Create New User & save to DB

    // const newUser 



    console.log( hashedpassword);

}
export const login = (req, res) => {};

export const logout = (req, res) => {};