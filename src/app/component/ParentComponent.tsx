import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  let name = "Fahad Aamir";
  let rank = "Assistant Manager"
  let profile= "Works at Abc Company since 2024"
  return (
    <div className="mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <ChildComponent name={name} />
      <ChildComponent rank={rank} />
      <ChildComponent profile={profile} />
    </div>
  );
};

export default ParentComponent;
