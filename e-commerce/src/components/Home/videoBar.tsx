import video_1 from "../../assets/vid1.mp4";
import video_2 from "../../assets/vid2.mp4";
import video_4 from "../../assets/vid4.mp4";
import video_5 from "../../assets/vid5.mp4";
import video_6 from "../../assets/vid6.mp4";
import video_7 from "../../assets/vid7.mp4";

function VideoBar() {
  return (
    <div className="max-w-[100vh] flex justify-center ">
      <video
        className="md:h-[64vh]  opacity-[0.5] h-[28.3vh]"
        autoPlay
        loop
        muted
      >
        <source src={video_1} type="video/mp4" />
      </video>
      <video
        className="md:h-[64vh]  opacity-[0.5] h-[28.3vh]"
        autoPlay
        loop
        muted
      >
        <source src={video_7} type="video/mp4 " />
      </video>
      <video
        className="md:h-[64vh]  opacity-[0.5] h-[28.3vh]"
        autoPlay
        loop
        muted
      >
        <source src={video_2} type="video/mp4" />
      </video>
      <video
        className="h-[64vh] opacity-[0.5] md:flex hidden"
        autoPlay
        loop
        muted
      >
        <source src={video_4} type="video/mp4" />
      </video>
      <video
        className="h-[64vh] opacity-[0.5] md:flex hidden"
        autoPlay
        loop
        muted
      >
        <source src={video_6} type="video/mp4" />
      </video>
      <video
        className="h-[64vh] opacity-[0.5] md:flex hidden"
        autoPlay
        loop
        muted
      >
        <source src={video_5} type="video/mp4" />
      </video>
      <p className="absolute top-[150px] text-[#f7583e] lg:text-[12rem] text-[4rem] whitespace-nowrap">
        new collection
      </p>
    </div>
  );
}

export default VideoBar;
