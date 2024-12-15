export default function CalorieNinja({ ingredients }) {
  var query = ingredients;
  getNutrients(
    {
      method: "GET",
      url: "https://api.calorieninjas.com/v1/nutrition?query=" + query,
      headers: {
        "X-Api-Key": "KQ7U/sWe7H5CSxKevGjA8w==otU2R9PyKQwXpIJ1",
      },
    },
    function (error, response, body) {
      if (error) return console.error("Request failed:", error);
      else if (response.statusCode != 200)
        return console.error(
          "Error:",
          response.statusCode,
          body.toString("utf8")
        );
      else return body;
    }
  );
}
