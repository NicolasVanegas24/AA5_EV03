import './nosotros.css';



const Nosotros = () => {
    
    return(
        
            <div className="nosotros-container">
                <h1>DBR COMPANY</h1>
                <h2>Sobre Nosotros</h2>
                <p>
                Somos un equipo de profesionales apasionados por la tecnología y la comunicación. Con años de experiencia
                en la industria de las telecomunicaciones, entendemos la importancia de estar siempre conectados. Nuestra
                empresa se enorgullece de ofrecer una amplia gama de paquetes de internet diseñados para satisfacer las
                necesidades de hogares, pequeñas empresas y grandes corporaciones.
                </p>
                <h3>Visión de la Empresa</h3>
                 <p>
                Nuestra visión es ser líderes en la industria de telecomunicaciones, ofreciendo servicios innovadores
                y personalizados que superen las expectativas de nuestros clientes, contribuyendo al desarrollo
                tecnológico de nuestra comunidad.
                 </p>
                <h3>Nuestros Servicios</h3>
                <ul>
                    <li>Soporte técnico</li>
                    <li>Paquetes de internet de alta velocidad</li>
                    <li>Instalación y configuración de equipos</li>
                </ul>
                <h3>Contacto</h3>
                <div className='infonos'>
                <p> <strong>Email:</strong> dbrcompany@company.com</p>
                <p> <strong>Teléfono:</strong> 6754562</p>
                <p>Bogotá - Colombia</p>  
                </div>
               
            </div>
        
    )
}

export default Nosotros