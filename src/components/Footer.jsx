import React from 'react'
import "../style/footer.css"
function Footer() {
    return (
        <div className='footer'>
            <div className="container flex justify-between">
            <section className='flex-column align-center'>
                <h3>About us</h3>
                <p>Tristique Malesuda</p>
                <p>Cursus</p>
                <p>Consectetur</p>
                <p>Euismod Vulputate</p>
            </section>
            <section className='flex-column align-center'>
                <h3>Legal</h3>
                <p>Etiam Justo Tristique</p>
                <p>Vestibulum</p>
                <p>Inceptos</p>
            </section>
            <section className='flex-column align-center'>
                <h3>Developers</h3>
                <p>Lorem, ipsum banana.</p>
                <p>Lorem, ipsum apple.</p>
                <p>Lorem, ipsum chilly.</p>
                <p>Lorem, ipsum orange.</p>
            </section>
            </div>
        </div>
    )
}

export {Footer}
