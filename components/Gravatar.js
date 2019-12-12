import md5 from 'md5';

// Aprende más del Gravatar en: http://gravatar.com
function Gravatar(props) {
/*  const email = props.email; 
 const hash = md5(email);    */
const image = props.email
  return (
    <img
      className={props.className}
      src={image}
      alt="Avatar"
    />
  );
}

export default Gravatar;