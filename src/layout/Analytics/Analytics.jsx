import useParticipant from "../../hooks/useParticipant";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from "recharts";

const Analytics = () => {
  const [participant, refetch, loading] = useParticipant();
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];
  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  refetch();
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

  // console.log(participant);

  return (
    <div className="card card-compact container rounded-xl mx-auto max-w-fit bg-base-100">
      <h2 className="font-bold mb-10 text-center text-5xl text-green-900">
        Bar Chart Of Camp Fees
      </h2>
      <BarChart
        width={400}
        height={300}
        data={participant}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="campName" />
        <YAxis />
        <Bar
          dataKey="campFees"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}
        >
          {participant.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
    </div>
  );
};

export default Analytics;
