import { node } from 'prop-types'

const Card = ({ children, ...opts }) => {
  const { className='' } = opts 
  const style = {
    maxWidth: '16rem',
  }

  return (
    <div style={style} className={`mx-3 my-0 bg-white shadow-lg rounded mb-4 ${className}`}>
      { children }
    </div>
  )
}

Card.propTypes = {
  children: node
}

export default Card;
