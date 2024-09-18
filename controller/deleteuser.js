import Usermodel from "../model/usermodel.js";

const deleteUser = async (req, res) => {
    const { email } = req.body;
    try {
        let result = await Usermodel.findOneAndDelete({ email });

        if (result) {
            return res.status(200).json({ message: 'Delete success', result });
        } else {
            return res.status(404).json({ error: "User not found | Invalid Email" });
        }
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

export default deleteUser;
