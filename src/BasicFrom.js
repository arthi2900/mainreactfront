import {useFormik} from "formik";
import *as yup from "yup";
const formValidationSchema=yup.object({
    email: yup.string().required("why not fill this email???"),
    password: yup.string().required("why not fill this password?").min(8,"need longer password").max(12,"maxium length of password"),
//min(8)
})
export function BasicFrom() {
  const formik = useFormik({
    initialValues: { email: "", password: "" },
  validationSchema:formValidationSchema, 
  onSubmit:(values)=>{
console.log("onSubmit",values);
  },
});
  return <div>Basic form
<form onSubmit={formik.handleSubmit}>
    <input name='email' id='email'type="email" placeholder='email' onChange={formik.handleChange}  value={formik.values.email} />
  <br/> {formik.errors.email && formik.errors.email?formik.errors.email :" "}
    <input name='password'  type="password" minlength="8" id='password' placeholder='password' 
    value={formik.values.password} onChange={formik.handleChange}/>
     {formik.errors.password &&formik.errors.password ? formik.errors.password: " "}
          <br/> <button>submit</button></form>
    
  </div>;
}



