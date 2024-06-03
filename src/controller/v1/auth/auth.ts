import { Request, Response } from "express"
import { ILoginCreds } from "@/interface"
import { CustomError } from "@/utils/v1"

export const handleLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body as ILoginCreds
        if (!email || email.trim() === '') {
            throw new CustomError('email is required', 400)
        }
        if (!password || password.trim() === '') {
            throw new CustomError('password is required', 400)
        }
        res.status(200).send({
            message: 'this is login api'
        })
    } catch (e) {
        console.log(e)
    }
}
