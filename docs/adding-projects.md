# Adding Projects to Your Portfolio

This document provides step-by-step instructions on how to add new projects to your portfolio website.

## 1. Prepare Project Assets

Before adding a new project, ensure you have the following assets ready:

- Project thumbnail image (recommended size: 800x600 pixels)
- Project demo video (optional, recommended format: MP4)

Place these files in the appropriate directories:
- Images: `public/images/`
- Videos: `public/videos/`

## 2. Update the Projects Data File

Open the file `app/data/projects.ts` and add a new project object to the `projects` array. Follow this structure:

```typescript
{
  id: "unique_id",  // Increment the last used ID
  title: "Project Title",
  description: "A brief description of your project.",
  category: "Project Category",  // e.g., "Web Development", "Mobile Apps", etc.
  technologies: ["Tech1", "Tech2", "Tech3"],  // List the main technologies used
  thumbnail: "/images/your-thumbnail-filename.jpg",
  videoUrl: "/videos/your-video-filename.mp4",  // Optional
}

