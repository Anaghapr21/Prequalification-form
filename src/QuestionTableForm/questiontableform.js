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
  Checkbox
} from '@material-ui/core';
import Papa from 'papaparse';
import { handleQuestionsUpdate } from '../Lead Information/leadinformation'; // Adjust the path based on your project structure

const QuestionTableForm = ({ questions=[], handleRadioChange, handleSupportNeededChange, handleRemarksChange, handleQuestionsUpdate }) => {
  const [textFile, setTextFile] = useState(null);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setTextFile(file);
  
    const reader = new FileReader();
    reader.onload = () => {
      const content = reader.result;
  
      // Split the content into lines
      const lines = content.split('\n');
  
      const newQuestions = [];
      let currentMainQuestion = null;
  
      // Iterate through each line
      lines.forEach((line) => {
        const trimmedLine = line.trim();
  
        if (trimmedLine.startsWith('-')) {
          // This line is a subquestion
          if (!currentMainQuestion) {
            console.error('Subquestion found without a main question');
            return; // Skip this line
          }
          // Extract the subquestion subject
          const subQuestionSubject = trimmedLine.substring(1).trim();
          // Add the subquestion to the current main question
          currentMainQuestion.subquestions.push({
            subject: subQuestionSubject,
            yes: null,
            no: null,
            supportNeeded: null,
            remarks: '',
          });
        } else if (trimmedLine) {
          // This line is a main question
          // Create a new main question
          currentMainQuestion = {
            srNo: questions.length + newQuestions.length + 1,
            subject: trimmedLine,
            yes: null,
            no: null,
            supportNeeded: null,
            remarks: '',
            subquestions: [], // Initialize subquestions array
          };
          // Add the main question to the list of new questions
          newQuestions.push(currentMainQuestion);
        }
      });
  
      console.log('Parsed Questions:', newQuestions);
      // Update the state with the parsed questions
      handleQuestionsUpdate([...questions, ...newQuestions]);
    };
  
    reader.readAsText(file); // Read the file as text
  };
  
  

  // const handleSubquestionRadioChange = (mainIndex, subIndex, option, value) => {
  //   // Logic to handle radio button change for subquestions
  // };
  
  // const handleSubquestionSupportNeededChange = (mainIndex, subIndex, option, value) => {
  //   // Logic to handle support needed change for subquestions
  // };
  

  return (
    <div style={{ width: '900px' }}>
      
      {/* <TableContainer component={Paper}> */}
      <TableContainer >

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
  {questions.map((question,index) => (
    <React.Fragment key={question.srNo}>
      <TableRow>
        <TableCell>{question.srNo}</TableCell>
        <TableCell>{question.subject}</TableCell>
        {/* Render radio buttons only if the question does not have subquestions */}
        {!question.subQuestions || question.subQuestions.length === 0 ? (
          <>
           <TableCell>
  <Radio
    checked={question.yes === true}
    onChange={() => handleRadioChange(index, 'yes')}
  />
</TableCell>
<TableCell>
  <Radio
    checked={question.no === true}
    onChange={() => handleRadioChange(index, 'no')}
  />
</TableCell>

            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>
              <TextField />
            </TableCell>
          </>
        ) : (
          // Render empty cells for main question without radio buttons
          <>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
            <TableCell>
              <TextField/>
            </TableCell>
            {/* <TableCell></TableCell> */}
          </>
        )}
      </TableRow>
      {/* Render subquestions */}
      {question.subQuestions && question.subQuestions.length > 0 && (
        question.subQuestions.map((subQuestion, index) => (
          <TableRow key={index}>
            <TableCell></TableCell> {/* Empty cell for Sr. No. */}
            <TableCell>{subQuestion}</TableCell> {/* Cell for subquestion */}
            {/* Render empty cells for subquestions */}
            <TableCell>
              <Radio/>
            </TableCell>
            <TableCell>
              <Radio/>
            </TableCell>
            <TableCell>
              <Checkbox/>
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        ))
      )}
    </React.Fragment>
  ))}
</TableBody>

    </Table>
  </TableContainer>
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
