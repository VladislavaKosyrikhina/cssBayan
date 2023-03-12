/*document.querySelectorAll('.text').forEach((item)=>{
    item.addEventListaner('click', ()=>{
        const content= document.querySelectorAll('.content');
        if(content.classlist.toggle (".content_active")){
            content.classlist.remove (".content_active")
        }else{
            document
                .querySelectorAll('.paragraph')
                .forEach(child)=> child.classlist.remove(".content_active")
            parent.classlist.toggle (".content_active");
        
        }
        
        
    });
});*/

window.addEventListener('DOMContentLoaded', () => {

    const accordion = document.querySelector ('.accordion');
          cont = document.querySelectorAll ('.content');
          paragraph = document.querySelectorAll ('.paragraph');

    function hideContent () {
        cont.forEach (item =>{
            item.classList.add ('hide');
            item.classList.remove ('show', 'fade');
        });

    }

    function showContent (i=0) {
        cont[i].classList.add ('show', 'fade');
        cont[i].classList.remove ('hide');
    }

    hideContent();
    showContent();

    accordion.addEventListener ('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains ('paragraph')) {
            cont.forEach ((item, i) => {
                if (target == item){
                    hideContent();
                    showContent(i);
                }
            });
        }

    });
});
