import aboutImg from '../assets/images/about.png'
import c1 from '../assets/images/c1.png'
import c2 from '../assets/images/c2.png'
import c3 from '../assets/images/c3.png'
import c4 from '../assets/images/c4.png'
import CarouselSlide from '../Components/CarouselSlide'
import { celebrities } from '../Constransts/CelebrityData'
import HomeLayout from "../Layouts/HomeLayout"

const AboutUs = () => {

  return (
    <HomeLayout>
        <div className=" pt-20 flex flex-col text-white">
            <div className="pl-20 flex items-center gap-5 mx-10 absolute top-10">
                <section className='w-1/2 space-y-10 '>
                    <h1 className="font-extrabold text-5xl text-yellow-500">Affordable and quality education</h1>

                    <p>
                        Our goal is to provide the affordable and quality education to the world.
                        We are providing the platform for the aspiring teachers and students to share 
                        their skills, creativity , and knowledge to each-other to empower and contribute 
                        in the growth and wellness of mankind.
                    </p> 
                </section>

                <div className="w-1/2">
                    <img id='test1' 
                     src={aboutImg}
                      alt="about img"
                      style={{filter: 'drop-shadow(0px 10px 10px rgb(0,0,0))'}}
                       className='drop-shadow-2xl mb-10 w-[50rem] h-[30rem]' />
                </div>
            </div>

           <div className="h-[600px] carousel carousel-vertical mb-10 ">
                <div className="carousel-item ">
                    <img src={c1} />
                </div> 
                <div className="carousel-item ">
                    <img src={c2} />
                </div> 
                <div className="carousel-item ">
                    <img src={c3} />
                </div> 
                <div className="carousel-item ">
                    <img src={c4} />
                </div> 
            </div>

            <div className="carousel w-1/2 m-auto my-16">
                {celebrities && celebrities.map(celebrity => (<CarouselSlide 
                                                             {...celebrity} 
                                                             key={celebrity.slideNumber} 
                                                             totalSlides={celebrities.length} 
                                                             />))}
            </div>

        </div>
    </HomeLayout>
  )
}

export default AboutUs
