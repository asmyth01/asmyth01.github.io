
function fetchNgram(ngram) {
  const params = new URLSearchParams();
  params.set('content', ngram);
  params.set('year_start', '1800');
  params.set('year_end', '2019');
  params.set('corpus', '15');  // English
  params.set('smoothing', '0');

  var xhr = new XMLHttpRequest();
  var URL = 'https://books.google.com/ngrams/graph?'

  xhr.open("GET", URL + params.toString(), true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.setRequestHeader("Access-Control-Allow-Origin","*");
  xhr.withCredentials = false;


  xhr.onload = function (e) {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(xhr.responseText);
      } else {
        console.error(xhr.statusText);
      }
    }
  };
  xhr.onerror = function (e) {
    console.error(xhr.statusText);
  };
  xhr.send(null);

}
