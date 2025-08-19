-- Create pitch_submissions table
CREATE TABLE IF NOT EXISTS pitch_submissions (
  id SERIAL PRIMARY KEY,
  company_name VARCHAR(255) NOT NULL,
  founder_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  website VARCHAR(255),
  category VARCHAR(100) NOT NULL,
  pitch_title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  team_size VARCHAR(50),
  funding_stage VARCHAR(50),
  video_url VARCHAR(500),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_pitch_submissions_email ON pitch_submissions(email);
CREATE INDEX IF NOT EXISTS idx_pitch_submissions_created_at ON pitch_submissions(created_at);
