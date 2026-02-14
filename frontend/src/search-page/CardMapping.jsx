function CardMapping({ data }) {
    return (
        <div className="ml-11 mt-5 flex flex-wrap gap-6">
            {data.map((elem, index) => (
                <div
                    key={index}
                    className="w-[30%] bg-white rounded-2xl shadow overflow-hidden flex flex-col gap-6"
                >
                    <img
                        src={elem.img}
                        alt="food"
                        className="w-full h-40 object-cover"
                    />

                    <div className="p-3 flex flex-col gap-3">
                        <div className="flex justify-between">
                            <h4 className="font-bold">{elem.title}</h4>
                            <p className="bg-green-200 px-2 rounded">
                                {elem.rating}⭐
                            </p>
                        </div>

                        <p className="text-gray-500">{elem.time}</p>

                        <div className="flex justify-between">
                            <h1 className="text-orange-500">{elem.rupee}</h1>
                            <p>₹{elem.number}</p>
                        </div>

                        <button className="bg-orange-500 text-white py-2 rounded-full">
                            {elem.button}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardMapping
