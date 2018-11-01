// Full Documentation - https://www.turbo360.co/docs
const turbo = require('turbo360')({site_id: process.env.TURBO_APP_ID})
const vertex = require('vertex360')({site_id: process.env.TURBO_APP_ID})
const router = vertex.router()

const Student = require('../models/Student.js')
const School = require('../models/School.js')

router.get('/student', (req, res) => {
    Student.find()
    .then(student => {
        res.json({
            confirmation: 'success',
            data: student
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})

router.get('/school', (req, res) => {
    School.find()
    .then(school => {
        res.json({
            confirmation: 'success',
            data: school
        })
    })
    .catch(err => {
        res.json({
            confirmation: 'fail',
            message: err.message
        })
    })
})
module.exports = router
