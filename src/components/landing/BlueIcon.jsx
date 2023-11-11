function BlueIcon({ icon: IconComponent, iconSize }) {
  return (
    <div className="group w-16 h-16 outline-blue-900 outline outline-4 rounded-full flex items-center justify-center overflow-hidden hover:outline-white transition-all duration-300 ease-in-out">
      <div className="flex items-center justify-center group-hover:bg-blue-900 w-full h-full rounded-full transition-all duration-300 ease-in-out">
        <IconComponent size={iconSize} className="text-blue-900 group-hover:text-white transition-all duration-300 ease-in-out" />
      </div>
    </div>
  );
}

export default BlueIcon;
