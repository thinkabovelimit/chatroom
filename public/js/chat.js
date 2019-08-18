const socket=io()


/*socket.on('countupdated',(count)=>{
    console.log('The count has been updated',count)
})

var el=document.querySelector('#inc');
  el.addEventListener('click', ()=>{
      console.log('clicked')
      socket.emit('increment')
  })*/
socket.on('message',(message)=>{
    console.log(message)
})
var mes=document.getElementById('form1');
var el=document.querySelector('#myform');
el.addEventListener('submit',(e)=>{
e.preventDefault()
var message=mes.value
socket.emit('sendmessage',message)

})
document.querySelector("#loc").addEventListener('click',()=>{
    if(!navigator.geolocation){
        return alert('Geolocation is not supported')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
        socket.emit('sendlocation',position)
    })
})

