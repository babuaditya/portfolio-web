
type typeHeaderData = {
    logo: string,
    nav: string[],
    contact: string
}
const HeaderData:typeHeaderData={
    logo: 'Logo',
    nav: ['Home', 'About', 'Services'],
    contact: 'Contact Us'
}
function Header() {
  return (
    <div className='flex flex-row justify-between items-center my-1'>
    <div className='logo'>
        <h1 className='text-3xl font-bold text-primary-light'>Aditya <span className='text-black ml-2'>Sol.</span></h1>
    </div>
    <div className='nav'>
        <ul className='flex flex-row gap-5 items-center justify-center text-2xl text-secondary-light'>
        {HeaderData.nav.map((item, index) => {
            return(
                <a href='#' key={index+1}>
                <li className='hover:font-bold font-semibold'>{item}</li>
            </a>
            );
        })}
            <li>
                <button className='py-2 px-6 bg-primary-light rounded-md hover:bg-orange-400'>
                    <h1 className='text-[20px] font-bold text-white'>{HeaderData.contact}</h1>
                    </button>
                
                </li>
        </ul>
    </div>
</div>
  )
}

export default Header
