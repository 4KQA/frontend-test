import React from 'react'
import Packshot from "./img/adtralza-packshot.png"
import "./maincontent.css"

export default function Product() {
  return (
        <article className="container product">
                <figure>
                    <img src={Packshot} alt="Adtralza injection syringe packet" />
                </figure>
                <section>
                    <h1>
                    It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)
                    </h1>
                    <p>Learn more about how Adtralza® works and how to use it in treatment.</p>
                </section>
        </article>
  )
}
