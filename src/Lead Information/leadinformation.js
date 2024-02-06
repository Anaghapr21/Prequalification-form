import React, { useState ,useEffect} from 'react';
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
import Implementation from '../Implementation/implementation';
import axios from 'axios';



const LeadInformationForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [decisionMakerType, setDecisionMakerType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showQuestions, setShowQuestions] = useState(false);
const [leadNo, setLeadNo] = useState('');
// const [selectedDate, setSelectedDate] = useState('');
const [companyName, setCompanyName] = useState('');
const [companyAddress, setCompanyAddress] = useState('');
const [isCompanyAddressValid, setIsCompanyAddressValid] = useState(true);
const [runningPromotions,setRunningPromotions]=useState(true);
const [additionalNotes, setAdditionalNotes] = useState('');


const [contactPerson, setContactPerson] = useState('');
const [contactNo, setContactNo] = useState('');
const [emailAddress, setEmailAddress] = useState('');
const [clientRepresentative,setClientRepresentative]=useState('');
const [clientRepresentativeDesignation,setClientRepresentativeDesignation]=useState('');
const [decisionMaker,setDecisionMaker]=useState('');
const [contactDetails,setContactDetails]=useState('');
const [contactedBy,setContactedBy]=useState('');
const [contactedDate,setContactedDate]=useState('');
const [repliedDate,setRepliedDate]=useState('');
const [nextMeeting,setNextMeeting]=useState('');
const [isEmailValid, setIsEmailValid] = useState(true);
const [isContactNoValid,setIsContactNoValid]=useState(true);
const [openModal, setOpenModal] = useState(false);
const [implementationType, setImplementationType] = useState('');
  const [showAdditionalForm, setShowAdditionalForm] = useState(false);
  // const [country, setCountry] = useState('');
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('');
  const [companyHeadquarter,setCompanyHeadquarter]=useState('');
  const [designation,setDesignation]=useState('');
  const [countryCode,setCountryCode]=useState('+91');
//   const [isMultiCompanyMultiCountry, setIsMultiCompanyMultiCountry] = useState(1);
//   const [isMultiCompanySingleCountry, setIsMultiCompanySingleCountry] = useState('');
//   const [isSingleCompany, setIsSingleCompany] = useState('');
//   const [isSingleCompanyMultiBranches,setIsSingleCompanyMultiBranches]=useState('');
//   const [multiCompanyMultiCountryDetails,setIsMultiCompanyMultiCountryDetails]=useState({
//     company:'',
//     country:'',
//     contactPerson:'',
//     designation:'',
//     email:'',
//     mobileNo:'',
//     businessVerticals:'',
//   });
  const [companyDetailsList,setCompanyDetailsList]=useState([]);
//   const [newCompanyDetails, setNewCompanyDetails] = useState({
//     company: '',
//     country: '',
//     contactPerson: '',
//     designation: '',
//     email: '',
//     mobileNo: '',
//     businessVerticals: ''
//   });


// const [companyType,setCompanyType]=useState('');

// useEffect(() => {
//   const fetchCountries = async () => {
//     try {
//       const response = await axios.get('https://restcountries.com/v3.1/all');
//       setCountries(response.data);
//     } catch (error) {
//       console.error('Error fetching countries:', error);
//     }
//   };

//   fetchCountries();
// }, []);

