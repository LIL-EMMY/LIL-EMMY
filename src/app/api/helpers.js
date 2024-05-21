
import jwt from "jsonwebtoken"
export const generateToken = function (id) {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '2h' })
}