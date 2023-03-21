window.addEventListener("DOMContentLoaded", e=>{
   setTimeout(() => {
    loading.style.display = 'none';
    no1.classList.remove('a');
  }, 1500);
});


    

  

  window.onscroll = function() {
    if(no5a.getBoundingClientRect().top <= window.innerHeight*40/100 && no5a.classList.contains('a')){
      no5a.classList.remove('a');
      document.querySelector('#no5a > div:first-child').classList.add('a');
       booking.classList.remove('a');
    }

    if(document.querySelector('.no4 > div').getBoundingClientRect().top <= window.innerHeight*40/100){
      document.querySelector('.no4 > div').classList.remove('a');
    }

    if(document.querySelector('.no3 > div').getBoundingClientRect().top <= window.innerHeight*40/100){
      document.querySelector('.no3 > div').classList.remove('a');
    }
    
    if(document.querySelector('.no2').getBoundingClientRect().top <= window.innerHeight*40/100){
      no2.classList.remove('a');
    }
  }
  
  kanan1s.onclick = e=>{
    kanan1a.style.marginLeft = -parseInt(e.target.classList.item(0)[e.target.classList.item(0).length-1])*100+'%';
  }

  kanan1a.onclick = e=>{
    if(!e.target.value || e.target.value == kanan1.classList.item(0)){return;}
    document.querySelectorAll('#no5a > div')[kanan1.classList.item(0)].classList.remove('a');
    document.querySelectorAll('#no5a > div')[e.target.value].classList.add('a');
    kanan1.classList.replace(kanan1.classList.item(0),e.target.value);
  }










 
