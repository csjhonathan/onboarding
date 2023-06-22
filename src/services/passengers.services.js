import passengersRepository from '../repositories/passengers.repository.js';

export async function listPassengersTravel(page, name) {
  if(!!page) {
    return passengersRepository.listPassengersTravels(page, name, 25);
  }
  return passengersRepository.listPassengersTravels(page, name);
}
