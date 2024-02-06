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
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   TextField,
//   MenuItem,
// } from '@material-ui/core';

// const QuestionTableForm = ({ questions, handleRadioChange, handleSupportNeededChange, handleRemarksChange }) => {
  
//   return (
//     <div style={{width:'900px'}}>
//       {/* <Typography variant="h5" style={{ textAlign: 'center', marginTop: '60px' }}>
//         Questions
//       </Typography> */}
//       {/* <TableContainer component={Paper}> */}
//         <Table sx={{minWidth: 650 }} aria-label="simple table" > 
//           <TableHead>
//             <TableRow>
//               <TableCell>Sr.no.</TableCell>
//               <TableCell>Subject</TableCell>
//               <TableCell>Yes</TableCell>
//               <TableCell>No</TableCell>
//               <TableCell>Support Needed (Yes/No)</TableCell>
//               <TableCell>Remarks</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {questions.map((question, index) => (
//               <TableRow key={index}>
//                 <TableCell>{question.srNo}</TableCell>
//                 <TableCell>{question.subject}</TableCell>
//                 <TableCell align='right'>
//                   <RadioGroup
//                     value={question.yes}
//                     onChange={() => handleRadioChange(index, 'yes')}
//                   >
//                     <FormControlLabel
//                       value={true}
//                       control={<Radio />}
//                     />
//                   </RadioGroup>
//                 </TableCell>
//                 <TableCell align='right'>
//                   <RadioGroup
//                     value={question.no}
//                     onChange={() => handleRadioChange(index, 'no')}
//                   >
//                     <FormControlLabel
//                       value={true}
//                       control={<Radio />}
//                     />
//                   </RadioGroup>
//                 </TableCell>
//                 <TableCell align='right'>
//                   <RadioGroup
//                     value={question.supportNeeded}
//                     onChange={() => handleSupportNeededChange(index, 'yes')}
//                   >
//                     <FormControlLabel
//                       value="yes"
//                       control={<Radio />}
//                     />
//                   </RadioGroup>
//                 </TableCell>
//                 <TableCell align='right'>
//                   <TextField
//                     value={question.remarks}
//                     onChange={(e) => handleRemarksChange(index, e.target.value)}
//                     variant="outlined"
//                     fullWidth
//                   />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       {/* </TableContainer> */}
//       <hr />
//     </div>
//   );
// };


// export default QuestionTableForm



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
  Radio,
  RadioGroup,
  FormControlLabel,
  TextField,
} from '@material-ui/core';
import Papa from 'papaparse';
import { handleQuestionsUpdate } from '../Lead Information/leadinformation'; // Adjust the path based on your project structure


// ... (import statements)

