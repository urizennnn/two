const People = require('../models/person')

const getAllPeople = async (req , res ) => {
    try {
        const person = await People.find({})
        
        if (!person){
            return res.status(404).json({ msg : 'Nobody in the database'})
        }

        res.status(200).json(  person )
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}

const getPerson = async (req , res ) => {
    try {
        const{ user_id : userID} = req.params
        const person = await People.findOne({ user_id : userID })

        if (!person){
            return res.status(404).json({ msg : `No person with userID ${userID} `})
        }

        res.status(200).json({ person })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}

const createPerson = async (req , res ) => {
    try {
        const person = await People.create( req.body )
        res.status(201).json({ person })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}

const updatePerson = async (req , res ) => {
    try {
        const {user_id : userID} = req.params
        const person = await People.findOneAndUpdate({ user_id : userID } , req.body ,{
            new : true,
            runValidators : true,
        })

        if(!person){
            return res.status(404).json({msg : ` No user with user_id ${userID}`})
        }

        res.status(200).json({ person })
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}

const deletePerson = async (req , res ) => {
    try {
        const { user_id : userID } = req.params
        const person = await People.findOneAndDelete({ user_id : userID })

        if (!person){
            return res.status(404).json({msg : `No person with userID ${userID}`})
        }

        res.status(200).json({person})
    } catch (error) {
        res.status(500).json({ msg : error })
    }
}

module.exports = {
    getAllPeople,
    getPerson,
    createPerson,
    updatePerson,
    deletePerson

}