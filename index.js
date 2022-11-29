setInterval(() => {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a,i)=>{
        let p = a.naturalWidth / a.naturalHeight;
        if (0.9 <= p && p <= 1.1)
            a.src = 'https://i.imgur.com/YkYg0g7.png'
        else if (1.1 < p && p <= 1.4)
            a.src = 'https://i.imgur.com/ASNYBxk.png';
        else if (1.4 < p && p <= 1.6)
            a.src = 'https://i.imgur.com/7Exp6FS.png';
        else if (1.6 < p && p <= 2)
            a.src = 'https://i.imgur.com/E6K9FeX.png';
        else if (1.85 < p && p <= 2.1)
            a.src = 'https://i.imgur.com/DOBwzkB.png';
        else if (0.8 <= p && p < 0.9)
            a.src = 'https://i.imgur.com/sZmpJsa.png';
        else if (0.7 <= p && p < 0.8)
            a.src = 'https://i.imgur.com/ylldbUR.png';
        else if (0.4 <= p && p < 0.7)
            a.src = 'https://i.imgur.com/oV1A3CP.png';
    });
    let searchresult = document.querySelectorAll('span span');
    searchresult.forEach((a,i)=>{
        if (a.innerText.includes('엔트로피')) a.innerText = a.innerText.replace(/엔트로피/g, '신트로피'); 
        if (a.innerText.includes('entrop')) a.innerText = a.innerText.replace(/entrop/g, 'sintrop');
        if (a.innerText.includes('Entrop')) a.innerText = a.innerText.replace(/Entrop/g, 'Sintrop');
    });
    let searchtitle = document.querySelectorAll('h3');
    searchtitle.forEach((a,i)=>{
        if (a.innerText.includes('엔트로피')) a.innerText = a.innerText.replace(/엔트로피/g, '신트로피'); 
        if (a.innerText.includes('entrop')) a.innerText = a.innerText.replace(/entrop/g, 'sintrop');
        if (a.innerText.includes('Entrop')) a.innerText = a.innerText.replace(/Entrop/g, 'Sintrop');
    });

}, 500);

