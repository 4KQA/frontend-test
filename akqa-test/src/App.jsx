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
import vidplaceholder from '../src/assets/vidplaceholder.png'
import lady from '../src/assets/lady.png'
import inject from '../src/assets/inject.png'

import { BubbleCard, DefaultCard, VideoCard } from './components/cards'

function App() {
  return (
    <body>
      <Header />
      {/*HEADER (WHITE BG) with dropdown menu1 (GREY BG, BLUE TEXT, UNDERLINED AT ACTIVE) and dropdown menu2 (BLUE BG, WHITE TEXT, UNDERLINED AT ACTIVE)*/}

      <main>
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
            <a href="/">Learn more aboyut how Adtralza&#174; works and how to use it in treatment.</a>

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
            descrip="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sodales fringilla diam, nec faucibus nibh. Vestibulum vehicula odio in tellus egestas pharetra."
            link="See safety profile"
          />
        </section>

        <section className='benefits'>
          <h2>Adtralza&#174; neutralizes IL-13, a key driver of Atopic Dermatitis signs and symptoms.</h2>
          <p>By specifically targeting the IL-13 cytokine, Adtralza® inhibits the interaction with type II receptors and prevents IL-13-induced inflammatory responses in the skin(1,2).</p>


          <div className="b_list">
            <p>Adtralza&#174; selectively modulates the dysregulated immune system by(1):</p>
            <ul className="b_listItems">
              <li>Reducing markers of skin inflammation</li>
              <li>Improving markers of skin barrier integrity</li>
              <li>Reducing epidermal thickness</li>
            </ul>
          </div>

          <div className="b_vid">
            <img src={vidplaceholder} alt="Video to be displayed here, this is a placeholder."></img>
            <input type="submit" placeholder="Watch the video" />
            <small><i>Duration: 2:43</i></small>
          </div>
          {/*TODO: Section: heading, 2 sentences+3points, 1 CTA for video play + duration GREY BG*/}
        </section>

        <section className='tools'>
          <h2>Clinical tools - at a glance</h2>

          <div>
            <DefaultCard
              image={lady}
              title="Dosing guide"
              descrip="Adtralza&#174; has a straightforward dosing regimen, with 150 mg prefilled syringes(1)."
              link="Learn more about application and dosing"
            />

            <DefaultCard
              image={inject}
              title="Patient injection made simple"
              descrip="This step by step video guide shows the patient how to self inject using the two syringes that come in the Adtralza&#174; carton."
              link="Watch the video"
            />
          </div>

          {/*TODO: Section: heading, 2 cards w. pciture on top and text bottom WHITE BG*/}
        </section>

        <section className='expert-insight'>
          <h2>KOL Videos - get expert insights here</h2>
          <p>See what Key opinion leaders have to say about their experiences with Adtralza&#174;</p>

            <article>
              <div>
                <VideoCard 
                  title="Video title"
                  descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
                />
                <VideoCard 
                  title="Video title"
                  descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
                />
              </div>
              <div>
              <VideoCard 
                  title="Video title"
                  descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
                />
                <VideoCard 
                  title="Video title"
                  descrip="Short description of the contents or subject of the video.  You can upload a screen from the video as thumbnail image"
                />
              </div>
            </article>


          {/*TODO: Section: heading, subtitle, 2 rows, 4 vids on left side with text on right side – grid, stacked 2x2 – dropdown? references GREY BG*/}
        </section>
      </main>

      <Footer />
      {/*TODO: FOOTER: logo left, copyright right, 6 links bottom right with vertical divider BLUE BG*/}






      {/*Full width picture with heading and paragraph on top*/}

      {/*Section: picture left, heading+paragraph right GREY BG*/}

      {/*Section: 3 columns = bubble, heading+paragraph+link, text aligned center WHITE BG*/}








    </body>
  )
}

export default App
