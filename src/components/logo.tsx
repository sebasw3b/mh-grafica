import logo from '../../public/logo.png'

export const Logo = () => {
  return <div className="flex items-center gap-1.5">
    <img
      src={logo}
      alt="Descripción principal del producto"
      width="1200"
      height="600"
      className="object-cover rounded-3xl w-10 h-10"
    />
  </div>
}
