/*

  This challenge is taken from CodeWars. A great place to sharpen your algorithm skills.
  --

  After a hard quarter in the office you decide to get some rest on a vacation.
  You will need a rental car in order for you to get around.
  The manager of the car rental company makes you some good offers.
  Every day that you rent the car costs $40.
  If you rent the car for 7 or more days, you get $50 off your total.
  Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
  Write a function that returns the total cost for (d) days.

  Examples:
  rentalCarCost(1) -> 40
  rentalCarCost(2) -> 80
  rentalCarCost(3) -> 100

  Check your solution:  Open index.html to run the tests!

*/

function carHireCost (d) {
  let costPerDay = 40
  let cost = costPerDay * d
  if (d >= 3 && d < 7) {
    cost -= 20
  } else if (d >= 7) {
    cost -= 50
  }
  return cost
}
