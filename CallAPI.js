const upcomingAPI = 'https://api.themoviedb.org/3/movie/upcoming?api_key=f0f3c0668b8133927ac87e3dca27b62a&language=en-US&page=1';
const nowplayingAPI = 'https://api.themoviedb.org/3/movie/now_playing?api_key=f0f3c0668b8133927ac87e3dca27b62a&language=en-US&page=1';
const topratedAPI = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f0f3c0668b8133927ac87e3dca27b62a&language=en-US&page=1'
const inputBar = document.querySelector('#thanhtimkiem');
const inputBtn = document.querySelector('#nuttimkiem');
inputBtn.addEventListener('click',find);
const $ = document.querySelector.bind(document);

function getTitle() {
fetch(upcomingAPI)
	.then(response => {
		return response.json();
	})
	.then(films => {
		let result = films.results;
		let filmsTitle = result.map(title => {
			return `<li>${title.original_title}</li>`
				
			
		});

		let html = filmsTitle.join(' ');
		document.getElementById('Title').innerHTML = html;
	})

}

function renderUpcoming(){
	fetch(upcomingAPI)
	.then(response => {
		return response.json();
	})
	.then(data => {
		let upcoming = data.results;
		
		let html = upcoming.map(newfilm => {
			return `
			<div class="col l-3 m-4 c-6" 
			style='background-color:#fff;
			background-image:'${newfilm.poster_path}'
			 >
				<span class="average">${newfilm.vote_average}</span>
				<span class="release-date">${newfilm.release_date}</span>
				<h3>${newfilm.original_title}</h3>
			</div>
		`
		})
		$('.row').innerHTML = html.join('');
	})
	
}
function renderNowplaying(){
	fetch(nowplayingAPI)
	.then(response => {
		return response.json();
	})
	.then(data => {
		let nowplaying = data.results;
		
		let html = nowplaying.map(nowfilm => {
			return `
			<div class="col l-3 m-4 c-6" 
			style='background-color:#fff'
			
			 >
				<span class="average">${nowfilm.vote_average}</span>
				<span class="release-date">${nowfilm.release_date}</span>
				<h3>${nowfilm.original_title}</h3>
			</div>
		`
		})
		$('.row').innerHTML = html.join('');
	})
	
}
function renderToprated(){
	fetch(topratedAPI)
	.then(response => {
		return response.json();
	})
	.then(data => {
		let toprated = data.results;
		
		let html = toprated.map(topfilm => {
			return `
			<div class="col l-3 m-4 c-6" 
			style='background-color:#fff;
			background-image:'${topfilm.poster_path}'
			 >
				<span class="average">${topfilm.vote_average}</span>
				<span class="release-date">${topfilm.release_date}</span>
				<h3>${topfilm.original_title}</h3>
			</div>
		`
		})
		$('.row').innerHTML = html.join('');
	})
	
}
renderUpcoming();
Add = () => {
	alert('Thêm database');
//code trong đây
}

Update = () => {
	alert('Sửa database'); 
//code trong đây
}
Delete = () => {
	alert('Xóa database'); 
//code trong đây
}