let display = document.getElementById('display');
document.querySelectorAll('button').forEach((btn)=>{
    btn.addEventListener('click',()=>{ 
    switch(btn.value)
        {
            case 'C':
                display.innerText="";
                break;
            case 'CE':
                display.innerText="";
                break;
            case "answer":
                display.innerText = eval((display.innerText).replace('%','/100*'));
                break;
            case "backspace":
                display.innerText=display.innerText.slice(0,-1);
                break;
            
            default:
                display.innerText += btn.value;
            }
          })
        })
        
