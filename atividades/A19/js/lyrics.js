function findLyrics(artist, song)
{
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
}

const form = document.querySelector('#lyrics_form');
form.addEventListener(`submit`, e1 =>
{
    e1.preventDefault();
    doSubmit();
})

/*function doSubmit()
{
    const lyrics_e1 = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");
    lyrics_e1.innerHTML = `<div class="spinner-grow" rols="status"><span class="sr-only">Carregando...?</span></div>`
    //then
    findLyrics(artist.value, song.value)
        .then(response => response.json())
        .then(data =>
            {
                if(data.lyrics)
                {
                    lyrics_e1.innerHTML = data.lyrics;
                }
                else 
                {
                    lyrics_e1.innerHTML = data.error;
                }
            })
        .catch(err =>
            {
                lyrics_e1.innerHTML = 'Oops! ${err}';
            })
    
}*/

async function doSubmit()
{
    const lyrics_e1 = document.querySelector("#lyrics");
    const artist = document.querySelector("#artist");
    const song = document.querySelector("#song");

    lyrics_e1.innerHTML = `<div class="spinner-grow" rols="status"><span class="sr-only">Carregando...?</span></div>`
    
    // async await
    try
    {
        const lyricsResponse = await findLyrics(artist.value, song.value);
        const data = await lyricsResponse.json();
        if(data.lyrics)
            lyrics_e1.innerHTML = data.lyrics;
        else
            lyrics_e1.innerHTML = data.error
    }
    catch (err)
    {
        console.log(err);
    }
}