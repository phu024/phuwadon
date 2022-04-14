import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
function ContactSocial() {
  return (
    <div className="contact-social">
      <a
        href="https://www.facebook.com/phuwadon.dec/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FacebookIcon color="primary" fontSize="large" sx={{mx:2}}/>
        {/* <img src={facebook} alt="facebook" /> */}
      </a>
      <a
        href="https://www.instagram.com/iam.phu_/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InstagramIcon color="primary" fontSize="large"sx={{mx:2}}/>
        {/* <img src={instagram} alt="instagram" /> */}
      </a>
      <a
        href="https://www.linkedin.com/in/phuwadon-decharam-83abaa218/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedInIcon color="primary" fontSize="large" sx={{mx:2}}/>
        {/* <img src={linkedin} alt="linkedin" /> */}
      </a>
      <a
        href="https://github.com/phu024"
        target="_blank" //
        rel="noopener noreferrer"
        >
        <GitHubIcon color="primary" fontSize="large" sx={{mx:2}}/>
        {/* <img src={github} alt="github" /> */}
        </a>
    </div>
    );
}
export default ContactSocial;