useEffect(() => {
  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (response.ok) {
        const data = await response.json();
        // Sort countries alphabetically by name
        const sortedCountries = data.sort((a, b) => a.name.common.localeCompare(b.name.common));
        setCountries(sortedCountries);
      } else {
        console.error('Failed to fetch countries:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  fetchCountries();
}, []);

  const [questions, setQuestions] = useState([
    {
      srNo: 1,
      subject: 'Knowledge About ERP Systems',
      subQuestions: [],
    },
    {
      srNo: 2,
      subject: 'Do you have a clarity of your Business process requirements?',
      subQuestions: [],
    },
    {
      srNo: 3,
      subject: 'Did you document the process as below?',
      subQuestions: [
        'a. Procure to pay cycle (Purchase Cycle)',
        'b. Order to Cash Cycle (Sales Cycle)',
        'c. Hire to Retire (HR & Payroll Cycle)',
        'd. Record to Report (Finance & Accounting)',
        'e. Manufacturing Process',
        'f. Contracting and Services Distribution and Warehouse Management',
      ],
    },
    {
      srNo: 4,
      subject: 'Do your team have a clear understanding about the integrations and reporting requirements for?',
      subQuestions: [
        'a. Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.',
        'b. Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.',
        'c. Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting.',
        'd. Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting.',
        'e. HR and Payroll process and its integrations to Project Management, Accounting and Financial process.',
      ],
    },
    {
      srNo: 5,
      subject: 'Do you have a dedicated team to be part of the Project from start to end as required below?',
      subQuestions: [
        'a. Project Sponsor: for Approving and driving the implementation.',
        'b. Project Manager/Project Lead: Planning, directing, staffing and managing the project.',
        'c. Project Analyst: Collecting, documenting, analyzing the business process.',
        'd. Business Process Experts: Who carry out business process and provide recommendations.',
      ],
    },
    {
      srNo: 6,
      subject: 'Do you have clear information about?',
      subQuestions: ['a. The project budgets',
       'b. By when you would you like to start the project.'],
    },
    {
      srNo: 7,
      subject: 'Current Software details that’s within your organization',
      subQuestions: [],
    },
    // {
    //   srNo: 8,
    //   subject: 'Your Concern’s with respect to your software that is in place.',
    //   subQuestions: [
        
    //   ],
    // },
    {
          srNo: 8,
          subject: (
            <div>
            Your Concern’s with respect to your software that is in place.   
            <div>Example</div>
            <div> a. Financial pain points: Current solution is costing too much to access and maintain.</div>
            <br/>
              <div>b. Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.</div>
              <br/>
              <div>c. Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.</div>
              <br/>
              <div>d. Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.</div>
            </div>
          ),
          subQuestions: [],

         
        },
    {
      srNo: 9,
      subject: 'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',
      subQuestions: [],
    },
  ]);

 
  const renderSubQuestions = (subQuestions) => {
    return (
      <TableCell colSpan={5}>
        {subQuestions.map((subQuestion, index) => (
          <TableRow key={index}>
            <TableCell>{subQuestion}</TableCell>

            <TableCell>
              <Radio />
            </TableCell>
            <TableCell>
              <Radio />
            </TableCell>
            <TableCell>
              <Checkbox />
            </TableCell>
          </TableRow>
        ))}
      </TableCell>
    );
  };

  // Add any additional state and functions as needed for the Lead Information form

  // const handleRadioChange = (index, option) => {
  //   setQuestions((prevQuestions) => {
  //     const updatedQuestions = [...prevQuestions];
  //     updatedQuestions[index] = {
  //       ...updatedQuestions[index],
  //       yes: option === 'yes' ? true : null,
  //       no: option === 'no' ? true : null,
  //     };
  //     return updatedQuestions;
  //   });
  // };

  const handleRadioChange = (index, option) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      // Deselect the other option
      if (option === 'yes') {
        updatedQuestions[index] = {
          ...updatedQuestions[index],
          yes: true,
          no: null,
        };
      } else if (option === 'no') {
        updatedQuestions[index] = {
          ...updatedQuestions[index],
          yes: null,
          no: true,
        };
      }
      return updatedQuestions;
    });
  };


  const handleSubquestionRadioChange = (mainIndex, subIndex, option, value) => {
  setQuestions((prevQuestions) => {
    const updatedQuestions = [...prevQuestions];
    // Update the selected option for the subquestion
    updatedQuestions[mainIndex].subquestions[subIndex] = {
      ...updatedQuestions[mainIndex].subquestions[subIndex],
      [option]: value,
    };
    return updatedQuestions;
  });
};


// const handleSubquestionRadioChange = (mainIndex, subIndex, option) => {
//   // Create a copy of the questions array
//   const updatedQuestions = [...questions];
  
//   // Update the selected option for the subquestion
//   updatedQuestions[mainIndex].subquestions[subIndex][option] = true;

//   // Unselect the other option
//   if (option === 'yes') {
//     updatedQuestions[mainIndex].subquestions[subIndex]['no'] = false;
//   } else {
//     updatedQuestions[mainIndex].subquestions[subIndex]['yes'] = false;
//   }

