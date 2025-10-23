import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { toast } from 'react-toastify';
import { Camera, Mail, User, Edit3 } from 'lucide-react';
import profileImg from '../assets/undraw_profile-details_6fky.svg'

const MyProfile = () => {
  const { user, profileUpdate, setUser, setLoading } = use(AuthContext);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(user?.displayName || '');
  const [photo, setPhoto] = useState(user?.photoURL || '');

  const handleUpdate = e => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error('Name cannot be empty');
      return;
    }

    profileUpdate(name, photo)
      .then(() => {
        setUser({ ...user, displayName: name, photoURL: photo });
        toast.success('Profile updated successfully');
        setEditing(false);
        setLoading(false)
      })
      .catch(err => {
        toast.error(err.message);
        setLoading(false)
      });
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 space-y-2">
        <title>GreenNest- Login to Your Profile</title>
        <img src={profileImg} alt="" className="h-80" />
        <p className="text-lg text-green-700 mb-4">
          You are not signed in. Please login to view your profile.
        </p>
        <a
          href="/auth/login"
          className="px-6 py-2 bg-[#E3B23C] text-white rounded-lg font-semibold hover:bg-[#B97C16] transition cursor-pointer"
        >
          Go to Login
        </a>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-green-50 flex justify-center items-center py-10">
      <title>My Profile - GreenNest</title>
      <div className="w-11/12 max-w-md bg-white shadow-md rounded-2xl p-8">
        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <img
              src={
                user?.photoURL ||
                'https://img.icons8.com/?size=160&id=114015&format=png'
              }
              alt="User Avatar"
              className="w-28 h-28 rounded-full border-4 border-green-500 object-cover"
            />
            <div className="absolute bottom-1 right-1 bg-green-600 p-1.5 rounded-full">
              <Camera className="text-white w-4 h-4" />
            </div>
          </div>

          <h2 className="text-2xl font-bold text-green-800 mt-4">
            {user.displayName || 'Anonymous User'}
          </h2>
          <p className="text-green-700 flex justify-center items-center gap-2 mt-1">
            <Mail size={16} /> {user.email}
          </p>
        </div>

        <hr className="my-6 border-green-200" />

        {editing ? (
          <form onSubmit={handleUpdate} className="space-y-4">
            <div>
              <label className="block text-green-800 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-green-800 font-medium mb-1">
                Photo URL
              </label>
              <input
                type="url"
                value={photo}
                onChange={e => setPhoto(e.target.value)}
                className="w-full px-4 py-2 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                placeholder="Enter photo URL"
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-5 py-2 border-2 border-green-600 text-green-700 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-5 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Save Changes
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center">
            <button
              onClick={() => setEditing(true)}
              className="mt-4 px-6 py-2 flex items-center justify-center gap-2 bg-[#E3B23C] text-white rounded-lg font-semibold hover:bg-[#B97C16] transition mx-auto cursor-pointer"
            >
              <Edit3 size={18} />
              Update Profile
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProfile;
