/*eslint-env node */
//Q7. Write a function to sort the following array of objects by its key value (example key as year)?

const library = [
  { film: 'Lagaan', rating: '5', year: 2003},
  { film: 'Bahubali', rating: '4', year: 2015},
  { film: 'Godfather', rating: '4', year: 1990}
];

let compare = library.sort(function(a, b) {

    return parseFloat(a.year) - parseFloat(b.year);

});

module.exports = library.sort(compare);
