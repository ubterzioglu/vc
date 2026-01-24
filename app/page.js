'use client';

import { useState } from 'react';

export default function Home() {
  const [showForm, setShowForm] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage('');

    const formData = {
      projectLink: e.target.projectLink.value,
      linkedinLink: e.target.linkedinLink.value,
      anonymous: e.target.anonymous.checked,
      projectSlogan: e.target.projectSlogan.value,
      projectContent: e.target.projectContent.value
    };

    try {
      const response = await fetch('/api/submit-project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Projeniz başarıyla gönderildi! Yakında LinkedIn\'e paylaşılacak.');
        e.target.reset();
        setTimeout(() => {
          setShowForm(false);
          setStatusMessage('');
        }, 2000);
      } else {
        setStatusMessage(result.error || 'Proje gönderilemedi. Lütfen tekrar deneyin.');
      }
    } catch (error) {
      setStatusMessage('Bir hata oluştu. Lütfen tekrar deneyin.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gradient-bg">
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>

      <div className="container">
        <img src="/favicon.jpg" alt="Vibecoding Community Logo" 
             style={{width: '500px', height: '500px', borderRadius: '50%', marginBottom: '2rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'}}/>
        <h1>Vibecoding Community</h1>
        <p>create, share, connect</p>
        <a href="https://www.linkedin.com/company/111056148/" className="btn" target="_blank" rel="noopener noreferrer">Join us!</a>
        <button onClick={() => setShowForm(true)} className="btn" style={{marginLeft: '1rem'}}>Add Your Project!</button>
      </div>

      {showForm && (
        <div className="form-container" onClick={(e) => e.target === e.currentTarget && setShowForm(false)}>
          <div className="form-content" onClick={(e) => e.stopPropagation()}>
            <h2 className="form-title">Submit Your Project</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="projectLink">Project Link</label>
                <input type="url" id="projectLink" name="projectLink" placeholder="https://github.com/your-project" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="linkedinLink">LinkedIn Profile Link</label>
                <input type="url" id="linkedinLink" name="linkedinLink" placeholder="https://www.linkedin.com/in/your-profile" required />
              </div>
              
              <div className="checkbox-group">
                <input type="checkbox" id="anonymous" name="anonymous" />
                <label htmlFor="anonymous">I want to remain anonymous</label>
              </div>
              
              <div className="form-group">
                <label htmlFor="projectSlogan">Project Slogan (Short Text)</label>
                <input type="text" id="projectSlogan" name="projectSlogan" placeholder="A catchy slogan for your project" maxLength="100" required />
              </div>
              
              <div className="form-group">
                <label htmlFor="projectContent">Project Content (Post Description)</label>
                <textarea id="projectContent" name="projectContent" placeholder="Describe your project in detail..." required></textarea>
              </div>
              
              <div className={`loading ${loading ? 'show' : ''}`}>
                <p>Submitting your project...</p>
              </div>
              
              <div className={`status-message ${statusMessage.includes('başarıyla') || statusMessage.includes('success') ? 'status-success' : statusMessage ? 'status-error' : ''}`}>
                {statusMessage}
              </div>
              
              <div className="form-actions">
                <button type="button" onClick={() => setShowForm(false)} className="btn close-btn">Cancel</button>
                <button type="submit" className="btn submit-btn">Submit Project</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}