//   // Update the state with the modified questions
//   handleQuestionsUpdate(updatedQuestions);
// };

  
  
  
// const handleRadioChange=(index,option)=>{
//   setQuestions((prevQuestions)=>{
//     const updatedQuestions=[...prevQuestions];
//     updatedQuestions[index]={
//       ...updatedQuestions[index],
//       yes:option === 'yes' ?   true : null,
//       no:option ==='no' ? true : null,
//       };
//       if (option === 'yes'){
//         updatedQuestions[index]={
//           ...updatedQuestions[index],
//           no:null,
//         };
//       }else if (option === 'no'){
//         updatedQuestions[index]={
//           ...updatedQuestions[index],
//           yes:null,
//         };
//       }
//       return 
//   })
// }
  const handleSupportNeededChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], supportNeeded: value };
      return updatedQuestions;
    });
  };

  const handleRemarksChange = (index, value) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = { ...updatedQuestions[index], remarks: value };
      return updatedQuestions;
    });
  };
  
  const getPageHeading = () => {
    switch (currentPage) {
      case 1:
        return 'Lead Information';
      case 2:
        return '';
      case 3:
        return 'Questions'
      case 4:
        return 'Client Information Area';
      case 5:
        return 'Loyal IT Solutions Area';
      default:
        return 'Lead Information';
    }
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleDecisionMakerTypeChange = (event) => {
    setDecisionMakerType(event.target.value);
  };

  // const handleNextPage = () => {
  //   setCurrentPage(currentPage + 1);
  //   if (currentPage === 1) {
  //     setShowQuestions(true);
  //   }
  // };
  const handleNextPage = () => {
    if (currentPage === 1) {
      const isPage1Valid = companyName && companyAddress && contactPerson && contactNo && emailAddress && designation;
      if (!isPage1Valid) {
        // Alert or handle invalid form data
        return;
      }
    }
  
    setCurrentPage(currentPage + 1);
    if (currentPage === 1) {
      setShowQuestions(true);
    }
  };
  const handleNextToClientInfo = () => {
    // Handle the logic to navigate to the ClientInformationForm or perform any other action
    // For simplicity, let's increment the currentPage to navigate to the next page
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };


  const handleOpenModal = () => {
    setOpenModal(true);
  };
  
  const handleCloseModal = () => {
    setLeadNo('');
  setSelectedDate('');
  setCompanyName('');
  setCompanyAddress('');
  setContactPerson('');
  setContactNo('');
  setEmailAddress('');
    setOpenModal(false);
    setCurrentPage(1);

  };
  


  const handleSubmit = () => {
    // Add your submit logic here
    // For example, you can send the form data to a server or perform other actions
    // console.log('Form submitted!');
    handleOpenModal();
  };

  const handleQuestionsUpdate = (updatedQuestions) => {
    setQuestions(updatedQuestions);
  };
 
  const handleCompanyHeadquarterChange=(e)=>{
    setCompanyHeadquarter(e.target.value);
  };
  
// const handleMultiCompanyMultiCountryChange=(value)=>{
//   setIsMultiCompanyMultiCountry(value);
// }

// const handleFormInputChange=(e)=>{
//   const {name,value}=e.target;
//   setNewCompanyDetails((prevState)=>({
//     ...prevState,
//     [name]:value,
//   }));
// };


// const handleAddCompany=()=>{
//   setCompanyDetailsList(prevList=>[...prevList,newCompanyDetails]);
//   setNewCompanyDetails({
//     company:'',
//     country:'',
//     contactPerson:'',
//     designation:'',
//     email:'',
//     mobileNo:'',
//     businessVerticals:''
//   });
// }


// // Function to handle changes in the new company details form
// const handleNewCompanyInputChange = (e) => {
//   const { name, value } = e.target;
//   setNewCompanyDetails(prevState => ({
//     ...prevState,
//     [name]: value
//   }));
// };

// const handleRemoveCompany = (index) => {
//   setCompanyDetailsList(prevList => prevList.filter((_, idx) => idx !== index));
// };

// const handleCompanyTypeChange=(e)=>{
//   setCompanyType(e.target.value);
// }

  const renderPage1 = () => {
  
    
    const isPage1Valid = companyName && companyAddress && contactPerson && contactNo && isEmailValid && designation && isCompanyAddressValid && country ;
  
    const validateEmail = (email) => {
      // Use a regular expression for basic email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    };
  
    const validateContactNo=(contactNo)=>{
      return contactNo.length===10 && /^\d+$/.test(contactNo);
    }
    const handleEmailChange = (e) => {
      const email = e.target.value;
      setEmailAddress(email);
      setIsEmailValid(validateEmail(email));
    };

    const handleContactNoChange=(e)=>{
      const contactNoValue=e.target.value;
      setContactNo(contactNoValue);
      setIsContactNoValid(validateContactNo(contactNoValue));
    };



    const handleImplementationChange = (event) => {
      setImplementationType(event.target.value);
      setShowAdditionalForm(event.target.value === 'multiCompanyMultiCountry');
    };
  
    const handleCountryChange = (event) => {
      setCountry(event.target.value);
    };
  
    const handleDesignationChange=(event)=>{
      setDesignation(event.target.value);
    };

    const handleRemoveCompany = (index) => {
      setCompanyDetailsList(prevList => prevList.filter((_, i) => i !== index));
    };
    
    const validateCompanyAddress = (address) => {
      // Split the address into parts (assuming comma as the delimiter)
      const addressParts = address.split(',');
    
      // Check if the address has at least three parts (name, place, pincode)
      if (addressParts.length >= 3) {
        const name = addressParts[0].trim();
        const place = addressParts[1].trim();
        const pincode = addressParts[2].trim();
    
        // Add your specific criteria for each part (you can customize this)
        const isNameValid = name.length > 0;
        const isPlaceValid = place.length > 0;
        const isPincodeValid = /^\d{5}$/.test(pincode); // assuming pincode is a 5-digit number
    
        // Return true only if all parts are valid
        return isNameValid && isPlaceValid && isPincodeValid;
      }
    
      // If there are not enough parts, the address is invalid
      return false;
    };
    
   
    const handleCompanyAddressChange = (e) => {
      const address = e.target.value;
      setCompanyAddress(address);
      setIsCompanyAddressValid(validateCompanyAddress(address));
    };
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Lead No" variant="filled" color="primary" focused style={{ width: '100%' }}InputProps={{ disabled: true }} />
            <br/><br/>

            <TextField label="Company Name" variant="filled" color="primary" focused style={{ width: '100%' }} required value={companyName} onChange={(e)=>setCompanyName(e.target.value)}  />
            {/* {companyName === '' && <span style={{ color: 'red' }}>Please enter the company name.</span>} */}

            <br/><br/>
            <TextField label="Contact Person" variant="filled" color="primary" focused style={{ width: '100%' }} required value={contactPerson} onChange={(e)=>setContactPerson(e.target.value)}/>
            {/* {contactPerson === '' && <span style={{ color: 'red' }}>Please enter the contact person's name.</span>} */}

            <br/><br/>
            <TextField
              type="email"
              label="Email Address"
              variant="filled"
              color="primary"
              focused
              style={{ width: '100%' }}
              value={emailAddress}
              onChange={handleEmailChange}
              required
              error={!isEmailValid}
              helperText={!isEmailValid ? 'Enter a valid email address' : ''}
            />
           <br/><br/>
           <TextField
            label=" Contact Person's Country"
            variant='filled'
            color='primary'
            focused
            style={{width:'100%'}}
            select
            value={country}
            onChange={handleCountryChange}
            required
            >
              {/* <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem> */}
              {countries.map((countryData) => (
              <MenuItem key={countryData.name.common} value={countryData.name.common}>
                {countryData.name.common}
              </MenuItem>
            ))}
              </TextField>
              <br/><br/>
              {/* <br/><br/> */}
              <TextField
              label="Business Verticals"
              variant="filled"
              color="success"
              focused
              style={{ width: '100%' }}
              select
              value={decisionMakerType}
              onChange={handleDecisionMakerTypeChange}
            >
              <MenuItem value="Option1">Retail</MenuItem>
              <MenuItem value="Option2">Manufacturing</MenuItem>
              <MenuItem value="Option3">Trading</MenuItem>
              <MenuItem value="Option4">Hospital</MenuItem>
              <MenuItem value="Option5">Education</MenuItem>
              <MenuItem value="Option6">Rental</MenuItem>
            </TextField>
            
              {/* <TextField
            label="Headquarter Country"
            variant='filled'
            color='primary'
            focused
            style={{width:'100%'}}
            select
            value={country}
            onChange={handleCountryChange}
            >
              <MenuItem value="India">India</MenuItem>
              <MenuItem value="USA">USA</MenuItem>
              <MenuItem value="UK">UK</MenuItem>
              <MenuItem value="Canada">Canada</MenuItem>
              </TextField> */}
           <br/><br/>
          

          </Grid>
          <Grid item xs={6}>
          <TextField
              label="Date"
              variant="filled"
              color="primary"
              focused style={{ width: '100%' }}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <br/><br/>
            {/* <TextField label="Company Address" variant="filled" color="primary" focused style={{ width: '100%' }} required value={companyAddress} onChange={(e)=>setCompanyAddress(e.target.value)}/> */}
            <TextField label="Company Address" variant="filled" color="primary" focused style={{ width: '100%' }} required value={companyAddress} onChange={handleCompanyAddressChange} />

         {/* Validation error message for company address */}
         {!isCompanyAddressValid && (
            <span style={{ color: 'red' }}>Please provide a valid company address containing name, place, and pincode.</span>
          )}
            <br/><br/>
           
            <TextField
        label="Contact No"
        variant="filled"
        color="primary"
        focused
        style={{ width: '100%' }}
        required
        value={contactNo}
        onChange={handleContactNoChange}
        error={!isContactNoValid}
        helperText={!isContactNoValid ? 'Enter a valid contact number' : ''}
        InputProps={{
          startAdornment: (
            <TextField
              select
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              style={{ width: '80px' }}
            >
              <MenuItem value="+1">+1</MenuItem>
              <MenuItem value="+91">+91</MenuItem>
              {/* Add more country codes as needed */}
            </TextField>
          ),
        }}
      />  
           
            <br/><br/>
            <TextField
            label="Designation"
            variant='filled'
            color='primary'
            focused
            style={{width:'100%'}}
            required
            value={designation}
            onChange={handleDesignationChange}
            />
          
            <br/><br/>
            <TextField
           label="Company Headquarters"
           variant='filled'
           color='primary'
           focused
           style={{width: '100%'}}
           value={companyHeadquarter}
           onChange={handleCompanyHeadquarterChange}
           />
           <br/><br/>
              {/* <br/><br/>
              <TextField
              label="Business Verticals"
              variant="filled"
              color="success"
              focused
              style={{ width: '100%' }}
              select
              value={decisionMakerType}
              onChange={handleDecisionMakerTypeChange}
            >
              <MenuItem value="Option1">Retail</MenuItem>
              <MenuItem value="Option2">Manufacturing</MenuItem>
              <MenuItem value="Option3">Trading</MenuItem>
              <MenuItem value="Option4">Hospital</MenuItem>
              <MenuItem value="Option5">Education</MenuItem>
              <MenuItem value="Option6">Rental</MenuItem>
            </TextField> */}
              <TextField label="Running Promotions" variant="filled" color="primary" focused style={{ width: '100%' }}  value={runningPromotions} onChange={(e)=>setRunningPromotions(e.target.value)}/>
              <br/><br/>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',marginLeft:'-330px',width:'207%' }}>
      <TextField
        label="Additional Notes"
        variant="filled"
        color="primary"
        focused
        style={{ width: '100%' }} // Adjust width as needed
        multiline
        rows={4}
        value={additionalNotes}
        onChange={(e) => setAdditionalNotes(e.target.value)}
        placeholder="Add any additional notes here..."
      />
    </div>
          </Grid>
        </Grid>
       
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
          {(
            <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!isPage1Valid}>
              Next
            </Button>
          )}
        </div>
      </>
    );
  };
  
  const renderPage2 = () => {
    return (
      <>
      <Implementation // Render the ImplementationComponent from implementation.js
        implementationType={implementationType}
        setImplementationType={setImplementationType}
        showAdditionalForm={showAdditionalForm}
        setShowAdditionalForm={setShowAdditionalForm}
        country={country}
        setCountry={setCountry}
        // Pass any other props or state variables needed by ImplementationComponent
      />
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <Button variant="contained" color="primary" onClick={handlePreviousPage}>
        Back
      </Button>
      {currentPage === 2 && (
        <Button variant="contained" color="primary" onClick={handleNextToClientInfo}>
          Next
        </Button>
      )}
    </div>
    </>
    );
  };
