(() => {
    setTimeout(() => {
        let links = [...document.getElementsByClassName('video-url-fadeable style-scope ytcp-video-info')];
        let url = links[0].innerText.match(/\w+$/)[0]
        links[0].innerText = "> GRAB EMBED CODE HERE <";
        links[0].addEventListener('click', (e) => {
            e.preventDefault();
            let embedString = `<iframe width="1280" height="720" src="https://www.youtube.com/embed/${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
            copyToClipboard(embedString);
        })

        const copyToClipboard = str => {
            const copyElement = document.createElement('textarea');
            copyElement.value = str;
            document.body.appendChild(copyElement);
            copyElement.select();
            document.execCommand('copy');
            document.body.removeChild(copyElement);
        };
    }, 5000);
})()
