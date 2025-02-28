import React from 'react'

function Home() {
  return (
    <div>
      <div className="video">
        <video width="100%" height="100%" autoPlay muted loop>
          <source src="images/video.mp4" type="video/mp4" />
          </video>

        <div className="heading">
          <h1>"Transforming Events into Memorable Experiences!"</h1>
          <p>~ Gill's Event Elegance</p>
        </div>

      </div>
      <div className="contain">
        <h4>Plan Your Dream Event</h4>
        <p>Weddings, galas, birthdays, and more, PartySlate helps you find venues, vendors, and ideas you can't find anywhere else.</p>
        <button>Start Planning</button>
      </div>
      <div className="content1">
        <h4>Event Management Services : Gill's Event Elegance</h4>
        <div className="border"></div>
        <p>Welcome to BookingEvents.in, your one stop destination for all your event management
                planning and needs.  We are a fully function event management company  with expertise in designing, planning, executing
                and managing all kinds of events , We provide all kinds of event management services for all types of functions, big or small. We have a great team
                of professional with experience in handling all kinds of events there are with ease. We are among the
                best event planners in Delhi, Noida, Ghaziabad, Gurgaon and Faridabad and have a huge clientele of
                corporate and esteemed families.</p><br/>

            <p className="content1"> We know that every client has a different set of thoughts for their event. Every client
                wants to make their event special so that all the guests remember it. We work according to the
                requirements of our clients to make their event a lifetime memory. We understand that budget limitations
                are also a factor and thus we provide best possible arrangements. When we are managing your event, you
                can be rest assured that you will get the best services there are. Ask our previous clients and they
                will tell you how good our services are and you will get a great testimonial of our work. We have
                successfully executed many big and small events across Delhi NCR. BookingEvents.in offers its services
                for weddings, outdoor events, house events, religious events and so on.</p>

    </div>
    <div className="content2">
        <p>This is the new era and wedding functions are now a very serious and prestigious matter for the families. Now
            wedding planners organize everything so that you can spend more time with your family and can have more fun
            at the function. That is where we come in as our experience puts us among the top wedding event planners. We help in crafting the perfect wedding and devotional
            events. We also provide quality services for corporate events like book launch, product launch, conferences,
            annual days, award functions, entertainment shows, fashion shows and more. You can always relay on our team
            to create the best corporate event that you have wanted.</p><br/>
        <img src="images/lo.png"/>
      </div>


    </div>
  )
}

export default Home
