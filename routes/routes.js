const Router = require("express").Router()

const citiesControllers = require ("../controllers/citiesControllers");
const {getAllCities, getOneCity, removeCity , addOneCity, addMultiplesCities, modifiCity} = citiesControllers

Router.route("/cities")
.get(getAllCities)
.post((req, res)=>{Array.isArray(req.body.data)? addMultiplesCities(req, res): addOneCity(req, res)})

Router.route("/cities/:id")
.get(getOneCity)
.delete(removeCity)
.put(modifiCity) 

   


module.exports = Router;