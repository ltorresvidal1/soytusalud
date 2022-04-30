
import Head from 'next/head'
import Image from 'next/image'

;
import Promo1 from '../../assets/images/promo_4.jpg';


const Aliados= () => {
  return (
    <>

			<main className="main">

			<section className="promo-primary">
					<picture>
					<Image src={Promo1} alt="img" width={"3000vw"}  layout="responsive"/>
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
								<table id="Tabla_EmpresasConPropositos" class="table table-hover ">
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