const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (expression) => {
  try {
    // Combine films
    const theaterIXX = await promiseTheaterIXX();
    const theaterVGC = await promiseTheaterVGC();
    const totalFilm = await theaterIXX.concat(theaterVGC);    

    // Return length by the expression
    return await totalFilm.filter((film) => film.hasil === expression).length;

  } catch (error) {
    console.log(error);
  }
  
};

module.exports = {
  promiseOutput,
};
