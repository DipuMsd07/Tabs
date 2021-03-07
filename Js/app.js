
let btns = document.querySelectorAll('.tab-btn');
let about = document.querySelector('.about');
let articles = document.querySelectorAll('.content');

about.addEventListener('click', function(e){
   
    // console.log(e.target.dataset.id);
    let id = e.target.dataset.id; // Stores Btn Name
    if (id){            // if btn exist then
        // remove active from other buttons
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        });
        // hide all articles
        articles.forEach(function(article){
           article.classList.remove('active'); 
        });
        let element = document.getElementById(id);
        element.classList.add('active');
    }
});
