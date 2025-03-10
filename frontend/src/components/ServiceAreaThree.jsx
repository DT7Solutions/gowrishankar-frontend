import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Thumbs, EffectFade, Autoplay } from "swiper";
import { Link } from "react-router-dom";
const ServiceAreaThree = () => {
  return (
    <div className="service-area-2 space-bottom position-relative z-index-common search-filters">
      <div className="container ">
        <div className="row gy-4 justify-content-center">
          <div className="col-xxl-12 col-xl-12">
            <div className="service-form-wrap">
              <h3 className="text-light text-center pb-4 pt-3">search Car Parts For Any Car</h3>
              <form className="default-form-wrap">
                <div className="row serarch-filter">
                  <div className="col-md-3 col-lg-2">
                    <div className="form-group m-0">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">Select Car Maker</option>
                        <option value="Construction">Auto Repair</option>
                        <option value="Real Estate">Car Repair</option>
                        <option value="Industry">Automotive</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-3 col-lg-2">
                    <div className="form-group m-0">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">Select Model Line</option>
                        <option value="Construction">TOYOTA</option>
                        <option value="Real Estate">SUZUKI</option>
                        <option value="Industry">TATA</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2 col-lg-2">
                    <div className="form-group m-0">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">Select Year</option>
                        <option value="Construction">1999</option>
                        <option value="Real Estate">2000</option>
                        <option value="Industry">2001</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="form-group m-0">
                      <select
                        name="subject"
                        id="subject"
                        className="form-select"
                        defaultValue={"Choose"}
                      >
                        <option value="Choose">Select Modification</option>
                        <option value="Construction">California</option>
                        <option value="Real Estate">New York</option>
                        <option value="Industry">Abu Dhabi</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-md-2">
                    <button type="submit" className="btn style2 m-0 w-100 search-btn">
                      Search Parts
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaThree;
