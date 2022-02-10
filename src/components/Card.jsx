const Card = ({ children, ...opts }) => {
  const { className='' } = opts 
  const style = {
    maxWidth: '16rem'
  }

  return (
    <div style={style} className={`inline-block mx-3 my-0 bg-white shadow-lg rounded mb-4 ${className}`}>
      { children }
    </div>
  )
}

export default Card;
