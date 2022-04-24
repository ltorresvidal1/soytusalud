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
              <div className="form-group">
                <select class="w-full h-10 border-2 form-control" aria-label="Default select example">
                  <option selected>Tipo de documento</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div class="form-group">
                <input type="" class="form-control" id="" aria-describedby="" placeholder="Documento"></input>
              </div>
              <div class="form-group">
                <input type="" class="form-control" id="" aria-describedby="" placeholder="Nombre Completo"></input>
              </div>
              <div class="form-group">
                <input type="" class="form-control" id="" aria-describedby="" placeholder="Celular"></input>
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="" aria-describedby="" placeholder="Email"></input>
                {/* <small>Por favor ingresa un correo electrónico válido</small> */}
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Contraseña"></input>
              </div>
              <div class="form-group">
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Confirmar Contraseña"></input>
              </div>
              <button type="submit" class="my-8 mx-auto btn btn-primary">Enviar</button>
            </form>
          </section>
    </div>
    </>
  )
}

export default registro