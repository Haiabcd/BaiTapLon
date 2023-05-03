
//Constructor //đối tương Validator
function Validator(options){


    var selectorRules ={};

    //Hàm thực hiện validate

    function validate(inputElement,rule){
        var errorMessage ;
        var errorElement = inputElement.parentElement.querySelector(options.errorSelector);
        

        //Lấy ra các rules của selector
        var rules= selectorRules[rule.selector];
         //Lặp qua từng rules và kiểm tra
         //Nếu có lỗi thì dừng việc kiểm tra
        for(var i=0;i< rules.length;++i){
           errorMessage= rules[i](inputElement.value);
           if(errorMessage) break;
        }
        
        if(errorMessage){
            errorElement.innerText= errorMessage;
            inputElement.parentElement.classList.add('invalid');
           
        }else{
            errorElement.innerText='';    
            inputElement.parentElement.classList.remove('invalid');          
        }
        return !errorMessage;

    }

    //Lấy element của form cần validate
   var formElemet = document.querySelector(options.form);

   if(formElemet){

    //Khi submit
    formElemet.onsubmit=function(e){
        e.preventDefault();


       var isFormValid = true;

        //Lặp qua từng rules và validate
        options.rules.forEach(function(rule){
            var inputElement = formElemet.querySelector(rule.selector);
            var isValib=validate(inputElement,rule);
            if(!isValib){
                isFormValid= false
            }
        });
      



        if(isFormValid){
            //Trường hợp Submit vs Javascrip
            if(typeof options.onSubmit === 'function'){

                var enableInputs = formElemet.querySelectorAll('[name]:not[disabled]');

                var formValues = Array.from(enableInputs).reduce(function(values,input){
                           return (values[input.name] = input.value) && values;
                },{});

                 
                options.onSubmit(formValues);
            }
            //TH submit bới hành vi mặc định
            else{
                    formElemet.submit();
            }
        }
    }



    //Lặp qua mỗi rule và xử lí (lắng nghe)

      options.rules.forEach(function(rule){

        //Lưu lại các rule cho mỗi input
     
       if(Array.isArray(selectorRules[rule.selector])){
          selectorRules[rule.selector].push(rule.test);
       }else{
          selectorRules[rule.selector] = [rule.test];
       }


        //    console.log(rule.selector);
        var inputElement = formElemet.querySelector(rule.selector);
      
        if(inputElement){
            //Xử lí trường hợp Blur khỏi input
            inputElement.onblur= function(){
                 //value:inputElemet.value
                // test func:rule.test
                validate(inputElement,rule);
            }
            //Xử lí trương hợp khi người dùng nhập
            inputElement.oninput = function(){
                var errorElement = inputElement.parentElement.querySelector('.form-message');
                errorElement.innerText='';    
                inputElement.parentElement.classList.remove('invalid');          

            }
        }



      });
      

   }

}


//Định nghĩa các rule
//Nguyên tác 
//1. Có lỗi ==>trả ra message lỗi
//2. Khi hợp lệ ==> Không trả ra cái gì cả (underfined)
Validator.isRequires = function(selector,message){
      return{
        selector:selector,
        test:function(value){
                return value.trim() ? undefined : message||'Vui lòng nhập trường này'
                //Nếu có giá trị trả underfined
        }
      };
}


Validator.isEmail = function(selector){
    return{
        selector:selector,
        test:function(value){
    var regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return regex.test(value) ?undefined :'Trường này phải là email ';

        }
      };
}
Validator.minLength = function(selector,min){
    return{
        selector:selector,
        test:function(value){
   
    return value.length >= min ?undefined :'Vui lòng nhập tối thiểu 6 ki tự';

        }
      };
}
Validator.isConfirmaed = function(selector,getConfirmValue,message){
    return{
        selector:selector,
        test:function(value){
            return value === getConfirmValue() ? undefined :message|| 'Giá tri nhập vào không chính xác';

        }
      };
}