import { node, string } from 'prop-types'

const Card = ({ maxWidth='16rem', children, className='' }) => {
  const style = {
    maxWidth,
  }

  return (
    <div style={style} className={`mx-3 my-0 bg-white shadow-lg rounded mb-4 ${className}`}>
      { children }
    </div>
  )
}

Card.propTypes = {
  children: node,
  maxWidth: string,
  className: string,
}

export default Card;
