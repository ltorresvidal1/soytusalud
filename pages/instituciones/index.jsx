
import Head from 'next/head'
import Image from 'next/image'



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
								<h2 className="heading__title no-margin-bottom"><span>Instituciones</span></h2>
								</div>
							</div>
						</div>
						<div className="row offset-margin">
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/1.jpeg?alt=media&token=7d17c206-90f2-41af-af05-59400d29f393" width={500} height={300} alt="img"/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/2.jpeg?alt=media&token=f4933ced-1b69-465e-80e0-8ab5ab68e3f2" width={500} height={300} alt="img"/>
									</div>
									</div>
								
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
									<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/3.jpeg?alt=media&token=e54e6133-94d3-4644-8f38-9720c86212c2" width={500} height={300} alt="img"/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/4.png?alt=media&token=0ee8ef93-6932-4027-8922-c24d3a839a8d" width={500} height={300} alt="img"/>
									</div>	</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
									<div className="aliados">
										<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/5.jpeg?alt=media&token=b5a4cd43-4a18-4047-a435-4d7a05aba360" width={500} height={300} alt="img"/>
									</div>
									</div>
								</div>
							</div>
							<div className="col-sm-6 col-lg-3">
								<div className="icon-item">
									<div className="icon-item__img">
										<div className="aliados">
										<Image src="https://firebasestorage.googleapis.com/v0/b/quetions-app.appspot.com/o/6.jpeg?alt=media&token=1e315f85-f188-4115-8998-2f19106a45c4" width={500} height={300} alt="img"/>
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