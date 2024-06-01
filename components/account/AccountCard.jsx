const AccountCard = ({ data }) => {
  let content = [];

  for (const key in data) {
    if (key === "id" || key === "title" || key === "name" ) continue;
    content.push(<p className="text-gray-800">{data[key]}</p>);
  }
  return (
    <div className="shadow rounded bg-white px-4 pt-6 pb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-medium text-gray-800 text-lg">{data.title}</h3>
        <a href="#" className="text-primary">
          Edit
        </a>
      </div>
      <div className="space-y-1">
        <h4 className="text-gray-700 font-medium">{data.name} </h4>
        {content.map((item) => item)}
      </div>
    </div>
  );
};

export default AccountCard;
