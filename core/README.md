⦁	Time schedule for completion of the project work-

The Project schedule activities will consist of following:

⦁	Forming the Team

⦁	Selecting the Project Title

⦁	System Requirement Collection

⦁	System Design

⦁	Acquiring the required resources

⦁	Coding

⦁	Testing of the Application

⦁	Deployment

Operating Environment
The operating environment for School ERP system are listed below:

⦁	Operating System: Windows 10
⦁	Database: MySQL database
⦁	Front end: HTML/CSS/Bootstrap
⦁	Back end: Django
⦁	System features

Expected requirement: Student and staff information
Description and priority Information regarding students, teachers and courses are stored in the database. Every user can view only certain information based on their user class. For example, a teacher can view student and course information that they are handling. This feature is of high priority as the information must be viewed by only the authorized users.

Functional requirements
⦁	Each user shall be able to view information in the database based on their user class.
⦁	The administrator shall be able to view all the information in the database.

Normal requirement: Attendance and marks entry
Description and priority Attendance and marks entry is the main feature of the School ERP system. Hence, the priority is high. Teachers update the attendance and marks of the students who are part of her class. Students can view their respective Attendance and marks of the courses they have taken.

Functional requirements
Teachers shall be able to view, update and edit the attendance and marks of the students, part of their class.
⦁	Teacher shall be able to take extra classes, switch classes with other teachers.
Exciting requirement: Communication among students and teachers
Description and priority Students ,  teacher and parent will be able to communicate with each other directly using the ERP system. Students may give their queries and feedback to a teacher and they may respond accordingly. The priority of this feature is low as cost of implementation could be very high. A simple version of this feature is to be implemented.

Functional requirements
⦁	Students shall be able to communicate with their teachers by sends personal messages.
⦁	Students shall be able to communicate with other students through a forum section.
⦁	parent shall be able to communicate with their children teachers by sends personal messages.
⦁	External Interface Requirements
User Interfaces
The User interface is made using Bootstrap. Firstly, there will be a simple login page separate for students and teachers. Each student and teacher will have a unique interface. There will be a fixed sidebar with links to all the modules. The teachers will be able to view their respective students and update their attendance and marks using an effortless interface.

Hardware Interfaces
Since neither the mobile application nor the web portal have any designated hardware, it does not have any direct hardware interfaces. Any browser can be used to access the webapp.

Software Interfaces
The following is a list of software used in making of the project.
Operating System: We have chosen Windows operating system for its best support and user- friendliness.
Django: We have chosen to use Django for the back-end of the website as Django is a simple python framework and is suitable for beginners.
⦁	Database: We are using SQLite database, which comes as default with Django.
Communications Interfaces
This project is to be deployed an online website. All the users can connect to the database server from anywhere and have access to their information.

⦁	Non-functional requirements
Safety requirements
If there is extensive damage to a wide portion of the database due to catastrophic failure, such as a disk crash, the recovery method restores a past copy of the database that was backed up to archival storage (typically tape) and reconstructs a more current state by reapplying or redoing the operations of committed transactions from the backed-up log, up to the time of failure.

Security requirements
The database contains sensitive information of all the students and staff. Therefore, optimal security measures must be taken to ensure data is safe from unauthorized users.
Software Quality Attributes
Availability: The users must always be able to view their information so that they can keep track regularly.

Correctness: The information about attendance and marks must be correct to not feed wrong in- formation to the users.

portability: The users access the ERP from various platforms such as desktops and mobile phones. The webapp must be portable to all platforms and the user experience must be optimal.


⦁	Requirements Management

Requirements management can be defined as a process of eliciting, documenting, organizing, and control- ling changes to the requirements. Generally, the process of requirements management begins as soon as the requirements document is available, but ’planning’ for managing the changing requirements should start during the requirements elicitation process.

The essential activities performed in requirements management are listed below.
⦁	Recognizing the need for change in the requirements
⦁	Establishing a relationship amongst stakeholders and involving them in the requirements engineering process
⦁	Identifying and tracking requirements attributes.
Requirements management enables the development team to identify, control, and track requirements and changes that occur as the software development process progresses. Other advantages associated with the requirements management are listed below.

Better control of complex projects: This provides the development team with a clear understanding of what, when, and why the software is to be delivered. The resources are allocated according to user-driven priorities and relative implementation effort.
Improved software quality: This ensures that the software performs according to the requirements to enhance software quality. This can be achieved when the developers and testers have a precise understanding of what to develop and test.
Reduced project costs and delays: This minimizes errors early in the development cycle as it is expensive to ’fix’ errors at the later stages of the development cycle. As a result, the project costs also reduce.
Improved team communication: This facilitates early involvement of users to ensure that their needs are achieved.


⦁	Requirements change management
Requirements change management is used when there is a request or proposal for a change in the requirements. The advantage of this process is that the changes to the proposals are managed consistently and in a controlled manner. Note that many activities of requirements management are like software configuration management activities.

An efficient requirement change management process undergoes a number of stages for changes to the requirements. These stages are listed below.
⦁	Problem analysis and change specification: The entire process begins with identification of problems to the requirements. The problem or proposal is analyzed to verify whether the change is valid. The outcome of the analysis is provided to the ’change requester’ and a more specific requirements change proposal is then made.

⦁	Change analysis and costing: The effect of a change requested on the requirement is assessed according to traceability information. The cost for this can be estimated on the basis of modification made to the design and implementation. After the analysis is over, a decision is made whether changes are to be made.

⦁	Change implementation: Finally, the changes are made to the requirements document, system design and implementation. The requirements document is organized in such a manner so that changes to it can be made without extensive rewriting. Minimizing the external references and making document sections modular achieves changeability in the document. By doing this, individual sections can be changed and replaced without affecting other parts of the document.
