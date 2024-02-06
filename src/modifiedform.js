// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   TextField,
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   Button,
//   Grid,
//   Menu,
//   // EmailField
// } from '@material-ui/core';
// import MenuItem from '@mui/material/MenuItem';

// import QuestionTableForm from '../QuestionTableForm/questiontableform';
// import Dialog from '@mui/material/Dialog';
// import DialogTitle from '@mui/material/DialogTitle';
// import DialogContent from '@mui/material/DialogContent';
// import DialogActions from '@mui/material/DialogActions';



// const LeadInformationForm = () => {
//   const [selectedDate, setSelectedDate] = useState('');
//   const [decisionMakerType, setDecisionMakerType] = useState('');
//   const [currentPage, setCurrentPage] = useState(1);
//   const [showQuestions, setShowQuestions] = useState(false);
// const [leadNo, setLeadNo] = useState('');
// // const [selectedDate, setSelectedDate] = useState('');
// const [prospectName, setProspectName] = useState('');
// const [prospectAddress, setProspectAddress] = useState('');
// const [contactPerson, setContactPerson] = useState('');
// const [contactNo, setContactNo] = useState('');
// const [emailAddress, setEmailAddress] = useState('');
// const [clientRepresentative,setClientRepresentative]=useState('');
// const [clientRepresentativeDesignation,setClientRepresentativeDesignation]=useState('');
// const [decisionMaker,setDecisionMaker]=useState('');
// const [contactDetails,setContactDetails]=useState('');
// const [contactedBy,setContactedBy]=useState('');
// const [contactedDate,setContactedDate]=useState('');
// const [repliedDate,setRepliedDate]=useState('');
// const [nextMeeting,setNextMeeting]=useState('');
// const [isEmailValid, setIsEmailValid] = useState(true);
// const [isContactNoValid,setIsContactNoValid]=useState(true);
// const [openModal, setOpenModal] = useState(false);

//   const [questions, setQuestions] = useState([
//     { srNo: 1, subject: 'Knowledge About ERP Systems', yes: null, no: null, supportNeeded: null, remarks: '' },
//     {srNo: 2, subject: 'Do you have a clarity of your Business process requirements?',yes:null,no:null,supportNeeded:null,remarks:''},
//     {
//       srNo: 3,
//       subject: (
//         <div>
//           Did you document the process as below? Process currently as is for
//           <div>a. Procure to pay cycle (Purchase Cycle)</div>
//           <br/>
//           <div>b. Order to Cash Cycle (Sales Cycle)</div>
//           <br/>
//           <div>c. Hire to Retire (HR & Payroll Cycle)</div>
//           <br/>
//           <div>d. Record to Report (Finance & Accounting)</div>
//           <br/>
//           <div>e. Manufacturing Process</div>
//           <br/>
//           <div>f. Contracting and Services Distribution and Warehouse Management</div>
//         </div>
//       ),
//       yes: null,
//       no: null,
//       supportNeeded: null,
//       remarks: ''
//     },

//         {
//       srNo: 4,
//       subject: (
//         <div>
//             Do your team have a clear understanding about the integrations and reporting requirements for?
//           <div>a. Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.</div>
//           <br/>
//           <div>b. Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting</div>
//           <br/>
//           <div>c. Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting</div>
//           <br/>
//           <div>d. Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting.</div>
//           <br/>
//           <div>e. HR and Payroll process and its integrations to Project Management, Accounting and Financial process.</div>
//         </div>
//       ),
//       yes: null,
//       no: null,
//       supportNeeded: null,
//       remarks: ''
//     },
//     // {srNo: 5, subject:'Do you have a dedicated team to be part of the Project from start to end as required below? a.Project Sponsor: for Approving and driving the implementation. b. Project Manager/Project Lead: Planning,directing, staffing and managing the project. c.Project Analyst: Collecting, documenting, analyzing the business process. d. Business Process Experts: Who carry out business process and provide recommendations. ', yes:null,no:null,supportNeeded:null,remarks:''},
//     {
//       srNo: 5,
//       subject: (
//         <div>
//             Do you have a dedicated team to be part of the Project from start to end as required below?
//           <div>a. Project Sponsor: for Approving and driving the implementation.</div>
//           <br/>
//           <div>b. Project Manager/Project Lead: Planning,directing, staffing and managing the project.</div>
//           <br/>
//           <div>c. Project Analyst: Collecting, documenting, analyzing the business process.</div>
//           <br/>
//           <div>d. Business Process Experts: Who carry out business process and provide recommendations. </div>
//         </div>
//       ),
//       yes: null,
//       no: null,
//       supportNeeded: null,
//       remarks: ''
//     },

