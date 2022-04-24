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
            
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
          </div>
          <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Check me out</label>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>

    </div>
       
        
    </>
  )
}

export default registro