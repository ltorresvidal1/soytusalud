
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../../components/layouts/LayoutMain'



const Historia = () => {
  return (
    <LayoutMain>

<main className="main">
				<section className="section causes-inner">
					<div className="container">
						<div className="row offset-margin">
						    <div className='col-md-8 offset-md-2 col-lg-12 offset-lg-0'>
								<div className='causes-item causes-item--style-3'>
									<div className='causes-item__body'>
										<div className='row align-items-center'>
											<div className='col-lg-5 col-xl-4'>
												<div className='causes-item__img'>
													<div className='img--bg' >
														<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/1.JPG?alt=media&token=0864a1e7-ffbd-4446-a998-546c7d112fd7" alt="img" layout="fill" objectFit='cover'/>
													</div>
												</div>
											</div>
											<div className='col-lg-7 col-xl-8'>
												<div className='causes-item__action'>
													<div className='causes-item__badge' ></div><a className='causes-item__link' >Te Acompaño</a>
												</div>
												<div className='causes-item__top'>
													<h6 className='causes-item__title'> <a href='#'>Paciente de prueba numero 1</a></h6>
													<p>esta es una historia de prueba </p>
												</div>
												<div className='causes-item__lower'>
												 	
                                                     <div className='especialidad causes-item__badge'>Consulta Otorrinonaringologia</div>
													<div className='causes-item__details-holder'>
														<div className='causes-item__details-item'><span>Valor: </span><span>$200.000</span></div>
													
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


				<section className="section causes-inner">
					<div className="container">
						<div className="row offset-margin">
						    <div className='col-md-8 offset-md-2 col-lg-12 offset-lg-0'>
								<div className='causes-item causes-item--style-3'>
									<div className='causes-item__body'>
										<div className='row align-items-center'>
											<div className='col-lg-5 col-xl-4'>
												<div className='causes-item__img'>
													<div className='img--bg' >
														<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/2.JPG?alt=media&token=cd585020-3196-4cb5-a4f6-96a139e2cbf3" alt="img" layout="fill" objectFit='cover'/>
													</div>
												</div>
											</div>
											<div className='col-lg-7 col-xl-8'>
												<div className='causes-item__action'>
													<div className='causes-item__badge' ></div><a className='causes-item__link' >Te Acompaño</a>
												</div>
												<div className='causes-item__top'>
													<h6 className='causes-item__title'> <a href='#'>Paciente de prueba numero 2</a></h6>
													<p>esta es una historia de prueba </p>
												</div>
												<div className='causes-item__lower'>
												 	
                                                     <div className='especialidad causes-item__badge'>Consulta Ginecologia</div>
													<div className='causes-item__details-holder'>
														<div className='causes-item__details-item'><span>Valor: </span><span>$160.000</span></div>
													
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