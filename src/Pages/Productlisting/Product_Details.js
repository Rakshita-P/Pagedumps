import React from "react";
import image from "../images/Athlete-running.jpg";
import "./Product_Details.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
// import Theragun from "./product_images/Theragun-Pro.jpg"
// import Achedaway from "./product_images/Achedaway Pro.jpg"
// import Jawku  from "./product_images/Jawku Muscle Blaster V2.jpg"
// import Play from "./product_images/Play-Maker MVP.jpg"
// // import Image from './Image';

// const n1="Theragun-Pro";
// const p1="$100";
// const img1="Theragun-pro.jpg";

function Product_Listing(props) {
  return (
    <div>
      <div className="container">
        <div>
          <img src="https://drfreeze.com/images/sliders/mobile/hyper.jpg" className="BackImage"></img>
          <div className="text-wrapper">
            <h1>SHOP</h1>
            <p>Shop your favorite items here</p>
          </div>
        </div>

        {/* Navbar */}
        <div className="Navbar">
          <div className="links">
            <a href="/sortby">Sort By</a>
            <a href="/brands">Brands</a>
            <a href="/size">Size</a>
            <a href="/gender">Gender</a>
            <a href="sports">Sports</a>
          </div>
        </div>

        {/* sidenav */}
        <div>
          <div className="sideNavbar">
            <div className="abc">
              <div className="links">
                <a href="/recovery">Recovery</a>
                <a href="/massage therapy">Massage_Therapy</a>{" "}
                <a href="/self massage therapy">Self_Massage_Tools</a>
                <a href="/massage tables">Massage_Tables</a>
                <a href="/compression therapy">Compression_Therapy</a>
                <a href="heat therapy">Heat_Therapy</a>
                <a href="/ice therapy">Ice_Therapy</a>
                <a href="/laser therapy">Laser_Therapy</a>
                <a href="hydrotherapy">Hydrotherapy</a>
                <a href="/cupping therapy">Cupping_Therapy</a>
              </div>
              <div className="products">
                <div>
                  <div class="container">
                    <div class="row">
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://df.cwa.sellercloud.com/images/products/1452323.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Theragun Pro <br></br> $449.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://microless.com/cdn/products/b81a2bf0dc4f78eec42565bdba221312-hi.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                            width="10px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Theragun ELITE <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://www.bodymassageshop.com/wp-content/uploads/2020/05/Cropped-Theragun_Prime_Photo_1.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Theragun PRIME<br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <div class="row">
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://f1-recreation.com.sg/wp-content/uploads/2020/03/power-plate-pulse-massage-gun.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Power Plate PULSE <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://www.techinn.com/f/13757/137578725_2/theragun-mini.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                            width="10px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Theragun MINI <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://alexnld.com/wp-content/uploads/2020/12/1a3dddcc-ba29-4922-83cc-faa405df7765.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              PlayMaker MVP <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <div class="row">
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://cdn-s3.touchofmodern.com/products/001/697/588/17b9527c16f92e0aed2a9f58bf49a8ae_large.jpg?1574462613"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              ReAthlete DEEP4s <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://mk0racquetdepotlh1uc.kinstacdn.com/wp-content/uploads/2020/11/jawku_muscle_blaster_V2_2020_main_683863733617.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                            width="10px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Jawku Muscle Blaster V2 <br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://i.ebayimg.com/images/g/MWsAAOSwjBNffE7C/s-l300.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Aachedaway Pro<br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <br></br>

                    <div class="row">
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://www.mtbcult.it/wp-content/uploads/2021/01/COMPEX_FIXX-2.0_MX-2010-FIXX-Massager-2-0-PRD-144.jpg?x26779"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">Compex Fixx 2.0</p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://sc02.alicdn.com/kf/H36487d22ab4e4c2e8ef4df9ee65f6d9aZ/Handheld-24v-Li-ion-deep-tissue-massage.jpg_350x350.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                            width="10px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Maxtorc<br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="card">
                          <img
                            src="https://df.cwa.sellercloud.com/images/products/1452323.jpg"
                            class="card-img-top"
                            alt="..."
                            height="200px"
                          />
                          <div class="card-body">
                            <p class="card-text">
                              Theragun Pro<br></br> $399.99
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product_Listing;
