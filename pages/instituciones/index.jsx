
import Head from 'next/head'
import Image from 'next/image'
import { LayoutMain } from '../../components/layouts/LayoutMain'

const Aliados= () => {
  return (
    <LayoutMain>

			<main className="main">

			<section className="promo-primary">
					<picture>
						<Image src="/promo_4.png" alt="img" layout="fill" objectFit='cover' objectPosition="50% 50%"/>
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
									<Image src="/aliados/1.jpeg" alt="img" width={500} height={300}/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src="/aliados/2.jpeg" alt="img" width={500} height={300}/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src="/aliados/3.jpeg" alt="img" width={500} height={300}/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src="/aliados/4.png" alt="img" width={500} height={300}/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src="/aliados/5.jpeg" alt="img" width={500} height={300}/>
									</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
										<div className="aliados">
										<Image src="/aliados/6.jpeg" alt="img" width={500} height={300}/>
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

export default Aliados