//   const renderPage2 = () => {
  
//     return (
//       <>
//       <FormControl component="fieldset">
//         <FormLabel component="legend">Type of Company:</FormLabel>
//         <RadioGroup
//           aria-label="company-type"
//           name="company-type"
//           value={companyType}
//           onChange={handleCompanyTypeChange}
//         >
//           <FormControlLabel value="multi-country-multi-company" control={<Radio />} label="Multi-country Multi-company" />
//           <FormControlLabel value="single-country-multiple-company" control={<Radio />} label="Single Country Multiple Company" />
//           <FormControlLabel value="single-company-multiple-branches" control={<Radio />} label="Single Company Multiple Branches" />
//           <FormControlLabel value="single-company" control={<Radio />} label="Single Company" />
//         </RadioGroup>
//       </FormControl>
//       {companyType === 'multi-country-multi-company' && (
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Is it a multi company multi country implementation?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="multi-company-multi-country"
//             name="multi-company-multi-country"
//             value={isMultiCompanyMultiCountry}
//             onChange={(e) => setIsMultiCompanyMultiCountry(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>
//         </FormControl>
//       )}
//         {isMultiCompanyMultiCountry === 'yes' && (
//         <>
//           {companyDetailsList.map((companyDetails, index) => (
//             <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
//               {/* Render form fields for each company */}
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Lead No:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.leadNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.company}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//                 <input
//                   type="text"
//                   name={`country-${index}`}
//                   value={companyDetails.country}
//                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px'}}>Contact Person:</label>
//                 <input
//                   type="text"
//                   name={`contactPerson-${index}`}
//                   value={companyDetails.contactPerson}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
//                 <input
//                   type="text"
//                   name={`designation-${index}`}
//                   value={companyDetails.designation}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
//                 <input
//                   type="email"
//                   name={`email-${index}`}
//                   value={companyDetails.email}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Mobile No:</label>
//                 <input
//                   type="text"
//                   name={`mobileNo-${index}`}
//                   value={companyDetails.mobileNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
//                 <input
//                   type="text"
//                   name={`businessVerticals-${index}`}
//                   value={companyDetails.businessVerticals}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//                 />
//               </FormControl>
//               <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
//                 Remove 
//               </Button>
//             </div>
//           ))}

