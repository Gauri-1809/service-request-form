# service-request-form

# 🧩 Simplified Service Request Form

This is a responsive, multi-step service request form built with **React** and **Tailwind CSS**. It allows parents to submit requests outlining their child's learning support needs.

---

## 📌 Features

- ✅ Multi-step form (3 steps)
- ✅ Client-side validation with clear error messages
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ State management using React Hooks
- ✅ Simulated submission with "Thank You" message
- ✅ Styled with Tailwind CSS

---

## 🧱 Technologies Used

- React (with functional components and Hooks)
- Tailwind CSS (utility-first responsive design)
- JavaScript (ES6+)
- No backend – submission is simulated via console + thank you message

---


## ⚖️ Folder Structure
```bash
.
├── public/
├── src/
│   ├── components/
│   │   ├── Step1_ChildDetails.jsx
│   │   ├── Step2_ServiceNeeds.jsx
│   │   ├── Step3_ContactInfo.jsx
│   │   └── FormNavigation.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.css
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/your-username/simplified-service-form.git
cd simplified-service-form
```

### 2. Install dependencies

```bash
npm install
```

### 3. Setup Tailwind CSS

Install Tailwind and its dependencies:

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Update `tailwind.config.js`:

```js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Update `postcss.config.js` if not created:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

In `src/index.css`, replace all content with:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

### 4. Run the application

```bash
npm start
```

The app will run on: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Form Steps

### Step 1: Child Details
- Child's Age (number)
- Diagnosis (text or dropdown)
- Current School Type (radio)

### Step 2: Service Needs
- Type of Support (multi-select checkboxes)
- Preferred Frequency (dropdown)
- Specific Requirements (textarea)

### Step 3: Contact Information
- Parent's Name
- Email Address
- Phone Number

### Final: Thank You
- Displays confirmation and logs form data to console.

---

## 🎨 Screenshots

_Add screenshots here for desktop, tablet, and mobile view (optional)_

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙋‍♀️ Author

Built by [Gauri Pawar](https://github.com/Gauri-1809/service-request-form.git)
