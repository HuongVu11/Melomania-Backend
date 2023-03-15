// 'X-RapidAPI-Key': 'eca3477812mshb662ed4096a98c5p12e09fjsn9fb058ca2f2d',

const newdata = async (search) => {
    const result = []
    try {
        const response = await fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${search}`, {
            method: "get",
            headers: {
            "Content-Type": "application/json",
            'X-RapidAPI-Key': YOURAPIKEY,
            'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
        }})
        const json = await response.json()
        const data = await json.data
        //console.log (json, 'json')
        const resultArray = await data.map(el => {
            let item = {
                idDeezer: el.id,
                title: el.title,
                artist: search,
                album: el.album.title,
                preview: el.preview,
                imgMedium: el.album.cover_medium,
                imgBig: el.album.cover_big,
                link: el.link
            }
            result.push(item)
        })
        return result
    } catch (error) {
        console.log(error)
    }
}
newdata('Christina Perri')
.then(function(result) {
    console.log(result)
})