//     {
//       srNo: 6,
//       subject: (
//         <div>
//           Do you have clear information about?
//           <div>a. The project budgets</div>
//           <br/>
//           <div>b. By when you would you like to start the project</div>
//         </div>
//       ),
//       yes: null,
//       no: null,
//       supportNeeded: null,
//       remarks: ''
//     },
//     {srNo: 7,subject:'Current Software details that’s within your organization',yes:null,no:null,supportNeeded:null,remarks:''},
//     // Add other questions as needed
//     {
//       srNo: 8,
//       subject: (
//         <div>
//         Your Concern’s with respect to your software that is in place.   
//         <div>Example</div>
//         <div> a. Financial pain points: Current solution is costing too much to access and maintain.</div>
//         <br/>
//           <div>b. Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.</div>
//           <br/>
//           <div>c. Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.</div>
//           <br/>
//           <div>d. Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.</div>
//         </div>
//       ),
//       yes: null,
//       no: null,
//       supportNeeded: null,
//       remarks: ''
//     },
//     {srNo: 9,subject:'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',yes:null,no:null,supportNeeded:null,remarks:''},

//   ]);

//   // Add any additional state and functions as needed for the Lead Information form

//   const handleRadioChange = (index, option) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = [...prevQuestions];
//       updatedQuestions[index] = {
//         ...updatedQuestions[index],
//         yes: option === 'yes' ? true : null,
//         no: option === 'no' ? true : null,
//       };
//       return updatedQuestions;
//     });
//   };
  
//   const handleSupportNeededChange = (index, value) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = [...prevQuestions];
//       updatedQuestions[index] = { ...updatedQuestions[index], supportNeeded: value };
//       return updatedQuestions;
//     });
//   };

//   const handleRemarksChange = (index, value) => {
//     setQuestions((prevQuestions) => {
//       const updatedQuestions = [...prevQuestions];
//       updatedQuestions[index] = { ...updatedQuestions[index], remarks: value };
//       return updatedQuestions;
//     });
//   };
  
//   const getPageHeading = () => {
//     switch (currentPage) {
//       case 1:
//         return 'Lead Information';
//       case 2:
//         return 'Questions';
//       case 3:
//         return 'Client Information Area';
//       case 4:
//         return 'Loyal IT Solutions Area';
//       default:
//         return 'Lead Information';
//     }
//   };
//   const handleDateChange = (event) => {
//     setSelectedDate(event.target.value);
//   };

//   const handleDecisionMakerTypeChange = (event) => {
//     setDecisionMakerType(event.target.value);
//   };

//   // const handleNextPage = () => {
//   //   setCurrentPage(currentPage + 1);
//   //   if (currentPage === 1) {
//   //     setShowQuestions(true);
//   //   }
//   // };
//   const handleNextPage = () => {
//     if (currentPage === 1) {
//       const isPage1Valid =  prospectAddress && contactPerson && contactNo && emailAddress;
//       if (!isPage1Valid) {
//         // Alert or handle invalid form data
//         return;
//       }
//     }
  
//     setCurrentPage(currentPage + 1);
//     if (currentPage === 1) {
//       setShowQuestions(true);
//     }
//   };
//   const handleNextToClientInfo = () => {
//     // Handle the logic to navigate to the ClientInformationForm or perform any other action
//     // For simplicity, let's increment the currentPage to navigate to the next page
//     setCurrentPage(currentPage + 1);
//   };

//   const handlePreviousPage = () => {
//     setCurrentPage(currentPage - 1);
//   };


//   const handleOpenModal = () => {
//     setOpenModal(true);
//   };
  
//   const handleCloseModal = () => {
//     setLeadNo('');
//   setSelectedDate('');
//   setProspectName('');
//   setProspectAddress('');
//   setContactPerson('');
//   setContactNo('');
//   setEmailAddress('');
//     setOpenModal(false);
//     setCurrentPage(1);

