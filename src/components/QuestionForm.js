
import React, { useState } from "react";

function QuestionForm({ onAddQuestion }) {
  const [formData, setFormData] = useState({
    prompt: "",
    answers: ["", "", "", ""],
    correctIndex: 0,
  });

  function handleSubmit(event) {
    event.preventDefault();

    // Validate that the question has a prompt and at least one non-empty answer
    if (formData.prompt.trim() === "" || formData.answers.every((answer) => answer.trim() === "")) {
      alert("Please provide a prompt and at least one non-empty answer.");
      return;
    }

    // Call the callback to add the question
    onAddQuestion(formData);

    // Reset form data
    setFormData({
      prompt: "",
      answers: ["", "", "", ""],
      correctIndex: 0,
    });
  }

  return (
    <section>
      <h1>New Question</h1>
      <form onSubmit={handleSubmit}>
        {/*  form inputs here */}
        <button type="submit">Add Question</button>
      </form>
    </section>
  );
}

export default QuestionForm;