//           {/* Form for adding new company details */}
//           <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//           <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Lead No:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.leadNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
//               <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.company}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={newCompanyDetails.country}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Contact Person:</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={newCompanyDetails.contactPerson}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={newCompanyDetails.designation}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={newCompanyDetails.email}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Mobile No:</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 value={newCompanyDetails.mobileNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
//               <input
//                 type="text"
//                 name="businessVerticals"
//                 value={newCompanyDetails.businessVerticals}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//               />
//             </FormControl>
//           </div>

//           {/* Button to add a new company */}
//           <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
//             Add Company
//           </Button>
//         </>
//       )}






//         {/* Render similar form fields for other options */}
//         {companyType === 'single-country-multiple-company' && (
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Is it a multi company single country implementation?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="multi-company-single-country"
//             name="multi-company-single-country"
//             value={isMultiCompanySingleCountry}
//             onChange={(e) => setIsMultiCompanySingleCountry(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>
//         </FormControl>
//         )}
//         {isMultiCompanySingleCountry === 'yes' && (
//         <>
//           {companyDetailsList.map((companyDetails, index) => (
//             <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
//               {/* Render form fields for each company */}
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Lead No:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.leadNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.company}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//                 <input
//                   type="text"
//                   name={`country-${index}`}
//                   value={companyDetails.country}
//                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px'}}>Contact Person:</label>
//                 <input
//                   type="text"
//                   name={`contactPerson-${index}`}
//                   value={companyDetails.contactPerson}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
//                 <input
//                   type="text"
//                   name={`designation-${index}`}
//                   value={companyDetails.designation}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
//                 <input
//                   type="email"
//                   name={`email-${index}`}
//                   value={companyDetails.email}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Mobile No:</label>
//                 <input
//                   type="text"
//                   name={`mobileNo-${index}`}
//                   value={companyDetails.mobileNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
//                 <input
//                   type="text"
//                   name={`businessVerticals-${index}`}
//                   value={companyDetails.businessVerticals}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//                 />
//               </FormControl>
//               <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
//                 Remove 
//               </Button>
//             </div>
//           ))}


