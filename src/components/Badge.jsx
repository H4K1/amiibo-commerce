import { string, number, object } from '../propTypes'

const Badge = ({ value, color='yellow', className='', style }) => {

  const base = 'text-xs font-semibold mr-2 px-2.5 py-0.5 rounded'
  const colors = {
    yellow: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-200 dark:text-yellow-900'
  }
  const myCustomClass = `${base} ${colors[color]} ${className}`

  return (
    <span style={style} className={myCustomClass}>{ value }</span>
  )
}

Badge.propTypes = {
  value: number,
  color: string,
  className: string,
  style: object,
}

export default Badge
