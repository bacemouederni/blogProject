import { Link } from 'react-router-dom'
import * as swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import axios from "axios"

  const Login = () => {
    var Navigate = useNavigate()
    const Toast = swal.mixin({
      toast: true,

      position: 'espace-arround',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
         toast.addEventListener('mouseenter', swal.stopTimer)
         toast.addEventListener('mouseleave', swal.resumeTimer)
       },
     })
  
     const validationSchema = Yup.object().shape({
       email: Yup.string().email('Invalide email.').required('Email is required.'),
       password: Yup.string()
         .required('Password is required.')
        
     })
    const initialValues = {
      email: '',
      password: '',
    }
  
    async function handleSubmit(values,resetForm) {
      await axios.post('http://localhost:8081/login', values)
      .then(response => {
        console.log(response.data)
        if (response.data.email === values.email) {
        Toast.fire({
          icon: 'success',
          title: 'You are logged in successfully',
        })
        Navigate('/dashboard')
        }
        else {
          Toast.fire({
            icon: 'error',
            title: 'login or password incorrecte',
          })
        }
      })
      }

  return (
    <div className="container">
    <div className="row row_sign">
      <div className="col-md-6 offset-md-3 pt-3">
        <h1 className="text-center">Sign In</h1>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values) => handleSubmit(values)}
        >
          {({ resetForm }) => (
            <Form>
              <div className="form-group mb-3">
                <label htmlFor="email">Email:</label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter your email address here"
                />
                <ErrorMessage name="email" component="small" className="text-danger" />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password:</label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  placeholder="Enter your password here"
                />
                <ErrorMessage name="password" component="small" className="text-danger" />
              </div>

              <div className="d-grid gap-2">
                <button type="submit" className="btn btn-primary">
                  Sign in
                </button>
              </div>
              <Link to="/forgot-password">Forgot your password ?</Link>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  </div>
)
  
}

export default Login