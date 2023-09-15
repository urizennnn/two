
const express = require('express')
const router = express.Router()

const { getAllPeople , createPerson , deletePerson , getPerson , updatePerson } = require('../controllers/person')


router.route('/').post(createPerson).get(getAllPeople)
router.route('/:id').put(updatePerson)
router.route('/:id').get(getPerson)
router.route('/:id').delete(deletePerson)


module.exports = router