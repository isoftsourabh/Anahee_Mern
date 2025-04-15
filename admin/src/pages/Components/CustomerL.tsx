import React, { useState, useEffect } from 'react';
// import './CustomerList.css'; // Create this CSS file
import { useNavigate } from 'react-router-dom';
interface Customer {
  Sr_no: number;
  FirmName: string;
  EMail: string;
  CustomerCode: number | string;
  GSTNo?: string;
  PhoneNo?: string;
  City?: string;
  State?: string;
  Pincode?: number | string;
  SalePrice?: number | string;
  Status?: number;
  Transport?: string;
  Address?: string;
  Name?: string;
  email?: string; // Duplicate of E-mail? Clarify if needed
}
const CustomersL: React.FC = () => {
   const navigate = useNavigate();
  
    const handleClick = () => {
      // You can perform other actions here before navigating
      // window.alert('Button clicked!');
      navigate('/components/AddCustomers'); // Replace '/CustomerList-page' with the desired route
    };
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      const mockData: Customer[] = [
        { Sr_no: 1, FirmName: 'Ram brite', EMail: 'ram@gmail.com', CustomerCode: 110, GSTNo: '1246578', PhoneNo: '7894561230', City: 'Indore', State: 'mp', Pincode: 452011, SalePrice: 2.00, Status: 1, Transport: '...', Address: 'Indore', Name: '...', email: '...' },
        { Sr_no: 2, FirmName: 'Ram brite', EMail: 'rambrite@gmail.com', CustomerCode: 1214, GSTNo: '1234', PhoneNo: '145620', City: 'Bhavnagar', State: '12', Pincode: 522100, SalePrice: 'Online Wholesale Prepaid', Status: 1, Transport: '...', Address: 'Gujarat', Name: 'Ram bria', email: 'ramk@gmail.c' },
        { Sr_no: 3, FirmName: 'hghgf', EMail: 'ram@gmail.com', CustomerCode: 1214, GSTNo: '4F456123', PhoneNo: '7894561230', City: 'Hassanpur', State: '13', Pincode: 698541, SalePrice: 'Online Wholesale Prepaid', Status: 1, Transport: '...', Address: 'Indore', Name: 'Web', email: 'developer@g' },
        { Sr_no: 4, FirmName: 'team', EMail: 'team@gmail.com', CustomerCode: 114, GSTNo: '145', PhoneNo: '7894561230', City: 'Bangalore', State: 'Karnataka', Pincode: 0, SalePrice: 'Offline Wholesale', Status: 1, Transport: '...', Address: 'Indore', Name: 'dascsd', email: 'team@gmai.' },
        { Sr_no: 7, FirmName: 'ram', EMail: 'ram@gmail.com', CustomerCode: 11, GSTNo: '123', PhoneNo: '123456', City: 'select city', State: '- Select state -', Pincode: 0, SalePrice: 'Offline Wholesale', Status: 1, Transport: 'Ram', Address: '', Name: 'Ram', email: '' },
        { Sr_no: 8, FirmName: 'Hardev Stationery', EMail: '', CustomerCode: '', GSTNo: '', PhoneNo: '', City: 'select city', State: '- Select state -', Pincode: 0, SalePrice: '', Status: 1, Transport: 'transport', Address: '', Name: '', email: '' },
        { Sr_no: 9, FirmName: 'Swama Store', EMail: '', CustomerCode: '', GSTNo: '570651655', PhoneNo: '', City: 'select city', State: '- Select state -', Pincode: 0, SalePrice: '', Status: 1, Transport: 'transport', Address: '', Name: '', email: '' },
      ];
      setCustomers(mockData);
      setLoading(false);
    }, 1000); // Replace with actual API call
  }, []);
  if (loading) {
    return <div>Loading customers...</div>;
  }
  if (error) {
    return <div>Error loading customers: {error}</div>;
  }
  return (
    <div className="customer-list-container">
      <h1>Customer List</h1>
      <button className="add-customer-button btn btn-primary" onClick={handleClick}>
        + Add Customer
      </button>
      <div className="table-responsive">
        <table>
          <thead>
            <tr>
              <th>Sr. no</th>
              <th>Firm Name</th>
              <th>E-Mail</th>
              <th>Customer Code</th>
              <th>GST No.</th>
              <th>Phone No.</th>
              <th>City</th>
              <th>State</th>
              <th>Pincode</th>
              <th>Sale Price</th>
              <th>Status</th>
              <th>Transport</th>
              <th>Address</th>
              <th>Name</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.Sr_no}>
                <td>{customer.Sr_no}</td>
                <td>{customer.FirmName}</td>
                <td>{customer.EMail}</td>
                <td>{customer.CustomerCode}</td>
                <td>{customer.GSTNo}</td>
                <td>{customer.PhoneNo}</td>
                <td>{customer.City}</td>
                <td>{customer.State}</td>
                <td>{customer.Pincode}</td>
                <td>{customer.SalePrice}</td>
                <td>{customer.Status}</td>
                <td>{customer.Transport}</td>
                <td>{customer.Address}</td>
                <td>{customer.Name}</td>
                <td>{customer.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default CustomersL;