//   };
  


//   const handleSubmit = () => {
//     // Add your submit logic here
//     // For example, you can send the form data to a server or perform other actions
//     // console.log('Form submitted!');
//     handleOpenModal();
//   };

//   const handleQuestionsUpdate = (updatedQuestions) => {
//     setQuestions(updatedQuestions);
//   };
  
  

//   const renderPage1 = () => {
      
    
//     const isPage1Valid = prospectAddress && contactPerson && contactNo && isEmailValid;
  
//     const validateEmail = (email) => {
//       // Use a regular expression for basic email format validation
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       return emailRegex.test(email);
//     };
  
//     const validateContactNo=(contactNo)=>{
//       return contactNo.length===10 && /^\d+$/.test(contactNo);
//     }
//     const handleEmailChange = (e) => {
//       const email = e.target.value;
//       setEmailAddress(email);
//       setIsEmailValid(validateEmail(email));
//     };

//     const handleContactNoChange=(e)=>{
//       const contactNoValue=e.target.value;
//       setContactNo(contactNoValue);
//       setIsContactNoValid(validateContactNo(contactNoValue));
//     };
  
//     return (
//       <>
//         <Grid container spacing={3}>
//           <Grid item xs={6}>
//             <TextField label="Lead No" variant="filled" color="primary" focused style={{ width: '100%' }} />
//             <br/><br/>
//             <TextField
//               label="Date"
//               variant="filled"
//               color="primary"
//               focused style={{ width: '100%' }}
//               type="date"
//               InputLabelProps={{ shrink: true }}
//             />
//             <br/><br/>
//             <TextField label="Prospect Name" variant="filled" color="primary" focused style={{ width: '100%' }}  />
//             <br/><br/>
//             <TextField label="Prospect Address" variant="filled" color="primary" focused style={{ width: '100%' }} required value={prospectAddress} onChange={(e)=>setProspectAddress(e.target.value)}/>
//           </Grid>
//           <Grid item xs={6}>
//             <TextField label="Contact Person" variant="filled" color="primary" focused style={{ width: '100%' }} required value={contactPerson} onChange={(e)=>setContactPerson(e.target.value)}/>
//             <br/><br/>
//             <TextField 
//             label="Contact No" 
//             variant="filled" 
//             color="primary" 
//             focused style={{ width: '100%' }}
//              required  
//              value={contactNo} 
//             //  onChange={(e)=>setContactNo(e.target.value)}
//             onChange={handleContactNoChange}
//              error={!isContactNoValid}
//              helperText={!isContactNoValid ? 'Enter a valid contact number':''}
//              />
//             <br/><br/>
//             <TextField
//               label="Business Verticals"
//               variant="filled"
//               color="success"
//               focused
//               style={{ width: '100%' }}
//               select
//               value={decisionMakerType}
//               onChange={handleDecisionMakerTypeChange}
//             >
//               <MenuItem value="Option1">Retail</MenuItem>
//               <MenuItem value="Option2">Manufacturing</MenuItem>
//               <MenuItem value="Option3">Trading</MenuItem>
//               <MenuItem value="Option4">Hospital</MenuItem>
//               <MenuItem value="Option5">Education</MenuItem>
//               <MenuItem value="Option6">Rental</MenuItem>
//             </TextField>
//             <br/><br/>
//             <TextField
//               type="email"
//               label="Email Address"
//               variant="filled"
//               color="primary"
//               focused
//               style={{ width: '100%' }}
//               value={emailAddress}
//               onChange={handleEmailChange}
//               required
//               error={!isEmailValid}
//               helperText={!isEmailValid ? 'Enter a valid email address' : ''}
//             />
//           </Grid>
//         </Grid>
//         <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '20px' }}>
//           {(
//             <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!isPage1Valid}>
//               Next
//             </Button>
//           )}
//         </div>
//       </>
//     );
//   };
  

//   const renderPage2 = () => {
//     return (
//       <>
//         {showQuestions && (
//         <QuestionTableForm
//           questions={questions}
//           handleRadioChange={handleRadioChange}
//           handleSupportNeededChange={handleSupportNeededChange}
//           handleRemarksChange={handleRemarksChange}
//           handleQuestionsUpdate={setQuestions} // Pass the setQuestions function

