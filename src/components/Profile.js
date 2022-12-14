import React from "react";

const Profile = ({ user }) => {
  return (
    <div className="max-w-4xl flex items-center h-auto lg:h-screen flex-wrap mx-auto my-32 lg:my-0">
      <div
        id="profile"
        className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-75 mx-6 lg:mx-0"
      >
        <div className="p-4 md:p-12 text-center lg:text-left">
          <div
            className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center"
            style={{
              backgroundImage: `url("https://source.unsplash.com/MP0IUfwrn0A")`,
            }}
          ></div>

          <h1 className="text-3xl font-bold pt-8 lg:pt-0">{user.login}</h1>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            {user.name}
          </p>
          <div className="flex">
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              No. of public Repos
            </p>
            <div className="m-2 rounded-full bg-green-700 hover:bg-green-900">
              <p>{user.public_repos}</p>
            </div>
          </div>
          <div className="flex">
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
              No. of public gists
            </p>
            <div className="m-2 rounded-full bg-green-700 hover:bg-green-900">
              <p>{user.public_gists}</p>
            </div>
          </div>
          <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start">
            Profile create at{" "}
            {new Date().toISOString().split(`${user.created_at}`)[0]}
          </p>
          <div className="pt-12 pb-8">
            <button className="bg-green-700 hover:bg-green-900 text-white font-bold py-2 px-4 rounded-full">
              Get In Touch
            </button>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-2/5">
        <img
          src={user.avatar_url}
          className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
        />
      </div>
    </div>
  );
};

export default Profile;
