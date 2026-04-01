import mongoose from "mongoose";

const userSchema = mongoose.Schema({  // data in mongodb is stored in the schema format 
    fullname: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    confirmPassword: {
        type: String,
    },
}, { timestamps: true }); // createdAt & updatedAt

const User = mongoose.model("User", userSchema); // yha schema ko ek model me create kr diya 
export default User;  // taki hum is model ko outside components ya file me use kr paaye

// aur ye yha is file mebas ye ek template bna hai agr data ko save krvama hai to function create krna padega