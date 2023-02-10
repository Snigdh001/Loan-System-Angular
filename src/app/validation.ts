export class Validation{
    constructor(){}

    emailregex=/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,5}$/i;    
    passregex=/^[A-Za-z0-9!@#$%^&*()_]{5,16}$/i;
    checkEmail(email:string){
        const [emailerror, setEmailError] = useState("")
        if (email== "")
        setEmailError("Email is required");
            else{
            if(this.emailregex.test(email) ==false){
                setEmailError("Please Enter Valid Email Address i.e xyz@abc.in");
                
            }
            else{
                setEmailError("")
                
            }
        }
    }
}





function useState(arg0: string): [any, any] {
    throw new Error("Function not implemented.");
}

