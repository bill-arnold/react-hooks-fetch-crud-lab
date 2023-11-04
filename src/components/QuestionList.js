

import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";
import QuestionForm from "./QuestionForm";

function QuestionList() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions when the component mounts
    fetch("http://localhost:3000/questions")
      .then((response) => response.json())
      .then((data) => setQuestions(data));
  }, []);

  const handleAddQuestion = (newQuestion) => {
    // Update state to add the new question
    setQuestions((prevQuestions) => [...prevQuestions, newQuestion]);

    // Send a POST request to add the new question to the server
    fetch("http://localhost:3000/questions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newQuestion),
    });
  };

  const handleDeleteQuestion = (id) => {
    // Update state to remove the deleted question
    setQuestions((prevQuestions) => prevQuestions.filter((question) => question.id !== id));

    // Send a DELETE request to remove the question from the server
    fetch(`http://localhost:3000/questions/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <section>
      <h1>Quiz Questions</h1>
      <QuestionForm onAddQuestion={handleAddQuestion} />
      <ul>
        {questions.map((question) => (
          <QuestionItem key={question.id} question={question} onDeleteQuestion={handleDeleteQuestion} />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;
