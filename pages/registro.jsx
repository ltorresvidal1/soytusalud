import React from 'react'
import Promo1 from '../assets/images/promo_1.jpg';
import Image from 'next/image'

const registro = () => {
  return (
    <>
    <div>
          <section className="promo-primary">
            <picture className="img--bg">
              <Image src={Promo1} alt="img" width={"3000vw"} layout="responsive"/>
              </picture>
              <div className="container">
                <div className="row">
                  <div className="col-auto">
                    <div className="align-container">
                      <div className="align-container__item">
                        <h1 className="pt-8 promo-primary__title">Regístrate</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </section>

          <section className="mx-auto mt-12 mb-12 bg-white drop-shadow-xl w-2/5">
          <form className="p-4">
              <div class="form-group">
                <label for="idtype">Tipo de documento</label>
                <input type="" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>
             
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </section>
    </div>
    </>
  )
}

export default registro