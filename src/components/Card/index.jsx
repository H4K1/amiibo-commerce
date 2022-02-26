import './style.sass';
import { node, string } from 'prop-types';

const Card = ({ children, maxWidth, className }) => {
  const style = {
    maxWidth,
  };

  return (
    <div style={style} className={`card ${className}`}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: node,
  maxWidth: string,
  className: string,
};

Card.defaultProps = {
  maxWidth: '16rem',
  className: '',
};

export default Card;
