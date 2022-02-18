import { string, node } from 'prop-types';

const Container = ({ children, className }) => {
  
  const myCustomClass = `container max-w-5xl w-full p-6 mx-auto ${className}`

  return (
    <div className={myCustomClass}>
      { children }
    </div>
  )
}

Container.propTypes = {
  children: node,
  className: string
}

export default Container;
