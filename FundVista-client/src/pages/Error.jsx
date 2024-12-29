import { Link } from 'react-router-dom'
import errorImg from '../assets/error.svg'

function Error() {
      return (
            <div className='flex flex-col items-center justify-center h-screen'>
                  <Link to='/' className='py-2 px-5 rounded-lg bg-blue-600 font-bold text-slate-50'>Back to Home</Link>
                  <div className='h-[650px] w-full'>
                        <img src={errorImg} className='w-full h-full' alt="" />
                  </div>
            </div>
      )
}

export default Error
