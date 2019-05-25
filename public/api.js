var getButton = document.getElementById('user_form');
getButton.addEventListener('submit', getRequest);

function getRequest(event) {
  event.preventDefault();
  var movieId = event.target.movieId.value;
  console.log('movieId: ', movieId);
  fetch(`/movies/${movieId}`)
  .then((response) => response.json())
  .then(function(data) {
    if(!movieId) {
      for(var i in data) {
        document.getElementById("results").innerHTML += data[i].movieTitle + '<br />';
      }
    } else {
      console.log('movieId else: ', movieId);
      document.getElementById("results").innerHTML += data.movieTitle + '<br />';
    }
    console.log('data:', data);
  })
}


var postButton = document.getElementById('user_form_post');
postButton.addEventListener('submit', newPost)

function newPost(event, post) {
  event.preventDefault();
  var movieTitle = event.target.movieTitle.value;
  var movieDirector = event.target.movieDirector.value;
  post = {
    movieTitle: movieTitle,
    movieDirector: movieDirector
  }
  const options = {
    method: 'POST',
    body: JSON.stringify(post),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  }
  return fetch('/movies', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .then(error => console.error('error: ', error))
}

var deleteButton = document.getElementById('user_form_delete');
deleteButton.addEventListener('submit', deletePost)

function deletePost(event) {
  event.preventDefault();
  var movieId = event.target.movieId.value;
  const options = {
    method: 'DELETE',
    headers: new Headers({
      'Content-Type': 'application/json'
    }),
    body: JSON.stringify({
      movieId: movieId
    })
  }
  const URL = `movies/${movieId}`;
  fetch(URL, options)
  .then(response => response.json())
  .then(data => console.log('movie to delete: ', data))
}



// var putButton = document.getElementById('user_form_put');
// putButton.addEventListener('submit', putPost)
//
// function putPost(event, post) {
  //     event.preventDefault();
  //     var movieTitle = event.target.movieTitle.value;
  //     var movieDirector = event.target.movieDirector.value;
  //     var movieId = event.target.movieId.value;
  //     const lesson = lessons.find(l => l.id === parseInt(req.params.id));
  //     if (!lesson) res.status(404).send('The lesson ID given was not found');
  //     lesson.lesson = req.body.lesson;
  //     res.send(lesson);
  //
  //     post = {
    //         movieTitle: movieTitle,
    //         movieDirector: movieDirector
    //       }
    //       console.log('post', post);
    //       const options = {
      //           method: 'PUT',
      //           body: JSON.stringify(post),
      //           headers: new Headers({
        //               'Content-Type': 'application/json'
        //             })
        //           }
        //           return fetch(`/movies/${movieId}`, options)
        //           .then(res => res.json())
        //           .then(res => console.log(res))
        //           .then(error => console.error('error: ', error))
        //         }
