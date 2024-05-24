
import jwt from "jsonwebtoken"
export const generateToken = function (id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2h' })
}
/**
|--------------------------------------------------
| This helpers is a file that contain functions that will be used in more than one api page
|--------------------------------------------------
*/