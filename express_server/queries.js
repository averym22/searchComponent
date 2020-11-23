const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'db',
    password: 'ambria26',
    database: 'units',
    port: 5432,
})

const getUnits = ((req, res) => {

    pool.query('SELECT * FROM units ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows) 
    })

})

const getUnitByName = ((req, res) => {
    const name = req.params.name
    pool.query('SELECT * From units WHERE name = $1', [name], (error, results) => {
        if(error) {
            return console.log('Error Executing query', error.stack)
        } 
        res.status(200).json(results.rows)
    })
})

const addUnit = (req, res) => {
    const {name, location, size } = req.body
    pool.query('INSERT INTO units(name, location, size ) VALUES ($1, $2, $3)', [name, location, size], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`Unit with ID ${results.id}`)
    })
}


module.exports = {
    getUnits,
    getUnitByName,
    addUnit,
}