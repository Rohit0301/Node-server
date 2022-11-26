const Pool = require('pg').Pool
const pool = new Pool({
    user: 'vilash',
    host: 'localhost',
    database: 'postgres',
    password: 'Nov17',
    port: 5432,
  })


  const getPitches = (request, response) => {
    pool.query('SELECT * FROM "Pitch"', (error, results) => {
      if (error) {
        console.log(error);
        throw error
      }
      console.log(results);
      response.status(200).json(results.rows)
    })
  }
  const getInvestment = (request, response) => {
    pool.query('SELECT * FROM "Investment"', (error, results) => {
      if (error) {
        console.log(error);
        throw error
      }
      console.log(results);
      response.status(200).json(results.rows)
    })
  }
  const createPitch = (request, response) => {
    const { name, title, idea, equity, amount } = request.body
  
    pool.query('INSERT INTO "Pitch" (name, title, idea, equity, amount) VALUES ($1, $2, $3, $4, $5)', 
        [name, title, idea, equity, amount], (error, results) => {
      if (error) {
        console.log(error)
        throw error
      }
      console.log(results)
      response.status(201).send(`Pitch added successfully`)
    })
  }

  const createInvestment = (request, response) => {
    const { name, pitch_id, equity, amount } = request.body
  
    pool.query('INSERT INTO "Investment" (name, pitch_id, equity, amount) VALUES ($1, $2, $3, $4)', 
        [name, pitch_id, equity, amount], (error, results) => {
      if (error) {
        console.log(error)
        throw error
      }
      console.log(results)
      response.status(201).send(`Investment added successfully`)
    })
  }

  module.exports = {
    getPitches,
    createPitch,
    createInvestment,
    getInvestment
  }