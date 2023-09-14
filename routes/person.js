
const express = require('express')
const router = express.Router()

const { getAllPeople , createPerson , deletePerson , getPerson , updatePerson } = require('../controllers/person')


router.route('').post(createPerson).get(getAllPeople)
router.route('/:user_id').patch(updatePerson)
router.route('/:user_id').get(getPerson)
router.route('/:user_id').delete(deletePerson)


module.exports = router