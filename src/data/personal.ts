// Personal information
export const NAME = "Thomas";
export const PROFESSION1 = "Full Stack Developer";
export const PROFESSION2 = "AI Expert";
export const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

// Contact information
export const EMAIL = "prograsec.usama@gmail.com";
export const LINKED_IN_URL = "https://www.linkedin.com/in/usama365/";
export const GITHUB_URL = "https://github.com/usama-365";
export const UPWORK_URL = "https://www.upwork.com/your-profile-url";
export const WHATSAPP_URL = "https://api.whatsapp.com/send/?phone=YOUR_PHONE_NUMBER";

// Assets
export const CV_NAME = "resume.pdf";
export const PROFILE_IMAGE_PATH = "/header.jpg";

// Helpers
function calculateYearsOfExperience(from = "2016-06-01") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
