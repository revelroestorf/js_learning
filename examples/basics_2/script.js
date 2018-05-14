function fullState (abb) {
  // return `looking up state: ${abb}`;
  if (abb === 'NSW') {
    return 'New South Whales';
  }
  else if (abb === 'QLD') {
    return 'Queensland';
  }
  else if (abb === 'ACT') {
    return 'Australian Capital Teritory';
  }
  else if (abb === 'NT') {
    return 'Northern Teritory';
  }
  else if (abb === 'VIC') {
    return 'Victoria';
  }
  else if (abb === 'WA') {
    return 'Western Australia';
  }

}

// or

const states = {
  NSW: 'New South Whales',
  QLD: 'Queensland',
  WA: 'Western Australia',
  SA: 'South Australia'
  NT: 'Northern Teritory',
  TAS: 'Tasmania',
  VIC: 'Victoria'
}

const user_input = prompt('Enter your state abbv');
const state = states[user_input];
alert(state);
