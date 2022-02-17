import React from 'react';
import "./styles/homepage.scss";
import Navbar from './utils/Navbar';
import Topbar from './utils/Topbar';
import { Link } from 'react-router-dom';
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { css } from 'glamor';

const Homepage = () => {

  let toastId = null;

  function sendEmail(values) {
    emailjs.send('service_mkeikn7', 'template_tgq5qx9', values, 'user_qRUawaqz2bgCI93JndIcH' )
        .then((result) => {
          if (!toast.isActive(toastId)) {
            toastId = toast("Thank You, Message sent!", {
              toastEstimate: css({
                background: "rgba(53, 135, 191, 1) !important",
                color: "white !important",
              }),
            enter: 'zoomIn',
            exit: 'zoomOut',
            appendPosition: false,
            collapse: true,
            collapseDuration: 300,
            position: toast.POSITION.BOTTOM_RIGHT
            });
          } else {
            console.log("Toast already active");
          }
        })
  }


  const formik = useFormik({
    initialValues:{name: '', email:'', phone: '', message:''},
    validationSchema: Yup.object({
        name: Yup.string()
        .required('Sorry, the name is required'),
        phone:Yup.number()
        .required('Sorry your contact number is required')
        .typeError('You must specify a number!'),
        email:Yup.string()
        .required('Sorry, the email is required')
        .email('This is not a valid email'),
        message:Yup.string()
        .required('Sorry, you need to type something')
        .max(500,'Sorry, the message is too long')
    }),
    onSubmit: (values,{resetForm})=>{
        sendEmail(values)
        resetForm();
    }
  })

  const errorHelper = (formik, values) => ({
    error: formik.errors[values] && formik.touched[values] ? true:false,
    helperText: formik.errors[values] && formik.touched[values] ? formik.errors[values] : null
  });

  const useStyles = makeStyles({
    textField: {
      marginBottom: '0px',
    },
    label: {
      '&$focused': {
        color: 'white'
      },
    },
    focused: {},
    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '1px solid white'
      },
    },
    notchedOutline: {},
  });

  const classes = useStyles();

  return (
    <>
      <Topbar />
      <Navbar />
      <div className="wrapper">
            <div className="left-title">
              <h1 className="eagle-painting-contr">
                <span className="span0">
                  EAGLE &nbsp;&nbsp;PAINTING<br/>CONTRACTORS
                  <br />
                  <br/>
                </span>
                <span className="span2">A Fresh Coat for a Fresh Start</span>
              </h1>
              <div className="learn-more-btn">
                <div className="overlap-group">
                  <Link to="/about" style={{textDecoration: 'none'}}>
                    <div className="learn-more roboto-extra-bold-white-24px">
                      LEARN MORE
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <form className="estimateFormMain border-3px-defaultstroke animate-enter" onSubmit={formik.handleSubmit}>
              <h2 className="roboto-bold-white-24px">GET A FREE ESTIMATE</h2>
              <TextField
                style={{width:'90%'}}
                name="name"
                label="Enter your name"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                    focused: classes.focused,
                  },
                  style: {color: '#ddd'}
                }}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                  style: { color: 'white' }
                }}
                {...formik.getFieldProps('name')}
                {...errorHelper(formik,'name')}
              />
              <TextField
                style={{width:'90%'}}
                name="email"
                label="Enter your email"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                    focused: classes.focused,
                  },
                  style: {color: '#ddd'}
                }}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                  style: { color: 'white' }
                }}
                {...formik.getFieldProps('email')}
                {...errorHelper(formik,'email')}
              />
              <TextField
                style={{width:'90%'}}
                name="phone"
                label="Enter your contact number"
                variant="outlined"
                InputLabelProps={{
                  classes: {
                    root: classes.label,
                    focused: classes.focused,
                  },
                  style: {color: '#ddd'}
                }}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                  style: { color: 'white' }
                }}
                {...formik.getFieldProps('phone')}
                {...errorHelper(formik,'phone')}
              />
                <TextField
                  style={{width:'90%'}}
                  name="message"
                  label="Add your message here"
                  variant="outlined"
                  multiline
                  rows={4}
                  InputLabelProps={{
                    classes: {
                      root: classes.label,
                      focused: classes.focused,
                    },
                    style: {color: '#ddd'}
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                    },
                    style: { color: 'white' }
                  }}
                  {...formik.getFieldProps('message')}
                  {...errorHelper(formik,'message')}
                />
                
              <Button style={{backgroundImage: `url("https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/brushbtn-2@2x.png")` , width: "50%", backgroundPosition: "50% 50%", backgroundSize: "cover", color: "white" } } type="submit">
                Submit
              </Button>
          </form>
      </div>
      <ToastContainer className="toastEstimate"/>
    </>
/*     <div className="container-center-horizontal">
      <div className="homepage screen">
        <div className="overlap-group1">
          <img
            className="mainbg"
            alt=""
            src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/mainbg-2@1x.png"
          />
          <div className="left-title">
            <h1 className="eagle-painting-contr">
              <span className="span0">
                EAGLE PAINTING&nbsp;&nbsp;CONTRACTORS
                <br />
              </span>
              <span className="roboto-semi-bold-white-64px">
                <br />
              </span>
              <span className="span2">Commercial - Residential Painting&nbsp;&nbsp;Company</span>
            </h1>
            <div className="learn-more-btn">
              <div className="overlap-group">
                <div className="learn-more roboto-extra-bold-white-24px">
                  LEARN MORE
                </div>
              </div>
            </div>
          </div>
          <div className="estimate-1 border-3px-defaultstroke animate-enter">
            <div className="title">
              <div className="get-a-free-estimate roboto-semi-bold-white-36px">
                GET A FREE ESTIMATE
              </div>
            </div>
            <InputLabel42
              fullName="Full Name"
              inputType="text"
              inputPlaceholder="Enter Your Name"
              iconParkOutlineEditName="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/icon-park-outline-edit-name-2@2x.png"
             
            />
            <InputLabel42
              fullName="Email"
              inputType="email"
              inputPlaceholder="Enter Your Email"
              iconParkOutlineEditName="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/cib-mail-ru-2@2x.png"
              className="input-label-1"
             
            />
            <InputLabel42
              fullName="Phone Number"
              inputType="number"
              inputPlaceholder="Enter Your Phone Number"
              iconParkOutlineEditName="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/vector-2@2x.png"
              className="input-label-2"
             
            />
            <div className="input-label-3">
              <div className="message roboto-medium-white-24px">
                Message
              </div>
              <div className="input-2 border-1px-defaultstroke">
                <input
                  className="enter-your-message roboto-semi-bold-alto-24px"
                 
                  name="enteryourmessage"
                  placeholder="Enter Your Message"
                  type="text"
                  required
                />
              </div>
            </div>
            <div className="overlap-group-1">
              <div className="submit roboto-extra-bold-white-24px">
                SUBMIT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
       */

  );
};

export default Homepage;
