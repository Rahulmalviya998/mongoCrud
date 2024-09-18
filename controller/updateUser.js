import Usermodel from "../model/usermodel.js";
import bcrypt from "bcryptjs";


const updateUser = async (req, res) => {
    const { email, updateEmail, password, name } = req.body;
    try {
        const hasspass = await bcrypt.hash(password, 10)
        const update = await Usermodel.findOneAndUpdate({ email },
            { name, password: hasspass, email: updateEmail },
            { new: true }
        );
        if (update) {
            return res.json({ message: "update succesfully" });
        } else {
            return res.json({ message: "something went wrong" });

        }

    } catch {
        return res.json({ message: "something went wrong in server" });

    }
}
export default updateUser;