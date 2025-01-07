const employees = [
   {
       "id": 1,
       "email": "employee1@example.com",
       "password": "123",
       "tasks": [
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Prepare Research Report",
               "task_description": "Compile a detailed research report on the latest industry trends and advancements.",
               "task_date": "2024-12-20",
               "task_category": "Research"
           },
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Test New Software Module",
               "task_description": "Conduct thorough testing of the new software module and document any issues.",
               "task_date": "2024-12-24",
               "task_category": "Testing"
           },
           {
               "active": true,
               "new_task": false,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Analyze Market Data",
               "task_description": "Analyze the provided market data to identify key patterns and opportunities.",
               "task_date": "2024-12-22",
               "task_category": "Research"
           }
       ]
   },
   {
       "id": 2,
       "email": "employee2@example.com",
       "password": "123",
       "tasks": [
           {
               "active": true,
               "new_task": false,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Create API Documentation",
               "task_description": "Write detailed API documentation for the development team.",
               "task_date": "2024-12-19",
               "task_category": "Documentation"
           },
           {
               "active": false,
               "new_task": false,
               "complete_task": true,
               "failed_task": false,
               "task_title": "Conduct UX Testing",
               "task_description": "Perform user experience testing for the latest app version and report feedback.",
               "task_date": "2024-12-13",
               "task_category": "Testing"
           },
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Research Competitor Strategies",
               "task_description": "Gather and analyze data on competitor strategies to improve our offerings.",
               "task_date": "2025-01-02",
               "task_category": "Research"
           }
       ]
   },
   {
       "id": 3,
       "email": "employee3@example.com",
       "password": "123",
       "tasks": [
           {
               "active": false,
               "new_task": false,
               "complete_task": true,
               "failed_task": false,
               "task_title": "Develop Feature X",
               "task_description": "Complete the development of Feature X and ensure it passes all test cases.",
               "task_date": "2024-12-15",
               "task_category": "Development"
           },
           {
               "active": true,
               "new_task": false,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Run Performance Tests",
               "task_description": "Perform load and stress testing on the system to ensure stability under peak usage.",
               "task_date": "2024-12-29",
               "task_category": "Testing"
           },
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Optimize Database Queries",
               "task_description": "Optimize database queries for faster performance and reduced latency.",
               "task_date": "2025-01-05",
               "task_category": "Development"
           }
       ]
   },
   {
       "id": 4,
       "email": "employee4@example.com",
       "password": "123",
       "tasks": [
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Design Wireframes",
               "task_description": "Create high-fidelity wireframes for the upcoming project features.",
               "task_date": "2024-12-18",
               "task_category": "Research"
           },
           {
               "active": true,
               "new_task": false,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Test Payment Gateway",
               "task_description": "Test the integration of the payment gateway and report any issues.",
               "task_date": "2024-12-19",
               "task_category": "Testing"
           },
           {
               "active": false,
               "new_task": false,
               "complete_task": false,
               "failed_task": true,
               "task_title": "Debug API Issues",
               "task_description": "Identify and resolve issues in the API endpoints causing failures.",
               "task_date": "2024-12-26",
               "task_category": "Development"
           }
       ]
   },
   {
       "id": 5,
       "email": "employee5@example.com",
       "password": "123",
       "tasks": [
           {
               "active": true,
               "new_task": false,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Update User Manual",
               "task_description": "Revise the user manual to include new features and improvements.",
               "task_date": "2024-12-14",
               "task_category": "Documentation"
           },
           {
               "active": false,
               "new_task": false,
               "complete_task": true,
               "failed_task": false,
               "task_title": "Verify Bug Fixes",
               "task_description": "Verify that recent bug fixes are functioning correctly in the latest build.",
               "task_date": "2025-01-07",
               "task_category": "Testing"
           },
           {
               "active": true,
               "new_task": true,
               "complete_task": false,
               "failed_task": false,
               "task_title": "Plan Feature Rollout",
               "task_description": "Create a detailed plan for rolling out new features to customers.",
               "task_date": "2024-12-30",
               "task_category": "Development"
           }
       ]
   }
]

const Admin = [
   {
       "id": 1,
       "email": "admin@example.com",
       "password": "123"
   }
]

export const setLocalStorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(Admin))
 }
 
 export const getLocalStorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
 
    console.log(employees,admin)
 }