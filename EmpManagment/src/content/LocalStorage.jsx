const employees =
    [{
        "id": 1,
        "name": "Alice Johnson",
        "email": "alice.johnson@example.com",
        "password": "password123",
        "TaskCount": {
            "new": 5,
            "completed": 10,
            "accepted": 2,
            "failed": 1
          },    
        "tasks": [
            {
                "title": "Project Kickoff",
                "date": "2024-10-01",
                "description": "Initial meeting to discuss project goals.",
                "category": "Meeting",
                "active": true,
                "completed": false,
                "failed": false,
                 "newTask":false,
            },
            {
                "title": "Budget Review",
                "date": "2024-10-05",
                "description": "Review budget allocations for Q4.",
                "category": "Finance",
                "active": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Client Presentation",
                "date": "2024-10-10",
                "description": "Present the proposal to the client.",
                "category": "Presentation",
                "active": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 2,
        "name": "Bob Smith",
        "email": "bob.smith@example.com",
        "password": "bobSecure456",
        "TaskCount": {
        "new": 3,
        "completed": 15,
        "accepted": 4,
        "failed": 0
      },
        "tasks": [
            {
                "title": "Data Analysis",
                "date": "2024-09-15",
                "description": "Analyze survey data from recent customer feedback.",
                "category": "Analysis",
                "active": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Team Training",
                "date": "2024-10-03",
                "description": "Organize a training session for the new hires.",
                "category": "Training",
                "active": false,
                "completed": false,
                "failed": true
            },
            {
                "title": "System Update",
                "date": "2024-10-12",
                "description": "Update and test the new system patch.",
                "category": "IT",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Monthly Report",
                "date": "2024-10-15",
                "description": "Compile the monthly report for management.",
                "category": "Reporting",
                "active": false,
                "completed": false,
                "failed": true
            }
        ]
    },
    {
        "id": 3,
        "name": "Charlie Brown",
        "email": "charlie.brown@example.com",
        "password": "charliePass789",
        "TaskCount": {
        "new": 4,
        "completed": 8,
        "accepted": 3,
        "failed": 2
      },
        "tasks": [
            {
                "title": "Inventory Check",
                "date": "2024-09-20",
                "description": "Check inventory levels in the warehouse.",
                "category": "Operations",
                "active": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Product Launch Prep",
                "date": "2024-10-07",
                "description": "Prepare materials for the upcoming product launch.",
                "category": "Marketing",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Website Redesign",
                "date": "2024-10-14",
                "description": "Coordinate with the web team for redesign updates.",
                "category": "IT",
                "active": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 4,
        "name": "Diana Prince",
        "email": "diana.prince@example.com",
        "password": "dianaSecret101",
        "TaskCount": {
        "new": 6,
        "completed": 7,
        "accepted": 1,
        "failed": 3
      },
        "tasks": [
            {
                "title": "Legal Review",
                "date": "2024-10-02",
                "description": "Review legal contracts with clients.",
                "category": "Legal",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Compliance Audit",
                "date": "2024-10-09",
                "description": "Conduct a compliance audit for Q3.",
                "category": "Audit",
                "active": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "Staff Appraisal",
                "date": "2024-10-20",
                "description": "Evaluate performance appraisals for team members.",
                "category": "HR",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Risk Assessment",
                "date": "2024-10-25",
                "description": "Assess potential risks for the new project.",
                "category": "Risk Management",
                "active": true,
                "completed": false,
                "failed": false
            }
        ]
    },
    {
        "id": 5,
        "name": "Evan Davis",
        "email": "evan.davis@example.com",
        "password": "evanPass202",
        "TaskCount": {
        "new": 8,
        "completed": 5,
        "accepted": 2,
        "failed": 0
      },
        "tasks": [
            {
                "title": "Content Creation",
                "date": "2024-09-25",
                "description": "Write content for the new marketing campaign.",
                "category": "Marketing",
                "active": false,
                "completed": true,
                "failed": false
            },
            {
                "title": "SEO Optimization",
                "date": "2024-10-08",
                "description": "Optimize website for better SEO ranking.",
                "category": "SEO",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Partner Outreach",
                "date": "2024-10-18",
                "description": "Reach out to new potential partners.",
                "category": "Partnership",
                "active": true,
                "completed": false,
                "failed": false
            },
            {
                "title": "Social Media Review",
                "date": "2024-10-22",
                "description": "Analyze performance on social media channels.",
                "category": "Social Media",
                "active": false,
                "completed": false,
                "failed": true
            }
        ]
    } ]

const Admin =[{
    "id": 1,
    "name": "Admin User",
    "email": "admin.user@example.com",
    "password": "adminPass123"
}]

const setLocalItem =()=>{
    localStorage.setItem("employees",JSON.stringify(employees));
    localStorage.setItem("Admin",JSON.stringify(Admin));
}
export default setLocalItem ;

 export const getLocalItem =()=>{
     const employee = JSON.parse(localStorage.getItem("employees"));
     const admin= JSON.parse(localStorage.getItem("Admin"));
    return ({employee,admin});
}


