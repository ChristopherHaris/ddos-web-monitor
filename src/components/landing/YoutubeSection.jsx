function YoutubeSection() {
  return (
    <div className="flex flex-col gap-6 items-center mx-auto max-w-[80%] md:max-w-[75%] w-full my-11 lg:flex-row">
      <div className="w-full">
        <iframe
          className="w-full h-56 sm:h-72 md:h-96 lg:h-60 xl:h-72 2xl:h-80"
          src="https://www.youtube.com/embed/VJO8_dxrdI0"
          title="Program Aktivasi Bank Sampah Pengelolaan Sampah yang Berkelanjutan"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
      <div className="w-full">
        <iframe
          className="w-full h-56 sm:h-72 md:h-96 lg:h-60 xl:h-72 2xl:h-80"
          src="https://www.youtube.com/embed/EV4HWBTnxc8"
          title="Hari Peduli Sampah Nasional 2022"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </div>
  );
}

export default YoutubeSection;
