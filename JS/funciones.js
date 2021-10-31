
const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn')


let timeout = null;

let errors = {
    nickName: true
}

document.querySelectorAll('.form-box').forEach((box)=>{
const boxInput = box.querySelector('input');

boxInput.addEventListener('keydown', (event) => {

    clearTimeout(timeout);
    timeout = setTimeout(()=>{
console.log(`input ${boxInput.name} value:`, boxInput.value)
validation(box, boxInput)
    },300);
});
});

validation =(box, boxInput)=>{
    if(boxInput.name == 'nickName'){
        if(boxInput.value == ''){
            showError(true, box);
        }else{
            showError(false, box)
            }
        }
    };

    showError = (check,box,boxInput)=> {
        if(check){
            box.classList.remove ('form-success');
            box.classList.add('form-error')
            errors[boxInput.name] = true;
        }else{
            box.classList.remove ('form-error');
            box.classList.add('form-success')
            errors[boxInput.name] = false;
            }
    }

    submitController = () => {
        console.log(errors);
        if(errors.nickName){
            submitButton.toggleAttribute('diseabled', true)
        }else{
            submitButton.toggleAttribute('disiable', false)
        }
    };
