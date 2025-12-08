function Profile() {
  const customer = JSON.parse(localStorage.getItem("customer"));

  return (
    <div className="flex items-center space-x-4">
      <div>
        <h2 className="text-md md:text-xl font-semibold mt-2">{customer.name}</h2>
        <p className="text-sm md:text-md text-gray-600">{customer.email}</p>
      </div>
      <img
        src={`https://ui-avatars.com/api/?name=${customer.name}&background=random`}
        alt="avatar"
        className="w-10 h-10 md:w-12 md:h-12 rounded-full"
      />
    </div>
  );
}

export default Profile;
