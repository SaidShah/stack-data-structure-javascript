// Stacks

//push => to push an element onto a Stacks

// pop => to remove the top element of a stack

// peek => to display the top element of a stack

// length => to view the length of a stack

let stack = [] // this is the stack
document.getElementById('push').addEventListener('click',()=>{
  let value = document.getElementById('input_value').value
  if(value.length > 0){
    document.getElementById("peek_value").innerText = ""
  document.getElementById('input_value').value = ''
  stack.push(value)
  this.displayStack()
}
})

displayStack=(value)=>{
  stack.reverse()
  let newValue = stack.map(eachValue=>{
    return `<li>${eachValue}</li>`
  }).join("")
  document.getElementById("stack_data").innerHTML=newValue
  document.getElementById('length_value').innerText = stack.length
}

document.getElementById("pop").addEventListener('click',()=>{
  if(stack.length > 0){
  stack.reverse()
  stack.pop()
  stack.reverse()
  let newValue = stack.map(eachValue=>{
    return `<li>${eachValue}</li>`
  }).join("")
  document.getElementById("stack_data").innerHTML=newValue
  document.getElementById('length_value').innerText = stack.length
}else{
  document.getElementById('length_value').innerText = "The stack is empty"
}
})

document.getElementById("peek").addEventListener("click",()=>{
  if(stack.length > 0 ){
    document.getElementById("peek_value").innerText = stack[0]
  }else{
    document.getElementById("peek_value").innerText = "The stack is empty"
  }
})
