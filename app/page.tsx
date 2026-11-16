import Image from 'next/image';
import FAQSection from './components/home/FAQSection';
import FeaturesSection from './components/home/FeaturesSection';
import Gallery from './components/home/GallerySection';
import ServicesSection from './components/home/ServicesSection';
import TechnologiesSection from './components/home/TechnologiesSection';
import Testimonials from './components/home/Testimonials';
import TrustSection from './components/home/TrustSection';
import WhyUs from './components/home/WhyUsSection';
import styles from './page.module.css';
import { ArrowRight } from "lucide-react";



export const metadata = {
  title: 'DevYuth | Custom Website and Software Development ',
  description:
    'Grow your business with professional web development, custom software solutions, digital services, and practical skill training. Hire experienced experts or start learning today.',
  keywords: [
    'web development services',
    'custom software development',
    'website design',
    'digital solutions',
    'professional web developers',
    'online skill training',
    'business growth solutions',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Web Development & Digital Solutions | DevYuth',
    description:
      'Professional web development, custom software, digital solutions and skill training to help businesses grow.',
    url: '/',
    siteName: 'Devyuth',
    images: [
      {
        url: '/herosectionimg.jpeg',
        width: 1920,
        height: 1080,
        alt: 'Professional digital services and skill development',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web Development & Digital Solutions | Your Brand',
    description:
      'Build your business with professional digital solutions and practical skill development.',
    images: ['/herosectionimg.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const Home = () => {
  return (
    <div>

      <section
        className="relative min-h-screen bg-white 
        overflow-hidden flex items-center">

        {/* Right Background Image */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-[58%]">

          <Image
            src="/herosectionimg.jpeg"
            alt="Digital creative team"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 58vw"
            className="object-cover object-center"
          />

          {/* Fade only towards the text */}
          <div
            className="absolute inset-0 bg-gradient-to-r
          from-white via-white/80 to-transparent" />

          <div
            className="absolute inset-0 bg-gradient-to-t
          from-white/50 via-transparent to-white/20" />
        </div>

        {/* Main Content */}
        <div
          className="relative z-10 w-full max-w-[1440px]
          mx-auto px-6 lg:px-16 pt-28 pb-16">

          <div className="max-w-[760px]">

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-8">
              <span
                className="text-xs font-bold tracking-[0.2em]
                uppercase text-emerald-700 bg-gray-200 px-3 py-2
                shadow-md rounded-full ">
                Digital Growth Partner
              </span>
            </div>

            {/* Heading */}
            
            <h1 className="font-sans text-[clamp(3.2rem,4.5vw,4.4rem)]
              font-extrabold tracking-[-0.065em]
              leading-[1.02] text-slate-950">
              We Build
              <br />
              <span className="relative inline-block
                font-['Caveat'] italic font-bold
                tracking-[-0.035em] text-emerald-600
                text-[1.12em]">
                Digital Experiences
                <span className="absolute left-0 -bottom-1
                  w-full h-[5px] bg-[#F5C542]
                  rounded-full -rotate-[3deg]" />
              </span>
              <br />
              That Grow Businesses
            </h1>


            {/* Description */}
            <p
              className="mt-7 max-w-[540px] text-base
              sm:text-sm leading-[1.8] text-slate-600">
              From high-performance websites to custom software,
              we create innovative digital solutions that help
              businesses stand out and grow faster.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <a
                href="https://wa.me/917003996182?text=Hello%2C%20I%20am%20interested%20in%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4
                  bg-emerald-600 text-white px-7 py-4
                  rounded-lg font-semibold text-sm
                  shadow-lg shadow-emerald-600/20
                  hover:bg-emerald-700 transition-all"
              >
                Hire Now
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>

              <a href="/about"
                className="inline-flex items-center gap-2
                text-slate-900 font-semibold text-sm
                hover:text-emerald-600 transition-colors">
                Discover Our Story
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* trust section */}
      <TrustSection />
      {/* features section */}
      <FeaturesSection />
      {/* servicess  */}
      <ServicesSection />
      {/* Why us section */}
      <WhyUs />
      {/* Testimonials & Reviews */}
      <Testimonials />
      {/* gallery */}
      <Gallery />
      {/* Technologies we use  */}
      <TechnologiesSection />
      {/* FAQ section */}
      <FAQSection />
    </div>
  );
};

export default Home;
