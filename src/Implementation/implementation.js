import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  Button,
  Grid,
  Menu,
  // FormControl, // Add this import
  FormLabel, // Add this import
  // EmailField
} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@material-ui/core';
import QuestionTableForm from '../QuestionTableForm/questiontableform';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import FormControl from '@mui/material/FormControl';

const Implementation = () => {
  const [currentPage, setCurrentPage] = useState(1);

    const [implementationType, setImplementationType] = useState('');
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  const [country, setCountry] = useState('');
  const [companyHeadquarter,setCompanyHeadquarter]=useState('');
  const [designation,setDesignation]=useState('');
  const [countryCode,setCountryCode]=useState('+91');
  const [isMultiCompanyMultiCountry, setIsMultiCompanyMultiCountry] = useState(1);
  const [isMultiCompanySingleCountry, setIsMultiCompanySingleCountry] = useState('');
  const [isSingleCompany, setIsSingleCompany] = useState('');
  const [isSingleCompanyMultiBranches,setIsSingleCompanyMultiBranches]=useState('');
  const [multiCompanyMultiCountryDetails,setIsMultiCompanyMultiCountryDetails]=useState({
    company:'',
    country:'',
    contactPerson:'',
    designation:'',
    email:'',
    mobileNo:'',
    businessVerticals:'',
  });
  const [companyDetailsList,setCompanyDetailsList]=useState([]);
  const [newCompanyDetails, setNewCompanyDetails] = useState({
    company: '',
    country: '',
    contactPerson: '',
    designation: '',
    email: '',
    mobileNo: '',
    businessVerticals: ''
  });


const [companyType,setCompanyType]=useState('');
const [additionalDetails, setAdditionalDetails] = useState('');
const [detailsText, setDetailsText] = useState('');


const handleFormInputChange=(e)=>{
  const {name,value}=e.target;
  setNewCompanyDetails((prevState)=>({
    ...prevState,
    [name]:value,
  }));
};


const handleAddCompany=()=>{
  setCompanyDetailsList(prevList=>[...prevList,newCompanyDetails]);
  setNewCompanyDetails({
    company:'',
    country:'',
    contactPerson:'',
    designation:'',
    email:'',
    mobileNo:'',
    businessVerticals:''
  });
}


// Function to handle changes in the new company details form
const handleNewCompanyInputChange = (e) => {
  const { name, value } = e.target;
  setNewCompanyDetails(prevState => ({
    ...prevState,
    [name]: value
  }));
};

const handleRemoveCompany = (index) => {
  setCompanyDetailsList(prevList => prevList.filter((_, idx) => idx !== index));
};

const handleCompanyTypeChange=(e)=>{
  setCompanyType(e.target.value);
}

const handleNextToClientInfo = () => {
  // Handle the logic to navigate to the ClientInformationForm or perform any other action
  // For simplicity, let's increment the currentPage to navigate to the next page
  setCurrentPage(currentPage + 1);
};

const handlePreviousPage = () => {
  setCurrentPage(currentPage - 1);
};
const handleMultiCompanyMultiCountryChange=(value)=>{
  setIsMultiCompanyMultiCountry(value);
}

const handleAdditionalDetailsChange = (event) => {
  setAdditionalDetails(event.target.value);
};

const handleDetailsTextChange = (event) => {
  setDetailsText(event.target.value);
};




    return (
      <>
      <FormControl component="fieldset">
        <FormLabel component="legend">Type of Company:</FormLabel>
        <RadioGroup
          aria-label="company-type"
          name="company-type"
          value={companyType}
          onChange={handleCompanyTypeChange}
        >
          <FormControlLabel value="multi-country-multi-company" control={<Radio />} label="Multi-country Multi-company" />
          <FormControlLabel value="single-country-multiple-company" control={<Radio />} label="Single Country Multiple Company" />
          <FormControlLabel value="single-company-multiple-branches" control={<Radio />} label="Single Company Multiple Branches" />
          <FormControlLabel value="single-company" control={<Radio />} label="Single Company" />
        </RadioGroup>
      </FormControl>
      {companyType === 'multi-country-multi-company' && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Is it a multi country multi company  implementation?</FormLabel>
          <RadioGroup
            row
            aria-label="multi-company-multi-country"
            name="multi-company-multi-country"
            value={isMultiCompanyMultiCountry}
            onChange={(e) => setIsMultiCompanyMultiCountry(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        
        
      )}
  
    
        {isMultiCompanyMultiCountry === 'yes' && (
        <>
          {companyDetailsList.map((companyDetails, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
              {/* Render form fields for each company */}
              {/* <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Lead No:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.leadNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
                />
              </FormControl>
              <TextField label="Lead No" variant="filled" color="primary" focused style={{ width: '100%' }} InputProps={{ disabled: true }} value={companyDetails.leadNo} />

              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.company}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
                <input
                  type="text"
                  name={`country-${index}`}
                  value={companyDetails.country}
                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px'}}>Contact Person:</label>
                <input
                  type="text"
                  name={`contactPerson-${index}`}
                  value={companyDetails.contactPerson}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
                <input
                  type="text"
                  name={`designation-${index}`}
                  value={companyDetails.designation}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
                <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
                <input
                  type="email"
                  name={`email-${index}`}
                  value={companyDetails.email}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Mobile No:</label>
                <input
                  type="text"
                  name={`mobileNo-${index}`}
                  value={companyDetails.mobileNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
                <input
                  type="text"
                  name={`businessVerticals-${index}`}
                  value={companyDetails.businessVerticals}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
                />
              </FormControl> */}
             <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
              <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
                Remove 
              </Button>
            </div>
          ))}

          {/* Form for adding new company details */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Lead No:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.leadNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
              <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.company}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
              <input
                type="text"
                name="country"
                value={newCompanyDetails.country}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Contact Person:</label>
              <input
                type="text"
                name="contactPerson"
                value={newCompanyDetails.contactPerson}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
              <input
                type="text"
                name="designation"
                value={newCompanyDetails.designation}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
              <input
                type="email"
                name="email"
                value={newCompanyDetails.email}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Mobile No:</label>
              <input
                type="text"
                name="mobileNo"
                value={newCompanyDetails.mobileNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
              <input
                type="text"
                name="businessVerticals"
                value={newCompanyDetails.businessVerticals}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
              />
            </FormControl>
          </div>

          <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
            Add Company
          </Button> */}
                  <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
              required
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
              required
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
              required
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
              required
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
              required
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
      </div>

      {/* Button to add a new company */}
      <Button variant="contained" color="primary" onClick={handleAddCompany} style={{ marginLeft: '300px', marginBottom: '50px' }}>
        Add Company
      </Button>

          <br/><br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Any Additional Details?</FormLabel>
        <RadioGroup
          aria-label="additional-details"
          name="additional-details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {additionalDetails === 'yes' && (
        <TextField
          id="details-text"
          label="Enter Details"
          value={detailsText}
          onChange={handleDetailsTextChange}
        />
      )}
      </FormControl>
        </>
        
      )}
      <br/><br/>

{isMultiCompanyMultiCountry === 'no' && (
  <FormControl component="fieldset">
    <FormLabel component="legend">Any Additional Details?</FormLabel>
    <RadioGroup
      aria-label="additional-details"
      name="additional-details"
      value={additionalDetails}
      onChange={(e) => setAdditionalDetails(e.target.value)}
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
    {additionalDetails === 'yes' && (
      <TextField
        id="details-text"
        label="Enter Details"
        value={detailsText}
        onChange={handleDetailsTextChange}
      />
    )}
  </FormControl>
)}




        {/* Render similar form fields for other options */}
        {companyType === 'single-country-multiple-company' && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Is it a single country multiple company  implementation?</FormLabel>
          <RadioGroup
            row
            aria-label="multi-company-single-country"
            name="multi-company-single-country"
            value={isMultiCompanySingleCountry}
            onChange={(e) => setIsMultiCompanySingleCountry(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        )}
        {isMultiCompanySingleCountry === 'yes' && (
        <>
          {companyDetailsList.map((companyDetails, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
              {/* <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Lead No:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.leadNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.company}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
                <input
                  type="text"
                  name={`country-${index}`}
                  value={companyDetails.country}
                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px'}}>Contact Person:</label>
                <input
                  type="text"
                  name={`contactPerson-${index}`}
                  value={companyDetails.contactPerson}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
                <input
                  type="text"
                  name={`designation-${index}`}
                  value={companyDetails.designation}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
                <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
                <input
                  type="email"
                  name={`email-${index}`}
                  value={companyDetails.email}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Mobile No:</label>
                <input
                  type="text"
                  name={`mobileNo-${index}`}
                  value={companyDetails.mobileNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
                <input
                  type="text"
                  name={`businessVerticals-${index}`}
                  value={companyDetails.businessVerticals}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
                />
              </FormControl> */}
                   <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
              <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
                Remove 
              </Button>
            </div>
          ))}


          {/* Form for adding new company details */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Lead No:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.leadNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
              <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.company}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
              <input
                type="text"
                name="country"
                value={newCompanyDetails.country}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Contact Person:</label>
              <input
                type="text"
                name="contactPerson"
                value={newCompanyDetails.contactPerson}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
              <input
                type="text"
                name="designation"
                value={newCompanyDetails.designation}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
              <input
                type="email"
                name="email"
                value={newCompanyDetails.email}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Mobile No:</label>
              <input
                type="text"
                name="mobileNo"
                value={newCompanyDetails.mobileNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
              <input
                type="text"
                name="businessVerticals"
                value={newCompanyDetails.businessVerticals}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
              />
            </FormControl> */}
                 <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
          </div>

          {/* Button to add a new company */}
          <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
            Add Company
          </Button>
          <br/><br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Any Additional Details?</FormLabel>
        <RadioGroup
          aria-label="additional-details"
          name="additional-details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {additionalDetails === 'yes' && (
        <TextField
          id="details-text"
          label="Enter Details"
          value={detailsText}
          onChange={handleDetailsTextChange}
        />
      )}
      </FormControl>
        </>
      )}

