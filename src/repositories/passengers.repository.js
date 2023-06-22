import connect from '../database/database.js';
import passengerQueryBuilder from '../utils/passengersQueryBuilder.js';

async function listPassengersTravels(page = 0, name = '', limit = 101) {
  const query = passengerQueryBuilder(page, name, limit)
  const { rows } = await connect.query(query);

  return rows;
}

export default {
  listPassengersTravels,
}