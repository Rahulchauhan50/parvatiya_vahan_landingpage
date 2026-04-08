<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/82fc842b-7521-43e3-810c-d986342fb4d7

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Create a `.env` file from `.env.example` and set mail credentials:
   - `MAIL_USER=Apppavan101@gmail.com`
   - `MAIL_APP_PASSWORD=your_gmail_app_password`
   - `ADMIN_EMAIL=rahulchauhah50@gmail.com`
3. If you use Gemini features, set `GEMINI_API_KEY` in `.env.local`
4. Run backend API in terminal 1:
   `npm run server`
5. Run frontend in terminal 2:
   `npm run dev`

Or run both together:
`npm run dev:all`

## Mail Flow

- Frontend booking form submits to `POST /api/book-ride`
- Backend sends booking details to admin: `rahulchauhah50@gmail.com`
- Backend sends thank-you email to the user email entered in the form
