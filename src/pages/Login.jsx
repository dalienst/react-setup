/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginSchema } from "../validation/validation";
import { accountsAPI } from "../api/axios";
import { apiLinks } from "../constants/Links";
import { toast } from "react-toastify";
import { AuthContext } from "../authContext";

function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {signInUser} = useContext(AuthContext)
  return (
    <>
      <div
        className="container d-flex justify-content-center"
        style={{ height: "100vh", alignItems: "center" }}
      >
        <article>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={async (values) => {
              setLoading(true);
              try {
                await signInUser(values)
                navigate("/dashboard")
              } catch (error) {
                console.log(error)
              } finally {
                setLoading(false);
              }
            }}
          >
            {({ touched }) => (
              <Form className="shadow bg-white rounded p-3">
                <div className="text-center">
                  <h3 className="fw-bold">Welcome Back</h3>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <Field type="email" name="email" className="form-control" />
                  <ErrorMessage name="email" component="p" className="text-danger fst-italic" />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <Field
                    type="password"
                    name="password"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="password"
                    component="p"
                    className="text-danger fst-italic"
                  />
                </div>

                <div className="mb-3">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-outline-success w-100 fw-bold"
                  >
                    {loading ? "Loading..." : "Login"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </article>
      </div>
    </>
  );
}

export default Login;
