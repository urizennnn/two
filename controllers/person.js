const People = require('../models/person');

const getAllPeople = async (req, res) => {
    try {
        const people = await People.find({});

        if (people.length === 0) {
            return res.status(404).json({ msg: 'Nobody in the database' });
        }

        res.status(200).json(people);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const getPerson = async (req, res) => {
    try {
        const personId = req.params.id;
        const person = await People.findById(personId);

        if (!person) {
            return res.status(404).json({ msg: `No person with userID ${id}` });
        }

        res.status(200).json({ person });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

const createPerson = async (req, res) => {
    try {
        const { name } = req.body;

        const exist = await People.findOne({ name });

        if (exist) {
            return res.status(400).json({ msg: "User already exists" });
        }

        if (typeof name !== 'string') {
            return res.status(400).json({ msg: "Name must be a string" });
        }

        const person = await People.create({ name });
        res.status(201).json({ person });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}


const updatePerson = async (req, res) => {
    try {
        const personId = req.params.id;
        const { name } = req.body;
        const exist = await People.findOne({name})

        if(exist){
            return res.status(500).json({msg:"User already exist, Please pick a unique name."})
        }

        if (typeof name !== 'string') {
            return res.status(400).json({ msg: "Name must be a string" });
        }

        const updatedPerson = await People.findByIdAndUpdate(
            personId,
            { name },
            { new: true }
        );

        if (!updatedPerson) {
            return res.status(404).json({ msg: `No user with user_id ${personId}` });
        }

        res.status(200).json({ updatedPerson });
    } catch (error) {
        res.status(500).json({ msg: "Internal Server Error" });
    }
}

const deletePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const person = await People.findOneAndDelete({ _id: id });

        if (!person) {
            return res.status(200).json({ msg: `No person with userID ${id}` });
        }

        res.status(200).json({ msg: "Person deleted successfully" });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
}

module.exports = {
    getAllPeople,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson
}