const QuestionTableForm = ({ questions, handleRadioChange, handleSupportNeededChange, handleRemarksChange,handleQuestionsUpdate }) => {
  const [textFile, setTextFile] = useState(null);

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setTextFile(file);
  
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const content = reader.result;
  
  //     // Split the content into lines (assuming each line corresponds to a new question)
  //     const lines = content.split('\n');
  
  //     // Create new questions from the lines
  //     const newQuestions = [];
  //     let currentMainQuestion = null;
  
  //     lines.forEach((line) => {
  //       const trimmedLine = line.trim();
  
  //       if (trimmedLine.startsWith('- ')) {
  //         // This line is a subquestion
  //         if (currentMainQuestion) {
  //           currentMainQuestion.subquestions.push({
  //             subject: trimmedLine.substring(2),
  //             yes: null,
  //             no: null,
  //             supportNeeded: null,
  //             remarks: '',
  //           });
  //         }
  //       } else {
  //         // This line is a main question
  //         if (currentMainQuestion) {
  //           newQuestions.push(currentMainQuestion);
  //         }
  
  //         currentMainQuestion = {
  //           srNo: questions.length + newQuestions.length + 1,
  //           subject: trimmedLine,
  //           yes: null,
  //           no: null,
  //           supportNeeded: null,
  //           remarks: '',
  //           subquestions: [], // Initialize an array to store subquestions
  //         };
  //       }
  //     });
  
  //     // Handle the last main question
  //     if (currentMainQuestion) {
  //       newQuestions.push(currentMainQuestion);
  //     }
  
  //     // Use the prop function to update the state in the parent component
  //     handleQuestionsUpdate([...questions, ...newQuestions]);
  //   };
  
  //   // Read the file as text
  //   reader.readAsText(file);
  // };

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setTextFile(file);
  
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const content = reader.result;
  
  //     // Split the content into lines (assuming each line corresponds to a new question)
  //     const lines = content.split('\n');
  
  //     // Create new questions from the lines
  //     const newQuestions = [];
  //     let currentMainQuestion = null;
  
  //     lines.forEach((line) => {
  //       const trimmedLine = line.trim();
  
  //       if (trimmedLine.startsWith('- ')) {
  //         // This line is a subquestion
  //         if (currentMainQuestion) {
  //           currentMainQuestion.subquestions.push({
  //             subject: trimmedLine.substring(2),
  //             yes: null,
  //             no: null,
  //             supportNeeded: null,
  //             remarks: '',
  //           });
  //         }
  //       } else if (trimmedLine.startsWith('-')) {
  //         // This line is an indented subquestion
  //         if (currentMainQuestion) {
  //           const lastSubquestion = currentMainQuestion.subquestions.length - 1;
  //           if (lastSubquestion >= 0) {
  //             currentMainQuestion.subquestions[lastSubquestion].subject += ` ${trimmedLine.substring(1)}`;
  //           }
  //         }
  //       } else {
  //         // This line is a main question
  //         if (currentMainQuestion) {
  //           newQuestions.push(currentMainQuestion);
  //         }
  
  //         currentMainQuestion = {
  //           srNo: questions.length + newQuestions.length + 1,
  //           subject: trimmedLine,
  //           yes: null,
  //           no: null,
  //           supportNeeded: null,
  //           remarks: '',
  //           subquestions: [], // Initialize an array to store subquestions
  //         };
  //       }
  //     });
  
  //     // Handle the last main question
  //     if (currentMainQuestion) {
  //       newQuestions.push(currentMainQuestion);
  //     }
  
  //     // Use the prop function to update the state in the parent component
  //     handleQuestionsUpdate([...questions, ...newQuestions]);
  //   };
  
  //   // Read the file as text
  //   reader.readAsText(file);
  // };
  
  

  // const handleFileChange = (event) => {
  //   const file = event.target.files[0];
  //   setTextFile(file);
  
  //   const reader = new FileReader();
  //   reader.onload = () => {
  //     const content = reader.result;
  
  //     const lines = content.split('\n');
  
  //     const newQuestions = [];
  //     let currentMainQuestion = null;
  
  //     lines.forEach((line) => {
  //       const trimmedLine = line.trim();
  
  //       if (trimmedLine.startsWith('-')) {
  //         if (currentMainQuestion) {
  //           const subquestionSubject = trimmedLine.startsWith('- ') ? trimmedLine.substring(2) : trimmedLine.substring(1);
  //           currentMainQuestion.subquestions.push({
  //             subject: subquestionSubject.trim(),
  //             yes: null,
  //             no: null,
  //             supportNeeded: null,
  //             remarks: '',
  //           });
  //         }
  //       } else if (trimmedLine) {
  //         if (currentMainQuestion) {
  //           newQuestions.push(currentMainQuestion);
  //         }
  //         currentMainQuestion = {
  //           srNo: questions.length + newQuestions.length + 1,
  //           subject: trimmedLine,
  //           yes: null,
  //           no: null,
  //           supportNeeded: null,
  //           remarks: '',
  //           subquestions: [],
  //         };
  //       }
  //     });
  
  //     // Handle the last main question
  //     if (currentMainQuestion) {
  //       newQuestions.push(currentMainQuestion);
  //     }
  //     console.log('Parsed Questions:', newQuestions);

  //     handleQuestionsUpdate([...questions, ...newQuestions]);
  //   };
  
  //   reader.readAsText(file);
  // };
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setTextFile(file);
  
    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;
  
      const lines = content.split('\n');
  
      const newQuestions = [];
      let currentMainQuestion = null;
      let currentSubquestions = [];
  
      lines.forEach((line) => {
        const trimmedLine = line.trim();
  
        if (trimmedLine.startsWith('- ')) {
          // This line is a subquestion
          currentSubquestions.push({
            subject: trimmedLine.substring(2),
            yes: null,
            no: null,
            supportNeeded: null,
            remarks: '',
          });
        } else if (trimmedLine.startsWith('-')) {
          // This line is an indented subquestion
          const lastSubquestion = currentSubquestions.length - 1;
          if (lastSubquestion >= 0) {
            currentSubquestions[lastSubquestion].subject += ` ${trimmedLine.substring(1)}`;
          }
        } else if (trimmedLine) {
          // This line is a main question
          if (currentMainQuestion) {
            currentMainQuestion.subquestions = currentSubquestions;
            newQuestions.push(currentMainQuestion);
          }
  
          currentMainQuestion = {
            srNo: questions.length + newQuestions.length + 1,
            subject: trimmedLine,
            yes: null,
            no: null,
            supportNeeded: null,
            remarks: '',
            subquestions: [],
          };
  
          // Reset subquestions for the new main question
          currentSubquestions = [];
        }
      });
  
      // Handle the last main question and its subquestions
      if (currentMainQuestion) {
        currentMainQuestion.subquestions = currentSubquestions;
        newQuestions.push(currentMainQuestion);
      }
  
      console.log('Parsed Questions:', newQuestions);
      handleQuestionsUpdate([...questions, ...newQuestions]);
    };
  
    reader.readAsText(new Blob([file])); // Explicitly create a Blob from the file
  };
  

