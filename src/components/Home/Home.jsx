import Banner from "../Banner/Banner";
import PopularMedicalCamps from "../PopularMedicalCamps/PopularMedicalCamps";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-349px)] mx-2 md:mx-10">
      <Banner></Banner>
      <PopularMedicalCamps></PopularMedicalCamps>
    </div>
  );
};

export default Home;
