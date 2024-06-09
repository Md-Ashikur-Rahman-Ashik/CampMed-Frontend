import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules
import { Navigation } from "swiper/modules";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Feedback = () => {
  const {
    data: feedbacks,
    refetch,
    isPending: loading,
  } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const response = await axios.get("https://b9a12-server-side-md-ashikur-rahman-ashik.vercel.app/feedback", {
        withCredentials: true,
      });
      const data = await response.data;
      return data;
    },
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }
  refetch();

  //   console.log(feedbacks)

  return (
    <div className="mt-20">
      {feedbacks?.length === 0 && (
        <h2 className="font-bold text-center text-5xl text-green-900">
          Participant feedback will be shown here
        </h2>
      )}
      <Swiper
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        {feedbacks.map((review) => (
          <SwiperSlide key={review?._id}>
            <h2 className="font-bold items-center gap-4 text-5xl text-green-900 mb-10 flex justify-center">
              Participant Feedback
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
            </h2>
            <div className="container flex flex-col w-full max-w-lg p-6 mx-auto divide-y rounded-md divide-gray-700 bg-green-50 text-green-900">
              <div className="flex justify-between p-4">
                <div className="flex space-x-4">
                  <div>
                    <h4 className="font-bold">{review?.campName}</h4>
                    <span className="text-xs text-green-900">
                      {review?.participantName}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2 text-sm text-green-900">
                <p>{review?.feedback}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
