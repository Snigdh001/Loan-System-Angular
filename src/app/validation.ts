import { errorInterface } from "./Interface";
export class regValidation {
    constructor() { }
    
    emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,5}$/i;
    passregex = /^[A-Za-z0-9!@#$%^&*()_]{5,16}$/i;
    phoneregex = /^[1-9]{1}[0-9]{9}$/i;
    nameregex = /^[a-zA-Z]{3,16}$/i;
    checkEmail(email: string) {
        if (email === "") {
            errorInterface.emailEr = "Email is Required";
            return false
        }
        else {
            if (this.emailregex.test(email) === false) {
                errorInterface.emailEr = "Please Enter Valid Email Address i.e xyz@abc.in";
                return false
            }
            else {
                errorInterface.emailEr = ""
                return true
            }
        }
    }
    checkFname = (fname: string) => {
        if (fname === "") {
            errorInterface.fnameEr = "First Name is Required";
            return false
        }
        else {
            if (this.nameregex.test(fname) === false) {
                errorInterface.fnameEr = "Please Enter Valid Name (min 3 characters)";
                return false;
            }
            else {
                errorInterface.fnameEr = ("")
                return true;
            }
        }
    }
    checkLname = (lname: string) => {
        if (lname === "") {
            errorInterface.lnameEr = "Last Name is Required";
            return false
        }
        else {
            if (this.nameregex.test(lname) === false) {
                errorInterface.lnameEr = "Please Enter Valid Name (min 3 characters)";
                return false;
            }
            else {
                errorInterface.lnameEr = ("")
                return true;
            }
        }
    }
    checkPass = (password: string) => {
        if (password === "") {
            errorInterface.passwordEr = "Password is Required";
            return false
        }
        else {
            if (this.passregex.test(password) === false) {
                errorInterface.passwordEr = "Please Enter Valid Password (min 6 characters)";
                return false;
            }
            else {
                errorInterface.passwordEr = ""
                return true;
            }
        }
    }
    checkCpass = (cpassword: string, password: string) => {
        if (cpassword === "") {
            errorInterface.cpasswordEr = "Confirm Password is Required";
            return false
        }
        else {
            if (cpassword !== password) {
                errorInterface.cpasswordEr = "Both Password Must be Same";
                return false
            }
            else {
                errorInterface.cpasswordEr = ""
                return true;

            }
        }
    }
    checkMob = (mobile: string) => {
        if (mobile === "") {
            errorInterface.mobileEr = "Mobile is Required";
            return false
        }
        else {
            if (this.phoneregex.test(mobile) === false) {
                errorInterface.mobileEr = "Please Enter Valid Mobile Number i.e 1234567890";
                return false;
            }
            else {
                errorInterface.mobileEr = ""
                return true;
            }
        }
    }

    validateAll = (data: any) => {
        let count = 0
        if (this.checkEmail(data.email))
        count+=1
        if (this.checkPass(data.password))
        count+=1
        if (this.checkFname(data.fname))
        count+=1
        if (this.checkLname(data.lname))
        count+=1
        if (this.checkMob(data.mobile))
        count+=1
        if (this.checkCpass(data.cpassword, data.password))
        count+=1
        return count
    }
}







