export const SubHeroCard = (cardContent) => {
  return (
    <div
      className="sub-hero-card w-80 p-5 bg-white shadow-lg flex flex-col justify-evenly h-63 items-center rounded-2xl"
      style={{ margin: "50px auto" }}
    >
      <div className="card-img">
        <span>{cardContent.cardImg}</span>
      </div>
      <h2 className="text-xl">{cardContent.title}</h2>
      <span className="text-[#A67B56] text-sm">{cardContent.content}</span>
    </div>
  );
};