//           {/* Form for adding new company details */}
//           <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//           <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Lead No:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.leadNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
//               <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.company}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={newCompanyDetails.country}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Contact Person:</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={newCompanyDetails.contactPerson}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={newCompanyDetails.designation}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={newCompanyDetails.email}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Mobile No:</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 value={newCompanyDetails.mobileNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
//               <input
//                 type="text"
//                 name="businessVerticals"
//                 value={newCompanyDetails.businessVerticals}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//               />
//             </FormControl>
//           </div>

//           {/* Button to add a new company */}
//           <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
//             Add Company
//           </Button>
//         </>
//       )}

//       {companyType === 'single-company-multiple-branches' && (
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Is it a Single company Multiple Branch implementation?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="single-company-multiple-branches"
//             name="single-company-multiple-branches"
//             value={isSingleCompanyMultiBranches}
//             onChange={(e) => setIsSingleCompanyMultiBranches(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>
//         </FormControl>
//         )}
//         {isSingleCompanyMultiBranches === 'yes' && (
//         <>
//           {companyDetailsList.map((companyDetails, index) => (
//             <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
//               {/* Render form fields for each company */}
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Lead No:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.leadNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.company}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//                 <input
//                   type="text"
//                   name={`country-${index}`}
//                   value={companyDetails.country}
//                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px'}}>Contact Person:</label>
//                 <input
//                   type="text"
//                   name={`contactPerson-${index}`}
//                   value={companyDetails.contactPerson}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
//                 <input
//                   type="text"
//                   name={`designation-${index}`}
//                   value={companyDetails.designation}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
//                 <input
//                   type="email"
//                   name={`email-${index}`}
//                   value={companyDetails.email}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Mobile No:</label>
//                 <input
//                   type="text"
//                   name={`mobileNo-${index}`}
//                   value={companyDetails.mobileNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
//                 <input
//                   type="text"
//                   name={`businessVerticals-${index}`}
//                   value={companyDetails.businessVerticals}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//                 />
//               </FormControl>
//               <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
//                 Remove 
//               </Button>
//             </div>
//           ))}


//           {/* Form for adding new company details */}
//           <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//           <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Lead No:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.leadNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
//               <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.company}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={newCompanyDetails.country}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Contact Person:</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={newCompanyDetails.contactPerson}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={newCompanyDetails.designation}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={newCompanyDetails.email}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Mobile No:</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 value={newCompanyDetails.mobileNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
//               <input
//                 type="text"
//                 name="businessVerticals"
//                 value={newCompanyDetails.businessVerticals}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//               />
//             </FormControl>
//           </div>

//           {/* Button to add a new company */}
//           <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
//             Add Company
//           </Button>
//         </>
//       )}


