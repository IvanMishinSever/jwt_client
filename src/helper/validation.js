const  validatePassword = (password) => {
    if (password.length <= 5) {
        const message = `Минимальная длина пароля ${5} символов`;
        //const message = `${password.length}`;
        return message;
    } else {
       // const message = "ВСЕ ОК";
        return null;
    }
    


}
const  validateEmail= (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(email)) {
        const message = "Неправильный формат почты"; 
        return message;  
    }

    return null;
}





export {validatePassword,validateEmail};