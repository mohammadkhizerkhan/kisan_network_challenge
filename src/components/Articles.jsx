import React from "react";
import "../style/article.css";

function Articles() {
  return (
    <div className="article-cont">
      <div className="container flex-column">
        <div className="heading">
            <h2>Related Articles</h2>
        </div>
        <div className="flex gap-2">
        <article className="article-card">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/j1ivp1pmlqvoz52hhnah"
            className="img-responsive"
            alt="vada pav"
          />
          <div className="article-desc">
            <h2>Goli Vada Pav</h2>
            <p>
              Vada pav, alternatively spelt wada pao, is a vegetarian fast food
              dish native to the state of Maharashtra. The dish consists of a
              deep fried potato dumpling placed inside a bread bun sliced almost
              in half through the middle.
            </p>
          </div>
        </article>
        <article className="article-card">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/g6c6wjueueugspecwvse"
            className="img-responsive"
            alt="Soan papdi"
          />
          <div className="article-desc">
            <h2>Soan papdi</h2>
            <p>
            Soan papdi is a popular dessert in the Indian subcontinent. The term sohan is of Persian origin. It bears some resemblance to the Persian sohan pashmaki, which gave rise to the Turkish pişmaniye.
            </p>
          </div>
        </article>
        <article className="article-card">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/hif4y5cmvp1bvrkd0fjl"
            className="img-responsive"
            alt="Masala dose"
          />
          <div className="article-desc">
            <h2>Masala Dose</h2>
            <p>
            Masala Dosa / dosey / dosai is a variation of the popular South Indian dosa which has its origins in Tuluva Udupi cuisine of Karnataka. It is made from rice, lentils, potato, fenugreek, ghee and curry leaves, and served with chutneys and sambar.
            </p>
          </div>
        </article>
        <article className="article-card">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ncgnqmurvu42munp7jav"
            className="img-responsive"
            alt="Idly"
          />
          <div className="article-desc">
            <h2>Idly</h2>
            <p>
            Idli or idly is a type of savoury rice cake, originating from the Indian subcontinent, popular as breakfast foods in Eastern and Southern India and in Sri Lanka.
            </p>
          </div>
        </article>
        <article className="article-card">
          <img
            src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ubg9jmhfr4xe3f7bdosu"
            className="img-responsive"
            alt="Nachos"
          />
          <div className="article-desc">
            <h2>Nachos</h2>
            <p>
            Nachos are a Mexican food consisting of fried tortilla chips or totopos covered with melted cheese or cheese sauce, as well as a variety of other toppings, often including meats, vegetables, and condiments such as salsa, guacamole, or sour cream.
            </p>
          </div>
        </article>
        </div>
      </div>
    </div>
  );
}

export { Articles };
