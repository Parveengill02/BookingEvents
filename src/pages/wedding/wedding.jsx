import React from 'react'
import {  useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';
const getVenues = (name) => [
  {
    title: `Hotel ${name} Venues`,
    image: "/images/w1.avif",
    type: "Hotel",
  },
  {
    title: `Outdoor ${name} Venues`,
    image: "/images/w2.avif",
    type: "Lawn",
  },
  {
    title: `Restaurant ${name} Venues`,
    image: "/images/w3.avif",
    type: "Banquet",
  },
  {
    title: `${name} Event Spaces`,
    image: "/images/w4.avif",
    type: "Hotel",
  },
];

const getServices = (name) => [
  {
    title: `${name} Makeup Artists`,
    description: `More PartySlate clients request a ${name.toLowerCase()} makeup artist than any other ${name.toLowerCase()} professional.`,
    image: "/images/m.jpeg",
    category: "Makeup Artists",
  },
  {
    title: `${name} Photographers`,
    description: `Hiring a top ${name.toLowerCase()} photographer means discovering your city’s top photo spots.`,
    image: "/images/p.jpeg",
    category: "Photographer",
  },
  {
    title: `${name} Caterers`,
    description: `Serve your guests everything from multi-course plated dinners to elevated action stations.`,
    image: "/images/c.jpg",
    category: "Caterer",
  },
  {
    title: `${name} Décor Companies`,
    description: `4 out of 5 clients hire a professional team to create their ${name.toLowerCase()} décor.`,
    image: "/images/de.jpg",
    category: "Rentals",
  },
];

const faqs = [
  {
    question: "What is the best venue for a wedding?",
    answer: "The best wedding venue depends on your vision, budget, and guest count. If you want a luxurious setting with all-inclusive services, hotels and banquet halls are excellent choices. For nature lovers, outdoor gardens, beaches, and vineyards offer stunning backdrops. Barn weddings provide a rustic charm, while destination weddings in resorts create a unique experience. Consider your personal style, guest convenience, and weather conditions before selecting a venue."
  },
  {
    question: "How much is the average wedding cake?",
    answer: "The cost of a wedding cake varies based on size, design, and ingredients. On average, couples spend between $300 and $700. A simple buttercream cake with minimal decorations is more affordable, while custom multi-tiered cakes with fondant designs and sugar flowers can exceed $1,000. Factors such as cake flavors, fillings, and delivery fees also impact the cost. It's best to consult with a professional baker for a detailed quote."
  },
  {
    question: "Where do you get wedding invitations?",
    answer: "Wedding invitations can be purchased from various sources depending on your budget and design preferences. Online platforms like Minted, Zola, and Etsy offer a wide range of customizable designs. For a more personalized touch, local stationery stores and graphic designers can create bespoke invitations tailored to your wedding theme. Digital invitations are also becoming popular as an eco-friendly and cost-effective alternative."
  },
  {
    question: "What are the best wedding favors?",
    answer: "The best wedding favors are thoughtful, useful, and memorable for guests. Personalized keepsakes like engraved keychains, mini photo frames, and customized candles make meaningful gifts. Edible treats such as gourmet chocolates, honey jars, and homemade cookies are always a hit. If you prefer eco-friendly options, small potted plants, seed packets, or reusable tote bags are great choices. Ultimately, select favors that reflect your wedding theme and personality."
  },
  {
    question: "What songs should I play at my wedding?",
    answer: "Your wedding playlist should include a mix of romantic ballads, upbeat dance tracks, and meaningful songs that reflect your love story. Classic choices for the ceremony include 'A Thousand Years' by Christina Perri and 'Canon in D' by Pachelbel. For the first dance, couples often choose songs like 'Perfect' by Ed Sheeran or 'At Last' by Etta James. The reception should feature a mix of genres to keep guests entertained, from oldies like 'Dancing Queen' by ABBA to modern hits like 'Uptown Funk' by Bruno Mars."
  },
  {
    question: "What pictures should be taken at a wedding?",
    answer: "A wedding album should capture all the special moments of the day. Essential shots include the bride and groom's first look, the exchange of vows, and the first kiss. Family and bridal party portraits, candid moments during the reception, and detail shots of the décor, rings, and wedding attire are also important. Don't forget fun moments like guests dancing, the cake cutting, and any special surprises planned during the event. Hiring a professional photographer ensures every detail is beautifully documented."
  },
  {
    question: "Do bridesmaids have to carry bouquets?",
    answer: "No, bridesmaids don’t have to carry traditional bouquets. While flowers are the most common choice, modern weddings are embracing creative alternatives. Bridesmaids can hold lanterns, fans, floral hoops, or even small clutch purses. Some couples choose single-stem flowers or greenery instead of full bouquets to keep things minimalist. Whatever you decide, make sure it complements the wedding theme and is comfortable for your bridesmaids."
  },
  {
    question: "What are the most popular flowers for weddings?",
    answer: "Roses, peonies, and lilies are among the most popular wedding flowers due to their timeless beauty and variety of colors. Hydrangeas, tulips, and orchids are also frequently used for bouquets and centerpieces. Seasonal flowers are a great choice because they are fresher and more cost-effective. Adding greenery such as eucalyptus and ferns can enhance floral arrangements while keeping costs manageable. Consider fragrance, durability, and symbolism when choosing wedding flowers."
  },
  {
    question: "How do you decorate a wedding arch?",
    answer: "A wedding arch can be decorated with fresh flowers, greenery, fabric drapes, and string lights to create a stunning focal point. Floral arrangements on the sides or top of the arch add elegance, while draped chiffon or silk fabric brings a romantic touch. For rustic weddings, wooden arches adorned with vines and lanterns look beautiful. For a beach or bohemian theme, pampas grass and macramé accents are trendy choices. Customize the decorations to match your wedding style."
  },
  {
    question: "What is a good budget for a wedding?",
    answer: "A wedding budget varies widely based on location, guest count, and preferences. The average wedding in the U.S. costs between $20,000 and $35,000. A small, intimate wedding can be planned for as little as $10,000, while luxury weddings can exceed $100,000. Key expenses include the venue, catering, attire, photography, and décor. Setting priorities and using budget-friendly alternatives like DIY décor and off-season bookings can help manage costs effectively."
  },
  {
    question: "Where can I have a beach wedding?",
    answer: "Beach weddings are popular in destinations like Hawaii, the Maldives, Mexico, and the Caribbean. In the U.S., Florida, California, and South Carolina offer beautiful beachside venues. When choosing a beach location, consider factors like tide schedules, permit requirements, and accessibility for guests. Some resorts offer all-inclusive beach wedding packages that handle logistics like seating, décor, and officiants, making the planning process stress-free."
  },
  {
    question: "How can I make my wedding different?",
    answer: "To make your wedding unique, personalize every detail to reflect your love story. Choose a non-traditional venue like a rooftop, museum, or botanical garden. Incorporate interactive experiences such as food trucks, live artists, or a DIY cocktail bar. Opt for creative entertainment like a jazz band, fireworks display, or cultural performances. Personalized vows, custom wedding favors, and unique guest seating arrangements can also make your wedding stand out."
  }
];

const birthdayFaqs = [
  {
    question: "What is the best venue for a birthday party?",
    answer: "The best birthday party venue depends on the age group, theme, and number of guests. Popular choices include banquet halls, restaurants, rooftop lounges, and private gardens. For kids’ birthdays, indoor play centers and amusement parks are great options, while adults may prefer lounges, clubs, or outdoor patios.",
  },
  {
    question: "How much does a birthday cake usually cost?",
    answer: "The cost of a birthday cake can range from $30 to $150 depending on size, design, and customization. Simple buttercream cakes are more affordable, while fondant-covered or theme cakes with intricate details can cost more. Custom cakes with character designs or edible photos may also increase the price.",
  },
  {
    question: "Where can I get birthday decorations?",
    answer: "Birthday decorations can be purchased from party supply stores, online platforms like Amazon and Etsy, or even rented from event planners. Popular decorations include balloons, banners, themed tableware, backdrops, and lights. Many vendors also offer decoration packages with setup services.",
  },
  {
    question: "What are the best birthday party favors?",
    answer: "Great birthday party favors include personalized keychains, mini toys, scented candles, chocolates, or goodie bags filled with treats. For kids, stickers, coloring kits, and puzzles are fun options. Adults often appreciate practical gifts like candles, coasters, or skincare samples.",
  },
  {
    question: "What music should I play at a birthday party?",
    answer: "Your birthday playlist should match the vibe of the party. Include upbeat tracks for dancing, classic hits for sing-alongs, and a mix of the birthday person's favorite songs. For kids, include fun, age-appropriate tunes. You can also hire a DJ or set up a playlist on Spotify for convenience.",
  },
  {
    question: "What are some must-have birthday party photos?",
    answer: "Must-have photos include the cake cutting, blowing out candles, group shots with friends and family, candid moments of laughter and fun, and details like the decorations and food setup. A photo booth with props is also a fun addition for memorable pictures.",
  },
  {
    question: "Do I need a planner for a birthday party?",
    answer: "Hiring a planner depends on your budget and the scale of the event. For large milestone birthdays or themed parties, planners can help coordinate vendors, décor, and logistics. For smaller gatherings, DIY planning with checklists and online tools is usually sufficient.",
  },
  {
    question: "What themes are popular for birthday parties?",
    answer: "Popular themes include tropical, retro, Hollywood, casino night, garden party, and glow-in-the-dark for adults. Kids often love superhero, princess, animal, and space themes. Personalizing the theme based on hobbies or favorite colors adds a special touch.",
  },
  {
    question: "How do I make a birthday party unique?",
    answer: "To make your birthday party stand out, incorporate personalized touches like a custom cake, themed dress code, interactive games, or a video montage. Consider hosting a DIY activity station, having a live entertainer, or organizing a surprise element like a flash mob or video message.",
  },
  {
    question: "What’s a good budget for a birthday party?",
    answer: "A birthday party budget varies based on guest count and preferences. You can plan a small home party for under $200 or a full-scale event with venue, catering, and entertainment for $1,000 or more. Prioritize essentials like food, cake, and decorations, and explore cost-saving options like DIY décor.",
  },
  {
    question: "Where can I host a birthday party for kids?",
    answer: "Great venues for kids' birthday parties include indoor play zones, trampoline parks, zoos, museums, and outdoor picnic areas. Some fast-food restaurants and entertainment centers also offer birthday packages that include meals, playtime, and return gifts.",
  },
  {
    question: "What activities can I include in a birthday party?",
    answer: "Fun birthday activities include games like scavenger hunts, trivia, karaoke, and dance-offs. For kids, consider crafts, magic shows, or puppet theaters. Adults might enjoy themed photo booths, drink tasting stations, or a movie screening under the stars.",
  }
];
const babyShowerFaqs = [
  {
    question: "When should I host a baby shower?",
    answer: "Baby showers are typically held during the third trimester, around 28 to 36 weeks of pregnancy. This timing ensures the pregnancy is well along, but early enough to avoid last-minute surprises.",
  },
  {
    question: "Who usually hosts a baby shower?",
    answer: "Traditionally, close friends or family members host the baby shower. However, modern etiquette allows anyone — including siblings, parents, or even the parents-to-be — to organize the celebration.",
  },
  {
    question: "Where can I host a baby shower?",
    answer: "Popular baby shower venues include private homes, gardens, restaurants, community halls, or event spaces. Outdoor venues like parks are great for casual, picnic-style showers during pleasant weather.",
  },
  {
    question: "What are some popular baby shower themes?",
    answer: "Favorite baby shower themes include 'Twinkle Twinkle Little Star', 'Boho Baby', 'Woodland Animals', 'Minimalist Neutral', 'Teddy Bear Picnic', or gender-specific themes like 'Little Princess' or 'Little Prince'.",
  },
  {
    question: "What activities should I include at a baby shower?",
    answer: "Common baby shower activities include gift opening, baby-themed games (like 'Guess the Baby Food' or 'Baby Bingo'), advice cards for parents, and fun photo booths with themed props.",
  },
  {
    question: "Do I need to serve a full meal at a baby shower?",
    answer: "It’s common to serve light refreshments like finger foods, appetizers, desserts, and drinks. A full meal is optional and depends on the timing and duration of the event.",
  },
  {
    question: "What are good baby shower favors for guests?",
    answer: "Popular baby shower favors include candles, mini succulents, personalized cookies, bath bombs, or small jars of honey or jam. Practical and thoughtful favors leave a lasting impression.",
  },
  {
    question: "How much should I budget for a baby shower?",
    answer: "Budgets can vary widely, from $200 for a simple home gathering to over $1,000 for a venue-based event with catering, decorations, and entertainment. Prioritize venue, food, and décor based on your guest list.",
  },
  {
    question: "Should the baby shower have a gift registry?",
    answer: "Yes, having a baby registry makes it easier for guests to choose gifts the parents actually need. It also helps avoid duplicate gifts and simplifies the shopping process.",
  },
  {
    question: "Can I have a co-ed baby shower?",
    answer: "Absolutely! Many modern baby showers are co-ed, welcoming both male and female guests. Co-ed showers often focus more on casual games, barbecues, or themed parties everyone can enjoy.",
  },
  {
    question: "What should I write in a baby shower invitation?",
    answer: "Include essential details: honoree's name, date, time, location, RSVP info, registry details, and any theme or dress code if applicable. A cute rhyme or baby-themed wording adds a nice touch.",
  },
  {
    question: "How long should a baby shower last?",
    answer: "Most baby showers last between 2 to 4 hours, giving enough time for mingling, games, food, and gift opening without tiring out the parents-to-be or guests.",
  },
];

const corporateEventFaqs = [
  {
    question: "What types of corporate events can be organized?",
    answer: "Corporate events can range from conferences, seminars, and team-building retreats to product launches, holiday parties, award ceremonies, and networking events. Each serves a different business goal, from education to celebration.",
  },
  {
    question: "How far in advance should I plan a corporate event?",
    answer: "It’s best to start planning a corporate event at least 3 to 6 months in advance, especially for larger events. Early planning ensures better venue availability, vendor options, and a smoother overall execution.",
  },
  {
    question: "What are popular venues for corporate events?",
    answer: "Popular corporate event venues include hotels with conference facilities, convention centers, banquet halls, rooftops for social events, and even offbeat spaces like art galleries, breweries, and outdoor gardens for informal gatherings.",
  },
  {
    question: "What should be included in a corporate event budget?",
    answer: "A typical corporate event budget should cover venue rental, catering, audio-visual equipment, decor, entertainment, transportation, marketing or promotional materials, and event staffing costs.",
  },
  {
    question: "How do I choose a theme for a corporate event?",
    answer: "The theme should align with the event’s purpose and audience. Popular themes include 'Casino Night', 'Gala Dinner', 'Innovation and Technology', 'Retro Party', or 'Outdoor Adventure' for team-building retreats.",
  },
  {
    question: "What activities or entertainment work well at corporate events?",
    answer: "Depending on the event type, you can include keynote speakers, panel discussions, live bands, DJs, interactive workshops, networking mixers, or even fun team-building games and competitions.",
  },
  {
    question: "Do I need a professional event planner for a corporate event?",
    answer: "Hiring a professional event planner is recommended for medium to large corporate events. They help manage logistics, vendor negotiations, timelines, and ensure the event runs smoothly, allowing you to focus on the attendees.",
  },
  {
    question: "How can I make my corporate event more engaging?",
    answer: "Incorporate interactive elements like live polls, Q&A sessions, gamification, branded photo booths, hands-on workshops, and creative networking activities to keep attendees involved and energized.",
  },
  {
    question: "What should I include in a corporate event invitation?",
    answer: "Include the event name, date, time, venue address, agenda highlights, dress code (if any), RSVP instructions, and any required registration links or materials attendees should bring.",
  },
  {
    question: "What’s a good dress code for a corporate event?",
    answer: "The dress code depends on the event type. Conferences and seminars typically require business formal or business casual, while corporate parties or retreats might allow for cocktail attire or smart casual outfits.",
  },
  {
    question: "How long should a corporate event last?",
    answer: "Corporate event durations vary: seminars and conferences can run all day, networking mixers often last 2-4 hours, and award ceremonies or galas typically span 3-5 hours including dinner and entertainment.",
  },
  {
    question: "How do I evaluate the success of a corporate event?",
    answer: "Use post-event surveys, feedback forms, attendee engagement metrics, social media mentions, and business outcomes like leads generated or employee satisfaction to measure the success of your event.",
  },
];

function EventPage() {
  const { name } = useParams()
  const venues = getVenues(name); // 'name' comes from props or useParams
  const weddingServices = getServices(name);
  
  return (
    <div>

      {
        name === "Wedding" &&
        <>
          <div className="wedding-container">
            {/* Left Content */}
            <div className="wedding-content">
              <h1><span>{name}</span></h1>
              <p>
                Your <span>{name}</span> should be as unique as you are as a couple. Every venue and
                location offers a stunning blank canvas for your customized<span>{name}</span>
                celebration — and Gill's Event Elegance has all of the resources you might need to
                make it uniquely you.
              </p>
              <ul>
                <li><a href="#wedding-venue">Find <span>{name}</span> Venues</a></li>
                <li><a href="#wedding-team">Build Your <span>{name}</span> Team</a></li>
                <li><Link to="/PageIdea">Browse <span>{name}</span> Ideas</Link></li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="wedding-image">
              <img src="/images/wedimg.jpg" alt="Wedding" />
            </div>
          </div>

          <div className='Wedding-slogan'>
        <p>"Planning your dream <span>{name}</span> has never been easier with Gill's Event Elegance! Simply share your guest count and preferences, and we’ll help you discover breathtaking venues you may not have considered. With our seamless messaging and quick responses, booking your perfect venue is stress-free. Let us make your special day truly unforgettable!"</p>
        <p2>~ Gill's Event Elegance</p2>
      </div>
          
            <div className="wedding2-container">
        <h1 className="wedding-title">Find Your Dream <span>{name}</span> Venue</h1>
        <p className="wedding-description">
          Discover stunning <span>{name}</span> venues that match your style and vision.
          From elegant ballrooms to scenic outdoor spaces, we have the perfect setting for your big day.
        </p>
        <div id="wedding-venue" className="wedding-venue-grid">
          {venues.map((venue, index) => (
            <Link to={`/venues/?type=${venue?.type}`}>
              <div key={index} className="wedding-venue-card">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="wedding-venue-image"
                />
                <div className="wedding-venue-info">
                  <h2 className="wedding-venue-title">{venue.title}</h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
        <div className='All-venues'>
          <Link to="/venues">Browse All {name} Venues</Link>
        </div>
      </div>
      <div id="wedding-team" className="wedding-team">
            <h1 className="wedding-team-title">Build Your Wedding Team</h1>
            <p className="wedding-team-description">
              Hiring a team of <span className="highlightText">top wedding professionals</span> means you can focus less on the details and more on your celebration. Gill's Event Elegance features the top companies for every wedding need. Browse photo albums from <span className="highlightText">top wedding photographers</span> , wedding cake designs from family-owned bakeries, portfolios from <span className="highlightText">top wedding makeup artists</span>, and much more.
            </p>
            <div className="wedding-team-grid">
              {weddingServices.map((service, index) => (
                <Link to={`/vendors?type=${service?.category}`}>
                <div key={index} className="wedding-service-card">

                  <img src={service.image} alt={service.title} className="wedding-service-image" />
                  <div className="wedding-service-content">
                    <Link to="/vendors">
                      <h2 className="wedding-service-title">{service.title} &gt;</h2>
                    </Link>
                    <p className="wedding-service-text">{service.description}</p>
                  </div>

                </div>
                </Link>
                
              ))}
            </div>
          </div>
          <div className="faq-container">
        <h1 className="faq-title">Wedding FAQs</h1>
        <Accordion className="faq-Accordion" >
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} key={index} className='faq-item'>
              <Accordion.Header>{`${index + 1}. ${faq.question}`}</Accordion.Header>
              <Accordion.Body>
                <div className="faq-answer">{faq.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>

        </>
      }
      {
        name === "Birthday Party" &&
        <>
          <div className="wedding-container">
          <div className="wedding-content">
          <h1><span>{name}</span></h1>
            {/* Left Content */}
          
            <p>
            Your <span>Birthday Party</span> should be as unique as you are. Every venue and
  location offers a stunning blank canvas for your customized <span>Birthday Party</span> celebration — 
  and Gill's Event Elegance has all of the resources you might need to make it uniquely you.
              </p>
              <ul>
                <li><a href="#wedding-venue">Find <span>{name}</span> Venues</a></li>
                <li><a href="#wedding-team">Build Your <span>{name}</span> Team</a></li>
                <li><a href="#">Browse <span>{name}</span> Ideas</a></li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="wedding-image">
              <img src="/images/birthday.jpg" alt="Birthday" />
            </div>
          </div>

          <div className='Wedding-slogan'>
        <p>"Planning your dream <span>{name}</span> has never been easier with Gill's Event Elegance! Simply share your guest count and preferences, and we’ll help you discover breathtaking venues you may not have considered. With our seamless messaging and quick responses, booking your perfect venue is stress-free. Let us make your special day truly unforgettable!"</p>
        <p2>~ Gill's Event Elegance</p2>
      </div>
          
            <div className="wedding2-container">
        <h1 className="wedding-title">Find Your Dream <span>{name}</span> Venue</h1>
        <p className="wedding-description">
          Discover stunning <span>{name}</span> venues that match your style and vision.
          From elegant ballrooms to scenic outdoor spaces, we have the perfect setting for your big day.
        </p>
        <div id="wedding-venue" className="wedding-venue-grid">
          {venues.map((venue, index) => (
            <Link to={`/venues/?type=${venue?.type}`}>
              <div key={index} className="wedding-venue-card">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="wedding-venue-image"
                />
                <div className="wedding-venue-info">
                  <h2 className="wedding-venue-title">{venue.title}</h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
        <div className='All-venues'>
          <Link to="/venues">Browse All {name} Venues</Link>
        </div>
      </div>
      <div id="wedding-team" className="wedding-team">
            <h1 className="wedding-team-title">Build Your {name} Team</h1>
            <p className="wedding-team-description">
              Hiring a team of <span className="highlightText">top {name}  professionals</span> means you can focus less on the details and more on your celebration. Gill's Event Elegance features the top companies for every {name}  need. Browse photo albums from <span className="highlightText">top {name}  photographers</span> , {name}  cake designs from family-owned bakeries, portfolios from <span className="highlightText">top {name}  makeup artists</span>, and much more.
            </p>
            <div className="wedding-team-grid">
              {weddingServices.map((service, index) => (
                 <Link to={`/vendors?type=${service?.category}`}>
                <div key={index} className="wedding-service-card">

                  <img src={service.image} alt={service.title} className="wedding-service-image" />
                  <div className="wedding-service-content">
                    <Link to="/vendors">
                      <h2 className="wedding-service-title">{service.title} &gt;</h2>
                    </Link>
                    <p className="wedding-service-text">{service.description}</p>
                  </div>

                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="faq-container">
        <h1 className="faq-title">{name} FAQs</h1>
        <Accordion className="faq-Accordion" >
          {birthdayFaqs.map((birthdayFaqs, index) => (
            <Accordion.Item eventKey={index} key={index} className='faq-item'>
              <Accordion.Header>{`${index + 1}. ${birthdayFaqs.question}`}</Accordion.Header>
              <Accordion.Body>
                <div className="faq-answer">{birthdayFaqs.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
        </>
      }
      {
        name === "Baby Showers" &&
        <>
          <div className="wedding-container">
            {/* Left Content */}
            <div className="wedding-content">
              <h1><span>{name}</span></h1>
              <p>
                Your <span>{name}</span> should be as unique as you. Every venue and
                location offers a stunning blank canvas for your customized<span>{name}</span>
                celebration — and Gill's Event Elegance has all of the resources you might need to
                make it uniquely you.
              </p>
              <ul>
                <li><a href="#wedding-venue">Find <span>{name}</span> Venues</a></li>
                <li><a href="#wedding-team">Build Your <span>{name}</span> Team</a></li>
                <li><a href="#">Browse <span>{name}</span> Ideas</a></li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="wedding-image">
              <img src="/images/babyshower.jpg" alt="Birthday" />
            </div>
          </div>
          <div className='Wedding-slogan'>
        <p>"Planning your dream <span>{name}</span> has never been easier with Gill's Event Elegance! Simply share your guest count and preferences, and we’ll help you discover breathtaking venues you may not have considered. With our seamless messaging and quick responses, booking your perfect venue is stress-free. Let us make your special day truly unforgettable!"</p>
        <p2>~ Gill's Event Elegance</p2>
      </div>
          
            <div className="wedding2-container">
        <h1 className="wedding-title">Find Your Dream <span>{name}</span> Venue</h1>
        <p className="wedding-description">
          Discover stunning <span>{name}</span> venues that match your style and vision.
          From elegant ballrooms to scenic outdoor spaces, we have the perfect setting for your big day.
        </p>
        <div id="wedding-venue" className="wedding-venue-grid">
          {venues.map((venue, index) => (
            <Link to={`/venues/?type=${venue?.type}`}>
              <div key={index} className="wedding-venue-card">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="wedding-venue-image"
                />
                <div className="wedding-venue-info">
                  <h2 className="wedding-venue-title">{venue.title}</h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
        <div className='All-venues'>
          <Link to="/venues">Browse All {name} Venues</Link>
        </div>
      </div>
      <div id="wedding-team" className="wedding-team">
            <h1 className="wedding-team-title">Build Your {name} Team</h1>
            <p className="wedding-team-description">
              Hiring a team of <span className="highlightText">top {name}  professionals</span> means you can focus less on the details and more on your celebration. Gill's Event Elegance features the top companies for every {name}  need. Browse photo albums from <span className="highlightText">top {name}  photographers</span> , {name}  cake designs from family-owned bakeries, portfolios from <span className="highlightText">top {name}  makeup artists</span>, and much more.
            </p>
            <div className="wedding-team-grid">
              {weddingServices.map((service, index) => (
                 <Link to={`/vendors?type=${service?.category}`}>
                <div key={index} className="wedding-service-card">

                  <img src={service.image} alt={service.title} className="wedding-service-image" />
                  <div className="wedding-service-content">
                    <Link to="/vendors">
                      <h2 className="wedding-service-title">{service.title} &gt;</h2>
                    </Link>
                    <p className="wedding-service-text">{service.description}</p>
                  </div>

                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="faq-container">
        <h1 className="faq-title">{name} FAQs</h1>
        <Accordion className="faq-Accordion" >
          {babyShowerFaqs.map((babyShowerFaqs, index) => (
            <Accordion.Item eventKey={index} key={index} className='faq-item'>
              <Accordion.Header>{`${index + 1}. ${babyShowerFaqs.question}`}</Accordion.Header>
              <Accordion.Body>
                <div className="faq-answer">{babyShowerFaqs.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
        </>
      }
      {
        name === "Corporate Events" &&
        <>
          <div className="wedding-container">
            {/* Left Content */}
            <div className="wedding-content">
              <h1><span>{name}</span></h1>
              <p>
                Your <span>{name}</span> should be as unique . Every venue and
                location offers a stunning blank canvas for your customized<span>{name}</span>
                celebration — and Gill's Event Elegance has all of the resources you might need to
                make it uniquely you.
              </p>
              <ul>
                <li><a href="#wedding-venue">Find <span>{name}</span> Venues</a></li>
                <li><a href="#wedding-team">Build Your <span>{name}</span> Team</a></li>
                <li><a href="#">Browse <span>{name}</span> Ideas</a></li>
              </ul>
            </div>

            {/* Right Image */}
            <div className="wedding-image">
              <img src="/images/corporate.jpg" alt="corporate" />
            </div>
          </div>
          <div className='Wedding-slogan'>
        <p>"Planning your dream <span>{name}</span> has never been easier with Gill's Event Elegance! Simply share your guest count and preferences, and we’ll help you discover breathtaking venues you may not have considered. With our seamless messaging and quick responses, booking your perfect venue is stress-free. Let us make your special day truly unforgettable!"</p>
        <p2>~ Gill's Event Elegance</p2>
      </div>
          
            <div className="wedding2-container">
        <h1 className="wedding-title">Find Your Dream <span>{name}</span> Venue</h1>
        <p className="wedding-description">
          Discover stunning <span>{name}</span> venues that match your style and vision.
          From elegant ballrooms to scenic outdoor spaces, we have the perfect setting for your big day.
        </p>
        <div id="wedding-venue" className="wedding-venue-grid">
          {venues.map((venue, index) => (
            <Link to={`/venues/?type=${venue?.type}`}>
              <div key={index} className="wedding-venue-card">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="wedding-venue-image"
                />
                <div className="wedding-venue-info">
                  <h2 className="wedding-venue-title">{venue.title}</h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
        <div className='All-venues'>
          <Link to="/venues">Browse All {name} Venues</Link>
        </div>
      </div>
      <div id="wedding-team" className="wedding-team">
            <h1 className="wedding-team-title">Build Your {name} Team</h1>
            <p className="wedding-team-description">
              Hiring a team of <span className="highlightText">top {name}  professionals</span> means you can focus less on the details and more on your celebration. Gill's Event Elegance features the top companies for every {name}  need. Browse photo albums from <span className="highlightText">top {name}  photographers</span> , {name}  cake designs from family-owned bakeries, portfolios from <span className="highlightText">top {name}  makeup artists</span>, and much more.
            </p>
            <div className="wedding-team-grid">
              {weddingServices.map((service, index) => (
                 <Link to={`/vendors?type=${service?.category}`}>
                <div key={index} className="wedding-service-card">

                  <img src={service.image} alt={service.title} className="wedding-service-image" />
                  <div className="wedding-service-content">
                    <Link to="/vendors">
                      <h2 className="wedding-service-title">{service.title} &gt;</h2>
                    </Link>
                    <p className="wedding-service-text">{service.description}</p>
                  </div>

                </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="faq-container">
        <h1 className="faq-title">{name} FAQs</h1>
        <Accordion className="faq-Accordion" >
          {corporateEventFaqs.map((corporateEventFaqs, index) => (
            <Accordion.Item eventKey={index} key={index} className='faq-item'>
              <Accordion.Header>{`${index + 1}. ${corporateEventFaqs.question}`}</Accordion.Header>
              <Accordion.Body>
                <div className="faq-answer">{corporateEventFaqs.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
        </>
      }

      {/* <div className='Wedding-image'>
        <img className='Wedimg' src="/images/wedimg.jpg"/>
      </div> */}
      {/* <div className='Wedding-slogan'>
        <p>"Planning your dream <span>{name}</span> has never been easier with Gill's Event Elegance! Simply share your guest count and preferences, and we’ll help you discover breathtaking venues you may not have considered. With our seamless messaging and quick responses, booking your perfect venue is stress-free. Let us make your special day truly unforgettable!"</p>
        <p2>~ Gill's Event Elegance</p2>
      </div> */}
      {/* <div className="wedding2-container">
        <h1 className="wedding-title">Find Your Dream <span>{name}</span> Venue</h1>
        <p className="wedding-description">
          Discover stunning <span>{name}</span> venues that match your style and vision.
          From elegant ballrooms to scenic outdoor spaces, we have the perfect setting for your big day.
        </p>
        <div id="wedding-venue" className="wedding-venue-grid">
          {venues.map((venue, index) => (
            <Link to={`/venues/?type=${venue?.type}`}>
              <div key={index} className="wedding-venue-card">
                <img
                  src={venue.image}
                  alt={venue.title}
                  className="wedding-venue-image"
                />
                <div className="wedding-venue-info">
                  <h2 className="wedding-venue-title">{venue.title}</h2>
                </div>

              </div>
            </Link>
          ))}

        </div>
        <div className='All-venues'>
          <Link to="/venues/?type=Banquet">Browse All {name} Venues</Link>
        </div>
      </div> */}
      {/* <div className="faq-container">
        <h1 className="faq-title">Wedding FAQs</h1>
        <Accordion className="faq-Accordion" >
          {faqs.map((faq, index) => (
            <Accordion.Item eventKey={index} key={index} className='faq-item'>
              <Accordion.Header>{`${index + 1}. ${faq.question}`}</Accordion.Header>
              <Accordion.Body>
                <div className="faq-answer">{faq.answer}</div>
              </Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div> */}

    </div>
  )
}

export default EventPage
