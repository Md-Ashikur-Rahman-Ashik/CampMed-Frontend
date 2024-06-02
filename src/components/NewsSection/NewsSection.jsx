const NewsSection = () => {
  const newsData = {
    headlineTicker: [
      "Upcoming Medical Camp in Kenya - Register Now!",
      "New Health Guidelines for Participants",
      "Success Story: How Our Medical Camp Transformed a Community in Brazil",
    ],
    featuredArticle: {
      title:
        "Success Story: How Our Medical Camp Transformed a Community in Brazil",
      image: "https://i.ibb.co/BL5qTnD/third-Card.png",
      summary:
        "Discover the incredible impact of our recent medical camp in Brazil, where we provided essential healthcare services and improved the lives of countless individuals.",
      link: "/news/success-story-brazil",
    },
    recentUpdates: [
      {
        title: "Upcoming Camp in South Africa",
        date: "22-08-2024",
        image: "https://i.ibb.co/5hZ55zj/second-Card.png",
        summary:
          "Join us in South Africa for a comprehensive medical camp aimed at improving community health.",
        link: "/news/upcoming-camp-south-africa",
      },
      {
        title: "Health Tips for Participants",
        date: "10-07-2024",
        image: "https://i.ibb.co/GxP4Dm9/fifth-Card.png",
        summary:
          "Essential health tips to help you prepare for and make the most of our medical camps.",
        link: "/news/health-tips",
      },
      {
        title: "Interview with Dr. John Doe on Community Health",
        date: "01-08-2024",
        image: "https://i.ibb.co/pWZYcJw/sixth-Card.png",
        summary:
          "Dr. John Doe shares insights on the importance of community health and the role of medical camps.",
        link: "/news/interview-dr-john-doe",
      },
    ],
    upcomingEvents: [
      {
        eventName: "Global Health Initiative",
        date: "15-07-2024",
        location: "Kenya",
        link: "/events/global-health-initiative",
      },
      {
        eventName: "Community Care Camp",
        date: "05-10-2024",
        location: "Nigeria",
        link: "/events/community-care-camp",
      },
    ],
    successStories: [
      {
        title: "Maria’s Journey: From Sickness to Health",
        image: "https://i.ibb.co/SPfzR5D/first-Card.png",
        summary:
          "Read about Maria's transformative journey and how our medical camp made a difference.",
        link: "/stories/maria-journey",
      },
      {
        title: "How Our Camps Have Helped Over 1000 People in Ethiopia",
        image: "https://i.ibb.co/p0Q5Jqp/fourth-Card.png",
        summary:
          "A look at the impact of our medical camps in Ethiopia and the lives we've touched.",
        link: "/stories/ethiopia-impact",
      },
    ],
  };

  return (
    <div className="bg-green-50 p-6 container rounded-xl mx-auto mt-20">
      <div className="bg-green-600 rounded-xl text-white py-2 text-center mb-6">
        <marquee direction="left">
          {newsData.headlineTicker.join(" | ")}
        </marquee>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl text-center font-bold text-green-600 mb-4">
          Featured Article
        </h2>
        <img
          src={newsData.featuredArticle.image}
          alt="Featured Article"
          className="w-full h-auto mb-4 rounded-xl"
        />
        <h3 className="text-xl font-semibold mb-2">
          {newsData.featuredArticle.title}
        </h3>
        <p className="mb-4">{newsData.featuredArticle.summary}</p>
        <span className="text-green-600 underline cursor-pointer">
          Read More
        </span>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Recent Updates
        </h2>
        <div className="flex flex-wrap -mx-2">
          {newsData.recentUpdates.map((update, index) => (
            <div
              key={index}
              className="w-full rounded-xl hover:scale-105 transition-transform md:w-1/3 px-2 mb-4"
            >
              <div className="bg-white p-4 border rounded">
                <img
                  src={update.image}
                  alt={update.title}
                  className="w-full h-auto mb-2 rounded-xl"
                />
                <h3 className="text-lg font-semibold mb-1">{update.title}</h3>
                <p className="text-sm text-gray-500 mb-2">{update.date}</p>
                <p className="mb-2">{update.summary}</p>
                <span className="text-green-600 underline cursor-pointer">
                  Learn More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Upcoming Events
        </h2>
        <ul className="list-disc list-inside">
          {newsData.upcomingEvents.map((event, index) => (
            <li key={index} className="mb-2">
              <span className="text-green-600 underline cursor-pointer">
                {event.eventName} - {event.date}, {event.location}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-center text-green-600 mb-4">
          Success Stories
        </h2>
        <div className="flex flex-wrap -mx-2">
          {newsData.successStories.map((story, index) => (
            <div
              key={index}
              className="w-full hover:scale-y-105 transition-transform md:w-1/2 px-2 mb-4"
            >
              <div className="bg-white p-4 border rounded">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-auto mb-2"
                />
                <h3 className="text-lg font-semibold mb-1">{story.title}</h3>
                <p className="mb-2">{story.summary}</p>
                <span className="text-green-600 underline cursor-pointer">
                  Read More
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
