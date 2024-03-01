import { useFormik } from "formik";

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
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });

  //   console.log(formik.values);
  console.log(formik.touched);
  return (
    <>
      <form action="" onSubmit={formik.handleSubmit} className='main-form' >
        <div className='yt-form' >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          {...formik.getFieldProps('name')}
        />
        <div className="">
          <p className="error-msg">
            {formik.touched.name && formik.errors.name
              ? formik.errors.name
              : null}
          </p>
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          {...formik.getFieldProps('email')}
        />
        <div className="">
          <p className="error-msg">
            {formik.touched.email && formik.errors.email
              ? formik.errors.email
              : null}
          </p>
        </div>

        <label htmlFor="channel">Channel</label>
        <input
          type="channel"
          id="channel"
          name="channel"
          {...formik.getFieldProps('channel')}
        />
        <div className="">
          <p className="error-msg">
            {formik.touched.channel && formik.errors.channel
              ? formik.errors.channel
              : null}
          </p>
        </div>

        <button type="submit" className="btn">
          Submit
        </button>
        </div>
      </form>
    </>
  );
};

export default YoutubeForm;
