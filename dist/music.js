const ap = new APlayer({
    container: document.getElementById('aplayer'),
    autoplay: true,
	mini: true,
	fixed: true,
    loop: 'none',
    volume: 0.7,
    listFolded: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'なんでもないや',
            artist: 'Akie秋绘',
            url: 'http://music.163.com/song/media/outer/url?id=450795499.mp3',
            cover: '/images/ri1.jpg',
        },
        {
            name: 'name2',
            artist: 'artist2',
            url: 'url2.mp3',
            cover: 'cover2.jpg',
        }
    ]
});
