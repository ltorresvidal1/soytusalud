
import Head from 'next/head'
import Image from 'next/image'

import Aliado1 from '../../assets/images/aliados/1.jpeg';
import Aliado2 from '../../assets/images/aliados/2.jpeg';
import Aliado3 from '../../assets/images/aliados/3.jpeg';
import Aliado4 from '../../assets/images/aliados/4.jpeg';
import Aliado5 from '../../assets/images/aliados/5.jpeg';
import Aliado6 from '../../assets/images/aliados/6.jpeg';
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
								<h2 className="heading__title no-margin-bottom"><span>Instituciones</span></h2>
								</div>
							</div>
						</div>
						<div className="row offset-margin">
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src={Aliado1} alt="img"/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src={Aliado2} alt="img"/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src={Aliado3} alt="img"/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src={Aliado4} alt="img"/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src={Aliado5} alt="img"/>
									</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
										<div className="aliados">
										<Image src={Aliado6} alt="img"/>
										</div>
									</div>
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