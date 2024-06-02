import Banner from "../Banner/Banner";
import NewsSection from "../NewsSection/NewsSection";
import PopularMedicalCamps from "../PopularMedicalCamps/PopularMedicalCamps";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-349px)] mx-2 md:mx-10">
      <Banner></Banner>
      <PopularMedicalCamps></PopularMedicalCamps>
      <NewsSection></NewsSection>
    </div>
  );
};

export default Home;
