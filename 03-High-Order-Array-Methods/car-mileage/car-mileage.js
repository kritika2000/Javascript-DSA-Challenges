function analyzeCarMileage(cars) {
  const averageMileage =
    cars.reduce((acc, curr) => acc + curr.mileage, 0) / cars.length;
  let lowestMileageCar = cars[0];
  cars.forEach((car) => {
    if (car.mileage < lowestMileageCar.mileage) lowestMileageCar = car;
  });
  let highestMileageCar = cars[0];
  cars.forEach((car) => {
    if (car.mileage > highestMileageCar.mileage) highestMileageCar = car;
  });
  const totalMileage = cars.reduce((acc, curr) => acc + curr.mileage, 0);
  return { averageMileage, lowestMileageCar, highestMileageCar, totalMileage };
}

const cars = [
  { make: 'Toyota', model: 'Corolla', year: 2020, mileage: 25000 },
  { make: 'Honda', model: 'Civic', year: 2019, mileage: 30000 },
  { make: 'Ford', model: 'Mustang', year: 2021, mileage: 15000 },
];

const analysis = analyzeCarMileage(cars);

console.log(
  analysis.averageMileage,
  analysis.lowestMileageCar,
  analysis.highestMileageCar,
  analysis.totalMileage
);

module.exports = analyzeCarMileage;
