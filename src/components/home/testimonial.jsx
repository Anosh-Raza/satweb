
import { ReactGoogleReviews } from "react-google-reviews";
import "react-google-reviews/dist/index.css";

const TestimonialCarousel = () => {
  const featurableWidgetId = "d8af41f1-4970-4686-a0e1-46493ca4e914";
  

  return (
    <div className="testimonial-carousel bg-gray-300 py-24">
    <div className="px-6 sm:px-12 lg:px-24 container mx-auto">
      <h2 className="text-4xl font-bold text-logo-purple text-center mb-8">
        What Our Clients Say
      </h2>
      <ReactGoogleReviews layout="carousel" featurableId={featurableWidgetId} />
      
    </div></div>
  );
};

export default TestimonialCarousel;
