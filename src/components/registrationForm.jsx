import React ,{useState,useEffect} from 'react';


const useInput = (initialValue ,validations) =>{

    const [value ,setValue] = useState(initialValue);

    const [isDirty ,setDirty] = useState(false);

    const valid = useValidation(value,validations);

    const onChange = (e) =>{
        setValue(e.target.value);
    };

    const onBlur= (e) =>{
        setDirty(true);
    };

    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    };
};

const useValidation = (value ,validations) => {

    const [ isEmpty ,setEmpty] = useState(true);

    const [minLengthError,setMinLengthError] = useState(false);
    const [emailError,setEmailError] = useState(true);

    useEffect ( () => {
        //validations keys 
      for (let validation in validations){
        switch (validation){
            case 'minLength':
                value.minLength < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                break;
            case 'isEmpty':
                value ? setEmpty(false) : setEmpty(true);
                break;
            case 'isEmail':
                const re =  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                re.test(String(value).toLocaleLowerCase()) ? setEmailError(false) :setEmailError(true)
                break;
        }
      }
    },[value]);

    return {
        isEmpty,
        minLengthError,
        emailError
    };
};
const RegistrationForm =  () => {
    const email = useInput('', {isEmpty:true ,minLength:5,isEmail: true ,} );
    const password = useInput('',{isEmpty:true ,minLength:5});

 return (
   <div>
     <form>

        <h1>registration</h1>

        {(email.isEmpty && email.isDirty) && <div style={{color:'red'}}> Поле не может быть пустым</div>}

        {(email.isDirty) && <div style={{color:'red'}}>Неккоректная длина пароля</div>}

        {(email.emailError && email.isDirty) && <div style={{color:'red'}}>Неккоректный email</div>}

        <input value={email.value} onChange={e =>email.onChange(e)} onBlur={e => email.onBlur(e)} name='email' type='text'/>

        <input value={password.value} onChange={e => password.onChange(e)} onBlur={e => password.onBlur(e)} name='password' type='text'/>

        <button>reg</button>
     </form>
   </div>
 );
};

export default RegistrationForm;