
import { useFormik } from "formik"

import { useState } from "react"
import { Container } from "react-bootstrap"
import * as Yup from "Yup"

const Loginpage = () => {


    const [loggedInData, setLoggedInData] = useState({ email: "", password: "" })

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema: Yup.object({
            email: Yup.string().required("Email is Required").max(20, "Email id must not exceed length 20"),
            password: Yup.string().required("Password is required")
        }),
        onSubmit: (values) => {
            setLoggedInData({ email: values.email, password: values.password })
        }
    })

    console.log(loggedInData)

    return (
        <>
            <Container>
                <h4> Login </h4>
                <div>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <input type="email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.email && formik.errors.email ? <p>{formik.errors.email} </p> : null}
                            <br/>
                            <input type="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                            {formik.touched.password && formik.errors.password ? <p>{formik.errors.password} </p> : null}
                            <br/>
                            <button type="submit"> Login </button>

                        </div>
                    </form>
                </div>
            </Container>

        </>
    )
}

export default Loginpage