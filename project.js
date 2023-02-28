 let all=document.querySelectorAll('.all-image');
 all.forEach(item =>{
item.addEventListener('click',e=>{

    document.querySelector('.displayed-image').src=e.target.src;

})
 }
    )
