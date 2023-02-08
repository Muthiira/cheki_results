import React from 'react'

export default function SideBar({sidebar}) {
  return (
	<div className={sidebar?"sidebar sidebar--open":"sidebar"}>
	<li><i class="ri-home-line"></i>Home</li>
	<li><i class="ri-building-4-line"></i>All Schools</li>
	<li><i class="ri-building-2-fill"></i>Nationals</li>
	<li><i class="ri-building-3-line"></i>Extra county</li>
	<li><i class="ri-building-fill"></i>District</li>
	<li><i class="ri-ancient-gate-line"></i>Private</li>

	</div>
  )
}
