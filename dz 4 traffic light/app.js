function trafLight(){ 
   var trafficLight = document.querySelectorAll('.light')
   console.log(trafficLight)
   var text = document.querySelector('.rule')
   var color = prompt('enter a trafficlight color')
   if(color === 'red' || color === 'Red'){
      trafficLight[0].style.backgroundColor = 'red'
      text.textContent = 'STOP!'
   }else if(color === 'yellow' || color === 'Yellow'){
      trafficLight[1].style.backgroundColor = 'yellow'
      text.textContent = 'BE READY!'
   }else if(color === 'green' || color === 'Green'){
      trafficLight[2].style.backgroundColor = 'green'
      text.textContent = 'GO!'
   }else{
      alert('404 not found (enter only trafficLight colors)')
   }
}
trafLight()
