import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";

const initialValues = {
  name: "",
  email: "",
  channel: "",
  comments:"",
  address:"",
  social_media:{
    facebook:'',
    twitter:'',
  },
  phone_numbers:['',''],
  phNumbers:[''],
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
  if(!values.comments){
    errors.comments = 'Required';
  }
  return errors;
};

const YoutubeForm = () => {

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validate={validate} >
      <Form action="" className='main-form' >
        <div className='yt-form'>
          <label htmlFor="name">Name</label>
          <Field
              type="text"
              id="name"
              name="name"
          />
          <div className="">
            <ErrorMessage name='name'/>
          </div>

          <label htmlFor="email">Email</label>
          <Field
              type="email"
              id="email"
              name="email"
          />
          <div className="">
            <ErrorMessage name="email">
              {
                (errorMsg) => <div className='error'>{errorMsg}</div>
              }
            </ErrorMessage>

          </div>

          <label htmlFor="channel">Channel</label>
          <Field
              type="channel"
              id="channel"
              name="channel"
          />
          <div className="">
            <ErrorMessage name='channel'/>
          </div>

          <label>Comments</label>
          <Field as='textarea' name='comments'/>
          <div className="">
            <ErrorMessage name='comments'/>
          </div>

          <label>Address</label>
          <Field name='address'>
            {(props) => {
              {/* eslint-disable-next-line react/prop-types */}
              const {field, meta} = props;
              return (
                  <div>
                    <input type='text' id='address' {...field} />
                    {/* eslint-disable-next-line react/prop-types */}
                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                  </div>
              )

            }}
          </Field>

          <label>Facebook</label>
          <Field name='social_media.facebook'/>
          <div className="">
            <ErrorMessage name='social_media.facebook'/>
          </div>

          <label>Twitter</label>
          <Field name='social_media.twitter'/>
          <div className="">
            <ErrorMessage name='social_media.twitter'/>
          </div>

          <label>Primary No</label>
          <Field name='phone_numbers[0]'/>
          <div className="">
            <ErrorMessage name='phone_numbers[0]'/>
          </div>

          <label>Secondary No</label>
          <Field name='phone_numbers[1]'/>
          <div className="">
            <ErrorMessage name='phone_numbers[1]'/>
          </div>

          <label>No</label>
          <FieldArray name='phNumbers'>
            {(fieldArrayProps)=>{
              const {form , push, remove} = fieldArrayProps;
              const {values} = form;
              const {phNumbers} = values;
              return(
                  phNumbers.map((phNumber , index)=> {
                    return (<div key={index}>
                      <Field name={`phNumbers[${index}]`}/>
                      <button type='button' onClick={() => push('')}>+</button>
                      {index > 0 && <button type='button' onClick={() => remove(index)}>-</button>}
                    </div>)

                  }))

            }}
          </FieldArray>

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
