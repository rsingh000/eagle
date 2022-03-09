import React from 'react';
import "../styles/modal.scss";
import { useFormik} from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { css } from 'glamor';
import { TextField, Button, InputAdornment } from '@material-ui/core';

import { makeStyles } from "@material-ui/core/styles";
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import MessageIcon from '@material-ui/icons/Message';
// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

const Modal = () => {

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
        .required('Sorry this is required')
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
        borderColor: 'white'
      },
    },
    focused: {},
    outlinedInput: {
      '&$focused $notchedOutline': {
        border: '1px solid white'
      },
    },
    notchedOutline: {
        border: '1px solid white',
    },
  });

  const classes = useStyles();

  return (

    <div className="modal">
        <div className="mainFrame">
            <div className="blurLayer">
                <div className="topLeft" >
                    <div className="line"></div>
                    <img
                    className="fluentpaint-brush-24-filled"
                    alt=""
                    src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/62094527e0d13e3d908fe745/img/fluent-paint-brush-24-filled@2x.svg"
                    />
                    <div className="name-hook" >
                        <div className="company-title roundedmplus1c-extra-extra-bold-white-20px" >
                            <span className="span0">EAGLE </span>
                            <span className="roundedmplus1c-extra-extra-bold-white-20px-2"> PRO PAINTING</span>
                        </div>
                        <p className="hookline roundedmplus1c-extra-extra-bold-white-14px" >
                            A Fresh Coat for a Fresh Start
                        </p>
                    </div>
                </div>
                <div className="center">

                    <div className="info">
                        <div className="modalMail" >
                            <img
                                className="ant-designmail-outlined"
                                alt=""
                                src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/620961d60ef88ca2b17058fb/img/ant-design-mail-outlined@2x.svg"
                            />
                            <div className="modalEmail roundedmplus1c-extra-extra-bold-white-14px" >
                                bikramvirdi13@gmail.com
                            </div>
                        </div>
                        <div className="modalAddress" >
                            <img
                                className="gislocation-poi-o"
                                alt=""
                                src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/620961d60ef88ca2b17058fb/img/gis-location-poi-o@2x.svg"
                            />
                            <p className="addressinfo roundedmplus1c-extra-extra-bold-white-14px" >
                                9286 Stuart Crescent Surrey BC 3V3 1T6
                            </p>
                        </div>
                        <div className="modalPhone" >
                            <img
                                className="akar-iconsphone1"
                                alt=""
                                src="https://anima-uploads.s3.amazonaws.com/projects/61f442dbf9ef2c79fcd1f396/releases/62094527e0d13e3d908fe745/img/akar-icons-phone@2x.svg"
                            />
                            <div className="phone# roundedmplus1c-extra-extra-bold-white-14px" >
                                (778)829-6747
                            </div>
                        </div>
                    </div>
                    <form className="estimateModal" onSubmit={formik.handleSubmit}>
                        <div className="get-a-free-estimate roundedmplus1c-extra-extra-bold-white-20px" >
                            <span className="roundedmplus1c-extra-extra-bold-white-20px-2">GET A FREE</span>
                            <span className="span1">&nbsp;</span>
                            <span className="spanEstimate">ESTIMATE</span>
                        </div>
                        {/* <PersonOutlineIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} /> */}
                        <div className="nameBox" style={{ display: 'flex', flexDirection: "column", gap: "10px"}}>
                            <div className="twocols" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: "10px", width: '100%'}}>
                                <TextField
                                    style={{width:'50%'}}
                                    name="name"
                                    label="Enter your name"
                                    variant="standard"
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
                                    style: { color: 'white' },
                                    endAdornment: (
                                        <InputAdornment position="start">
                                        <PermIdentityIcon style={{fill: "white"}}/>
                                        </InputAdornment>
                                    )
                                    }}
                                    {...formik.getFieldProps('name')}
                                    {...errorHelper(formik,'name')}
                                />
                                <TextField
                                    style={{width:'50%'}}
                                    name="phone"
                                    label="Enter your phone #"
                                    variant="standard"
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
                                    style: { color: 'white' },
                                    endAdornment: (
                                        <InputAdornment position="start">
                                        <PhoneIcon style={{fill: "white"}}/>
                                        </InputAdornment>
                                    )
                                    }}
                                    {...formik.getFieldProps('phone')}
                                    {...errorHelper(formik,'phone')}
                                />
                            </div>
                            <TextField
                                style={{width:'100%'}}
                                name="email"
                                label="Enter your email"
                                variant="standard"
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
                                style: { color: 'white' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <EmailIcon style={{fill: "white"}}/>
                                    </InputAdornment>
                                )
                                }}
                                {...formik.getFieldProps('email')}
                                {...errorHelper(formik,'email')}
                            />
                            <TextField
                                style={{width:'100%'}}
                                multiline
                                rows={4}
                                name="message"
                                label="Enter your message"
                                variant="standard"
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
                                style: { color: 'white' },
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <MessageIcon style={{fill: "white"}}/>
                                    </InputAdornment>
                                )
                                }}
                                {...formik.getFieldProps('message')}
                                {...errorHelper(formik,'message')}
                            />
                            <Button variant="contained" type="submit" style={{background:"#3587bf", color: 'white', width: '30%'}}>Send</Button>
                        </div>
                    </form>
                </div>
                <div className="socialIcons">
                    <a href="/"><i className="fab fa-facebook-f"></i></a>
  	 				<a href="/"><i className="fab fa-twitter"></i></a>
  	 				<a href="/"><i className="fab fa-instagram"></i></a>
  	 				<a href="/"><i className="fab fa-linkedin-in"></i></a>
                    <div className="lineFooter"></div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Modal;
