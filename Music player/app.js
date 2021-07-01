
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const cd = $('.cd');
const heading = $('header h2');
const cdThumb = $('.cd-thumb');
const audio = $('#audio');
const playBtn = $('.btn-toggle-play');
const player = $('.player');
const progress = $('#progress');
const next = $('.btn-next');
const prev = $('.btn-prev');

const app = {
	currentIndex: 0,
	isPlaying: false,

	songs: [
	{
		
		name:'Untold Naraka',
		composer:'GhostFinal',
		path:'./Music/【GhostFinal】Structures「Punishing-Gray-Raven-OST」【パニシング：グレイレイヴン-x-NieR-Automata】-Official-YouTube.mp3',
		image:'./Img/Untold Naraka.jpg'
	},
	{
		name:'Nona Uoroboros',
		composer:'Haloweak',
		path:'./Music/【Haloweak】傀儡-曲-「Punishing-Gray-Raven-OST-九龙夜航」-【パニシング-グレイレイヴン】.mp3',
		image:'./Img/Nona Ouroboros.jpg'
	},
	{
		name:'Holy Moonlight',
		composer:'Haloweak',
		path:'./Music/【Haloweak】月-Full-Version-feat.-Mira.Z-「Punishing-Gray-Raven-OST-终焉福音」-【パニシング-グレイレイヴン】Official.mp3',
		image:'./Img/Holy Moonlight.jpg'
	},
	{
		name:'Hikari',
		composer:'GhostFinal',
		path:'./Music/【GhostFinal】HIKARI-「Punishing-Gray-Raven-OST-九龙环城」-【パニシング-グレイレイヴン】.mp3',
		image:'./Img/Hikari.jpg'
	},
	{
		name:'Dust',
		composer:'GhostFinal',
		path:'./Music/【GhostFinal】Dust-「Punishing-Gray-Raven-OST-永久列车」-【パニシング-グレイレイヴン】.mp3',
		image:'./Img/Dust.jpg'
	},
	{
		name:'Wraith',
		composer:'GhostFinal',
		path:'./Music/【GhostFinal】Wraith「Punishing-Gray-Raven-OST-咏叹回声」-【パニシング-グレイレイヴン】Official.mp3',
		image:'./Img/Wraith.jpg'
	},
	{
		name:'Narwhal',
		composer:'Haloweak',
		path:'./Music/【Haloweak】NARWHAL-「Punishing-Gray-Raven-OST-极地暗流」-【パニシング-グレイレイヴン】Official.mp3',
		image:'./Img/Narwhal.jpg'
	}
	],
	render: function (){
	  const htmls = this.songs.map(song => {
	  	return `
	  		<div class="song">
          		<div class="thumb"
          			style="background-image: url('${song.image}')">
            
          		</div>
          		<div class="body">
            		<h3 class="title">${song.name}</h3>
            		<p class="composer">${song.composer}</p>
          		</div>
          		<div class="option">
            		<i class="fas fa-ellipsis-h"></i>
          		</div>
        	</div>
	  	`
	 	})
	  	$('.playlist').innerHTML = htmls.join('');
	},
	defineProperties: function(){
		Object.defineProperty(this, 'currentSong', 
		{
			get: function(){
				return this.songs[this.currentIndex];
			}
		});
		
	},
	handleEvent: function(){
		const _this = this;
		const cdWidth = cd.offsetWidth;

		document.onscroll = function(){
			const scrollTop = window.scrollY || document.documentElement.scrollTop;
			const newWidth = cdWidth - scrollTop;

			cd.style.width = newWidth > 0 ? newWidth + 'px' : 0;
			cd.style.opacity = newWidth / cdWidth;
		}
		playBtn.onclick = function(){
			if(_this.isPlaying){
				
				audio.pause();
				
			} else{
				
				audio.play();
				
			}
		}
		audio.onplay = function(){
			_this.isPlaying = true;
			player.classList.add('playing');
			
		}
		audio.onpause = function(){
			_this.isPlaying = false;
			player.classList.remove('playing');
			
		}
		audio.ontimeupdate = function(){
			const currentProgress = Math.floor(audio.currentTime / audio.duration * 100);
			progress.value = currentProgress;
		}
		progress.oninput = function(e){
            // từ số phần trăm của giây convert sang giây
            const seekTime = audio.duration / 100 * e.target.value; 
            audio.currentTime = seekTime;
        }
        next.onclick = function(){
        	_this.nextSong();
        	audio.play();
        }
        prev.onclick = function(){
        	_this.prevSong();
        	audio.play();
        }
        console.log([progress]);
	},
	loadCurrentSong: function(){
		heading.textContent = this.currentSong.name;
		cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
		audio.src = this.currentSong.path;
	},
	nextSong: function(){
		this.currentIndex++;
		if (this.currentIndex > this.songs.length - 1)
			this.currentIndex = 0;
		this.loadCurrentSong();
	},
	prevSong: function(){
		this.currentIndex--;
		if (this.currentIndex < 0)
			this.currentIndex = this.songs.length - 1;
		this.loadCurrentSong();
	},
	start: function(){
		<!-- định nghĩa các thuộc tính cho object -->
		this.defineProperties();
		<!-- lắng nghe và xử lí các sự kiện -->
		this.handleEvent();
		<!-- tải bài hát hiện tại -->
		this.loadCurrentSong();
		<!-- render  -->
		this.render();
	}
}

app.start();