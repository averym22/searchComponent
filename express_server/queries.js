const { response } = require('express')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'me',
    host: 'localhost',
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
            throw error
        } 
        res.status(200).json(results.rows)
    })
})


module.exports = {
    getUnits,
    getUnitByName,
}