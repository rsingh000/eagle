import React, {useEffect} from 'react';
import './styles/contact.scss';
import Navbar from './utils/Navbar';
import Topbar from './utils/Topbar';
import Footer from './utils/Footer';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { css } from 'glamor';

const Contact = () => {

    useEffect(()=>{
        Aos.init({ duration: 2000})
        Aos.refresh();
    },[]);

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
    initialValues:{email:'',message:'', name:'', phone:''},
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
        color: 'black'
      },
    },
    focused: {},
    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '1px solid gray'
      },
    },
    notchedOutline: {},
  });

  const classes = useStyles();

  return (
    <>
        <Topbar/>
        <Navbar />
        <div className="contactMain">
            <div className="main-title" data-aos="fade-up">
                <h1 className="title roboto-semi-bold-white-64px">
                    CONTACT US
                </h1>
                <div className="sub-title roboto-semi-bold-gray-24px">
                    Fill out the form below for more information and we will be in contact within one business day. Or call us today at <span style={{color: "red"}}>(778)829-6747</span>
                </div>
            </div>
        </div>
        <div className="main-contact border-1px-alto" data-aos="flip-left">
            <div className="contact-info" >
                <div className="email" onClick={()=>window.open("mailto:bikramvirdi13@gmail.com")}>
                    <img
                        className="carbonemail"
                        alt=""
                        src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/carbon-email-2@2x.png"
                    />
                    <div className="bikramvirdi13gmailcom roboto-bold-white-14px" >
                        bikramvirdi13@gmail.com
                    </div>
                </div>
                <div className="flex-col" >
                <h1 className="title1 roboto-bold-white-24px" >
                    CONTACT US
                </h1>
                <div className="address roboto-bold-white-14px" onClick={()=>window.open("https://www.google.com/maps/place/9286+Stuart+Crescent,+Surrey,+BC+V3V+1T6/@49.1714339,-122.8599267,17z/data=!3m1!4b1!4m5!3m4!1s0x5485d9c770d7c7eb:0x70bba7916ea282b4!8m2!3d49.1714339!4d-122.857738")}>
                    <img
                    className="fluentlocation-20-regular"
                    alt=""
                    src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/fluent-location-20-regular@2x.png"
                    />
                    9286 Stuart Crescent
                    <br />
                    Surrey BC V3V 1T6
                </div>
                </div>
                <a className="overlap-group-1" href="tel:7788296747" style={{textDecoration:'none'}}>
                  <img
                      className="group"
                      alt=""
                      src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/group-4@2x.png"
                  />
                  <div className="phoneIcon" >
                      <div className="phone-1 roboto-bold-white-14px" >
                      (778)829-6747
                      </div>
                  </div>
                </a>
            </div>
            <form className="estimateForm" onSubmit={formik.handleSubmit}>
              <div className="col-textfields">

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
                    style: {color: 'gray'}
                    }}
                    InputProps={{
                    classes: {
                        root: classes.outlinedInput,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                    },
                    style: { color: 'black' }
                    }}
                    {...formik.getFieldProps('name')}
                    {...errorHelper(formik,'name')}
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
                  style: {color: 'gray'}
                }}
                InputProps={{
                  classes: {
                    root: classes.outlinedInput,
                    focused: classes.focused,
                    notchedOutline: classes.notchedOutline,
                  },
                  style: { color: 'black' }
                }}
                {...formik.getFieldProps('phone')}
                {...errorHelper(formik,'phone')}
              />
              </div>
                <TextField
                    style={{width:'100%'}}
                    name="email"
                    label="Enter your email"
                    variant="outlined"
                    InputLabelProps={{
                    classes: {
                        root: classes.label,
                        focused: classes.focused,
                    },
                    style: {color: 'gray'}
                    }}
                    InputProps={{
                    classes: {
                        root: classes.outlinedInput,
                        focused: classes.focused,
                        notchedOutline: classes.notchedOutline,
                    },
                    style: { color: 'black' }
                    }}
                    {...formik.getFieldProps('email')}
                    {...errorHelper(formik,'email')}
                />
              
                <TextField
                  style={{width:'100%'}}
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
                    style: {color: 'gray'}
                  }}
                  InputProps={{
                    classes: {
                      root: classes.outlinedInput,
                      focused: classes.focused,
                      notchedOutline: classes.notchedOutline,
                    },
                    style: { color: 'black' }
                  }}
                  {...formik.getFieldProps('message')}
                  {...errorHelper(formik,'message')}
                />
                
              <Button style={{backgroundImage: `url("https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/61f457eceb1e810fc50e7615/img/brushbtn-2@2x.png")` , width: "30%", backgroundPosition: "60% 60%", backgroundSize: "cover", color: "white" } } type="submit">
                Submit
              </Button>
          </form>
    </div>
    <Footer />
    <ToastContainer className="toastEstimate"/>
    </>
  );
};

export default Contact;
