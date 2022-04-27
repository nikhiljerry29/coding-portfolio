import dbConnect from "../../libs/dbConnect";
import Experience from "../../models/Experience";

export default async function handler(req, res) {
    const { method } = req;

    await dbConnect();

    switch (method) {
        case "GET":
            try {
                const experiences = await Experience.find({});
                res.status(200).json(experiences);
            } catch (error) {
                res.status(400).json({ success: false });
            }
            break;
        default:
            res.status(400).json({ success: false });
            break;
    }
}
