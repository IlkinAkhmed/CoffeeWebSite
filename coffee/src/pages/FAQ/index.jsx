import React from 'react'
import "./index.scss"
import useFetchData from '../../hooks/UseFetchData'
import Loading from '../isLoading';
import Error from '../Error';
import Accordion from '../../components/Accordion';

const FAQ = () => {
    const { data, isLoading, error } = useFetchData("contact");

    const faqItems = [
        { title: 'How does this work?', content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.' },
        { title: 'Some menus are missing on a coffee shop page?', content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.' },
        { title: 'Do any of your cheeses contain enzymes derived from animal sources?', content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.' },
        { title: 'Are your menu prices the same as those at the Coffee House?', content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.' },
        { title: 'Are your doughs vegan or vegetarian friendly?', content: 'Simply put, we deliver your favourite menu from coffee house of choice. Our platform asking enables you to enter your postcode and select a nearby restaurant of choice e.g McDonaldsKFC, …Wagamama e.t.c for delivery. Within each of these Coffee you will find their menus which you can add to basket.' },
      ];
  return (
    <>
        {
            isLoading ? (
                <Loading />
            ) : (
                <>
                <div className='contact-main'>
                    <h2>ASKING QUESTION</h2>
                    <div className='home-slash-page'>
                        <h6>HOME/</h6>
                        <span>FAQ</span>
                    </div>
                    <img className='shape' src="https://xpressrow.com/html/cafena/cafena/assets/images/shape/breadcrumb-shape-2.png" alt="" />
                </div>
                <div className='faq-main'>
                    <div className="accordion">
                        {faqItems.map((item, index) => (
                        <Accordion key={index} title={item.title} content={item.content} />
                        ))}
                    </div>
                </div>
                </>
            )
        }
    </>
  )
}

export default FAQ