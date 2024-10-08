
function ContactMe() {
  return (
    <div className='mb-48 '>
        <h1 className='text-5xl font-bold text-secondary-light mt-16 mb-16 text-center'>Contact </h1>
        <div className='grid grid-cols-12 max-sm:flex max-sm:flex-col mx-[110px]'>
            <div className=' col-span-4  '>
            <h1 className=' text-[56px] max-sm:text-sm text-secondary-light font-extrabold'>Ready to Get Started ?</h1>
            </div>
            <div className='col-start-10 col-end-13 text-2xl max-sm:text-sm'>
                <p>You Know About Me, Let's Talk About You . </p>
                <div className=' flex justify-center items-center'>

                <h1>Shoot Mess<span className="lg:hidden">age Whatsapp at +916206051429</span></h1>
                <h1 className=' text-white bg-primary-light w-[100px] py-[40px] rounded-[50%] max-sm:hidden '>Age</h1>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ContactMe
