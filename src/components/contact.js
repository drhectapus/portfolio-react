import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { sendMail } from '../actions';


class Contact extends Component {

  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error && 'has-error'}`;

    return (
      <div className={className}>
        <label>{field.label}</label>
        {field.type == 'text' ?
        <input
          className='form-control'
          type={field.type}
          {...field.input}
        /> :
        <textarea
          className='form-control'
          rows='5'
          {...field.input}
        />}
        <div className='help-block'>
          {touched && error}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    this.props.sendMail(values);
  }

  render() {
    const { handleSubmit, mailSent, anyTouched } = this.props;

    return (
      <div id='contact'>
        <h1>Contact</h1>
        <p>Feel free to drop me a mail. Whether it's work-related or about coding, tech, entrepreneurship, travel, football or life in general. I'm always looking to connect with other people.</p>
        <div id='contact-form'>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label='Name:'
              name='name'
              type='text'
              component={this.renderField}
            />
            <Field
              label='Email:'
              name='email'
              type='text'
              component={this.renderField}
            />
            <Field
              label='Message:'
              name='message'
              type='textarea'
              component={this.renderField}
            />
            <div className='text-center'>
              <button
                type='submit'
                className='btn btn-default'
              >
                Submit
              </button>
            </div>
          </form>
          {mailSent && !anyTouched &&
            <div className='alert alert-success text-center' role='alert'>
              Message Sent!
            </div>}
        </div>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  const regex = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;


  if (!values.name) {
    errors.name = "Enter a name"
  }

  if (!regex.test(values.email)) {
    errors.email = "Enter a valid email address"
  }

  if (!values.message) {
    errors.message = "Enter a message"
  }
  return errors;
}

function mapStateToProps({ mailSent }) {
  return { mailSent };
}

export default reduxForm({
  form: 'ContactForm',
  validate
})(
  connect(mapStateToProps, { sendMail })(Contact)
);