//   return (
//     <div style={{ width: '900px' }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Sr.no.</TableCell>
//             <TableCell>Subject</TableCell>
//             <TableCell>Yes</TableCell>
//             <TableCell>No</TableCell>
//             <TableCell>Support Needed (Yes/No)</TableCell>
//             <TableCell>Remarks</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {questions.map((question, index) => (
//             <TableRow key={index}>
//               <TableCell>{question.srNo}</TableCell>
//               <TableCell>{question.subject}</TableCell>
//               <TableCell align='right'>
//                 <RadioGroup value={question.yes} onChange={() => handleRadioChange(index, 'yes')}>
//                   <FormControlLabel value={true} control={<Radio />} />
//                 </RadioGroup>
//               </TableCell>
//               <TableCell align='right'>
//                 <RadioGroup value={question.no} onChange={() => handleRadioChange(index, 'no')}>
//                   <FormControlLabel value={true} control={<Radio />} />
//                 </RadioGroup>
//               </TableCell>
//               <TableCell align='right'>
//                 <RadioGroup
//                   value={question.supportNeeded}
//                   onChange={() => handleSupportNeededChange(index, 'yes')}
//                 >
//                   <FormControlLabel value="yes" control={<Radio />} />
//                 </RadioGroup>
//               </TableCell>
//               <TableCell align='right'>
//                 <TextField
//                   value={question.remarks}
//                   onChange={(e) => handleRemarksChange(index, e.target.value)}
//                   variant="outlined"
//                   fullWidth
//                 />
//               </TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//       {/* File upload section */}
//       <div style={{ marginTop: '20px' }}>
//         <Typography variant="h6">Add Other Questions</Typography>
//         <input type="file" onChange={handleFileChange} />
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default QuestionTableForm;