//        {companyType === 'single-company' && (
//         <FormControl component="fieldset">
//           <FormLabel component="legend">Is it a single company  implementation?</FormLabel>
//           <RadioGroup
//             row
//             aria-label="single-company"
//             name="single-company"
//             value={isSingleCompany}
//             onChange={(e) => setIsSingleCompany(e.target.value)}
//           >
//             <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//             <FormControlLabel value="no" control={<Radio />} label="No" />
//           </RadioGroup>
//         </FormControl>
// )}
//         {isSingleCompany === 'yes' && (
//         <>
//           {companyDetailsList.map((companyDetails, index) => (
//             <div key={index} style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: '20px' }}>
//               {/* Render form fields for each company */}
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Lead No:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.leadNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'5px' }}>Company:</label>
//                 <input
//                   type="text"
//                   name={`company-${index}`}
//                   value={companyDetails.company}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}  
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//                 <input
//                   type="text"
//                   name={`country-${index}`}
//                   value={companyDetails.country}
//                  style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px'}}>Contact Person:</label>
//                 <input
//                   type="text"
//                   name={`contactPerson-${index}`}
//                   value={companyDetails.contactPerson}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' }}>Designation:</label>
//                 <input
//                   type="text"
//                   name={`designation-${index}`}
//                   value={companyDetails.designation}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' ,marginLeft:'10px'}}>
//                 <label style={{ marginRight: '10px',marginLeft:'10px' ,marginLeft:'20px'}}>Email:</label>
//                 <input
//                   type="email"
//                   name={`email-${index}`}
//                   value={companyDetails.email}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px' }}>Mobile No:</label>
//                 <input
//                   type="text"
//                   name={`mobileNo-${index}`}
//                   value={companyDetails.mobileNo}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//                 />
//               </FormControl>
//               <FormControl style={{ marginRight: '10px' }}>
//                 <label style={{ marginRight: '10px',marginLeft:'20px' }}>Business Verticals:</label>
//                 <input
//                   type="text"
//                   name={`businessVerticals-${index}`}
//                   value={companyDetails.businessVerticals}
//                   style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//                 />
//               </FormControl>
//               <Button variant="contained" color="primary" onClick={() => handleRemoveCompany(index)} style={{width:'100px',height:'40px',marginLeft:'30px'}}>
//                 Remove 
//               </Button>
//             </div>
//           ))}

//           {/* Form for adding new company details */}
//          {/* Form for adding new company details */}
//          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
//           <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Lead No:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.leadNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' ,marginLeft:'10px'}}>
//               <label style={{ marginRight: '10px' ,marginLeft:'5px'}}>Company:</label>
//               <input
//                 type="text"
//                 name="company"
//                 value={newCompanyDetails.company}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'5px' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px',marginLeft:'20px' }}>Country:</label>
//               <input
//                 type="text"
//                 name="country"
//                 value={newCompanyDetails.country}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Contact Person:</label>
//               <input
//                 type="text"
//                 name="contactPerson"
//                 value={newCompanyDetails.contactPerson}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'10px'}}>Designation:</label>
//               <input
//                 type="text"
//                 name="designation"
//                 value={newCompanyDetails.designation}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'10px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Email:</label>
//               <input
//                 type="email"
//                 name="email"
//                 value={newCompanyDetails.email}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' ,marginLeft:'20px'}}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' }}>Mobile No:</label>
//               <input
//                 type="text"
//                 name="mobileNo"
//                 value={newCompanyDetails.mobileNo}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%' }}
//               />
//             </FormControl>
//             <FormControl style={{ marginBottom: '10px', marginRight: '10px' }}>
//               <label style={{ marginRight: '10px' ,marginLeft:'20px'}}>Business Verticals:</label>
//               <input
//                 type="text"
//                 name="businessVerticals"
//                 value={newCompanyDetails.businessVerticals}
//                 onChange={handleFormInputChange}
//                 style={{ padding: '5px', borderRadius: '5px', border: '1px solid #ccc', width: '100%',marginLeft:'20px' }}
//               />
//             </FormControl>
//           </div>

//           {/* Button to add a new company */}
//           <Button variant="contained" color="primary" onClick={handleAddCompany} style={{marginLeft:'300px',marginBottom:'50px'}}>
//             Add Company
//           </Button>
//         </>
//       )}

        
//       {/* Add buttons for navigation if needed */}
//       <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//         <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//           Back
//         </Button>
//         {currentPage === 2 && (
//           <Button variant="contained" color="primary" onClick={handleNextToClientInfo}>
//             Next
//           </Button>
//         )}
//       </div>
//     </>
//   );
   
