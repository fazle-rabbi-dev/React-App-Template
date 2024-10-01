export const Button = ({ title, type, className, icon }) => {
  return (
    <button className={className} type={type}>
      {title}
    </button>
  )
}