return (
    <div style={{ width: '900px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Sr.no.</TableCell>
            <TableCell>Subject</TableCell>
            <TableCell>Yes</TableCell>
            <TableCell>No</TableCell>
            <TableCell>Support Needed (Yes/No)</TableCell>
            <TableCell>Remarks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {questions &&
            questions.map((question, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{question.srNo}</TableCell>
                  <TableCell>{question.subject}</TableCell>
                  <TableCell align='right'>
                    <RadioGroup value={question.yes} onChange={() => handleRadioChange(index, 'yes')}>
                      <FormControlLabel value={true} control={<Radio />} />
                    </RadioGroup>
                  </TableCell>
                  <TableCell align='right'>
                    <RadioGroup value={question.no} onChange={() => handleRadioChange(index, 'no')}>
                      <FormControlLabel value={true} control={<Radio />} />
                    </RadioGroup>
                  </TableCell>
                  <TableCell align='right'>
                    <RadioGroup
                      value={question.supportNeeded}
                      onChange={() => handleSupportNeededChange(index, 'yes')}
                    >
                      <FormControlLabel value="yes" control={<Radio />} />
                    </RadioGroup>
                  </TableCell>
                  <TableCell align='right'>
                    <TextField
                      value={question.remarks}
                      onChange={(e) => handleRemarksChange(index, e.target.value)}
                      variant="outlined"
                      fullWidth
                    />
                  </TableCell>
                </TableRow>
                {/* Display subquestions under the main question */}
                {question.subquestions &&
                  question.subquestions.map((subquestion, subIndex) => (
                    <TableRow key={`sub_${index}_${subIndex}`}>
                      <TableCell>{subquestion.srNo}</TableCell>
                      <TableCell>{subquestion.subject}</TableCell>
                      <TableCell align='right'>
                        {/* Handle subquestion Yes */}
                      </TableCell>
                      <TableCell align='right'>
                        {/* Handle subquestion No */}
                      </TableCell>
                      <TableCell align='right'>
                        {/* Handle subquestion Support Needed */}
                      </TableCell>
                      <TableCell align='right'>
                        <TextField
                          value={subquestion.remarks}
                          onChange={(e) => handleRemarksChange(index, e.target.value)}
                          variant="outlined"
                          fullWidth
                        />
                      </TableCell>
                    </TableRow>
                  ))}
              </React.Fragment>
            ))}
        </TableBody>
      </Table>
      {/* File upload section */}
      <div style={{ marginTop: '20px' }}>
        <Typography variant="h6">Add Other Questions</Typography>
        <input type="file" onChange={handleFileChange} />
      </div>
      <hr />
    </div>
  );
};

export default QuestionTableForm;






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
//   Radio,
//   RadioGroup,
//   FormControlLabel,
//   TextField,
// } from '@material-ui/core';
// import Papa from 'papaparse';
// import { handleQuestionsUpdate } from '../Lead Information/leadinformation'; // Adjust the path based on your project structure

// const QuestionTableForm = ({ questions, handleRadioChange, handleSupportNeededChange, handleRemarksChange, handleQuestionsUpdate }) => {
//   const [textFile, setTextFile] = useState(null);
//   const handleFileChange = (event) => {
//     const file = event.target.files[0];
//     setTextFile(file);
  
//     const reader = new FileReader();
//     reader.onload = () => {
//       const content = reader.result;
  
//       const lines = content.split('\n');
  
//       const newQuestions = [];
//       let currentMainQuestion = null;
//       let currentSubquestions = [];
  
//       lines.forEach((line) => {
//         const trimmedLine = line.trim();
  
//         if (trimmedLine.startsWith('- ')) {
//           // This line is a subquestion
//           currentSubquestions.push({
//             subject: trimmedLine.substring(2),
//             yes: null,
//             no: null,
//             supportNeeded: null,
//             remarks: '',
//           });
//         } else if (trimmedLine.startsWith('-')) {
//           // This line is an indented subquestion
//           const lastSubquestion = currentSubquestions.length - 1;
//           if (lastSubquestion >= 0) {
//             currentSubquestions[lastSubquestion].subject += ` ${trimmedLine.substring(1)}`;
//           }
//         } else if (trimmedLine) {
//           // This line is a main question
//           if (currentMainQuestion) {
//             currentMainQuestion.subquestions = currentSubquestions;
//             newQuestions.push(currentMainQuestion);
//           }
  
//           currentMainQuestion = {
//             srNo: questions.length + newQuestions.length + 1,
//             subject: trimmedLine,
//             yes: null,
//             no: null,
//             supportNeeded: null,
//             remarks: '',
//             subquestions: [],
//           };
  
//           // Reset subquestions for the new main question
//           currentSubquestions = [];
//         }
//       });
  
//       // Handle the last main question and its subquestions
//       if (currentMainQuestion) {
//         currentMainQuestion.subquestions = currentSubquestions;
//         newQuestions.push(currentMainQuestion);
//       }
  
//       console.log('Parsed Questions:', newQuestions);
//       handleQuestionsUpdate([...questions, ...newQuestions]);
//     };
  
//     reader.readAsText(new Blob([file])); // Explicitly create a Blob from the file
//   };

//   const handleSubquestionRadioChange = (mainIndex, subIndex, option, value) => {
//     // Logic to handle radio button change for subquestions
//   };
  
//   const handleSubquestionSupportNeededChange = (mainIndex, subIndex, option, value) => {
//     // Logic to handle support needed change for subquestions
//   };
  

//   return (
//     <div style={{ width: '900px' }}>
//       <Table sx={{ minWidth: 650 }} aria-label="simple table">
//         <TableHead>
//           <TableRow>
//             <TableCell>Sr.no.</TableCell>
//             <TableCell>Subject</TableCell>
//             <TableCell>Yes</TableCell>
//             <TableCell>No</TableCell>
//             <TableCell>Support Needed (Yes/No)</TableCell>
//             <TableCell>Remarks</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {questions &&
//             questions.map((question, index) => (
//               <React.Fragment key={index}>
//                 <TableRow>
//                   <TableCell>{question.srNo}</TableCell>
//                   <TableCell>{question.subject}</TableCell>
//                   <TableCell align='right'>
//                     <RadioGroup value={question.yes} onChange={(e) => handleRadioChange(index, 'yes', e.target.value)}>
//                       <FormControlLabel value={true} control={<Radio />}  />
//                     </RadioGroup>
//                   </TableCell>
//                   <TableCell align='right'>
//                     <RadioGroup value={question.no} onChange={(e) => handleRadioChange(index, 'no', e.target.value)}>
//                       <FormControlLabel value={true} control={<Radio />}  />
//                     </RadioGroup>
//                   </TableCell>
//                   <TableCell align='right'>
//                     <RadioGroup
//                       value={question.supportNeeded}
//                       onChange={(e) => handleSupportNeededChange(index, 'yes', e.target.value)}
//                     >
//                       <FormControlLabel value="yes" control={<Radio />}/>
//                     </RadioGroup>
//                   </TableCell>
//                   <TableCell align='right'>
//                     <TextField
//                       value={question.remarks}
//                       onChange={(e) => handleRemarksChange(index, e.target.value)}
//                       variant="outlined"
//                       fullWidth
//                     />
//                   </TableCell>
//                 </TableRow>
//                 {/* Display subquestions under the main question */}
//                 {question.subquestions &&
//                   question.subquestions.map((subquestion, subIndex) => (
//                     <TableRow key={`sub_${index}_${subIndex}`}>
//                       <TableCell>{subquestion.srNo}</TableCell>
//                       <TableCell>{subquestion.subject}</TableCell>
//                       <TableCell align='right'>
//                         <RadioGroup value={subquestion.yes} onChange={(e) => handleSubquestionRadioChange(index, subIndex, 'yes', e.target.value)}>
//                           <FormControlLabel value={true} control={<Radio />} label="Yes" />
//                           <FormControlLabel value={false} control={<Radio />} label="No" />
//                         </RadioGroup>
//                       </TableCell>
//                       <TableCell align='right'>
//                         <RadioGroup value={subquestion.no} onChange={(e) => handleSubquestionRadioChange(index, subIndex, 'no', e.target.value)}>
//                           <FormControlLabel value={true} control={<Radio />} label="Yes" />
//                           <FormControlLabel value={false} control={<Radio />} label="No" />
//                         </RadioGroup>
//                       </TableCell>
//                       <TableCell align='right'>
//                         <RadioGroup
//                           value={subquestion.supportNeeded}
//                           onChange={(e) => handleSubquestionSupportNeededChange(index, subIndex, 'yes', e.target.value)}
//                         >
//                           <FormControlLabel value="yes" control={<Radio />} label="Yes" />
//                           <FormControlLabel value="no" control={<Radio />} label="No" />
//                         </RadioGroup>
//                       </TableCell>
//                       <TableCell align='right'>
//                         <TextField
//                           value={subquestion.remarks}
//                           onChange={(e) => handleRemarksChange(index, e.target.value)}
//                           variant="outlined"
//                           fullWidth
//                         />
//                       </TableCell>
//                     </TableRow>
//                   ))}
//               </React.Fragment>
//             ))}
//         </TableBody>
//       </Table>
//       {/* File upload section */}
//       <div style={{ marginTop: '20px' }}>
//         <Typography variant="h6">Add Other Questions</Typography>
//         <input type="file" onChange={handleFileChange} />
//       </div>
//       <hr />
//     </div>
//   );
// };

// export default QuestionTableForm;
