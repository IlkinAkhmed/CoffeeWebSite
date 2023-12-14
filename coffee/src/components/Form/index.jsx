import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import "./index.scss";
import axios from 'axios';
import useFetchData from '../../hooks/UseFetchData';
import Swal from 'sweetalert2';

const Form = () => {
  const { data } = useFetchData("contact");

  const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email address').required('Required'),
    subject: Yup.string().required('Required'),
    message: Yup.string().required('Required'),
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await axios.post("http://localhost:3000/contact", values);
        Swal.fire({
          title: "Your Message Completed Successfully!",
          icon: "success"
        });
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className='form-main-container'>
      <form onSubmit={formik.handleSubmit}>
        <div className='name-input'>
          <input
            id="name"
            type="text"
            placeholder='Your name :'
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <input
            id="email"
            type="text"
            placeholder='Your Email :'
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
        </div>
        <input
          id="subject"
          className='subject'
          type="text"
          placeholder='Enter your Subject'
          {...formik.getFieldProps('subject')}
        />
        {formik.touched.subject && formik.errors.subject ? (
          <div className="error">{formik.errors.subject}</div>
        ) : null}
        <textarea
          id="message"
          name='message'
          placeholder='Your Message'
          {...formik.getFieldProps('message')}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="error">{formik.errors.message}</div>
        ) : null}
        <div>
          <button type='submit'>SEND MESSAGE</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
