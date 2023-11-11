import './App.css'
import Header from './components/header'
import Footer from './components/Footer'

//importering af billeder
import fullW from '../src/assets/fullwidthpic.png'
import adtralza from '../src/assets/adtralza.png'
import box from '../src/assets/box.png'
import number from '../src/assets/bobler/number.svg'
import handheart from '../src/assets/bobler/handheart.svg'
import handsecure from '../src/assets/bobler/handsecure.svg'

import { BubbleCard } from './components/cards'

function App() {
  return (
    <body>
      <Header />
      {/*HEADER (WHITE BG) with dropdown menu1 (GREY BG, BLUE TEXT, UNDERLINED AT ACTIVE) and dropdown menu2 (BLUE BG, WHITE TEXT, UNDERLINED AT ACTIVE)*/}


      <section className="pic-w-txt">
        <div className='bg-pic'>
          <img src={fullW} alt="Top picture" />
        </div>

        <div className='info-sec'>
          <img src={adtralza} alt=".." className='logo-pic' />
          <h2>Adtralza&#174; is a new treatment for adult patients with moderate-to-severe atopic dermatitis (eczema) who are candidates for systemic therapy.</h2>
        </div>
      </section>

      <section className='product-sec'>

        <img src={box} alt="Picture of Adtralza" />
        <div className='product-txt'>
          <h2><i>It is the first and only biologic developed to specifically neutralize IL-13, a key driver of atopic dermatitis signs and symptoms(1,2)</i></h2>
          <p>Learn more aboyut how Adtralza&#174; works and how to use it in treatment.</p>

        </div>

      </section>

      <section className='bub-card-container'>
        <BubbleCard
          image={number}
          title="Long term suistained improvement"
          descrip="9 out of 10 respondents experienced sustained disease control in clinical trials 10, providing sustained improvements in the burden of disease(1,2,1,8*)."
          link="See efficacy and trial data"
        />

        <BubbleCard
          image={handheart}
          title="Improvements in the burden of disease"
          descrip="Patients in clinical trials saw an improvement in Quality of Life with early symptom relief and sustained improvements in burden of disease from week 16 to 32(12,13)."
          link="Learn more about quality of life improvements"
        />

        <BubbleCard
          image={handsecure}
          title="Good safety profile"
          descrip="*Description of good safety profile.*"
          link="See safety profile"
        />
      </section>

      <section className='benefits'>
        {/*TODO: Section: heading, 2 sentences+3points, 1 CTA for video play + duration GREY BG*/}
      </section>

      <section className='tools'>
        {/*TODO: Section: heading, 2 cards w. pciture on top and text bottom WHITE BG*/}
      </section>

      <section className='expert-insight'>
        {/*TODO: Section: heading, subtitle, 2 rows, 4 vids on left side with text on right side – grid, stacked 2x2 – dropdown? references GREY BG*/}
      </section>


      <Footer/>
      {/*TODO: FOOTER: logo left, copyright right, 6 links bottom right with vertical divider BLUE BG*/}






      {/*Full width picture with heading and paragraph on top*/}

      {/*Section: picture left, heading+paragraph right GREY BG*/}

      {/*Section: 3 columns = bubble, heading+paragraph+link, text aligned center WHITE BG*/}








    </body>
  )
}

export default App
