# Template-Intelligence

This project is a **React + TypeScript** application that allows users to generate personalized, AI-powered templates based on client needs. It provides a seamless interface for users to select criteria such as industry, meeting type, product focus, and success patterns, and generates optimized templates to enhance client interactions.  

---

## Features

- **Interactive UI**: Allows users to select parameters through dropdowns.  
- **Personalized Templates**: Generates tailored templates based on user input.  
- **Loading State Management**: Displays a loading spinner during template generation.  
- **Responsive Design**: Works across different screen sizes.  
- **Lucide Icons Integration**: Uses elegant icons to enhance user experience.  

---

## Demo Flow

1. **Select Parameters**: Choose industry, meeting type, product focus, and success patterns.  
2. **Generate Template**: Click the **Generate Template** button.  
3. **View Results**: The personalized template will be displayed with specific recommendations.  

---

## Installation

### Prerequisites  
Ensure you have the following installed:  
- **Node.js** (v14 or higher)  
- **npm** or **yarn** (package managers)  

---

### Setup

1. Clone the repository:  
   ```bash
   git clone https://github.com/your-username/template-intelligence.git
   cd template-intelligence
   ```

2. Install dependencies:  
   ```bash
   npm install
   ```  
   or  
   ```bash
   yarn install
   ```  

---

## Running the Application

1. Start the development server:  
   ```bash
   npm run dev
   ```  
   or  
   ```bash
   yarn dev
   ```  

2. Open the application in your browser at:  
   **http://localhost:3000**  

---

## Code Explanation

The core logic is located in the `Component` function:

- **State Management**: 
  - `isLoading`: Tracks whether the template is being generated.
  - `selectedTemplate`: Stores the generated template text.

- **Template Generation**:
  - When the **Generate Template** button is clicked, a simulated API call (using `setTimeout`) triggers.
  - After 2 seconds, a personalized template is displayed based on the selected input criteria.

- **UI Components**:
  - **Card**: Displays sections for input, template generation, and output.
  - **Select**: Allows users to select options like industry and meeting type.
  - **Button**: Triggers template generation with a loading state indicator.

---

## Usage

- **Select Industry**: Choose between Technology, Finance, Healthcare, etc.
- **Select Meeting Type**: Options include First Pitch or Follow-up.
- **Select Product Focus**: Choose from Search, YouTube, or Display.
- **Select Success Pattern**: High Engagement, Quick Conversion, or Long-term Value.

Click the **Generate Template** button to see the result. A loading spinner appears, and after 2 seconds, your personalized template will be shown.
---
![Template intelligence](https://github.com/user-attachments/assets/1ddda61f-2832-4c00-b496-4dae92a9789e)

