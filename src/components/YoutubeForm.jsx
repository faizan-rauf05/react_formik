import { Formik, Form, Field, ErrorMessage } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);

};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = "Required";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  if (!values.channel) {
    errors.channel = "Required";
  }
  return errors;
};

const YoutubeForm = () => {

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
      <Form action="" className='main-form' >
        <div className='yt-form' >
        <label htmlFor="name">Name</label>
        <Field
          type="text"
          id="name"
          name="name"
        />
        <div className="">
          <ErrorMessage name='name' />
        </div>

        <label htmlFor="email">Email</label>
        <Field
          type="email"
          id="email"
          name="email"
        />
        <div className="">
          <ErrorMessage name='email' />
        </div>

        <label htmlFor="channel">Channel</label>
        <Field
          type="channel"
          id="channel"
          name="channel"
        />
        <div className="">
          <ErrorMessage name='channel' />
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
        </div>
      </Form>
      </Formik>
    </>
  );
};

export default YoutubeForm;
