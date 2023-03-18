const data = [
    {   title: 'Remeber The Time',
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
      title: 'True Colors',
      artist: 'The Weeknd',
      album: 'Starboy (Deluxe)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/81bd09c29b309917c80adb1a1ac8eabb/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-6.dzcdn.net/stream/c-6181e59423c76726ec936f24f4620d34-5.mp3'
    },
    {
      title: 'Die For You',
      artist: 'The Weeknd',
      album: 'Starboy (Deluxe)',
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
      image: 'https://e-cdns-images.dzcdn.net/images/cover/0d961a8d3d3c425a512bb79f2ad5c25d/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b930e33bb5ecec192705742f7184ebf5-5.mp3'
    },
    {
      title: 'Ordinary Life',
      artist: 'The Weeknd',
      album: 'Starboy (Deluxe)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/81bd09c29b309917c80adb1a1ac8eabb/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b930e33bb5ecec192705742f7184ebf5-5.mp3'
    },
    {
      title: 'The Weekend',
      artist: 'The Weeknd',
      album: 'Ctrl',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/a1a3326c5d9176c763fc3fd847b86681/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-2.dzcdn.net/stream/c-2b6f089302ac9cbbf7eceb2b0a60d650-8.mp3'
    },
    {
      title: 'Die For You',
      artist: 'The Weeknd',
      album: 'Starboy (Deluxe)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/0d961a8d3d3c425a512bb79f2ad5c25d/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-a.dzcdn.net/stream/c-ad5a94438c6291cd7fa8293cb1f1b27a-4.mp3'
    },
    {
      title: 'Blinding Lights',
      artist: 'The Weeknd',
      album: 'After Hours',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-0cb3c26f5c0be8b37d90560955431118-8.mp3'
    },
    {
      title: 'Save Your Tears',
      artist: 'The Weeknd',
      album: 'After Hours',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fd00ebd6d30d7253f813dba3bb1c66a9/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-3.dzcdn.net/stream/c-31bb797f043b544baa792ccf827e5cd8-8.mp3'
    },
    {
      title: 'The Weekend',
      artist: 'The Weeknd',
      album: "The Devil Don't Sleep",
      image: 'https://e-cdns-images.dzcdn.net/images/cover/3372f7128d8694a1bf959269955c21dd/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-1.dzcdn.net/stream/c-14e9add772754de54670278cdcccefe7-12.mp3'
    },
    {
      title: 'Die For You',
      artist: 'The Weeknd',
      album: 'Starboy',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/134778e4c4f19ea71c82408300925a9a/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-1.dzcdn.net/stream/c-14d6eb999130572d425407f1c11881d4-6.mp3'
    },
    {
      title: 'Nothing Without You',
      artist: 'The Weeknd',
      album: 'Starboy (Deluxe)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/0d961a8d3d3c425a512bb79f2ad5c25d/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-8.dzcdn.net/stream/c-8525d8333337593721ed66e84b3e1af0-5.mp3'
    },
    {
      title: 'The Weekend (Radio Edit)',
      artist: 'The Weeknd',
      album: 'The Weekend',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/fd17986f713a23aca82f72f6ab4d1488/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-a.dzcdn.net/stream/c-a00202896419e449b0cd78ff5f6166d0-4.mp3'
    },
    {
      title: 'The Hills',
      artist: 'The Weeknd',
      album: 'Beauty Behind The Madness',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-6.dzcdn.net/stream/c-6096b1784a5b1bce1593f014c8829e94-9.mp3'
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
      title: 'Heartless',
      artist: 'The Weeknd',
      album: 'After Hours',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/f520bf0be2e3cfc476824e75d20a164a/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-0e094730194c69a3c15a2de8f2c84686-6.mp3'
    },
    {
      title: 'The Weekend',
      artist: 'The Weeknd',
      album: 'The Weekend',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/91545bd572ad92b85d9dc1f30bceb4f2/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-c.dzcdn.net/stream/c-c7da66d31a76c1e395d66d0568d93924-3.mp3'
    },
    {
      title: "Can't Feel My Face",
      artist: 'The Weeknd',
      album: 'Beauty Behind The Madness',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/eea9f7fc913300e40307a0ff70dc73cf/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-a.dzcdn.net/stream/c-a2cc3ee9a7ee51307ceeacf596db247d-8.mp3'
    },
    {
      title: 'Earned It (Fifty Shades Of Grey) (From The "Fifty Shades Of Grey" Soundtrack)',
      artist: 'The Weeknd',
      album: 'Earned It (Fifty Shades Of Grey) (From The "Fifty Shades Of Grey" Soundtrack)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/dbfea307a9af808bf4395b9d78820870/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-01b61fe234a101d04c5b4ed70ddbe0ec-4.mp3'
    },
    {
      title: 'The Weekend',
      artist: 'The Weeknd',
      album: "It's A Crazy World",
      image: 'https://e-cdns-images.dzcdn.net/images/cover/846b6617a324aa41ed8f5c8c74094a94/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-9.dzcdn.net/stream/c-9e5a7e07ccb923f7e94630024024097f-4.mp3'
    },
    {
      title: "Creepin'",
      artist: 'The Weeknd',
      album: 'HEROES & VILLAINS',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/862ab860ff69c30deeb5979db6e46b62/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-5.dzcdn.net/stream/c-51d8ab91dd9267dc4c1dfb19552d88b4-4.mp3'
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
      title: 'Holier',
      artist: 'Hozier',
      album: 'PERMANENT.RADIANT',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/408ba1891d10ce907a0dd450e97e3599/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-0fe9b5fab3dd410579ffc469e24da01c-3.mp3'
    },
    {
      title: 'Blood Upon the Snow',
      artist: 'Hozier',
      album: 'God of War Ragnarök (Original Soundtrack)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/501a18ed1d5c26635cb15735bb32e27b/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-0a9dc29fddcd9631e5ab9f1108b2e7a3-3.mp3'
    },
    {
      title: 'Holier',
      artist: 'Hozier',
      album: 'Raven',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/7f6cb8391bc4c2814e169ea5e985620d/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-9.dzcdn.net/stream/c-9f2f460c6bce3db6059ac730dfdb9d4f-3.mp3'
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
    },
    {
      title: 'Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)',
      artist: 'Rihanna',
      album: 'Lift Me Up (From Black Panther: Wakanda Forever - Music From and Inspired By)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/99a8eb360d6b04b1f9b8c205c22ae88d/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-0.dzcdn.net/stream/c-0c43e5237f9b36b0dad5f96e894af372-4.mp3'
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
      title: 'Bitch Better Have My Money',
      artist: 'Rihanna',
      album: 'Bitch Better Have My Money',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/4d781957d9522822aaac8d55d7d534ed/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-2.dzcdn.net/stream/c-28a72b4d8c28817a85546bb025ce5d1c-6.mp3'
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
      title: 'Rihanna',
      artist: 'Rihanna',
      album: '1987',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/c58abd8177b029311481e9b436032d39/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-1.dzcdn.net/stream/c-1e9ed8d9fac4bbcb61faab7cfdb980dd-3.mp3'
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
      title: 'Rihanna (Club Version)',
      artist: 'Rihanna',
      album: 'Rihanna (Club Version)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/0884203a4c2dbf97501413f7a13e63ff/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-c.dzcdn.net/stream/c-c0e92d05cfc0328b3cdbe09d74a02c09-4.mp3'
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
      title: 'Rihanna',
      artist: 'Rihanna',
      album: 'Rihanna',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/cededb72c1c3e53f00102908e1a1649e/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-9.dzcdn.net/stream/c-965699774327bce210a640e119d50b9e-3.mp3'
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
      title: 'Rihanna',
      artist: 'Rihanna',
      album: 'Quantas Vezes Não Me Achei (Deluxe)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/da133a1ec5d82c8d186e8d1cd8ffa053/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-3.dzcdn.net/stream/c-3035c949df886d5b85ac2b32fbd9ce87-2.mp3'
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
      title: 'Rihanna',
      artist: 'Rihanna',
      album: 'Rihanna',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/1d71e505f1101c16eb40d32fd2a4f6c5/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b0b9455fcf43f71f2491a1cca6fbe089-2.mp3'
    },
    {
      title: 'human',
      artist: 'Christina Perri',
      album: 'human',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/246675c90620637eb02cae5999e40a95/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-6.dzcdn.net/stream/c-6e9b06613352e6b89edfdee5959d52c3-4.mp3'
    },
    {
      title: 'A Thousand Years',
      artist: 'Christina Perri',
      album: 'A Thousand Years',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/9f361f0228d08731b70cb0c996520606/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b944ecc72fe487f50fcd2cf9160ad79f-11.mp3'
    },
    {
      title: 'you are my sunshine',
      artist: 'Christina Perri',
      album: 'songs for carmella: lullabies & sing-a-longs',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-7.dzcdn.net/stream/c-7ccef94907e835ca3d9e8daef18f32b9-5.mp3'
    },
    {
      title: 'tonight you belong to me (feat. Paul & Carmella Costabile)',
      artist: 'Christina Perri',
      album: 'songs for carmella: lullabies & sing-a-longs',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-a.dzcdn.net/stream/c-ac858dda69fbe3a981186a7715b4ae4f-5.mp3'
    },
    {
      title: 'A Thousand Years',
      artist: 'Christina Perri',
      album: 'The Twilight Saga: Breaking Dawn - Part 1 (Original Motion Picture Soundtrack)',
      image: 'https://e-cdns-images.dzcdn.net/images/cover/f3e03e9766c317c26aca7d8d3c00e51b/250x250-000000-80-0-0.jpg',
      link: 'https://cdns-preview-b.dzcdn.net/stream/c-b944ecc72fe487f50fcd2cf9160ad79f-11.mp3'
    },
    // {
    //   title: 'arms',
    //   artist: 'Christina Perri',
    //   album: 'lovestrong.',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-d.dzcdn.net/stream/c-d9f4e12293c325ad9ba9fc723f13224a-7.mp3'
    // },
    // {
    //   title: 'Jar of Hearts',
    //   artist: 'Christina Perri',
    //   album: 'lovestrong.',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-c.dzcdn.net/stream/c-c1694e8cfa5424dcbeb3f8fbc983030b-6.mp3'
    // },
    // {
    //   title: 'distance',
    //   artist: 'Christina Perri',
    //   album: 'lovestrong.',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-9.dzcdn.net/stream/c-99c2b4ab44c801e5ceff4b5ca2f0721d-7.mp3'
    // },
    // {
    //   title: 'the lonely',
    //   artist: 'Christina Perri',
    //   album: 'lovestrong.',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-2.dzcdn.net/stream/c-237f014bb0eb0c164b288f6e77809e06-7.mp3'
    // },
    // {
    //   title: 'remember me',
    //   artist: 'Christina Perri',
    //   album: 'songs for carmella: lullabies & sing-a-longs',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-f.dzcdn.net/stream/c-fe3a3b81546201c91d6d278724790b4e-5.mp3'
    // },
    // {
    //   title: 'Brave Enough (feat. Christina Perri)',
    //   artist: 'Christina Perri',
    //   album: 'Brave Enough',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/74fc0e4f16db17a7b62e1a4d04639201/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-c.dzcdn.net/stream/c-cff60864fb7f5fd233869f52bef60ef6-3.mp3'
    // },
    // {
    //   title: 'here comes the sun',
    //   artist: 'Christina Perri',
    //   album: 'here comes the sun',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/cbe29677129cf551b40251ca72cee20a/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-307bff975ed45a7c9468b7734e1e0173-3.mp3'
    // },
    // {
    //   title: 'home',
    //   artist: 'Christina Perri',
    //   album: 'a lighter shade of blue',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/3695c80e8af2be314853719753059818/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-c.dzcdn.net/stream/c-c05211ae4c3b9adb2ef991af4bff119c-3.mp3'
    // },
    // {
    //   title: 'a dream is a wish your heart makes',
    //   artist: 'Christina Perri',
    //   album: 'songs for carmella: lullabies & sing-a-longs',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-3bfcb2114580060ef1248db5be988493-5.mp3'
    // },
    // {
    //   title: 'the words',
    //   artist: 'Christina Perri',
    //   album: 'head or heart',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-b.dzcdn.net/stream/c-bfcf995d6fa812d1f0ef3b54362e1703-5.mp3'
    // },
    // {
    //   title: 'tiny victories (album)',
    //   artist: 'Christina Perri',
    //   album: 'tiny victories',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/13a8ce0681dd3b34b4a77c2b8881d98a/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-3295a8973dc285d2beb1d10e234d8e70-3.mp3'
    // },
    // {
    //   title: 'evergone',
    //   artist: 'Christina Perri',
    //   album: 'evergone',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/7a26b9466b67097c8154dca74f306097/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-3c537580af045c0caa00404b7ee22df0-3.mp3'
    // },
    // {
    //   title: 'sea of lovers',
    //   artist: 'Christina Perri',
    //   album: 'head or heart',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-f.dzcdn.net/stream/c-f9b2fcf37cfb371c9842430641cc711f-5.mp3'
    // },
    // {
    //   title: 'somewhere over the rainbow',
    //   artist: 'Christina Perri',
    //   album: 'songs for rosie',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/cbe29677129cf551b40251ca72cee20a/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-3383cc05e4dbf712977bbf45125f3123-3.mp3'
    // },
    // {
    //   title: 'tragedy',
    //   artist: 'Christina Perri',
    //   album: 'lovestrong.',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/9fc23aad7434237faf2875d432a9c909/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-4.dzcdn.net/stream/c-460ce39b1b2167fbc4067b7ee37f3f97-8.mp3'
    // },
    // {
    //   title: 'Hero (feat. Christina Perri)',
    //   artist: 'Christina Perri',
    //   album: 'Blood, Sweat & 3 Years',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/07c2b8a5f0995e9e265a108c605a1517/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-e.dzcdn.net/stream/c-ed51f065512c359519a9ba9791cdbfef-4.mp3'
    // },
    // {
    //   title: 'ave maria',
    //   artist: 'Christina Perri',
    //   album: 'a very merry perri christmas',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/35193e3cfde2b74eae9eb1cc8dbd5455/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-4.dzcdn.net/stream/c-455de14aad8f126752c06fe14176a2f5-5.mp3'
    // },
    // {
    //   title: 'dream a little dream of me',
    //   artist: 'Christina Perri',
    //   album: 'songs for carmella: lullabies & sing-a-longs',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/1fcf9efca87eabf598149a72f6e055a3/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-3.dzcdn.net/stream/c-3c80ee6181945292bc8fcfe924d83dad-5.mp3'
    // },
    // {
    //   title: 'i believe',
    //   artist: 'Christina Perri',
    //   album: 'head or heart',
    //   image: 'https://e-cdns-images.dzcdn.net/images/cover/ca3a068d93c10472c34bd83fefc89a3b/250x250-000000-80-0-0.jpg',
    //   link: 'https://cdns-preview-f.dzcdn.net/stream/c-f66ef6c588c60e97ed1f581b9aaab899-4.mp3'
    // }
]

module.exports = data