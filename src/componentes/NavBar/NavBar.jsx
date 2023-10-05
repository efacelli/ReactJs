import React from 'react'

const NavBar = () => {
  return (
    <header>
        <h1>Leparc</h1>

        <nav>
            <ul>
                <li>Abrigos</li>
                <li>Pantalones</li>
                <li>Camisetas</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar