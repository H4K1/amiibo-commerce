import Badge from './Badge'
const Button = ({ children, color='green', className, badgeValue, ...opts}) => {

  const badgeStyle = {
    position: 'absolute',
    top: '-10px',
    right: '-10px',
    fontSize: '.8rem'
  }

  const base = 'font-bold py-2 px-4 rounded text-white'
  const colors = {
    none: '',
    green: 'bg-green-500 md:hover:bg-green-700',
    red: 'bg-red-500 md:hover:bg-red-700',
    blue: 'bg-sky-500 md:hover:bg-sky-700',
    gray: 'bg-gray-500 md:hover:bg-gray-700'
  }
  const myCustomClass = `${base} ${colors[color]} ${className}`

  return (
      <button {...opts} className={myCustomClass}>
        {children}
        { !!badgeValue && <Badge className="rounded-full"style={badgeStyle} value={badgeValue}/> }
      </button>
  );
};

export default Button;
