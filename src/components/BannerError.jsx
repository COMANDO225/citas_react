
const BannerError = ({children}) => {
  return (
    <div className='bg-red-600 p-3 rounded-sm mb-4 cursor-pointer'>
        <p className='text-white text-center font-semibold'>{children}</p>
    </div>
  )
}

BannerError.defaultProps = {
    children: "Todos los campos son obligatorios",
}

export default BannerError