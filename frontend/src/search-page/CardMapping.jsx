function CardMapping({ meal }) {
  return (
    <div className="group h-[46vh] bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden flex flex-col border border-gray-100">
      <div className="relative h-48 overflow-hidden">
        <img
          src={meal.foodPhotos}
          alt={meal.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded-lg font-bold text-sm">
          {meal.rating} ⭐
        </div>
      </div>
      <div className="p-4 flex flex-col grow">
        <h4 className="font-bold text-xl mb-1 flex items-center gap-2 text-gray-800 capitalize">
          {meal.title}{" "}
          <div
            className={`rounded-full h-3 w-3 ${meal.category === "veg" ? "bg-green-600" : "bg-red-600"}`}
          ></div>
        </h4>
        <p className="text-[#b18a6f] text-sm mb-4 capitalize">
          {meal.provider.name}
        </p>
        <p className="text-gray-400 capitalize text-sm mb-4">
          {meal.provider.address}
        </p>
        <div className="mt-auto flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs text-[#b18a6f]">STARTING FROM</span>
            <div>
              <span className="text-[#f47b25] font-bold text-2xl">
                ₹{meal.price}
              </span>
              <span className="text-gray-500 text-sm"> /meal</span>
            </div>
          </div>
          <button className="bg-[#f47b25] hover:bg-[#e36a14] cursor-pointer text-white px-4 py-2 rounded-xl text-sm font-bold transition-colors">
            View Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardMapping;
