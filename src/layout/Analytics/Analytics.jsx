import useParticipant from "../../hooks/useParticipant";

const Analytics = () => {
  const participant = useParticipant();
  console.log(participant);

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit bg-base-100">
      <h2>This is analytics page</h2>
    </div>
  );
};

export default Analytics;