//         />
//       )}
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
//       </>
//     );
//   };
  
//   const renderPage3=()=>{
//     const isPage3Valid = clientRepresentative && clientRepresentativeDesignation && decisionMaker && contactDetails;

//     return (
//         <>     
//         <TableCell>
//               <TextField label="Client Representative Name" variant="filled" color="success" focused  style={{width:'300px'}} required value={clientRepresentative} onChange={(e)=>setClientRepresentative(e.target.value)}/>
      
//            <br/><br />
//               <TextField label="Client Representative Designation" variant="filled" color="success" focused style={{width:'300px'}} required value={clientRepresentativeDesignation} onChange={(e)=>setClientRepresentativeDesignation(e.target.value)}/>
//            <br/>
//            </TableCell>

//            <TableCell>
//               {/* <TextField label="Type of Decision Maker" variant="filled" color="success" focused style={{width:'300px'}}/> */}
//               <TextField
//             label="Type of Decision Maker"
//             variant="filled"
//             color="success"
//             focused
//             style={{ width: '300px' }}
//             select
//             // value={decisionMakerType}
//             // onChange={handleDecisionMakerTypeChange}
//             value={decisionMaker}
//             onChange={(e)=>setDecisionMaker(e.target.value)}
//             required
//           >
//             <MenuItem value="Option1">Primary Contact</MenuItem>
//             <MenuItem value="Option2">Influencer</MenuItem>
//             <MenuItem value="Option3">Decision Maker</MenuItem>
//             {/* Add more options as needed */}
//           </TextField>
//         <br/><br/>
            
//               <TextField label="Contact Details" variant="filled" color="success" focused style={{width:'300px'}} required value={contactDetails} onChange={(e)=>setContactDetails(e.target.value)}/>
//             </TableCell>
            
//             {currentPage > 1 && currentPage < 4 && (
//           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//             <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//               Back
//             </Button>
//             <Button variant="contained" color="primary" onClick={handleNextPage} disabled={!isPage3Valid}>
//               Next
//             </Button>
//           </div>
//         )}
//         </>
//     );
//   };

//   const renderPage4=()=>{
//     const isPage4Valid = contactedBy && contactedDate && repliedDate && nextMeeting;

//     return(
//         <>
//         <TableCell>
//               <TextField label="Contacted By" variant="filled" color="success" focused  style={{width:'300px'}} required  value={contactedBy} onChange={(e)=>setContactedBy(e.target.value)}/>
      
//            <br/><br />
//            <TextField
//           label="Replied Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '100%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}
//         />
//               {/* <TextField label="Replied Date" variant="filled" color="success" focused style={{width:'300px'}} required value={repliedDate} onChange={(e)=>setRepliedDate(e.target.value)}/> */}
//            <br/>
//            </TableCell>

//            <TableCell>
//            <TextField
//           label="Contacted Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '180%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}
//         />
//               {/* <TextField label="Contacted Date" variant="filled" color="success" focused style={{width:'300px'}} required value={contactedDate} onChange={(e)=>setContactedDate(e.target.value)}/> */}
//         <br/><br/>
//         <TextField
//           label="Next Meeting Date"
//           variant="filled"
//           color="primary"
//           focused style={{ width: '180%' }}
//           type="date"
//           InputLabelProps={{ shrink: true }}
//           required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}
// />
//               {/* <TextField label="Next Meeting Date" variant="filled" color="success" focused style={{width:'300px'}} required value={nextMeeting} onChange={(e)=>setNextMeeting(e.target.value)}/> */}
//             </TableCell>
//             <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
//         <Button variant="contained" color="primary" onClick={handlePreviousPage}>
//           Back
//         </Button>
//         {/* <Button variant="contained" color="primary" onClick={handleSubmit}> */}
//         <Button variant="contained" color="primary" onClick={handleSubmit} disabled={!isPage4Valid}>

//           Submit
//         </Button>
//       </div>

