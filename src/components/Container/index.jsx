import './style.sass'
import { string, node } from 'prop-types';

const Container = ({ children, className }) => {

  const myCustomClass = `custom-container ${className}`

  return (
    <div className={myCustomClass}>
      {children}
    </div>
  )
}

Container.propTypes = {
  children: node,
  className: string
}

export default Container;