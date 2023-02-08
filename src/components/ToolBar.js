import React from 'react'

export default function ToolBar({openSidebar}) {
  return (
	<div className='tool-bar'>
		<div className='burger' onClick={openSidebar} >
		<i className="ri-menu-line"></i>
		</div>
		<div className='title'>
			Cheki_Results
		</div>
	</div>
  )
}
