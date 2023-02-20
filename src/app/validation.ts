import { errorInterface, loanError } from "./Interface";
export class regValidation {
    constructor() { }
    
    emailregex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{1,5}$/i;
    passregex = /^[A-Za-z0-9!@#$%^&*()_]{6,16}$/i;
    phoneregex = /^[1-9]{1}[0-9]{9}$/i;
    nameregex = /^[a-zA-Z]{3,16}$/i;
     panRegex = /^[A-Z0-9]{10}$/;  // Proper Regex for pancard is "/^([A-Z]){5}([0-9]){4}([A-Z]){1}$/" include 5-Alphabet,4-digit,1-Alphabet
     aadharRegex = /^[1-9]{1}[0-9]{11}$/; //replacement regex is "/^\d{12}$/"
     incomeRegex = /^[1-9]{1}[0-9]{4,7}$/;
     loanRegex = /^[1-9]{1}[0-9]{3,7}$/;
     durationRegex = /^[1-9]{1}[0-9]{0,3}$/;
     addressRegex = /^[A-Za-z0-9\s,.'-]+$/;
     pincodeRegex = /^[1-9]{1}[0-9]{5}$/;
     placeRegex = /^[A-Za-z]{3,30}$/;
     stateRegex = /^[a-zA-Z.' ']{3,30}$/;
     countryRegex = /^(Russia|Canada|China|United States|Brazil|Australia|India|Argentina|Kazakhstan|Algeria)$/i;


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
    checkPan = (pan: string) => {
        if (pan === "") {
            loanError.panEr = "Pan Number is Required";
            return false
        }
        else {
            if (this.panRegex.test(pan) === false) {
                loanError.panEr = "Please Enter Valid Pan Number i.e ABCDE1234F"
                return false;
            }
            else {
                loanError.panEr = ("")
                return true;
            }
        }
    }
    checkAadhar = (aadhar: string) => {
        if (aadhar === "") {
            loanError.aadharEr = "Aadhar Number is Required";
            return false
        }
        else {
            if (this.aadharRegex.test(aadhar) === false) {
                loanError.aadharEr = "Please Enter Valid Aadhar Number i.e 123456789000"
                return false;
            }
            else {
                loanError.aadharEr = ("")
                return true;
            }
        }
    }
    checkIncome = (income: string) => {
        if (income === "") {
            loanError.incomeEr= "Income is Required";
            return false
        }
        else {
            if (this.incomeRegex.test(income) === false) {
                loanError.incomeEr = "Please Enter Min Income i.e ₹10000"
                return false;
            }
            else {
                loanError.incomeEr = ("")
                return true;
            }
        }
    }
    checkLoanAmt = (loanAmt: string) => {
        if (loanAmt === "") {
            loanError.loanAmtEr = "Loan Amount is Required";
            return false
        }
        else {
            if (this.loanRegex.test(loanAmt) === false) {
                loanError.loanAmtEr =  "Please Enter Min Income i.e ₹1000"
                return false;
            }
            else {
                loanError.loanAmtEr = ("")
                return true;
            }
        }
    }
    checkDuration = (duration: string) => {
        if (duration === "") {
            loanError.durationEr = "Duration is Required";
            return false
        }
        else {
            if (this.durationRegex.test(duration) === false) {
                loanError.durationEr =  "Please Enter Valid Duration i.e 12"
                return false;
            }
            else {
                loanError.durationEr = ("")
                return true;
            }
        }
    }
    checkAddress1 = (address1: string) => {
        if (address1 === "") {
            loanError.address1Er = "Address is Required";
            return false
        }
        else {
            if (this.addressRegex.test(address1) === false) {
                loanError.address1Er = "Please Enter Valid Address"
                return false;
            }
            else {
                loanError.address1Er = ("")
                return true;
            }
        }
    }
    checkAddress2 = (address2: string) => {
        if (address2 === "") {
            loanError.address2Er = "Address is Required";
            return false
        }
        else {
            if (this.addressRegex.test(address2) === false) {
                loanError.address2Er =  "Please Enter Valid Address";
                return false;
            }
            else {
                loanError.address2Er = ("")
                return true;
            }
        }
    }
    checkPincode = (pincode: string) => {
        if (pincode === "") {
            loanError.pincodeEr = "Zip Code is Required";
            return false
        }
        else {
            if (this.pincodeRegex.test(pincode) === false) {
                loanError.pincodeEr =  "Please Enter Valid Zip Code i.e 111111"
                return false;
            }
            else {
                loanError.pincodeEr = ("")
                return true;
            }
        }
    }
    checkPlace = (place: string) => {
        if (place === "") {
            loanError.placeEr = "Place is Required";
            return false
        }
        else {
            if (this.placeRegex.test(place) === false) {
                loanError.placeEr = "Please Enter Valid Place i.e Indore" 
                return false;
            }
            else {
                loanError.placeEr = ("")
                return true;
            }
        }
    }
    checkState = (state: string) => {
        if (state === "") {
            loanError.stateEr = "State Name is Required";
            return false
        }
        else {
            if (this.stateRegex.test(state) === false) {
                loanError.stateEr ="Please Enter Valid State i.e M.P/Goa"
                return false;
            }
            else {
                loanError.stateEr = ("")
                return true;
            }
        }
    }
    checkCountry = (country: string) => {
        if (country === "") {
            loanError.countryEr = "Country Name is Required";
            return false
        }
        else {
            if (this.countryRegex.test(country) === false) {
                loanError.countryEr = "Please Enter Valid Country i.e Indie or Brazil"
                return false;
            }
            else {
                loanError.countryEr = ("")
                return true;
            }
        }
    }

    validateAll = (data: any) => {
        let count = 0
        if (data.pan!=undefined &&this.checkPan(data.pan))
        count+=1
        if (data.aadhar!=undefined &&this.checkAadhar(data.aadhar))
        count+=1
        if (data.loanAmt!=undefined &&this.checkLoanAmt(data.loanAmt))
        count+=1
        if (data.income!=undefined &&this.checkIncome(data.income))
        count+=1
        if (data.duration!=undefined &&this.checkDuration(data.duration))
        count+=1
        if (data.address1!=undefined &&this.checkAddress1(data.address1))
        count+=1
        if (data.address2!=undefined &&this.checkAddress2(data.address2))
        count+=1
        if (data.pincode!=undefined &&this.checkPincode(data.pincode))
        count+=1
        if (data.place!=undefined &&this.checkPlace(data.place))
        count+=1
        if (data.state!=undefined &&this.checkState(data.state))
        count+=1
        if (data.country!=undefined &&this.checkCountry(data.country))
        count+=1
        if (data.email!=undefined &&this.checkEmail(data.email))
        count+=1
        if (data.password!=undefined &&this.checkPass(data.password))
        count+=1
        if (data.fname!=undefined && this.checkFname(data.fname))
        count+=1
        if (data.lname!=undefined && this.checkLname(data.lname))
        count+=1
        if (data.mobile!=undefined && this.checkMob(data.mobile))
        count+=1
        if (data.cpassword!=undefined &&this.checkCpass(data.cpassword, data.password))
        count+=1
        console.log(count)
        console.log(data)
        return count
    }
}
