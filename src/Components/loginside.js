import Image from 'next/image'

const LoginSide = () => {
  return (
    <div><div className="flex flex-col justify-between relative -top-40">
    <h1 className="text-black w-[33rem] text-4xl font-semibold">
      Experience Professional Mentors
    </h1>
    <Image
      className="w-1/2 mt-8"
      src="/images/login.png"
      width={1000}
      height={50}
      alt="Login"></Image>
  </div></div>
  )
}

export default LoginSide

