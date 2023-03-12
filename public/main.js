import data from "../src/data";

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a0a82e4e9emsh43f8e330d9c1d92p1322c8jsn1a01f602c2dd',
		'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
	}
};

fetch('https://online-movie-database.p.rapidapi.com/auto-complete?q=game%20of%20thr', options)
	.then(response => response.json())
	.then(data => {
        const list = data.d

        list.map(item)=>{
            const name = item.l;
            const poster = item.i.imageUrl;
            const movie = '<li><img src="${poster}"><h2>${name}</h2>></li>'
            document.querySelector('.root').innerHTML += movie
        }
    })
	.catch(err => console.error(err));


      const f = document.getElementById('form');
      const q = document.getElementById('query');
      const google = 'https://www.google.com/search?q=site%3A+';
      const site = 'pagedart.com';

      function submitted(event) {
        event.preventDefault();
        const url = google + site + '+' + q.value;
        const win = window.open(url, '_blank');
        win.focus();
      }

      f.addEventListener('submit', submitted);
