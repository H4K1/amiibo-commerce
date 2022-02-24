import './style.sass'

import { string, node, number } from 'prop-types';
import Badge from '../Badge'
const Button = ({ children, color, className, badgeValue, ...opts}) => {

  const myCustomClass = `button-${color} ${className}`

  return (
      <button {...opts} className={myCustomClass}>
        {children}
        { !!badgeValue && <Badge className="rounded-full badge-position" value={badgeValue}/> }
      </button>
  );
};

Button.propTypes = {
  color: string,
  className: string,
  badgeValue: number,
  children: node,
}

Button.defaultProps = {
  color: 'green'
}

export default Button;