//             </>
//     )
//   }
//   return (
//     <div style={{marginTop:'130px'}}>
//           <style>{`
//       body {
//         background-color: #7986cb; /* Set your desired background color */
//         margin: 0; /* Remove default body margin */
//         padding: 0; /* Remove default body padding */
//       }
//     `}</style>
//       <TableContainer component={Paper} style={{ margin: 'auto', width: '70%', marginTop: '50px'}}>
//         <Typography variant="h5" style={{ marginLeft: '390px' }}>
//         {getPageHeading()}
//         </Typography>
//         {/* <form style={{ marginTop: '50px' }}> */}
//         <form>
//           <Table style={{ width: '70%', margin: 'auto'}}>
//             <TableBody>
//               <TableRow>
//                 <TableCell>
//                   {currentPage === 1 && renderPage1()}
//                   {currentPage === 2 && renderPage2()}
//                   {currentPage === 3 && renderPage3()}
//                   {currentPage === 4 && renderPage4()}
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
          
//         </form>
//       </TableContainer>
//       <Dialog open={openModal} onClose={handleCloseModal}>
//         <DialogTitle style={{fontFamily:'cursive'}}>Thank You!</DialogTitle>
//         <DialogContent>
//           <Typography>
//             Your form has been submitted successfully.
//           </Typography>
//         </DialogContent>
//         <DialogActions>
//           <Button onClick={handleCloseModal} variant='contained' color='secondary' style={{marginRight:'140px'}}>
//             OK
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// };

// export default LeadInformationForm;




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
  // EmailField
} from '@material-ui/core';
import MenuItem from '@mui/material/MenuItem';
import { Checkbox } from '@material-ui/core';
import QuestionTableForm from '../QuestionTableForm/questiontableform';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';



