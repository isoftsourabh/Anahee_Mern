import { Tab } from '@headlessui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const tabs = ['Commercial Details', 'Personal Details', 'Agent', 'Bank Details']
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}
export default function AddCustomer() {
       const navigate = useNavigate();
      
        const handleClick = () => {
          // You can perform other actions here before navigating
          // window.alert('Button clicked!');
          navigate('/components/Customerl'); // Replace '/CustomerList-page' with the desired route
        };
  const [selectedIndex, setSelectedIndex] = useState(0)
  return (
    <div className="p-4 bg-white rounded shadow max-w-7xl mx-auto">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Add Customer</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded"  onClick={handleClick}>Customer List</button>
      </div>
      <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <Tab.List className="flex space-x-1 border-b mb-4">
          {tabs.map((tab) => (
            <Tab
              key={tab}
              className={({ selected }) =>
                classNames(
                  'px-4 py-2 text-sm font-medium focus:outline-none',
                  selected
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-gray-500 hover:text-blue-600'
                )
              }
            >
              {tab}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>
            {/* Commercial Details */}
            <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-medium">Firm Name</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Firm Name" />
              </div>
              <div>
                <label className="block font-medium">Email Address</label>
                <input type="email" required className="w-full border p-2 rounded" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-medium">Customer Code</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Customer Code" />
              </div>
              <div>
                <label className="block font-medium">GST</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="GST" />
              </div>
              <div>
                <label className="block font-medium">Phone No*</label>
                <input type="tel" required className="w-full border p-2 rounded" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block font-medium">State</label>
                <select required className="w-full border p-2 rounded">
                  <option value="">-- Select state --</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">City</label>
                <select className="w-full border p-2 rounded">
                  <option>select city</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Pincode</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div>
                <label className="block font-medium">Sale Price*</label>
                <select required className="w-full border p-2 rounded">
                  <option>Online Retail</option>
                  <option>Wholesale</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Status</label>
                <div className="flex items-center gap-4 mt-2">
                  <label className="flex items-center">
                    <input type="radio" name="status" value="verified" className="mr-1" />
                    Verified
                  </label>
                  <label className="flex items-center">
                    <input type="radio" name="status" value="not_verified" className="mr-1" />
                    Not Verified
                  </label>
                </div>
              </div>
              <div>
                <label className="block font-medium">Transport</label>
                <select className="w-full border p-2 rounded">
                  <option>transport</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium">Address</label>
                <textarea className="w-full border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="md:col-span-2 flex gap-2 mt-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
                <button className="border px-6 py-2 rounded">Reset</button>
              </div>
            </form>
          </Tab.Panel>
          {/* Placeholder Panels */}
          <Tab.Panel>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-medium">Full Name</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Firm Name" />
              </div>
              <div>
                <label className="block font-medium">Email Address</label>
                <input type="email" required className="w-full border p-2 rounded" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-medium">Phone No*</label>
                <input type="tel" required className="w-full border p-2 rounded" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block font-medium">State</label>
                <select required className="w-full border p-2 rounded">
                  <option value="">-- Select state --</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">City</label>
                <select className="w-full border p-2 rounded">
                  <option>select city</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Pincode</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium">Address</label>
                <textarea className="w-full border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="md:col-span-2 flex gap-2 mt-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
                <button className="border px-6 py-2 rounded">Reset</button>
              </div>
            </form>
          </Tab.Panel>
          <Tab.Panel>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-medium">Agent</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Firm Name" />
              </div>
              <div>
                <label className="block font-medium">Email Address</label>
                <input type="email" required className="w-full border p-2 rounded" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-medium">Firm Name</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Customer Code" />
              </div>
              <div>
                <label className="block font-medium">Agent Commision</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="GST" />
              </div>
              <div>
                <label className="block font-medium">Phone No*</label>
                <input type="tel" required className="w-full border p-2 rounded" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block font-medium">State</label>
                <select required className="w-full border p-2 rounded">
                  <option value="">-- Select state --</option>
                  <option>Delhi</option>
                  <option>Maharashtra</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">City</label>
                <select className="w-full border p-2 rounded">
                  <option>select city</option>
                </select>
              </div>
              <div>
                <label className="block font-medium">Pincode</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div className="md:col-span-2">
                <label className="block font-medium">Address</label>
                <textarea className="w-full border p-2 rounded" rows={3}></textarea>
              </div>
              <div className="md:col-span-2 flex gap-2 mt-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
                <button className="border px-6 py-2 rounded">Reset</button>
              </div>
            </form>
          </Tab.Panel>
          <Tab.Panel>
          <form className="grid md:grid-cols-2 gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block font-medium">Bank Name</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Firm Name" />
              </div>
              <div>
                <label className="block font-medium">Account Type</label>
                <input type="email" required className="w-full border p-2 rounded" placeholder="Email Address" />
              </div>
              <div>
                <label className="block font-medium">Account Number</label>
                <input type="text" required className="w-full border p-2 rounded" placeholder="Customer Code" />
              </div>
              <div>
                <label className="block font-medium">IFSC Code</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="GST" />
              </div>
              <div>
                <label className="block font-medium">Cheque No*</label>
                <input type="tel" required className="w-full border p-2 rounded" placeholder="Phone Number" />
              </div>
              <div>
                <label className="block font-medium">Cheque Remarks</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div>
                <label className="block font-medium">MICR Code</label>
                <input type="text" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div>
                <label className="block font-medium">Bank Telephone Number</label>
                <input type="tel" className="w-full border p-2 rounded" placeholder="Pincode" />
              </div>
              <div className="md:col-span-2 flex gap-2 mt-2">
                <button className="bg-green-600 text-white px-6 py-2 rounded">Save</button>
                <button className="border px-6 py-2 rounded">Reset</button>
              </div>
            </form>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}