
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

const EditData = async (req, res) => {
    try {
        const mydata = await stuModel.find();
        res.status(200).json({ msg: "data for edit", mydata });

    } catch (error) {
        res.status(400).send(`error in getting data ${error}`);
    }
}

const EditDeleteData = async (req, res) => {
    try {
        const { id } = req.query;
        console.log(`id for delete -- ${id}`)
        const stuDelete = await stuModel.findByIdAndDelete(id);
        res.status(200).json({ stuDelete, msg: "edit delete okk" });
    }
    catch (error) {
        res.status(400).send(`error in edit delete data ${error}`);
    }
}

const EditDisplay = async (req, res) => {
    try {
        console.log(`id thorugh req. params `, req.params);
        const { id } = req.params;
        const stuData = await stuModel.findById(id);
        res.status(200).json({ msg: "got data to edit", stuData });
    }
    catch (error) {
        res.status(400).send(`error in edit data ${error}`);
    }
}

const EditSave = async (req, res) => {
    try {
        const { _id, name, roll, city, mobile } = req.body;
        const stuData = await stuModel.findByIdAndUpdate(_id, {
            name: name,
            roll: roll,
            city: city,
            mobile: mobile,
        })
        res.status(200).json({ msg: "ok edit saved..", stuData });

    }
    catch (error) {
        res.status(400).send(`error in edit save ${error}`);
    }
}



module.exports = {
    SaveForm,
    GetData,
    EditData,
    EditDeleteData,
    EditDisplay,
    EditSave,


}






