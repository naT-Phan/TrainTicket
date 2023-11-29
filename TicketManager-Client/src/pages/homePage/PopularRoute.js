import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
const PopularRoute = () => {
  const images = [
    {
      url: "https://dulichconvoi.com/wp-content/uploads/2020/02/ha.jpg",
    },

    {
      url: "https://ivisitasia.com/wp-content/uploads/2020/03/Da-Nang-Night-View_featured_1280-min.jpg",
    },
    {
      url: "https://www.intrepidtravel.com/adventures/wp-content/uploads/2018/05/Intrepid-Travel-Peregrine-Adventures-vietnam_Phong-Nha-Ke-Bang_np_389487718.jpg",
    },
    {
      url: "https://www.itourvn.com/images/easyblog_images/2021/january/update_12_beautiful_places_in_vietnam/beautiful-places-in-vietnam-sapa-fansipan-temple-outlook.jpg",
    },
    {
      url: "https://pickyourtrail.com/blog/wp-content/uploads/2019/06/featuredvietnam-min.jpg",
    },
    {
      url: "https://en.nhandan.vn/cdn/en/media/k2/items/src/441/543dc2a6c0f3a028cddb019b030bba52.jpg",
    },
  ];
  return (
    <div className="flex flex-col items-center lg:mt-[200px] ml-0">
      <div className="title text-4xl  dark:text-white mb-6 xl:!text-3xl">
        Populate Routes
      </div>
      <div className="desc text-lg opacity-60 mb-8 dark:text-white  xl:!text-md xl:!px-6 text-center">
        This is the most populate route that visitor has choosen this month
      </div>
      <div className="flex flex-wrap gap-10 items-center justify-center px-4">
        {images.map((item) => (
          <ItemRoute urlImage={item.url} key={item} />
        ))}
      </div>

      {/* populated destination suggestion */}
      <div className="mt-20 title text-4xl  dark:text-white mb-6 xl:!text-3xl">
        Suggestion Location
      </div>
      <div className="desc text-lg opacity-60 mb-8 dark:text-white xl:!text-md xl:!px-6 text-center">
        The beatiful destination for foreign people in the world
      </div>

      <div className="slider inset-0  w-full flex justify-center">
        <SimpleImageSlider
          width={"90%"}
          height={404}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
        />
      </div>
    </div>
  );
};

export default PopularRoute;

const ItemRoute = ({ urlImage }) => {
  return (
    <div className="item w-[340px] h-[460px] px-4 py-3 rounded-2xl shadow-xl flex flex-col overflow-hidden dark:bg-[#252525] hover:shadow-2xl transition-all duration-200 cursor-pointer hover:scale-105 dark:hover:border-white border-1 border-transparent dark:hover:border-1">
      <div className="image-wrapper w-full min-h-[200px] h-[200px]">
        <img
          className="w-full h-full object-cover rounded-xl"
          src={urlImage}
          alt=""
        />
      </div>

      <div className="star flex items-center mt-3 gap-1">
        <i class="fa-solid fa-star text-yellow-500 "></i>
        <span className="star-count ml-2 dark:text-white">4.78</span>
        <span className="opacity-60 font-extralight dark:text-white">
          (234 rates)
        </span>
      </div>
      <div className="route text-[18px] font-bold mt-3 dark:text-white">
        Ho Chi Minh{" "}
        <span mx-4>
          <i class="fa-solid fa-caret-right"></i>
        </span>{" "}
        Da Nang
      </div>

      <div className="session flex items-center gap-3 mt-3 ">
        <div className="icon text-blue-400">
          <i class="fa-solid fa-map"></i>
        </div>
        <div className="detail dark:text-white">810 kilometers</div>
      </div>

      <div className="session flex items-center gap-3 mt-3">
        <div className="icon text-blue-400">
          <i class="fa-solid fa-hourglass-empty"></i>
        </div>
        <div className="detail dark:text-white">21 hours</div>
      </div>

      <div className="session flex items-center gap-3 mt-3">
        <div className="icon text-blue-400">
          <i class="fa-solid fa-clipboard-list"></i>
        </div>
        <div className="detail dark:text-white">3.342 routes/month</div>
      </div>

      <div className="flex justify-between items-center">
        {" "}
        <div className="price dark:text-white px-3 pt-6 pb-10 rounded-xl dark:bg-gray-700  bg-opacity-40 font-bold   text-base inline-block h-fit">
          970.000 vnd
        </div>
        <div className="inline-block dark:text-white w-fit  mt-6  btn-detail pb-12 pt-3 p-5 bg-gray-200 hover:bg-blue-500 hover:text-white cursor-pointer font-bold text-blue-500 uppercase text-lg -mb-0 -mr-6 rounded-l-2xl pr-10">
          Detail
        </div>
      </div>
    </div>
  );
};
