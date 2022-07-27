import React from "react";
import "../style/main.css";
function Main() {
  return (
    <div className="main-cont">
      <div className="container flex">
        <main className="sub-main-1">
          <div className="sub-main-desc">
            <h1>This is main section!!!</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              atque, sit obcaecati dolore blanditiis facilis error omnis
              veritatis alias reprehenderit ducimus corrupti eveniet modi at
              repellendus vero eligendi inventore officiis, culpa enim ratione
              provident? Perferendis veritatis illum ab quod ea.
            </p>
          </div>
          <div className="sub-menu">
            <h3>Submenu</h3>
            <ul className="sub-menu-ul">
              <li>Home</li>
              <li>Examples</li>
              <li>Contacts</li>
              <li>About</li>
            </ul>
          </div>
        </main>
        <main className="sub-main-2">
          <div className="sub-main-desc">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium ex voluptatum exercitationem, deleniti
              aspernatur iste ut corporis, nam fugit facere minima libero sunt
              beatae, esse maiores incidunt asperiores. Optio iure inventore
              perspiciatis sint vero aspernatur facilis, ex beatae eius eaque
              rem ut numquam eligendi cumque officiis, quidem pariatur ratione.
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Consectetur praesentium ex voluptatum exercitationem, deleniti
              aspernatur iste ut corporis, nam fugit facere minima libero sunt
              beatae, esse maiores incidunt asperiores.
            </p>
            <p className="quote-para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
              mollitia perspiciatis dolor commodi laborum, officiis ullam
              veritatis in accusantium placeat quae earum a vero aspernatur, qui
              cumque, assumenda enim animi. Officia, saepe beatae velit expedita
              nisi mollitia perferendis nemo distinctio illum tenetur harum
              quibusdam dolor iusto placeat tempora quas voluptate, quisquam
              incidunt. Explicabo quod, accusamus placeat soluta iusto velit
              quisquam nemo labore voluptate aliquam animi possimus et? Natus,
              blanditiis quaerat.{" "}
              <span className="quote">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ab
                quidem aperiam itaque possimus dolor hic iusto, aliquid
                doloremque fugit dolores officiis placeat minima ratione rerum!
                <em>
                  &mdash; Jeremy Keith, <cite>Mental models</cite>{" "}
                </em>
              </span>{" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, consectetur aperiam? Quidem accusamus neque facilis.
              Eveniet eum doloremque placeat illo quas, dignissimos dolore
              doloribus ut iure nisi at quia unde cupiditate aperiam in sint
              fugit perspiciatis est minus quisquam. Hic illo velit beatae
              asperiores ipsam ut ex exercitationem tenetur tempora, numquam
              vitae! Laudantium perferendis minus perspiciatis quam non tempore
              mollitia amet incidunt laborum saepe. Quod rem nobis quia hic odio
              distinctio vero tempora aliquid praesentium voluptatum. Laboriosam
              suscipit voluptatum corrupti Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Ratione necessitatibus pariatur
              accusantium! Et aspernatur praesentium, veritatis vitae aliquam
              nostrum corporis alias eos, deserunt ipsam maiores quam magnam rem
              exercitationem sunt?
            </p>
            <div className="heading">
              <h2>More in this series</h2>
            </div>
            <article className="main-article-card">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j1ivp1pmlqvoz52hhnah"
                className="img-responsive"
                alt="vada pav"
              />
              <div className="main-article-desc">
                <h2>Goli Vada Pav</h2>
                <p>
                  Vada pav, alternatively spelt wada pao, is a vegetarian fast
                  food dish native to the state of Maharashtra. The dish
                  consists of a deep fried potato dumpling placed inside a bread
                  bun sliced almost in half through the middle.
                </p>
              </div>
            </article>
            <article className="main-article-card">
              <img
                src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hif4y5cmvp1bvrkd0fjl"
                className="img-responsive"
                alt="Masala dose"
              />
              <div className="main-article-desc">
                <h2>Masala Dose</h2>
                <p>
                  Masala Dosa / dosey / dosai is a variation of the popular
                  South Indian dosa which has its origins in Tuluva Udupi
                  cuisine of Karnataka. It is made from rice, lentils, potato,
                  fenugreek.
                </p>
              </div>
            </article>
          </div>
          <div className="sub-menu">
            <section className="profile-card">
              <div className="image-cont">
                <div className="background-img-div">
                  <img
                    src="https://lh5.googleusercontent.com/p/AF1QipONBSS_6ZUKRibSpk3bH9kV1lwWhQS9_jrVUrBw=w408-h306-k-no"
                    className="img-responsive background-img"
                    alt="background-image"
                  />
                </div>
                <div className="profile-img-div">
                  <img
                    src="https://www.onthisday.com/images/people/tom-cruise-medium.jpg"
                    className="img-responsive profile-img"
                    alt="tom-cruise"
                  />
                </div>
              </div>
            </section>
            <section className="profile-info">
              <div className="flex justify-between">
                <h5>Name</h5>
                <span>Tom cruise</span>
              </div>
              <div className="flex justify-between">
                <h5>Email</h5>
                <span>Tomcruise@mail.com</span>
              </div>
              <div className="flex justify-between">
                <h5>Phone</h5>
                <span>+9229584733</span>
              </div>
            </section>
            <section className="message flex-column align-center">
              <h3>Send me a message</h3>
              <form action="" className="form flex-column">
                <label htmlFor="" className="flex-column input-label">
                  <span>Subject</span>
                  <input type="text" className="message-input" />
                </label>
                <label htmlFor="" className="flex-column input-label">
                  <span>Message</span>
                  <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    className="message-input"
                  ></textarea>
                </label>
                <button className="btn">send</button>
              </form>
            </section>
            <section className="location flex-column align-center">
              <h2>Or meet me at the office</h2>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d132806.32212780885!2d77.54180100803796!3d12.999346113133337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae15e3043a1d57%3A0xb2a4590209bde6d7!2sBengaluru%20Fort!5e0!3m2!1sen!2sin!4v1658918959453!5m2!1sen!2sin"
                className="map"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="location-desc">
                <p>jayanagar</p>
                <p>4th block near shoba</p>
                <p>Banglore</p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

export { Main };
