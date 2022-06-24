
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../../components/layouts/LayoutMain'


const Historia = () => {
  return (
    <LayoutMain>

<main className="main">
				<section className="section events-inner">
					<div className="container">
						<div className="row offset-30">
							<div className="col-xl-10 offset-xl-1">
								<div className="upcoming-item">
									<div className="upcoming-item__date"><span>30</span><span>Oct, 19</span></div>
									<div className="upcoming-item__body">
										<div className="row align-items-center">
										
											<div className="col-lg- col-xl-12">
												<div className="upcoming-item__description">
													<h6 className="upcoming-item__title">Paciente: Nombre Y Apellido </h6>
												
													<div className="upcoming-item__details">
										
														<p>
															<strong>Servicio:</strong> ____________________
														</p>
														<p>
															 <strong>Profesional o Proveedor:</strong>____________________
														</p>
														<p>
															 <strong>Valor:</strong>____________________
														</p>
														<p> 
															 <strong>Concato Paciente: </strong>321-111-1111 , soytusalud@gmail.com
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</main>

    </LayoutMain>

  )
}

export default Historia