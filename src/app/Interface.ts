 export const signupInterface= {
fname:"",
lname:"",
email:"",
mobile:"",
password:"",
cpassword:"",

}
export const errorInterface= {
    fnameEr:"",
    lnameEr:"",
    emailEr:"",
    mobileEr:"",
    passwordEr:"",
    cpasswordEr:"",
    }
export const allUserRes ={
        id: '',
      fname: '',
      lname:'',
      email:'',
      mobile:'',
      role:'',
      }
export interface allUserApi {
        status: number,
      error: string,
      data:typeof allUserRes[],
      totalpages:number,
      }