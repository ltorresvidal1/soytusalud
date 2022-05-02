
import Head from 'next/head'
import Image from 'next/image'

;


const Aliados= () => {
  return (
    <>

			<main className="main">

			<section className="promo-primary">
					<picture>
					<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/promo_4.png?alt=media&token=52394262-8895-45e5-9828-c1501c04df30" alt="img" layout="fill" objectFit='cover' objectPosition="50% 50%"/>
					</picture>
					<div className="promo-primary__description"> <span>Aliados</span></div>
			
			</section>	
			
				
				
				<section className="section statistics no-padding-top">
					<div className="container">
						<div className="row margin-bottom">
							<div className="col-12">
								<div className="heading heading--primary heading--center">
								<h2 className="heading__title no-margin-bottom"><span>Empresas Con Proposito Filantrópicos</span></h2>
								</div>
							</div>
						</div>

						<div className="row offset-margin">
							<div className="col-sm-6 col-lg-12">
								<div className="icon-item">
								<table id="Tabla_EmpresasConPropositos" className="table table-hover ">
                                   <thead>
                                        <tr>
                                            <th>Nombre</th>
                                            <th>Fecha</th>
                                            
                                          </tr>
                                    </thead>
                                    <tbody>
									<tr>
										<td>Empresa 1</td>
										<td>2021-01-01</td>
									</tr>
									<tr>
										<td>Empresa 2</td>
										<td>2021-05-23</td>
									</tr>
									<tr>
										<td>Empresa 3</td>
										<td>2022-01-30</td>
									</tr>

                                   
                                    </tbody>
                                  </table>
								</div>
							</div>
					
							
							
						</div>
					</div>
				</section>

			</main>

    </>

  )
}

export default Aliados