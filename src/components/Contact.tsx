import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMsg, setSnackbarMsg] = useState('');

  const form = useRef();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    if (name && email && message) {
      const templateParams = {
        name,
        email,
        message,
      };

      emailjs.send(
        'your_service_id',
        'your_template_id',
        templateParams,
        'your_public_key'
      ).then(
        (response: any) => {
          setSnackbarMsg('Message sent successfully!');
          setOpenSnackbar(true);
          setName('');
          setEmail('');
          setMessage('');
        },
        (error: any) => {
          setSnackbarMsg('Failed to send message. Try again later.');
          setOpenSnackbar(true);
        }
      );
    }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>

          <div className="social-icons">
            <a href="mailto:vs3273@nyu.edu" target="_blank" rel="noreferrer"><EmailIcon fontSize="large"/></a>
            <a href="https://www.linkedin.com/in/varad-suryavanshi-a1b975227/" target="_blank" rel="noreferrer"><LinkedInIcon fontSize="large"/></a>
            <a href="https://github.com/varad-suryavanshi" target="_blank" rel="noreferrer"><GitHubIcon fontSize="large"/></a>
          </div>

          <Box
            ref={form}
            component="form"
            noValidate
            autoComplete="off"
            className='contact-form'
          >
            <div className='form-flex'>
              <TextField
                required
                label="Your Name"
                placeholder="What's your name?"
                value={name}
                onChange={(e) => setName(e.target.value)}
                error={nameError}
                helperText={nameError ? "Please enter your name" : ""}
                inputProps={{ maxLength: 100, 'aria-label': 'Your name' }}
              />
              <TextField
                required
                label="Email / Phone"
                placeholder="How can I reach you?"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={emailError}
                helperText={emailError ? "Please enter your email or phone number" : ""}
                inputProps={{ maxLength: 100, 'aria-label': 'Contact method' }}
              />
            </div>
            <TextField
              required
              label="Message"
              placeholder="Send me any inquiries or questions"
              multiline
              rows={10}
              className="body-form"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              error={messageError}
              helperText={messageError ? "Please enter the message" : ""}
              inputProps={{ maxLength: 1000, 'aria-label': 'Message' }}
            />
            <Button
              variant="contained"
              sx={{ backgroundColor: "#5000ca", '&:hover': { backgroundColor: '#3700a3' } }}
              endIcon={<SendIcon />}
              onClick={sendEmail}
            >
              Send
            </Button>
          </Box>

          <Snackbar
            open={openSnackbar}
            autoHideDuration={4000}
            message={snackbarMsg}
            onClose={() => setOpenSnackbar(false)}
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;