import * as passengersServices from "../services/passengers.services.js"

async function listPassengersTravels(req, res) {
  const { name } = req.query;
  let { page } = req.query;
  
  if (isNaN(page)) page = 0;

  try {
    const travels = await passengersServices.listPassengersTravel( page, name );
  
    if (travels.length > 100) return res.status(500).send({ message: 'Too many results' });
  
    res.status(200).send(travels);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ error });
  }
}


export default { listPassengersTravels }