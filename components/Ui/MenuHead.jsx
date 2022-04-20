import Image from 'next/image';
import LogoDark from '../../assets/images/logo_dark.png';
import LogoWhite from '../../assets/images/logo_white.png';

export const MenuHead = () => {
  return (
   
		<>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@319;400;600;700&display=swap" rel="stylesheet"></link>
                    
            <div className="aside-dropdown">
				<div className="aside-dropdown__inner"><span className="aside-dropdown__close">
					<svg className="icon">
                    
					</svg></span>
				<div className="aside-dropdown__item d-lg-none d-block">
					<ul className="aside-menu">
						<li className="aside-menu__item"><a className="aside-menu__link" href="index"><span>Inicio </span></a></li>
						
						
						<li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Pacientes</span></a>
							
                            
							<ul className="aside-menu__sub-list">
							    	
                                    
				                    		<li><a href="#"  className="btn_IniciarUsaurio"><span> Inicio de sesi&oacute;n</span></a></li>
											<li><a href="registrarme.php"><span> Registrarme</span></a></li>'
                                            
											   
							                	<li><a href="tuhistoria.php"><span> Tu historia</span></a></li>
							                	<li><a href="clases/Cerrar_Session.php"><span> Cerrar sesi&oacute;n </span></a></li>
					
							
							
							</ul>
							
						</li>
							<li className="aside-menu__item aside-menu__item--has-child"><a className="aside-menu__link" href="javascript:void(0);"><span>Comunidades E Instituciones</span></a>
							
							<ul className="aside-menu__sub-list">
								<li><a href="#"><span>Registro</span></a></li>
								<li><a href="#"><span>Inscribir Comunidad</span></a></li>
								<li><a href="#"><span>Inscribir InstituciÃ³n</span></a></li>
								<li><a href="#"> <span>Preleccionar Beneficiarios</span></a></li>
								<li><a href="#"> <span>Seguimiento de Servicios</span></a></li>
							
							
							</ul>
							
						</li>
						<li className="aside-menu__item"><a className="aside-menu__link" href="#"><span>Filantropos</span></a></li>
				
				    	<li className="aside-menu__item"><a className="aside-menu__link" href="historias.php"><span>Casos de Exito</span></a></li>
					</ul>
				</div>
			
				</div>
			</div>

            <header className="header header--front">
            <div className="container-fluid">
                <div className="row no-gutters justify-content-between">
                    <div className="col-auto d-flex align-items-center">
                        <div className="dropdown-trigger d-none d-sm-block">
                            <div className=""></div>
                        </div>
                        <div className="header-logo">
                            <a className="header-logo__link" href="index.php">
                                
                          
                             
                                </a>
                                
                        </div>
                    </div>
                    <div className="col-auto">
                      
                        <nav>
                            <ul className="main-menu">
                                <li className="main-menu__item main-menu__item--active"><a className="main-menu__link" href="/"><span>Inicio </span></a></li>
                                
                
                                    <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Pacientes</span></a>
                                   
                                    <ul className="main-menu__sub-list">
                                        
                                            <li><a  href="#"  className="btn_IniciarUsaurio"><span> Inicio de sesi&oacute;n</span></a></li>
                                            <li><a href="registrarme.php"><span> Registrarme</span></a></li>
                                            
                                          
                                            <li><a href="tuhistoria.php"><span> Tu historia</span></a></li>
                                            <li><a href="clases/Cerrar_Session.php"><span> Cerrar sesi&oacute;n </span></a></li>
                                            
                                            </ul>
                                            </li>	
                                                    <li className="main-menu__item main-menu__item--has-child"><a className="main-menu__link" href="javascript:void(0);"><span>Comunidades E Instituciones</span></a>
                                    
                                    <ul className="main-menu__sub-list">
                                        <li><a href="#"><span>Registro</span></a></li>
                                        <li><a href="#"><span>Inscribir Comunidad</span></a></li>
                                        <li><a href="#"><span>Inscribir InstituciÃ³n</span></a></li>
                                        <li><a href="#"> <span>Preleccionar Beneficiarios</span></a></li>
                                        <li><a href="#"> <span>Seguimiento de Servicios</span></a></li>
                                        
                                    </ul>
                                  
                                </li>
                                
                                
                                <li className="main-menu__item"><a className="main-menu__link" href=""><span>Filantropos</span></a></li>
                                
                                <li className="main-menu__item"><a className="main-menu__link" href="historias.php"><span>Casos de Exito</span></a></li>
                                
                            </ul>
                        </nav>
                       
                    </div>
                    <div className="col-auto d-flex align-items-center">
                        <ul className="lang-select lang-select--inner">
                            <li className="lang-select__item lang-select__item--active"><span data-lang="idioma">Es</span>
                                <ul className="lang-select__sub-list">
                                    
                                        <li><a href="#" id="translate" data-text="English,Espa&ntilde;ol" data-file="es,en" data-index="1">English</a></li>
                                    
                                </ul>
                            </li>
                        </ul>
                       
                        <div className="dropdown-trigger d-block d-sm-none">
                            <div className="dropdown-trigger__item"></div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        </>
  )
}

