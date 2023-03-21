const data = [
  {  
    title: 'Remeber The Time',
    artist: 'Micheal Jackson',
    album: 'Dangerous',
    image: 'https://images.genius.com/984f3eb1d4ff07878238a3041131553f.1000x1000x1.jpg',
    link:''
  },
  {
    title: 'Nights',
    artist: 'Frank Ocean',
    album: 'Blonde',
    image: 'https://www.slantmagazine.com/wp-content/uploads/2016/08/blonde.jpg',
    link: ''
  },
  {
    title: 'A Thousand Years',
    artist: 'Christina Perri',
    album: 'A Thousand Years',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/9f361f0228d08731b70cb0c996520606/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b944ecc72fe487f50fcd2cf9160ad79f-11.mp3'
  },
  {
    title: 'Jar of Hearts',
    artist: 'Christina Perri',
    album: 'lovestrong.',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c1694e8cfa5424dcbeb3f8fbc983030b-6.mp3'
  },
  {
    title: 'the lonely',
    artist: 'Christina Perri',
    album: 'lovestrong.',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-2.dzcdn.net/stream/c-237f014bb0eb0c164b288f6e77809e06-7.mp3'
  },
  {
    title: 'remember me',
    artist: 'Christina Perri',
    album: 'songs for carmella: lullabies & sing-a-longs',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-fe3a3b81546201c91d6d278724790b4e-5.mp3'
  },
  {
    title: 'Brave Enough (feat. Christina Perri)',
    artist: 'Christina Perri',
    album: 'Brave Enough',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/74fc0e4f16db17a7b62e1a4d04639201/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cff60864fb7f5fd233869f52bef60ef6-3.mp3'
  },
  {
    title: 'here comes the sun',
    artist: 'Christina Perri',
    album: 'here comes the sun',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/cbe29677129cf551b40251ca72cee20a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-307bff975ed45a7c9468b7734e1e0173-3.mp3'
  },
  {
    title: 'home',
    artist: 'Christina Perri',
    album: 'a lighter shade of blue',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/3695c80e8af2be314853719753059818/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c05211ae4c3b9adb2ef991af4bff119c-3.mp3'
  },
  {
    title: 'a dream is a wish your heart makes',
    artist: 'Christina Perri',
    album: 'songs for carmella: lullabies & sing-a-longs',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3bfcb2114580060ef1248db5be988493-5.mp3'
  },
  {
    title: 'the words',
    artist: 'Christina Perri',
    album: 'head or heart',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-bfcf995d6fa812d1f0ef3b54362e1703-5.mp3'
  },
  {
    title: 'evergone',
    artist: 'Christina Perri',
    album: 'evergone',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/7a26b9466b67097c8154dca74f306097/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3c537580af045c0caa00404b7ee22df0-3.mp3'
  },
  {
    title: 'sea of lovers',
    artist: 'Christina Perri',
    album: 'head or heart',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f9b2fcf37cfb371c9842430641cc711f-5.mp3'
  },
  {
    title: 'dream a little dream of me',
    artist: 'Christina Perri',
    album: 'songs for carmella: lullabies & sing-a-longs',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3c80ee6181945292bc8fcfe924d83dad-5.mp3'
  },
  {
    title: 'i believe',
    artist: 'Christina Perri',
    album: 'head or heart',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f66ef6c588c60e97ed1f581b9aaab899-4.mp3'
  },
  {
    title: 'Fantasy',
    artist: 'Mariah Carey',
    album: 'Daydream',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/98ab83037b73f9fab9d97b5644ea2668/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3f697bffdb916d73e13715e3b2697ddf-8.mp3'
},
{
    title: 'All I Want for Christmas Is You',
    artist: 'Mariah Carey',
    album: 'Merry Christmas',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/60d8f7635ead9b3c5e571aec47a8c73e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f68c9c9dbb03f99f6b0080c1982cf4d8-5.mp3'
},
{
    title: 'We Belong Together',
    artist: 'Mariah Carey',
    album: 'The Emancipation Of Mimi (Ultra Platinum Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a95f453b547f62585d4677367f90ba33/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-715069171fd36f49647cca2c436a67f2-4.mp3'
},
{
    title: 'Always Be My Baby',
    artist: 'Mariah Carey',
    album: 'Daydream',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/98ab83037b73f9fab9d97b5644ea2668/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-bc6b3598104ea3807a0ff19e1bf40d9a-6.mp3'
},
{
    title: 'Without You',
    artist: 'Mariah Carey',
    album: 'Music Box',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/074f9fdaefead72442368c647b46f500/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-4.dzcdn.net/stream/c-4a5abb1c99bbe65015ac39ea4bca8e49-6.mp3'
},
{
    title: "It's A Wrap",
    artist: 'Mariah Carey',
    album: "It's A Wrap",
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8984051b2d36cffbc639161d8f3ced99/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-a.dzcdn.net/stream/c-ac2c0e43f4021e96a0763abb23fe464c-4.mp3'
},
{
    title: 'My All',
    artist: 'Mariah Carey',
    album: 'Butterfly',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/cd2b6f316d1a213e1b3dc27934f7d48a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cc71c5b50a8f2f1dc2986f6ec1d7ce33-6.mp3'
},
{
    title: 'Honey',
    artist: 'Mariah Carey',
    album: 'Butterfly: 25th Anniversary Expanded Edition',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/df991f526239ebcfd6f09b646100565e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-4.dzcdn.net/stream/c-40b31d2c937cba18374767af642deb9f-3.mp3'
},
{
    title: 'Emotions',
    artist: 'Mariah Carey',
    album: 'Emotions',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/13dcc11389c5e843c86dd85d9452e2a1/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f9cc96b671ac3f6196dac3584bd18f10-6.mp3'
},
{
    title: 'One Sweet Day',
    artist: 'Mariah Carey',
    album: 'Daydream',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/98ab83037b73f9fab9d97b5644ea2668/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f634b67909f9854c808898eda050c4c7-8.mp3'
},
{
    title: 'Vision of Love',
    artist: 'Mariah Carey',
    album: 'Mariah Carey',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a6842e0e44e02fae9cc5bfa666ffe435/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9690f993822034f613c10ce3a746053e-6.mp3'
},
{
    title: 'Obsessed',
    artist: 'Mariah Carey',
    album: 'Obsessed',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/374cfb22235b44c778e823cd78f67429/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b12e5be5a1bcdb092ce35a1eeb9b9667-1.mp3'
},
{
    title: 'Open Arms',
    artist: 'Mariah Carey',
    album: 'Daydream',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/98ab83037b73f9fab9d97b5644ea2668/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8d6ce77a5105f77072bceaa1bf491055-8.mp3'
},
{
    title: 'Dreamlover',
    artist: 'Mariah Carey',
    album: 'Music Box',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/074f9fdaefead72442368c647b46f500/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8f19f1f70292db8aef48e3a9e3f2102e-7.mp3'
},
{
    title: 'Butterfly',
    artist: 'Mariah Carey',
    album: 'Butterfly',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/cd2b6f316d1a213e1b3dc27934f7d48a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f0738030941e4cce397fe8a3d0f0740b-6.mp3'
},
{
    title: 'Love Takes Time',
    artist: 'Mariah Carey',
    album: 'Mariah Carey',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a6842e0e44e02fae9cc5bfa666ffe435/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cb66db679456d114278237432d05cfd0-6.mp3'
},
{
    title: 'Shake It Off',
    artist: 'Mariah Carey',
    album: 'The Emancipation Of Mimi (Ultra Platinum Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a95f453b547f62585d4677367f90ba33/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f9c154cedb8352853cfcc48028f3ebf8-4.mp3'
},
  {
    title: 'All By Myself',
    artist: 'Céline Dion',
    album: 'Falling into You',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-2.dzcdn.net/stream/c-29623e28e6094292e847620cfda739d0-2.mp3'
  },
  {
    title: 'The Power of Love',
    artist: 'Céline Dion',
    album: 'The Colour Of My Love',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a4e0abf3f7a4f4ce8cba4af2cbd6416d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-a.dzcdn.net/stream/c-acedf78ad489e0663a2eb4913edee940-5.mp3'
  },
  {
    title: "S'il suffisait d'aimer",
    artist: 'Céline Dion',
    album: "S'il Suffisait D'aimer",
    image: 'https://e-cdns-images.dzcdn.net/images/cover/48661a4a6672225ea9d189892c99044b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-7c2d229d49bd6c4c25ca4751ffb3f575-6.mp3'
  },
  {
    title: 'My Heart Will Go On (Love Theme from "Titanic")',
    artist: 'Céline Dion',
    album: "Titanic: Original Motion Picture Soundtrack - Collector's Anniversary Edition",
    image: 'https://e-cdns-images.dzcdn.net/images/cover/1a0c750fc722793ff079a87c3d878203/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f59447bb39d21d28c689bccaff308f47-3.mp3'
  },
  {
    title: 'Dans un autre monde',
    artist: 'Céline Dion',
    album: "S'il Suffisait D'aimer",
    image: 'https://e-cdns-images.dzcdn.net/images/cover/48661a4a6672225ea9d189892c99044b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d344300746b3b35d66d689f5be85857a-6.mp3'
  },
  {
    title: "I'm Your Angel (with Céline Dion)",
    artist: 'Céline Dion',
    album: 'The R. In R&B Collection: Volume 1',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/dc7637895e982429854e76d654fbf0fc/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1613a31b185a3459322ddf72cdba3798-7.mp3'
  },
  {
    title: "I'm Alive",
    artist: 'Céline Dion',
    album: 'My Love Essential Collection',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/177346106112348e15ec4f9add0c1ef4/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-10377b172739dee95d6c79889cfd7203-6.mp3'
  },
  {
    title: 'River Deep, Mountain High',
    artist: 'Céline Dion',
    album: 'Falling into You',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8abeaf70e9351956810e12e3166d5e58-3.mp3'
  },
  {
    title: 'How Does A Moment Last Forever',
    artist: 'Céline Dion',
    album: 'Beauty and the Beast (Original Motion Picture Soundtrack/Deluxe Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/6ed33c237361bba03434fb31c8cd24dc/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8e1316136351698b8b855064e6e941d5-6.mp3'
  },
  {
    title: 'I Love You',
    artist: 'Céline Dion',
    album: 'Falling into You',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-4.dzcdn.net/stream/c-40d55da84cfddcd2391b5f390fa983e3-3.mp3'
  },
  {
    title: "If That's What It Takes",
    artist: 'Céline Dion',
    album: 'Falling into You',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/348692abbdb9950a998c8d58cbba78b7/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-2.dzcdn.net/stream/c-2a99f820c5ce543367d581a472c7bcfc-3.mp3'
  },
  {
    title: 'Thriller',
    artist: 'Michael Jackson',
    album: 'Thriller 25 Super Deluxe Edition',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/92a024220a9532489c75c9d994835697/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-6bed872c77d16d96dd4fe6b4d26c938b-7.mp3'
  },
  {
      title: "Don't Stop 'Til You Get Enough",
      artist: 'Michael Jackson',
      album: 'Off the Wall',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/baf09a24b48b82e3af270efba101d07b/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-e.dzcdn.net/stream/c-e3f1ec8b9c629b417dd2938fa5fa2df7-4.mp3'
  },
  {
      title: 'Billie Jean',
      artist: 'Michael Jackson',
      album: 'Thriller',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/544862aa5be45bc82ad4ab1a14daf63a/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-e.dzcdn.net/stream/c-e2ac4a395e83ceb995072f38b764aa71-4.mp3'
  },
  {
      title: 'Remember the Time',
      artist: 'Michael Jackson',
      album: 'Dangerous',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/93a5354699d552666448e1c87c976605/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-9.dzcdn.net/stream/c-95771b49f6ebe27f6759e39f49083cfb-4.mp3'
  },
  {
      title: 'Beat It',
      artist: 'Michael Jackson',
      album: 'Thriller 25 Super Deluxe Edition',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/92a024220a9532489c75c9d994835697/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-e.dzcdn.net/stream/c-edd7c2135ad76391a35c8dc2dcf45483-7.mp3'
  },
  {
      title: 'The Way You Make Me Feel (2012 Remaster)',
      artist: 'Michael Jackson',
      album: 'Bad 25th Anniversary',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fb0a49a91ab8137ec9d028c4dbb04021/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-3.dzcdn.net/stream/c-31c72e2585b6238c16c115664707b680-5.mp3'
  },
  {
      title: 'Heal the World',
      artist: 'Michael Jackson',
      album: 'Dangerous',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/93a5354699d552666448e1c87c976605/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-3.dzcdn.net/stream/c-33e7b8736ba7e87030703ad2af11430a-5.mp3'
  },
  {
      title: 'Dirty Diana (2012 Remaster)',
      artist: 'Michael Jackson',
      album: 'Bad 25th Anniversary',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fb0a49a91ab8137ec9d028c4dbb04021/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-f.dzcdn.net/stream/c-fb1c3f8faf8d3d7b7401eb2858ba77f7-4.mp3'
  },
  {
      title: 'Black or White',
      artist: 'Michael Jackson',
      album: 'Dangerous',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/93a5354699d552666448e1c87c976605/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-d.dzcdn.net/stream/c-d99cc18414c8d4dd96eace504aeec035-5.mp3'
  },
  {
      title: 'D.S.',
      artist: 'Michael Jackson',
      album: 'HIStory - PAST, PRESENT AND FUTURE - BOOK I',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fbed9a8cfcdd8a5e48cebbea8d8078ea/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-9.dzcdn.net/stream/c-9093d23fbb338897600142ced753268f-7.mp3'
  },
  {
      title: 'Rock with You (Single Version)',
      artist: 'Michael Jackson',
      album: 'Off the Wall',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/baf09a24b48b82e3af270efba101d07b/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b39eebac74144acd8ac092f6a4a7805b-4.mp3'
  },
  {
      title: 'Beat It',
      artist: 'Michael Jackson',
      album: "Michael Jackson's This Is It",
      image: 'https://e-cdns-images.dzcdn.net/images/cover/a0ad67d1beb761f2cb9f8b60e5bcf07a/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-3.dzcdn.net/stream/c-38cc628c62382a20a53316db263f0547-5.mp3'
  },
  {
    title: 'Who Is It',
    artist: 'Michael Jackson',
    album: 'Dangerous',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/93a5354699d552666448e1c87c976605/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d914d19f1dbdad88d17f77e59739e535-5.mp3'
  },
  {
    title: 'Off the Wall',
    artist: 'Michael Jackson',
    album: 'Off the Wall',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/baf09a24b48b82e3af270efba101d07b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9fe59cfc279fe13217a6d8abdbe8d433-5.mp3'
  },
  {
    title: "Wanna Be Startin' Somethin'",
    artist: 'Michael Jackson',
    album: 'Thriller',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/544862aa5be45bc82ad4ab1a14daf63a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b14191de47b59c80f6df4b710c3e1a1b-5.mp3'
  },
  {
    title: 'True Colors',
    artist: 'The Weeknd',
    album: 'Starboy (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/81bd09c29b309917c80adb1a1ac8eabb/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-6181e59423c76726ec936f24f4620d34-5.mp3'
  },
  {
    title: 'Die For You',
    artist: 'The Weeknd',
    album: 'Starboy',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/81bd09c29b309917c80adb1a1ac8eabb/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-a.dzcdn.net/stream/c-ad5a94438c6291cd7fa8293cb1f1b27a-4.mp3'
  },
  {
    title: 'Love To Lay',
    artist: 'The Weeknd',
    album: 'Starboy (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/0d961a8d3d3c425a512bb79f2ad5c25d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-14cf0165b6bda82bb0a095c912c410ca-5.mp3'
  },
  {
    title: 'A Lonely Night',
    artist: 'The Weeknd',
    album: 'Starboy (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/0d961a8d3d3c425a512bb79f2ad5c25d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-159e02c641616b7a4ada9ff2ce510f49-5.mp3'
  },
  {
    title: 'Ordinary Life',
    artist: 'The Weeknd',
    album: 'Starboy (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/81bd09c29b309917c80adb1a1ac8eabb/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b930e33bb5ecec192705742f7184ebf5-5.mp3'
  },
  {
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-0cb3c26f5c0be8b37d90560955431118-8.mp3'
  },
  {
    title: 'Call Out My Name',
    artist: 'The Weeknd',
    album: 'My Dear Melancholy,',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/315804a0b7db8ec7dbe0f68413eb2cb5/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-590039830de8e958eac8c31267abb846-5.mp3'
  },
  {
    title: 'Reminder',
    artist: 'The Weeknd',
    album: 'Starboy',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/134778e4c4f19ea71c82408300925a9a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-57d7d904b53d6b328eb0d35ee0242c27-6.mp3'
  },
  {
    title: 'Sacrifice',
    artist: 'The Weeknd',
    album: 'Dawn FM',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/478a544d29275755b3b8f7b4a1fd7a3c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-0e171e1ee88d069eefd329a5171b7a45-4.mp3'
  },
  {
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/134778e4c4f19ea71c82408300925a9a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-66c54596b9fec3fc878301b49debf569-6.mp3'
  },
  {
    title: 'Anti-Hero',
    artist: 'Taylor Swift',
    album: 'Midnights',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-828a4c6ef4e912f1459f09791d26f863-4.mp3'
  },
  {
    title: 'Don’t Blame Me',
    artist: 'Taylor Swift',
    album: 'reputation',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1933b457b094f893f9dcae061959e132-7.mp3'
  },
  {
    title: 'Lavender Haze',
    artist: 'Taylor Swift',
    album: 'Midnights',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-5ad7b80d593b56fbd319f81936b4e8c5-4.mp3'
  },
  {
    title: 'cardigan',
    artist: 'Taylor Swift',
    album: 'folklore',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/290abe93bdda84bb8b170f30a4998c4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-786714f1e031374e85db4e4c9aa6bb47-4.mp3'
  },
  {
    title: 'Lover',
    artist: 'Taylor Swift',
    album: 'Lover',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d5c941adecf0331e10a06e7c7d50604d-10.mp3'
  },
  {
    title: 'Look What You Made Me Do',
    artist: 'Taylor Swift',
    album: 'reputation',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-ceb7cb4362bceb7e4f362bf9b5c04bb8-8.mp3'
  },
  {
    title: 'The Great War',
    artist: 'Taylor Swift',
    album: 'Midnights (3am Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f6a05e003277bf4533df863476c1413e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-719e0c206ec01de3e0e6d7ab7dab8c35-4.mp3'
  },
  {
    title: 'Delicate',
    artist: 'Taylor Swift',
    album: 'reputation',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-ffcc9c3bc91ee70e3fca6b7a88ac94fa-6.mp3'
  },
  {
    title: 'Cruel Summer',
    artist: 'Taylor Swift',
    album: 'Lover',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-4.dzcdn.net/stream/c-48e488b448a805fff7ad99a43ed63f16-6.mp3'
  },
  {
    title: '...Ready For It?',
    artist: 'Taylor Swift',
    album: 'reputation',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cdc518fa41acf3e425bb63e58a8aedb8-7.mp3'
  },
  {
    title: 'Midnight Rain',
    artist: 'Taylor Swift',
    album: 'Midnights',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3b6104ea5017ea5706f6da2f858221a4-4.mp3'
  },
  {
    title: "You're On Your Own, Kid",
    artist: 'Taylor Swift',
    album: 'Midnights (3am Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f6a05e003277bf4533df863476c1413e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f06ed0f38cb2488fe3408eab75236389-4.mp3'
  },
  {
    title: 'Karma',
    artist: 'Taylor Swift',
    album: 'Midnights (3am Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f6a05e003277bf4533df863476c1413e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e4c355e15c6ec052157d981fb6e9920c-4.mp3'
  },
  {
    title: 'Bejeweled',
    artist: 'Taylor Swift',
    album: 'Midnights',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/f571cb780b339ec087201b1cea53c3d9/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-65d361185515a5d491cafb004b5d9c18-4.mp3'
  },
  {
    title: 'Getaway Car',
    artist: 'Taylor Swift',
    album: 'reputation',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e6f3afd8a5c3d8ea797f458694166e47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e29e115cd4eca233b1666155f92058b4-7.mp3'
  },
  {
    title: 'august',
    artist: 'Taylor Swift',
    album: 'folklore (deluxe version)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/290abe93bdda84bb8b170f30a4998c4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e871600971427df48a544337b3c49bcc-4.mp3'
  },
  {
    title: 'The Man',
    artist: 'Taylor Swift',
    album: 'Lover',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/6111c5ab9729c8eac47883e4e50e9cf8/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-041933c821bfbfa0e816f9c2a44e1f56-6.mp3'
  },
  {
    title: 'Diamonds',
    artist: 'Rihanna',
    album: 'Diamonds',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a1b2457fcd12bb9ed5488e4bbd01ec25/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-00ef53b742b76cb70c83ff62e0f4aed7-8.mp3'
  },
  {
    title: 'Love On The Brain',
    artist: 'Rihanna',
    album: 'ANTI (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/4fc5f387624c25de0ec96b4719e3a36d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c3135df9d27931726c4a003a27e8773e-8.mp3'
  },
  {
    title: "Don't Stop The Music",
    artist: 'Rihanna',
    album: 'Good Girl Gone Bad: Reloaded',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/91276466fbc876d96be9e6926060af60/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-5581559e0c31b7f329ded7814d50ed52-6.mp3'
  },
  {
    title: 'Only Girl (In The World)',
    artist: 'Rihanna',
    album: 'Loud',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/3a12c64bb52a167944783878ffe41f02/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d20ea30267f84d42b66c6aa61c3aa43c-10.mp3'
  },
  {
    title: 'Where Have You Been (Album Version)',
    artist: 'Rihanna',
    album: 'Talk That Talk (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/5199f89d5113a83b5086463d5d0c9415/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-70eb82ab241f9ed6f5a22ed1fa958ad3-9.mp3'
  },
  {
    title: 'S&M',
    artist: 'Rihanna',
    album: 'Loud',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/3a12c64bb52a167944783878ffe41f02/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b49dd405a5c07c9265e268dbbcdf308e-10.mp3'
  },
  {
    title: 'Needed Me',
    artist: 'Rihanna',
    album: 'ANTI (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/4fc5f387624c25de0ec96b4719e3a36d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-09f081e92a26c5722ac530c064981588-7.mp3'
  },
  {
    title: 'Umbrella',
    artist: 'Rihanna',
    album: 'Good Girl Gone Bad: Reloaded',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/91276466fbc876d96be9e6926060af60/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3b1142ec5a98567c5d286a9050a85d1e-6.mp3'
  },
  {
    title: 'Rude Boy',
    artist: 'Rihanna',
    album: 'Rated R',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/af82bfab0277506de1d91c3f9d2e28c3/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-526471f475edda240620d4966995a458-4.mp3'
  },
  {
    title: 'We Found Love (Album Version)',
    artist: 'Rihanna',
    album: 'Talk That Talk (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/5199f89d5113a83b5086463d5d0c9415/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-0644ba897ad23515fc966e0f3ad0a836-9.mp3'
  },
  {
    title: 'Love The Way You Lie',
    artist: 'Rihanna',
    album: 'Recovery',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3'
  },
  {
    title: 'Disturbia',
    artist: 'Rihanna',
    album: 'Good Girl Gone Bad: Reloaded',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/91276466fbc876d96be9e6926060af60/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9b6194aa3d97c9a111e358d56041ec44-6.mp3'
  },
  {
    title: 'Pon de Replay',
    artist: 'Rihanna',
    album: 'Music Of The Sun',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/7324007a556009d008075eeb32157c16/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-5680a73944eeb51b3186858eac1adc57-8.mp3'
  },
  {
    title: 'Work',
    artist: 'Rihanna',
    album: 'ANTI (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/4fc5f387624c25de0ec96b4719e3a36d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e8850cd33ce8d17c90d5c71ed028e243-7.mp3'
  },
  {
    title: 'Take A Bow',
    artist: 'Rihanna',
    album: 'Good Girl Gone Bad: Reloaded',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/91276466fbc876d96be9e6926060af60/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9571d1a0be0db0b03e001cbdaffdc458-7.mp3'
  },
  {
    title: 'Man Down (Album Version)',
    artist: 'Rihanna',
    album: 'Loud',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/3a12c64bb52a167944783878ffe41f02/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-96d5c75c25aa5d36ec6229026466c884-10.mp3'
  },
  {
    title: 'This Is What You Came For',
    artist: 'Rihanna',
    album: 'This Is What You Came For',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/b8af7ff13a47e2775307299843da9b36/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-35993c83c7915821a27c9aadeaf446c5-6.mp3'
  },
  {
    title: 'The Monster',
    artist: 'Rihanna',
    album: 'The Marshall Mathers LP2 (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-19bb8452c0c5709dde021b7f92c98ab7-6.mp3'
  },
  {
    title: 'Easy On Me',
    artist: 'Adele',
    album: 'Easy On Me',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8b175d5fccd6b1c54973c9307f572010-3.mp3'
  },
  {
    title: 'Oh My God',
    artist: 'Adele',
    album: '30',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e97933f9e92c750923baaf2b278aa0a2-3.mp3'
  },
  {
    title: 'Set Fire to the Rain',
    artist: 'Adele',
    album: '21',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-011a9b862c6d294da97973fddb72b847-3.mp3'
  },
  {
    title: 'Rolling in the Deep',
    artist: 'Adele',
    album: '21',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e78000f07a5cafb99b58e0c24cebbc80-5.mp3'
  },
  {
    title: 'Someone Like You',
    artist: 'Adele',
    album: '21',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9d518138b96f250bee6c06c282182513-3.mp3'
  },
  {
    title: 'Skyfall',
    artist: 'Adele',
    album: 'Skyfall',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/81e6d7baa7f47b804704922412e7a014/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-30850f08c37d0860c788a31084ec8641-3.mp3'
  },
  {
    title: 'Hello',
    artist: 'Adele',
    album: 'Hello',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/55a45989edf6f4ed46793986d5a0b190/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cf968741c42b47400aca81b6da437a03-3.mp3'
  },
  {
    title: 'Love In The Dark',
    artist: 'Adele',
    album: '25',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-2.dzcdn.net/stream/c-27218b51599c6a829e7a880639ac7a2e-3.mp3'
  },
  {
    title: 'I Drink Wine',
    artist: 'Adele',
    album: '30',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-5.dzcdn.net/stream/c-521ae12a39824d0a6c13c65fb2a6b31a-3.mp3'
  },
  {
    title: 'When We Were Young',
    artist: 'Adele',
    album: '25',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3a320b6be623895df27f79a2f533dc41-3.mp3'
  },
  {
    title: 'Send My Love (To Your New Lover)',
    artist: 'Adele',
    album: '25',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d94ba50b929313d13223fc56ad48c657-3.mp3'
  },
  {
    title: 'Can I Get It',
    artist: 'Adele',
    album: '30',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c33035daa9d95b3102a8a28efefb9b09-3.mp3'
  },
  {
    title: 'Rumour Has It',
    artist: 'Adele',
    album: '21',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d8a787cc57ef15e61922acd1335d7692-3.mp3'
  },
  {
    title: 'Water Under the Bridge',
    artist: 'Adele',
    album: '25',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/eaeadce7932a97533fe495881d2fcd7a/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-bc2b5106b1e48b4986db6d9b9239a54e-3.mp3'
  },
  {
    title: 'One And Only',
    artist: 'Adele',
    album: '21',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/8bdaf37e2e7f883e84bbc3462c938293/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b97b5bf409ef69d53c5716deb262220e-3.mp3'
  },
  {
    title: 'Make You Feel My Love',
    artist: 'Adele',
    album: 'Make You Feel My Love',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/1785c5d4ecda5cda57193d4aaf19a768/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c2cb6598f557297d29917d5b3352e46b-3.mp3'
  },
  {
    title: 'Hold On',
    artist: 'Adele',
    album: '30',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a87ee7c212c7b0f9ae687c378f260324/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3547204c0c61148dd9f3334c4e7d3a06-3.mp3'
  },
  {
    title: 'Without Me',
    artist: 'Eminem',
    album: 'The Eminem Show',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cca63b2c92773d54e61c5b4d17695bd2-8.mp3'
  },
  {
    title: 'Not Afraid',
    artist: 'Eminem',
    album: 'Recovery',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-04c2c479846725eec24a3f40e837d35e-16.mp3'
  },
  {
    title: 'Till I Collapse',
    artist: 'Eminem',
    album: 'The Eminem Show',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-12eca10f7e8e55f7f83c14b3552f1940-9.mp3'
  },
  {
    title: 'Superman',
    artist: 'Eminem',
    album: 'The Eminem Show',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d56c95b55d8555bd7bb816d9518609d5-9.mp3'
  },
  {
    title: 'Love The Way You Lie',
    artist: 'Eminem',
    album: 'Recovery',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/be682506145061814eddee648edb7c59/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1ed50e5b3118c99be858fc305609e62a-15.mp3'
  },
  {
    title: 'Sing For The Moment',
    artist: 'Eminem',
    album: 'The Eminem Show',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-6a0f240c7bd580e87697146ed3247ab5-8.mp3'
  },
  {
    title: 'Venom (Music From The Motion Picture)',
    artist: 'Eminem',
    album: 'Kamikaze',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8ad574e54c315bd9f89ba34deb2c7650-6.mp3'
  },
  {
    title: 'Rap God',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP2 (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-2.dzcdn.net/stream/c-2a2a808c0966c0952aa4f6bae6fa98de-6.mp3'
  },
  {
    title: 'The Monster',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP2 (Deluxe)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/7c71224818ac99b16570357b2f98e041/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-19bb8452c0c5709dde021b7f92c98ab7-6.mp3'
  },
  {
    title: 'Godzilla',
    artist: 'Eminem',
    album: 'Music To Be Murdered By',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/4d00a7848dc8af475973ff1761ad828d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-d5a91f3cf9c2b399c9734223623a3c67-6.mp3'
  },
  {
    title: 'Forgot About Dre',
    artist: 'Eminem',
    album: '2001',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1fc42f1ff89a633c0283c76b8d2f5106-6.mp3'
  },
  {
    title: "Cleanin' Out My Closet",
    artist: 'Eminem',
    album: 'The Eminem Show',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ec3c8ed67427064c70f67e5815b74cef/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f052966abff92ac3ca9e29fbe62b50eb-8.mp3'
  },
  {
    title: 'Smack That (Clean)',
    artist: 'Eminem',
    album: 'Konvicted',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/bc4d98904d61661cc6d7dd53745340d0/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c45ae335d3f89e153c37217f4495cefc-4.mp3'
  },
  {
    title: 'Beautiful',
    artist: 'Eminem',
    album: 'Relapse',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/64148d1a543348370dd295e9177258d3/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-e.dzcdn.net/stream/c-e92465651c31a0e9d61467de54e1aa35-11.mp3'
  },
  {
    title: 'Killshot',
    artist: 'Eminem',
    album: 'Killshot',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/d7478a964354c578fd78149000885921/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3be8a7e6ae1b8c6ba30a81bd3525a4b2-6.mp3'
  },
  {
    title: 'Mockingbird',
    artist: 'Eminem',
    album: 'Curtain Call: The Hits',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-655dfb802c35579d26a32136e3d0e7b3-12.mp3'
  },
  {
    title: 'The Real Slim Shady',
    artist: 'Eminem',
    album: 'The Marshall Mathers LP',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/941c2d3c366affdc662956559e078a4e/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-fbbe73417ae16fce847141b923953c98-4.mp3'
  },
  {
    title: 'Big Weenie',
    artist: 'Eminem',
    album: 'Encore',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/5026c46b38ed035092df6cfc5a4a288f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-b.dzcdn.net/stream/c-b24dc161bb766448c90f5c2b0dd0159e-9.mp3'
  },
  {
    title: 'Lose Yourself (From "8 Mile" Soundtrack)',
    artist: 'Eminem',
    album: 'Curtain Call: The Hits',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/e2b36a9fda865cb2e9ed1476b6291a7d/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-13039fed16a173733f227b0bec631034-12.mp3'
  },
  {
    title: "What's The Difference",
    artist: 'Eminem',
    album: '2001',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/0d9a24d054cbc5ab11843beed9f1422b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9b28e5435b8260cec4faf9ad50eb77f1-6.mp3'
  },
  {
    title: 'Fall',
    artist: 'Eminem',
    album: 'Kamikaze',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-651d9d92840db585ff2ec2651dc464d8-6.mp3'
  },
  {
    title: 'Lucky You',
    artist: 'Eminem',
    album: 'Kamikaze',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-ce814e88e289e9c11353ab0a976fa742-6.mp3'
  },
  {
    title: 'The Ringer',
    artist: 'Eminem',
    album: 'Kamikaze',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/bf74fc764097630ba58782ae79cfbee6/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-825009c6222c3c827f0d1da6dd8a2ae0-6.mp3'
  },
  {
    title: 'Take Me to Church',
    artist: 'Hozier',
    album: 'Hozier',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fac97fb1233da5f34e928a8c286fb02f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-3.dzcdn.net/stream/c-3e5c808f557ad9ffd3d7554b512efa50-6.mp3'
  },
  {
    title: 'Tell It To My Heart',
    artist: 'Hozier',
    album: 'Tell It To My Heart',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/a15a6ebbd7102367b7adaf469febb76b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8e63625085029af5beaa132db1d2cf45-4.mp3'
  },
  {
    title: 'The Bones (with Hozier)',
    artist: 'Hozier',
    album: 'The Bones (with Hozier)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/b24f0333fac3b158fd1ee767c58b6eb0/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1caa0434cacd941012cd7c9d6d3e382a-5.mp3'
  },
  {
    title: 'Blood Upon the Snow',
    artist: 'Hozier',
    album: 'God of War Ragnarök (Original Soundtrack)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/501a18ed1d5c26635cb15735bb32e27b/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-0.dzcdn.net/stream/c-0a9dc29fddcd9631e5ab9f1108b2e7a3-3.mp3'
  },
  {
    title: 'Would That I',
    artist: 'Hozier',
    album: 'Wasteland, Baby!',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fb4f208decceb187c58998e1c3984110/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-cb13e6554567718c46373e3af8141bf2-3.mp3'
  },
  {
    title: 'Someone New',
    artist: 'Hozier',
    album: 'Hozier (Expanded Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ff3c224a4830072746324b51bebcfe4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-863253e7db34b2baad3e3e0399457d22-5.mp3'
  },
  {
    title: 'Work Song',
    artist: 'Hozier',
    album: 'Hozier',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fac97fb1233da5f34e928a8c286fb02f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-f.dzcdn.net/stream/c-f29e15c393e8fa8f2b7a2e06706ae5c0-5.mp3'
  },
  {
    title: 'Like Real People Do',
    artist: 'Hozier',
    album: 'Hozier (Expanded Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ff3c224a4830072746324b51bebcfe4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-9.dzcdn.net/stream/c-9650c8b80bbaedf6b32e15f03d45701b-5.mp3'
  },
  {
    title: "Arsonist's Lullabye",
    artist: 'Hozier',
    album: 'From Eden EP',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/aa5f3662314f335ebb011e24d6abf181/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c2f3b6d981bead74b740a7a14a25d040-4.mp3'
  },
  {
    title: 'Almost (Sweet Music)',
    artist: 'Hozier',
    album: 'Wasteland, Baby!',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fb4f208decceb187c58998e1c3984110/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-1.dzcdn.net/stream/c-1095c2a61c9c4f8ca22c75ed469bdb0c-3.mp3'
  },
  {
    title: 'Jackie and Wilson',
    artist: 'Hozier',
    album: 'Hozier',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fac97fb1233da5f34e928a8c286fb02f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8092b580b69d1debbef504024fe03b26-5.mp3'
  },
  {
    title: 'Movement',
    artist: 'Hozier',
    album: 'Wasteland, Baby!',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fb4f208decceb187c58998e1c3984110/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-6.dzcdn.net/stream/c-6310ffae3160911a1869ac139942afce-3.mp3'
  },
  {
    title: 'Swan Upon Leda',
    artist: 'Hozier',
    album: 'Swan Upon Leda',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/28462fa3f26424ba6d1cecdc7133ad47/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-7.dzcdn.net/stream/c-702c74b986012aa1f5fea92213cae6dc-3.mp3'
  },
  {
    title: 'From Eden',
    artist: 'Hozier',
    album: 'Hozier',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fac97fb1233da5f34e928a8c286fb02f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-d.dzcdn.net/stream/c-deea31893968730aa7df5f3e61241073-5.mp3'
  },
  {
    title: 'Cherry Wine (Live)',
    artist: 'Hozier',
    album: 'Hozier',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/fac97fb1233da5f34e928a8c286fb02f/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-c.dzcdn.net/stream/c-c1128073612259940a3ea6a1da927e3a-4.mp3'
  },
  {
    title: 'Angel of Small Death and the Codeine Scene',
    artist: 'Hozier',
    album: 'Hozier (Expanded Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ff3c224a4830072746324b51bebcfe4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-82ccc6cf78760f6c1738b36ceb6e5778-5.mp3'
  },
  {
    title: 'It Will Come Back',
    artist: 'Hozier',
    album: 'Hozier (Expanded Edition)',
    image: 'https://e-cdns-images.dzcdn.net/images/cover/ff3c224a4830072746324b51bebcfe4c/250x250-000000-80-0-0.jpg',
    link: 'https://cdns-preview-8.dzcdn.net/stream/c-8499321631daf8b69c0045e57b71f600-5.mp3'
  }
]

module.exports = data