const Http = new XMLHttpRequest();
const url =
  'api.openweathermap.org/data/2.5/weather?q={halifax}&appid={aaf21bcf774458bbf0ae5f7163b3bf8b}';
Http.open('GET', url);
Http.send();

Http.onreadystatechange = (e) => {
  console.log(Http.responseText);
};

// git repo client id:    524ce3acd88352de0ddd
