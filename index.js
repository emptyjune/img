setInterval(() => {
    let imgs = document.querySelectorAll('img');
    imgs.forEach((a,i)=>{
        let p = a.naturalWidth / a.naturalHeight;
        if (0.9 <= p && p <= 1.1)
            a.src = 'https://i.imgur.com/YkYg0g7.png'
        else if (1.2 < p && p <= 1.4)
            a.src = 'https://i.imgur.com/ASNYBxk.png';
        else if (1.4 < p && p <= 1.55)
            a.src = 'https://i.imgur.com/7Exp6FS.png';
        else if (1.66 < p && p <= 1.85)
            a.src = 'https://i.imgur.com/E6K9FeX.png';
        else if (0.8 <= p && p < 0.9)
            a.src = 'https://i.imgur.com/sZmpJsa.png';
        else if (0.7 <= p && p < 0.8)
            a.src = 'https://i.imgur.com/ylldbUR.png';
        
    })
}, 500);