import './style.sass'
import { string, number } from 'prop-types'

const Badge = ({ value, color, className }) => {
  const myCustomClass = `badge-${color} ${className}`
  return (
    <span className={myCustomClass}>{ value }</span>
  )
}

Badge.propTypes = {
  value: number,
  color: string,
  className: string,
}

Badge.defaultProps = {
  color: 'yellow',
  className: '',
}
export default Badge