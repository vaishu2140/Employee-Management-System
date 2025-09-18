// Clear existing data for a fresh start

export const employees = [
  {
    "Id": 1,
    "firstName": "Aarav",
    "email": "employee1@example.com",
    "password": "123",
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Prepare Sales Report",
        "taskDescription": "Compile monthly sales data for review.",
        "taskDate": "2025-08-21",
        "taskCategory": "Reporting",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Team Meeting",
        "taskDescription": "Attend the weekly sync-up meeting.",
        "taskDate": "2025-08-22",
        "taskCategory": "Meetings",
        "active": true,
        "newTask": false,
        "completed": false
      },
      {
        "taskTitle": "Client Follow-up",
        "taskDescription": "Call client to discuss project status.",
        "taskDate": "2025-08-23",
        "taskCategory": "Communication",
        "active": false,
        "newTask": false,
        "completed": true
      }
    ]
  },
  {
    "Id": 2,
    "firstName": "Priya",
    "email": "employee2@example.com",
    "password": "123",
    "taskNumbers": { "active": 3, "newTask": 2, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Update Website",
        "taskDescription": "Fix broken links and update homepage banner.",
        "taskDate": "2025-08-24",
        "taskCategory": "Development",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Security Audit",
        "taskDescription": "Check server logs for suspicious activity.",
        "taskDate": "2025-08-25",
        "taskCategory": "IT",
        "active": false,
        "newTask": false,
        "completed": true
      },
      {
        "taskTitle": "Database Backup",
        "taskDescription": "Perform weekly database backup.",
        "taskDate": "2025-08-26",
        "taskCategory": "Database",
        "active": true,
        "newTask": false,
        "completed": false
      },
      {
        "taskTitle": "Create API Documentation",
        "taskDescription": "Document endpoints for internal use.",
        "taskDate": "2025-08-27",
        "taskCategory": "Documentation",
        "active": true,
        "newTask": true,
        "completed": false
      }
    ]
  },
  {
    "Id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskNumbers": { "active": 3, "newTask": 2, "completed": 2 },
    "tasks": [
      {
        "taskTitle": "Test Mobile App",
        "taskDescription": "Run regression tests on the mobile app.",
        "taskDate": "2025-08-22",
        "taskCategory": "QA",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Bug Fix",
        "taskDescription": "Fix crash issue in login module.",
        "taskDate": "2025-08-23",
        "taskCategory": "Development",
        "active": true,
        "newTask": false,
        "completed": false
      },
      {
        "taskTitle": "Code Review",
        "taskDescription": "Review PRs from teammates.",
        "taskDate": "2025-08-23",
        "taskCategory": "Development",
        "active": false,
        "newTask": false,
        "completed": true
      },
      {
        "taskTitle": "Prepare Test Cases",
        "taskDescription": "Write test cases for new features.",
        "taskDate": "2025-08-25",
        "taskCategory": "QA",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Deploy Patch",
        "taskDescription": "Deploy urgent hotfix to production.",
        "taskDate": "2025-08-26",
        "taskCategory": "Deployment",
        "active": false,
        "newTask": false,
        "completed": true
      }
    ]
  },
  {
    "Id": 4,
    "firstName": "Meera",
    "email": "employee4@example.com",
    "password": "123",
    "taskNumbers": { "active": 2, "newTask": 1, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Design Logo",
        "taskDescription": "Create a new logo for the client.",
        "taskDate": "2025-08-22",
        "taskCategory": "Design",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "UI Review",
        "taskDescription": "Review dashboard UI for improvements.",
        "taskDate": "2025-08-24",
        "taskCategory": "Design",
        "active": true,
        "newTask": false,
        "completed": false
      },
      {
        "taskTitle": "Prototype Demo",
        "taskDescription": "Present prototype to stakeholders.",
        "taskDate": "2025-08-25",
        "taskCategory": "Presentation",
        "active": false,
        "newTask": false,
        "completed": true
      }
    ]
  },
  {
    "Id": 5,
    "firstName": "Siddharth",
    "email": "employee5@example.com",
    "password": "123",
    "taskNumbers": { "active": 4, "newTask": 2, "completed": 1 },
    "tasks": [
      {
        "taskTitle": "Market Research",
        "taskDescription": "Analyze competitors’ strategies.",
        "taskDate": "2025-08-21",
        "taskCategory": "Research",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Campaign Planning",
        "taskDescription": "Plan new digital marketing campaign.",
        "taskDate": "2025-08-23",
        "taskCategory": "Marketing",
        "active": true,
        "newTask": false,
        "completed": false
      },
      {
        "taskTitle": "Content Creation",
        "taskDescription": "Write blog posts for company website.",
        "taskDate": "2025-08-24",
        "taskCategory": "Content",
        "active": false,
        "newTask": false,
        "completed": true
      },
      {
        "taskTitle": "SEO Optimization",
        "taskDescription": "Update keywords for better ranking.",
        "taskDate": "2025-08-25",
        "taskCategory": "SEO",
        "active": true,
        "newTask": true,
        "completed": false
      },
      {
        "taskTitle": "Prepare Newsletter",
        "taskDescription": "Draft monthly newsletter for clients.",
        "taskDate": "2025-08-27",
        "taskCategory": "Communication",
        "active": true,
        "newTask": false,
        "completed": false
      }
    ]
  }
];

   
  
  const admin= [{
    "Id": 101,
    "email": "admin@example.com",
    "password": "123"
  }];

// Save to localStorage (pass the data instead of using undefined variables)
export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees))
  localStorage.setItem("admin", JSON.stringify(admin))
}

// Get from localStorage (safe defaults)
export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees")) 
  const admin = JSON.parse(localStorage.getItem("admin")) 
  
  console.log(employees, admin);  

  return { employees, admin };
}