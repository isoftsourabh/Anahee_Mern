import React from "react";

const Register = () => {
  return (
    <div className="p-4 md:p-10 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-semibold mb-6">Add User</h2>

      <div className="bg-white shadow-md rounded-lg p-6">
        <button className="bg-blue-600 text-white px-4 py-2 rounded mb-6 flex items-center gap-2">
          <i className="fas fa-list-ul"></i> User List
        </button>

        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* User Name */}
          <div>
            <label className="block font-semibold mb-1">User Name *</label>
            <input type="text" placeholder="User Name" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Email */}
          <div>
            <label className="block font-semibold mb-1">Email Address *</label>
            <input type="email" placeholder="Email Address" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* First Name */}
          <div>
            <label className="block font-semibold mb-1">First Name *</label>
            <input type="text" placeholder="First Name" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Last Name */}
          <div>
            <label className="block font-semibold mb-1">Last Name *</label>
            <input type="text" placeholder="Last Name" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Password */}
          <div>
            <label className="block font-semibold mb-1">Password *</label>
            <input type="password" placeholder="Password" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Date of Birth */}
          <div>
            <label className="block font-semibold mb-1">Date of Birth*</label>
            <input type="date" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Phone No */}
          <div>
            <label className="block font-semibold mb-1">Phone No</label>
            <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* Picture Upload */}
          <div>
            <label className="block font-semibold mb-1">Picture</label>
            <input type="file" className="w-full border border-gray-300 p-2 rounded" />
          </div>

          {/* User Role */}
          <div>
            <label className="block font-semibold mb-1">User Role</label>
            <select className="w-full border border-gray-300 p-2 rounded">
              <option value="customer">Customer</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block font-semibold mb-1">Status</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="status" value="verified" /> Verified
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="status" value="not-verified" /> Not Verified
              </label>
            </div>
          </div>

          {/* Gender */}
          <div>
            <label className="block font-semibold mb-1">Gender *</label>
            <div className="flex gap-4 mt-2">
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="male" /> Male
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="gender" value="female" /> Female
              </label>
            </div>
          </div>

          {/* Address */}
          <div className="md:col-span-2">
            <label className="block font-semibold mb-1">Address</label>
            <textarea placeholder="Address" rows={3} className="w-full border border-gray-300 p-2 rounded"></textarea>
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex gap-4">
            <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
              Save
            </button>
            <button type="reset" className="bg-gray-300 px-4 py-2 rounded">
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
