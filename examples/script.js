const me = {};
me['age'] = 35;
me['current location'] = 'Brissy';
console.log(me);

me['Hobbies'] = ['surf', 'turf', 'hop scotch'];

me['age'].delete;

me['Hobbies'].forEach(function(hobby) {
  console.log(`Hobbies: ${hobby}`);
});

me['Hobbies'].push('bikes');
console.log(me['Hobbies']);

// me['Hobbies'][0].delete;
me['Hobbies'][0].delete;
console.log(me['Hobbies']);

me['Hobbies'].shift();
console.log(me['Hobbies'][0]);

me['games'] = {};
console.log(me['games']);

me['games'] = {name: '', age: '', location: ''};

function print_details(object) {
  console.log(object);
}

 // print_details(me);
me.print_details;

const sydney_campus = { state: 'NSW', street: '7 Kelly St' };
const brisbane_campus = { state: 'QLD', street: '205 N Quay' };
const melbourne_campus = { state: 'VIC', street: '120 Spencer St' };
const coder_academy = { sydney: sydney_campus, melbourne: melbourne_campus, brisbane: brisbane_campus };

console.log(`my details: state: ${coder_academy['brisbane']['state']}, street: ${coder_academy['brisbane']['street']}`);

coder_academy['brisbane']['state'].delete;
console.log(coder_academy['brisbane']);
