
const stuModel = require("../model/stumodel");

const SaveForm = async (req, res) => {
    const { name, roll, city, mobile } = req.body;
    try {
        const stuData = await stuModel.create({
            name: name,
            roll: roll,
            city: city,
            mobile: mobile,
        })
        res.status(200).json({ msg: "data saved in db", stuData });

    } catch (error) {
        res.status(400).send(`error in saving data ${error}`);
    }
}

const GetData = async (req, res) => {
    try {
        const mydata = await stuModel.find();
        res.status(200).json({ msg: "data found in db", mydata });

    } catch (error) {
        res.status(400).send(`error in getting data ${error}`);
    }
}


module.exports = {
    SaveForm,
    GetData,
}



