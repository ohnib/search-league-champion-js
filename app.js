const search = () =>
{
    const searchChampion = document.getElementById('search-champion').value.toUpperCase();
    const storeChampion  = document.querySelector('.champion-list');
    const champion       = document.querySelectorAll('.champion');
    const championName   = document.getElementsByTagName('h2');

    for (let i = 0; i<championName.length; i++)
    {
        let match = champion[i].getElementsByTagName('h2')[0]

        if(match)
        {
            let value = match.textContent || match.innerHTML;

            if(value.toUpperCase().indexOf(searchChampion) > -1)
            {
                champion[i].style.display = '';
            }
            else
            {
                champion[i].style.display = 'none';
            }
        }
    }
}