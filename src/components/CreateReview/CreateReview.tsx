import React, { useState } from 'react';

const CreateReview = () => {
  const [courseId, setCourseId] = useState('');
  const [content, setContent] = useState('');
  const [professor, setProfessor] = useState('');
  const [published, setPublished] = useState(false);
  const [authorId, setAuthorId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
  
    const review = {
      courseId,
      content,
      professor,
      published,
      authorId,
    };
  
    const response = await fetch('/api/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    });
  
    if (response.ok) {
      // Handle successful submission
    } else {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Course ID:
        <input type="text" value={courseId} onChange={(e) => setCourseId(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <label>
        Professor:
        <input type="text" value={professor} onChange={(e) => setProfessor(e.target.value)} />
      </label>
      <label>
        Published:
        <input type="checkbox" checked={published} onChange={(e) => setPublished(e.target.checked)} />
      </label>
      <label>
        Author ID:
        <input type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default CreateReview;