import React from 'react'

function Header() {
  return (
       <div className=' flex w-full px-[30px] py-[40px] items-center gap-[5px]'>
          <div className='w-[150px] h-[60px] border-4 border-[white] rounded-full bg-[black] text-[white] text-center py-[13px] font-bold hover:bg-[#C2C2C2] hover:text-[black]'>PICK ME</div>
          <div><i class="ri-layout-grid-2-fill text-[30px]"></i></div>
      </div>
  )
}

export default Header