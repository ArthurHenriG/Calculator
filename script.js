const btn=document.querySelectorAll('.button');
const display=document.querySelector('.display');
const input=document.querySelector('input');
const btnClear=document.querySelector('.clear');
const btnEqual=document.querySelector('.equal');

function Input(){
    btn.forEach((btn)=>{
        btn.addEventListener('click',(ele)=>{
            input.value+=btn.value
            operate(input.value);
    }
        ) 
    })
    
}

function displayResult(value){

    btnEqual.addEventListener('click',()=>{
       display.textContent=value;
    })

}

function clear(){

    btnClear.addEventListener('click',()=>{
        input.value='';
        display.innerHTML='';
    })

}

clear()

function operate(input){

    let left;
    let right;
    let operator;
    let result;
    
    for(let i=0;i<input.length;i++){
        console.log('oi ' +input.slice(0,2));
        if(input[i]=='/'){
          left=input.slice(0,i);
          right=input.slice(i+1,input.length);
          operator=input[i];
          break;
        }else if(input[i]=='+'){
            console.log(input[i])
            left=parseFloat(input.slice(0,i));
            right=parseFloat(input.slice(i+1,input.length));
            operator=input[i];
            result=sum(left,right);
            break;
        }else if(input[i]=='-'){
            left=input.slice(0,i);
            right=input.slice(i+1,input.length);
            operator=input[i];
            break;
        }else if(input[i]=='*'){
            left=input.slice(0,i);
            right=input.slice(i+1,input.length);
            operator=input[i];
            break;
        }else if(input[i]=='%'){
           left=input.slice(0,i);
           right=input.slice(i+1,input.length);
           operator=input[i];
           break;
        }

        console.log('fora ' +left,operator,right,input);

}

displayResult(result);
        
}

function sum(leftNum,rightNum){
    return leftNum+rightNum;
}

function subtract(){

}

function multiply(){

}

function divide(){

}