<br/><br/>

{isMultiCompanySingleCountry === 'no' && (
  <FormControl component="fieldset">
    <FormLabel component="legend">Any Additional Details?</FormLabel>
    <RadioGroup
      aria-label="additional-details"
      name="additional-details"
      value={additionalDetails}
      onChange={(e) => setAdditionalDetails(e.target.value)}
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
    {additionalDetails === 'yes' && (
      <TextField
        id="details-text"
        label="Enter Details"
        value={detailsText}
        onChange={handleDetailsTextChange}
      />
    )}
  </FormControl>
)}

      {companyType === 'single-company-multiple-branches' && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Is it a Single company Multiple Branch implementation?</FormLabel>
          <RadioGroup
            row
            aria-label="single-company-multiple-branches"
            name="single-company-multiple-branches"
            value={isSingleCompanyMultiBranches}
            onChange={(e) => setIsSingleCompanyMultiBranches(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
        )}
        {isSingleCompanyMultiBranches === 'yes' && (
        <>
          {companyDetailsList.map((companyDetails, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
              {/* Render form fields for each company */}
              {/* <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Lead No:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.leadNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
                <input
                  type="text"
                  name={`company-${index}`}
                  value={companyDetails.company}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
                <input
                  type="text"
                  name={`country-${index}`}
                  value={companyDetails.country}
                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px'}}>Contact Person:</label>
                <input
                  type="text"
                  name={`contactPerson-${index}`}
                  value={companyDetails.contactPerson}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
                <input
                  type="text"
                  name={`designation-${index}`}
                  value={companyDetails.designation}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
                <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
                <input
                  type="email"
                  name={`email-${index}`}
                  value={companyDetails.email}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px' }}>Mobile No:</label>
                <input
                  type="text"
                  name={`mobileNo-${index}`}
                  value={companyDetails.mobileNo}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
                />
              </FormControl>
              <FormControl style={{ marginRight: '10px' }}>
                <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
                <input
                  type="text"
                  name={`businessVerticals-${index}`}
                  value={companyDetails.businessVerticals}
                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
                />
              </FormControl> */}
                   <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
              <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
                Remove 
              </Button>
            </div>
          ))}


          {/* Form for adding new company details */}
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
          {/* <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Lead No:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.leadNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
              <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
              <input
                type="text"
                name="company"
                value={newCompanyDetails.company}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
              <input
                type="text"
                name="country"
                value={newCompanyDetails.country}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Contact Person:</label>
              <input
                type="text"
                name="contactPerson"
                value={newCompanyDetails.contactPerson}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
              <input
                type="text"
                name="designation"
                value={newCompanyDetails.designation}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
              <input
                type="email"
                name="email"
                value={newCompanyDetails.email}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' }}>Mobile No:</label>
              <input
                type="text"
                name="mobileNo"
                value={newCompanyDetails.mobileNo}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
              />
            </FormControl>
            <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
              <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
              <input
                type="text"
                name="businessVerticals"
                value={newCompanyDetails.businessVerticals}
                onChange={handleFormInputChange}
                style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
              />
            </FormControl> */}
                 <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              label="Lead No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="leadNo"
              value={newCompanyDetails.leadNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Company Name"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="companyName"
              value={newCompanyDetails.companyName}
              onChange={handleFormInputChange}
            />
            <br/><br/>

            <TextField
              label="Country"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="country"
              value={newCompanyDetails.country}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Contact Person"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="contactPerson"
              value={newCompanyDetails.contactPerson}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            </Grid>
            <Grid item xs={6}>

            <TextField
              label="Email"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="email"
              value={newCompanyDetails.email}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Mobile No"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="mobileNo"
              value={newCompanyDetails.mobileNo}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Designation"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="designation"
              value={newCompanyDetails.designation}
              onChange={handleFormInputChange}
            />
            <br/><br/>
            <TextField
              label="Business Verticals"
              variant="outlined"
              color="primary"
              focused
              style={{ width: '100%' }}
              name="businessVerticals"
              value={newCompanyDetails.businessVerticals}
              onChange={handleFormInputChange}
            />
          </Grid>
          {/* <Grid item xs={6}> */}
            {/* Other fields such as Date, Address, etc. */}
          {/* </Grid> */}
        </Grid>
          </div>

          {/* Button to add a new company */}
          <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
            Add Company
          </Button>
         <br/><br/>
        <FormControl component="fieldset">
        <FormLabel component="legend">Any Additional Details?</FormLabel>
        <RadioGroup
          aria-label="additional-details"
          name="additional-details"
          value={additionalDetails}
          onChange={(e) => setAdditionalDetails(e.target.value)}
        >
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
        {additionalDetails === 'yes' && (
        <TextField
          id="details-text"
          label="Enter Details"
          value={detailsText}
          onChange={handleDetailsTextChange}
        />
      )}
      </FormControl>
        </>
      )}
 <br/><br/>

{isSingleCompanyMultiBranches === 'no' && (
  <FormControl component="fieldset">
    <FormLabel component="legend">Any Additional Details?</FormLabel>
    <RadioGroup
      aria-label="additional-details"
      name="additional-details"
      value={additionalDetails}
      onChange={(e) => setAdditionalDetails(e.target.value)}
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
    {additionalDetails === 'yes' && (
      <TextField
        id="details-text"
        label="Enter Details"
        value={detailsText}
        onChange={handleDetailsTextChange}
      />
    )}
  </FormControl>
)}

       {/* {companyType === 'single-company' && (
        <FormControl component="fieldset">
          <FormLabel component="legend">Is it a single company  implementation?</FormLabel>
          <RadioGroup
            row
            aria-label="single-company"
            name="single-company"
            value={isSingleCompany}
            onChange={(e) => setIsSingleCompany(e.target.value)}
          >
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </FormControl>
)} */}
{companyType === 'single-company' && (
  <FormControl component="fieldset">
    <FormLabel component="legend">Any Additional Details?</FormLabel>
    <RadioGroup
      aria-label="additional-details"
      name="additional-details"
      value={additionalDetails}
      onChange={(e) => setAdditionalDetails(e.target.value)}
    >
      <FormControlLabel value="yes" control={<Radio />} label="Yes" />
      <FormControlLabel value="no" control={<Radio />} label="No" />
    </RadioGroup>
    {additionalDetails === 'yes' && (
      <TextField
        id="details-text"
        label="Enter Details"
        value={detailsText}
        onChange={handleDetailsTextChange}
      />
    )}
  </FormControl>
)}
     

        
   
    </>
  );
   
  };

  export default Implementation;