const LeadInformationForm = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [decisionMakerType, setDecisionMakerType] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [showQuestions, setShowQuestions] = useState(false);
const [leadNo, setLeadNo] = useState('');
// const [selectedDate, setSelectedDate] = useState('');
const [prospectName, setProspectName] = useState('');
const [prospectAddress, setProspectAddress] = useState('');
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

  // const [questions, setQuestions] = useState([
  //   { srNo: 1, subject: 'Knowledge About ERP Systems', yes: null, no: null, supportNeeded: null, remarks: '' },
  //   {srNo: 2, subject: 'Do you have a clarity of your Business process requirements?',yes:null,no:null,supportNeeded:null,remarks:''},
  //   {
  //     srNo: 3,
  //     subject: (
  //       <div>
  //         Did you document the process as below? Process currently as is for
  //         <div>a. Procure to pay cycle (Purchase Cycle)</div>
  //         <br/>
  //         <div>b. Order to Cash Cycle (Sales Cycle)</div>
  //         <br/>
  //         <div>c. Hire to Retire (HR & Payroll Cycle)</div>
  //         <br/>
  //         <div>d. Record to Report (Finance & Accounting)</div>
  //         <br/>
  //         <div>e. Manufacturing Process</div>
  //         <br/>
  //         <div>f. Contracting and Services Distribution and Warehouse Management</div>
  //       </div>
  //     ),
  //     yes: null,
  //     no: null,
  //     supportNeeded: null,
  //     remarks: ''
  //   },

  //       {
  //     srNo: 4,
  //     subject: (
  //       <div>
  //           Do your team have a clear understanding about the integrations and reporting requirements for?
  //         <div>a. Procurement process and integrations to Sales, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting.</div>
  //         <br/>
  //         <div>b. Sales Process and integrations to Procurement, Inventory, Manufacturing, Contracting, Project Management, Accounting and Financial reporting</div>
  //         <br/>
  //         <div>c. Manufacturing Process and integrations to Procurement, Sales, Inventory, Project Management Accounting and Financial reporting</div>
  //         <br/>
  //         <div>d. Contracting and Services integrations to Procurement, Sales, Inventory, Project Management, Accounting and Financial reporting.</div>
  //         <br/>
  //         <div>e. HR and Payroll process and its integrations to Project Management, Accounting and Financial process.</div>
  //       </div>
  //     ),
  //     yes: null,
  //     no: null,
  //     supportNeeded: null,
  //     remarks: ''
  //   },
  //   // {srNo: 5, subject:'Do you have a dedicated team to be part of the Project from start to end as required below? a.Project Sponsor: for Approving and driving the implementation. b. Project Manager/Project Lead: Planning,directing, staffing and managing the project. c.Project Analyst: Collecting, documenting, analyzing the business process. d. Business Process Experts: Who carry out business process and provide recommendations. ', yes:null,no:null,supportNeeded:null,remarks:''},
  //   {
  //     srNo: 5,
  //     subject: (
  //       <div>
  //           Do you have a dedicated team to be part of the Project from start to end as required below?
  //         <div>a. Project Sponsor: for Approving and driving the implementation.</div>
  //         <br/>
  //         <div>b. Project Manager/Project Lead: Planning,directing, staffing and managing the project.</div>
  //         <br/>
  //         <div>c. Project Analyst: Collecting, documenting, analyzing the business process.</div>
  //         <br/>
  //         <div>d. Business Process Experts: Who carry out business process and provide recommendations. </div>
  //       </div>
  //     ),
  //     yes: null,
  //     no: null,
  //     supportNeeded: null,
  //     remarks: ''
  //   },

  //   {
  //     srNo: 6,
  //     subject: (
  //       <div>
  //         Do you have clear information about?
  //         <div>a. The project budgets</div>
  //         <br/>
  //         <div>b. By when you would you like to start the project</div>
  //       </div>
  //     ),
  //     yes: null,
  //     no: null,
  //     supportNeeded: null,
  //     remarks: ''
  //   },
  //   {srNo: 7,subject:'Current Software details that’s within your organization',yes:null,no:null,supportNeeded:null,remarks:''},
  //   // Add other questions as needed
  //   {
  //     srNo: 8,
  //     subject: (
  //       <div>
  //       Your Concern’s with respect to your software that is in place.   
  //       <div>Example</div>
  //       <div> a. Financial pain points: Current solution is costing too much to access and maintain.</div>
  //       <br/>
  //         <div>b. Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.</div>
  //         <br/>
  //         <div>c. Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.</div>
  //         <br/>
  //         <div>d. Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.</div>
  //       </div>
  //     ),
  //     yes: null,
  //     no: null,
  //     supportNeeded: null,
  //     remarks: ''
  //   },
  //   {srNo: 9,subject:'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',yes:null,no:null,supportNeeded:null,remarks:''},

  // ]);
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
    {
      srNo: 8,
      subject: 'Your Concern’s with respect to your software that is in place.',
      subQuestions: [
        'a. Financial pain points: Current solution is costing too much to access and maintain.',
        'b. Productivity pain points: Current solution may be too time consuming and you are looking for a solution that makes work more streamlined.',
        'c. Process pain points: Looking to improve internal processes such as lead generation, hiring, app integrations or social media campaigns.',
        'e. Support pain points: Customer support is scattered and not available at all. You are looking to solve support pain points by installing a hotline for urgent issues, a help desk, chat bots or a knowledge base for more common, less urgent issues.',
      ],
    },
    {
      srNo: 9,
      subject: 'Any Questions to us can be put in the remarks for our further analysis and as a next step towards a long-term business partner Journey.',
      subQuestions: [],
    },
  ]);

 
  // const renderSubQuestions = (subQuestions) => {
  //   return (
  //     <TableCell colSpan={5}> {/* Ensure the TableCell spans all columns except the first two */}
  //       {subQuestions.map((subQuestion, index) => (
  //         <div key={index}>
  //           {subQuestion}
  //           <Radio />
  //           <Radio/>
  //           <FormControlLabel control={<Checkbox />} />
  //         </div>
  //       ))}
  //     </TableCell>
  //   );
  // };
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

  const handleRadioChange = (index, option) => {
    setQuestions((prevQuestions) => {
      const updatedQuestions = [...prevQuestions];
      updatedQuestions[index] = {
        ...updatedQuestions[index],
        yes: option === 'yes' ? true : null,
        no: option === 'no' ? true : null,
      };
      return updatedQuestions;
    });
  };
  
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
        return 'Questions';
      case 3:
        return 'Client Information Area';
      case 4:
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
      const isPage1Valid =  prospectAddress && contactPerson && contactNo && emailAddress;
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
  setProspectName('');
  setProspectAddress('');
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
  
  

  const renderPage1 = () => {
      
    
    const isPage1Valid = prospectAddress && contactPerson && contactNo && isEmailValid;
  
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
  
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField label="Lead No" variant="filled" color="primary" focused style={{ width: '100%' }} />
            <br/><br/>
            <TextField
              label="Date"
              variant="filled"
              color="primary"
              focused style={{ width: '100%' }}
              type="date"
              InputLabelProps={{ shrink: true }}
            />
            <br/><br/>
            <TextField label="Prospect Name" variant="filled" color="primary" focused style={{ width: '100%' }}  />
            <br/><br/>
            <TextField label="Prospect Address" variant="filled" color="primary" focused style={{ width: '100%' }} required value={prospectAddress} onChange={(e)=>setProspectAddress(e.target.value)}/>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Contact Person" variant="filled" color="primary" focused style={{ width: '100%' }} required value={contactPerson} onChange={(e)=>setContactPerson(e.target.value)}/>
            <br/><br/>
            <TextField 
            label="Contact No" 
            variant="filled" 
            color="primary" 
            focused style={{ width: '100%' }}
             required  
             value={contactNo} 
            //  onChange={(e)=>setContactNo(e.target.value)}
            onChange={handleContactNoChange}
             error={!isContactNoValid}
             helperText={!isContactNoValid ? 'Enter a valid contact number':''}
             />
            <br/><br/>
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
        {showQuestions && (
        <QuestionTableForm
          questions={questions}
          handleRadioChange={handleRadioChange}
          handleSupportNeededChange={handleSupportNeededChange}
          handleRemarksChange={handleRemarksChange}
          handleQuestionsUpdate={setQuestions} // Pass the setQuestions function

        />
      )}
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
  
  const renderPage3=()=>{
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
            
            {currentPage > 1 && currentPage < 4 && (
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

  const renderPage4=()=>{
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

// return (
//   <TableContainer component={Paper}>
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Sr. No.</TableCell>
//           <TableCell>Subject</TableCell>
//           <TableCell>Yes</TableCell>
//           <TableCell>No</TableCell>
//           <TableCell>Support Needed (Yes/No)</TableCell>
//           <TableCell>Remarks</TableCell>
//         </TableRow>
//       </TableHead>
    
//       <TableBody>
//   {questions.map((question) => (
//     <React.Fragment key={question.srNo}>
//       <TableRow>
//         <TableCell>{question.srNo}</TableCell>
//         <TableCell>{question.subject}</TableCell>
//         <TableCell>
//           <Radio />
//         </TableCell>
//         <TableCell>
//           <Radio />
//         </TableCell>
//         <TableCell></TableCell> 
//         <TableCell></TableCell> 
//       </TableRow>
//       {question.subQuestions.length > 0 && (
//         <TableRow>
//           {renderSubQuestions(question.subQuestions)}
//         </TableRow>
//       )}
//     </React.Fragment>
//   ))}
// </TableBody>

//     </Table>
    
//   </TableContainer>
// );
return (
  <TableContainer component={Paper}>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Sr. No.</TableCell>
          <TableCell>Subject</TableCell>
          <TableCell>Yes</TableCell>
          <TableCell>No</TableCell>
          <TableCell>Support Needed (Yes/No)</TableCell>
          <TableCell>Remarks</TableCell>
        </TableRow>
      </TableHead>
    
      <TableBody>
        {questions.map((question) => (
          <React.Fragment key={question.srNo}>
            <TableRow>
              <TableCell>{question.srNo}</TableCell>
              <TableCell>{question.subject}</TableCell>
              <TableCell>
                <Radio />
              </TableCell>
              <TableCell>
                <Radio />
              </TableCell>
              <TableCell>
                <Checkbox/>
              </TableCell>
              <TableCell>
                <TextField/>
              </TableCell>
            </TableRow>
            {question.subQuestions.length > 0 && (
              question.subQuestions.map((subQuestion, index) => (
                <TableRow key={index}>
                  <TableCell></TableCell> {/* Empty cell for Sr. No. */}
                  <TableCell>{subQuestion}</TableCell> {/* Cell for subquestion */}
                  <TableCell>
                    <Radio />
                  </TableCell> {/* Cell for "Yes" */}
                  <TableCell>
                    <Radio />
                  </TableCell> {/* Cell for "No" */}
                  <TableCell>
                    <Checkbox />
                  </TableCell> {/* Cell for "Support Needed (Yes/No)" */}
                  <TableCell></TableCell> {/* Empty cell for Remarks */}
                </TableRow>
              ))
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

};

export default LeadInformationForm;
