
interface IBannerProps {
  background: string
}

const Banner = ({background}: IBannerProps): React.JSX.Element => {
  return (
    <div
      className={`${background} bg-contain bg-no-repeat w-full h-20 sm:h-40 md:h-52 lg:h-96`}/>
  )
}

export default Banner