import box from '../assets/box.png'
export default function Product() {
    return (
        <section className='product-sec'>

            <img src={box} alt="Picture of Adtralza" />
            <div className='product-txt'>
                <h2>It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</h2>
                <a href="/" className="p-a">Learn more aboyut how Adtralza&#174; works and how to use it in treatment.</a>
            </div>

        </section>
    )

}