//   };
  const renderPage3 = () => {
    return (
      <>
        {showQuestions && (
        <QuestionTableForm
          questions={questions}
          handleRadioChange={handleRadioChange}
          // handleSubquestionRadioChange={handleSubquestionRadioChange}
          handleSupportNeededChange={handleSupportNeededChange}
          handleRemarksChange={handleRemarksChange}
          handleQuestionsUpdate={setQuestions} // Pass the setQuestions function

        />
      )}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handlePreviousPage}>
          Back
        </Button>
        {currentPage === 3 && (
          <Button variant="contained" color="primary" onClick={handleNextToClientInfo}>
            Next
          </Button>
        )}
      </div>
      </>
    );
        };
  
  const renderPage4=()=>{
    const isPage3Valid = clientRepresentative && clientRepresentativeDesignation && decisionMaker && contactDetails;

    return (
        <>     
        <TableCell>
              <TextField label="Client Representative Name" variant="filled" color="success" focused  style={{width:'300px'}} required value={clientRepresentative} onChange={(e)=>setClientRepresentative(e.target.value)}/>
      
           <br/><br />
              <TextField label="Client Representative Designation" variant="filled" color="success" focused style={{width:'300px'}} required value={clientRepresentativeDesignation} onChange={(e)=>setClientRepresentativeDesignation(e.target.value)}/>
           <br/>
           </TableCell>

           <TableCell>
              {/* <TextField label="Type of Decision Maker" variant="filled" color="success" focused style={{width:'300px'}}/> */}
              <TextField
            label="Type of Decision Maker"
            variant="filled"
            color="success"
            focused
            style={{ width: '300px' }}
            select
            // value={decisionMakerType}
            // onChange={handleDecisionMakerTypeChange}
            value={decisionMaker}
            onChange={(e)=>setDecisionMaker(e.target.value)}
            required
          >
            <MenuItem value="Option1">Primary Contact</MenuItem>
            <MenuItem value="Option2">Influencer</MenuItem>
            <MenuItem value="Option3">Decision Maker</MenuItem>
            {/* Add more options as needed */}
          </TextField>
        <br/><br/>
            
              <TextField label="Contact Details" variant="filled" color="success" focused style={{width:'300px'}} required value={contactDetails} onChange={(e)=>setContactDetails(e.target.value)}/>
            </TableCell>
            
            {currentPage > 1 && currentPage < 5 && (
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Button variant="contained" color="primary" onClick={handlePreviousPage}>
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!isPage3Valid}>
              Next
            </Button>
          </div>
        )}
        </>
    );
  };

  const renderPage5=()=>{
    const isPage4Valid = contactedBy && contactedDate && repliedDate && nextMeeting;

    return(
        <>
        <TableCell>
              <TextField label="Contacted By" variant="filled" color="success" focused  style={{width:'300px'}} required  value={contactedBy} onChange={(e)=>setContactedBy(e.target.value)}/>
      
           <br/><br />
           <TextField
          label="Replied Date"
          variant="filled"
          color="primary"
          focused style={{ width: '100%' }}
          type="date"
          InputLabelProps={{ shrink: true }}
          required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}
        />
              {/* <TextField label="Replied Date" variant="filled" color="success" focused style={{width:'300px'}} required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}/> */}
           <br/>
           </TableCell>

           <TableCell>
           <TextField
          label="Contacted Date"
          variant="filled"
          color="primary"
          focused style={{ width: '180%' }}
          type="date"
          InputLabelProps={{ shrink: true }}
          required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}
        />
              {/* <TextField label="Contacted Date" variant="filled" color="success" focused style={{width:'300px'}} required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}/> */}
        <br/><br/>
        <TextField
          label="Next Meeting Date"
          variant="filled"
          color="primary"
          focused style={{ width: '180%' }}
          type="date"
          InputLabelProps={{ shrink: true }}
          required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}
/>
              {/* <TextField label="Next Meeting Date" variant="filled" color="success" focused style={{width:'300px'}} required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}/> */}
            </TableCell>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button variant="contained" color="primary" onClick={handlePreviousPage}>
          Back
        </Button>
        {/* <Button variant="contained" color="primary" onClick={handleSubmit}> */}
        <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isPage4Valid}>

          Submit
        </Button>
      </div>

            </>
    )
  }

return (
  <div style={{marginTop:'60px'}}>
        <style>{`
    body {
      // background-color: #7986cb; 
      /* Set your desired background color */
      margin: 0; /* Remove default body margin */
      padding: 0; /* Remove default body padding */
    }
   

  `}</style>
    {/* <TableContainer component={Paper} style={{ margin: 'auto', width: '70%', marginTop: '50px'}}> */}
    <TableContainer style={{ margin: 'auto', width: '70%', marginTop: '50px'}}>

      <Typography variant="h5" style={{ marginLeft: '390px' }}>
      {getPageHeading()}
      </Typography>
      {/* <form style={{ marginTop: '50px' }}> */}
      <form>
        <Table style={{ width: '70%', margin: 'auto'}}>
          <TableBody>
            <TableRow>
              <TableCell>
                {currentPage === 1 && renderPage1()}
                {currentPage === 2 && renderPage2()}
                {currentPage === 3 && renderPage3()}
                {currentPage === 4 && renderPage4()}
                {currentPage === 5 && renderPage5()}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        
      </form>
    </TableContainer>
    <Dialog open={openModal} onClose={handleCloseModal}>
      <DialogTitle style={{fontFamily:'cursive'}}>Thank You!</DialogTitle>
      <DialogContent>
        <Typography>
          Your form has been submitted successfully.
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseModal} variant='contained' color='secondary' style={{marginRight:'140px'}}>
          OK
        </Button>
      </DialogActions>
    </Dialog>
  </div>
);
};
export default LeadInformationForm;
