
document.addEventListener("DOMContentLoaded", function(event){  //allows page to load before running script

  button = document.querySelector('.summon-cats')         //select element to add event listener to

  button.addEventListener('click',function () {



    $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'get',

      dataType: 'json'

    }).done(function(response){
      var photo = document.createElement("img");
      photo.src = (response.cats[0].photo);
      photo.alt = 'Photo of Mira';
  //    div = document.querySelector('#cat1')
      var src = document.getElementById('cat1');
      src.appendChild(photo);

    });

  })
})
