import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import fs from "fs";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    // In a real implementation, this would serve an actual PDF resume
    // For now, we'll create a simple text response indicating the functionality
    const resumeContent = `
VIKAS GIRI
Graphic Designer & Video Editor
Mumbai, India

CONTACT:
Email: vikasgirije@gmail.com
Phone: +91 7300907766
Portfolio: https://www.behance.net/vikas_goswami

EXPERIENCE:
• Mega Sign Pte. Ltd. (Aug 2024 - Present) - Graphic Designer & Production Assistant
• Filling The Blanks (Nov 2022 - Jul 2024) - Graphic Designer
• IELTSMaterial.com (Nov 2021 - Jul 2023) - Graphic Design Intern
• Curie Robotics (Dec 2020 - Feb 2021) - Graphic Design Intern

EDUCATION:
• M.A. Entertainment, Media & Advertising (2023-2025) - Mumbai University
• B.Voc. Graphics and Multimedia (2019-2022) - TISS

SKILLS:
• Design: Branding, Typography, Packaging Design, Signage Design
• Software: Photoshop, Illustrator, Premier Pro, After Effects, Lightroom, Artcam
• Specialties: Social Media Design, Print Design, Motion Graphics, CNC Design
    `.trim();

    res.setHeader('Content-Type', 'application/octet-stream');
    res.setHeader('Content-Disposition', 'attachment; filename="Vikas_Giri_Resume.txt"');
    res.send(resumeContent);
  });

  const httpServer = createServer(app);
  return httpServer;
}
