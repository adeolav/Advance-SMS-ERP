TECHIE NERD SQUAD
2023

Contents


Abstract        ………………………………………………………………………………………………………..i

Chapter 1
1.1 Introduction ………………………………………………………………………….………………………1            

Chapter 2
2.1 Scope of the project …………………………………………………………………………….. .…….5
2.2 User wise Functionalities…………………………………………………………………………….…7 

Chapter 3
3.1 Design diagrams(ERD,DFD,Table Structures,etc)…………………………………….……10

Chapter 4
4.1 Software requirement …………………………………………………………………………..…...14 
4.2 Hardware Requirement …………………………………………………………………….. ………15

Chapter 5
5.1 Screen shots ………………………………………………………………………………………….. ….20

Chapter 6
6.1 Conclusions …………………………………………..……………………………………………………45
6.2 Future Work …………………………………………….…………………………………………………45

Abstract 

This report specifies the various processes and techniques used in gathering requirements, designing, implementing and testing for the project on school management system. The problems regarding the current system were analyzed and noted. This project aims to solve some of those problems and thus, add more value to the current system. The requirements were gathered from all the stakeholders and based on that we created a requirements models and designed the software based on the based. The project will be implemented in the form of a website using Django (python) and codeigniter(php).

Using the various resources and tools  we  gathered along the way, we implemented the school ERP system using some features that solve the current problems in the system such as a provision to edit the attendance and marks before locking it at the end. The software was also tested using the various testing methods and results were positive.

Thus, the results can be integrated in the current ERP system to improve it’s working and solve some of the existing problems.



Chapter 1

1.1 Introduction

The objective of this Software is to allow the administrator of any educational organization the ability to edit and find out the personal details of a student and allows the student to keep up to date his profile. It’ll also facilitate keeping all the records of teachers, event, parent/guardians, students etc. So, all this information will be available in a few seconds. Overall, it’ll make runing a school  an  easier job for the administrator and the student of any organization.

The main purpose of this project is to illustrate the requirements of the project School Management System and is intended to help any organization to maintain and manage personal data. It is a comprehensive project developed from the ground up to fulfill the needs of school as they guide their students. This software connects daily operations in the school environment ranging from Attendance management to communicational means among students, teachers and parent/guardians. This reduces data error and ensures that information is always up-to-date throughout the organization. It provides a single source of data repository for streamlining your processes and for all reporting purposes. It has a simple user interface and is intuitive. This in sures that the users spend less time in  learning the system and hence, increase their productivity. Efficient security features provide data privacy and hence, increase their productivity.



⦁	Introduction to problem domain
As we know that, a school consists of different departments, such as course departments, fees management, library, event management etc. Nowadays applications and uses of information technologies is increased as compared to before, each of these individual departments has its own computer system to do their own functionalities. By having one main system they can interact with each other from their respected system by having valid user id and password.


⦁	Aim of the problem

The objective of Advance School ERP is to allow the administrator of any organization the ability to edit and find out the personal details of a student and allows the student to keep up to date his profile. It’ll also facilitate keeping all the records of students, such as their id, name, mailing address, phone number, parent/guardians info,  DOB etc. So, all the information about a student will be available in a few seconds. Overall, it’ll make Student Information an easier job for the administrator and the student of any organization.



Chapter 2

System Requirement Engineering

⦁	Inception
Inception is a process of establishing a basic understanding of the problem and the nature of the solution. This includes the need for this software, identification of stakeholders and defining multiple viewpoints.

⦁	What is the purpose of this project?
There are several  ERP system in the  market. But  they are either too costly or too complicate to for a non developer to use. While it is a step towards automating the school activities, it comes with its own set of problems. This project is designed to implement a school ERP system to eradicate some of these problems and add some features of our own that would add value to system.

⦁	Why do we need ERP?
Nowadays, in schools and Schools, it is very difficult to manage each and everything manually. Super- vising and maintaining the whole database of a school or School can be time-consuming and challenging especially if it’s done on a regular basis. So, we need to handle and manage everything smartly.
To solve this problem ERP (Enterprise Resource Planning) is used. ERP software makes it easy to track the progress of every department of school and automate different functions. With ERP every- thing can be seen on a single dashboard. The administrator can manage the school activites from anywhere. The possibilities of maintaining the whole database of  a  school   with  ERP  software  are  endless.

Some of the prominent roles of ERP are:
⦁	Manages the office and automates different functions.
⦁	Helps in long-term management and planning of all departments of the school.
⦁	Eliminates the need for having multiple management software for each department.
⦁	Daily activities like attendance can be digitalized and automated.
⦁	Leave module for teachers can be automated.
⦁	Implementing cashless transactions with the payment module
⦁	The students will be able to Communicate and provide feedback to their  teachers.
⦁	Identification of stakeholders
Enterprise Resource planning implementation is a difficult and complex decision where it involves people issues more than technological issues. Identification of stakeholders is a key step during the process of ERP implementation, because if done improperly, it will lead to failure of the implementation project. The main stakeholders are listed below:

Teachers
Teachers are the key stakeholders of the School ERP. Because they are the one who manage, edit, update the contents of the database of students such as attendance, internal marks, CGPA etc...
It also helps them to assign their class to other teachers when they are on leave. This makes it easier to identify who among them are free to take the class at that time. So, this software help them reduce their overhead and make their tasks easier and simple.

Students  
Students are end users of ERP software. The attendance, internals marks uploaded by the teachers are viewed by students. It helps them track their attendance status. It also helps them to communicate with teachers and their classmates. So, students make up another set of stakeholders of this software. 
Parents
Parents  are also end users of ERP software. The attendance, internals marks uploaded by the teachers are viewed by parents. It helps them track their children status. It also helps them to communicate with teachers.  p a r e n t s   w i l l  have the privilege to pay for their children tutorial fees also viewed the school event. This make them another set of stakeholders of this software.

Administrator
School administrator is responsible for maintaining the database of the school. They will have the privilege to modify the database i.e., to add/remove students/teachers/staff, update information regarding each of these. It is their responsibility to maintain the database of students who pass out from the school and who freshly get admission to the school.  They will have the privilege to  modify the school curricululm. So, the Administrator play a major role in the ERP.

⦁	Viewpoints

Teachers viewpoint
For a teacher, this software must be easy to use. It should be easy to find different modules like attendance, leave module, internals marks, result etc... Teachers are the one who update the contents of the database, so it should be update save modify It.

Students viewpoint

A student can only view the information about himself, other than that everything will be hidden from them. Students will be privilege to log complain and chat with their classmate.
 They will not have the option to edit anything. So, the graphical user interface must be good. They expect it to be functional.

Parents viewpoint

A Parents can only view the information about their children, other than that everything will be hidden from them. Parents will be privilege to log complain and chat with their children teacher.
They will not have the option to edit anything. So, the graphical user interface must be good. They expect it to be functional.


Administrator’s viewpoint

Administrator will have the privilege to view all the information about the school. They will have the option  to  track  goals like, Average marks of all the students in a subject, Average attendance of all the students of a class etc...


⦁	Elaboration
For the School ERP project, there are many classes of end users. These include the school staff, students and admin. As mentioned in the elicitation section, we talked with several stakeholders of different classes and collected their requirements. The requirements of the different classes were diverse. Some of them were in unison and some were in conflict. Thus, elaboration and later negotiation is required.

⦁	School staff
School staff are key stakeholders and use the ERP system the most. Thus, it is essential to cater to their needs first. Among the staff there are several different roles. For each role, The ERP system will have a different view based on the requirements of that group. Among the staff  the  requirements  of  the various  groups are described below.

Teaching staff
Teaching staff make up most of the staff. A teacher expects the ERP system to be easy to use, reliable and reduce the work load. Each teacher belongs to department and are assigned to a class of students with a course or courses. So, the teacher should only be able to view and manipulate  the  data  of  the  students  that they are assigned to.
The teachers’ involvement In the ERP System, is to enter the attendance, the internal marks, the semester end examination marks. They will also have other features which include availing leave and managing a lecture plan for each course.


For Attendance management, the teachers expect a compact and functional interface. An interface where teachers use minimal effort to manage the attendance status of the students. The features expected for the attendance are to ability to enter the attendance to the entire class at once,  edit  the attendance of each individual  student. Also, in the event of leave, they should be given an option of  assigning  the class to  another  teacher,  who takes a course for the same class.
In the event of entering internal marks and semester end examination marks, the teacher enters the marks for each individual student. This is initial a draft and can be edited. The students review the marks and verify. If there are any mistakes, the  student  notifies  the teacher and the mistakes are corrected. After certain amount of time, when all the marks are confirmed, the marks are ‘locked’. i.e., After locking, the marks cannot to changed.
When a teacher applies for a leave, there are many options for different categories of leave. The first category is casual leave, this is for general purposes. Restricted leave can be availed only on specific days given by the School. Then, Sick  leave is for when the teacher is ill. Lastly, earned leave is an option given to each teacher for a period of 15 days.

Head of Department (HOD)
The head of department is a part of the teaching staff but has special privileges. They manage the operations of each department. The  HOD could  still conduct courses for students. So, they will have all the features given to a teacher. Also, as the HOD, they will have access to the records of every teacher, courses, students who belong to the same department.

Technical staff
The technical staff provide technical support to the teaching staff. This includes technical support in laboratories such as maintaining the functioning of computers in labs, maintaining the equipment in their respective departments. Unlike the teaching staff, they do not conduct classes. Their role in the ERP system is to provide support to other staff through communication. Also, they have the feature to avail for leave just like the teachers.

[draw.io] img 1

⦁	Students
Students are another class of end user. In the ERP system, students can view information regarding their attendance status, internals marks, Semester end examination marks, notifications from the School administration etc.  A    student  expects  the  ERP  system  to  be   aesthetic and functional. A student should only be able to view information about himself.
Students generally want a nice graphical interface that provides a lot of information. In the case of attendance, they would like to see additional information other than just the number of classes attended. 
Lastly, another feature that students would like to see is the addition of communication and feedback capabilities in the ERP. Students will find it tough to communicate with other students with common interests if  there is no common communication medium in the  School. A  forum  type  infrastructure  is required in the system.

⦁	Administrator
An admin holds all the privileges of the ERP system. The admin has access to all the databases in the system. These include student database, teacher database, courses database and several others. Their job is to maintain the systems and addressing the problems faced by the other users.
The admin needs adequate resources and the right tools. The admin expects a simple interface where they can easily access the required information.


Product Features
⦁	The administrator will be able to view and update information such as departments, classes, teachers, students, courses.
⦁	Each teacher will be able to enter attendance and marks for their respective students.
⦁	Each student will be able to view the attendance status for their respective courses.
⦁	The teachers will be able to apply for various types of leave directly through the system.
⦁	The students will be able to Communicate and provide feedback to their teachers.
⦁	The students will have access to a forum page where they are communicate will each other.
⦁	Manages the office and automates different functions.
⦁	Helps in long-term management and planning of all departments of the school.
⦁	Eliminates the need for having multiple management software for each department.
⦁	Daily activities like attendance can be digitalized and automated.
⦁	Leave module for teachers can be automated.
⦁	Implementing cashless transactions with the payment module




User Classes and Characteristics
There  are  several   types  of  end  users  for  the  School  ERP system. They are broadly divided as the Administrator, Staff, Students and Parents . Each of these classes have their own set of features.

The student should have the following features:

⦁	View the Attendance status of the courses to which they are enrolled.
⦁	View the Marks of the courses to which they are enrolled.
⦁	View the notification from the School administrator.
⦁	Communicate or give feedback to their respective teachers.
⦁	Communicate with other students of the same university.

The parent should have the following features:

⦁	Access to the information of their children which they are enrolled.
⦁	Pay for their children tutorial fess
⦁	Communicate or give feedback to their respective children teachers.

The staff should have the following features:

⦁	Access to the information of all students that attend their courses.
⦁	Add and edit the Attendance status of those students.
⦁	Add and edit the exam marks of those students.
⦁	Avail the different types of leave.
⦁	Swap classes with other teachers who teach for the same class.

The administrator should have the following features:

⦁	Add and update students, teachers and courses.
⦁	Assign teachers and students to courses


Chapter 3

System Design

Various Design concepts and processes were applied to this project. Following concepts like separation of concerns, the software is divided into individual modules that are functionally independent and in- corporates information hiding. The software is divided into 4 modules which are students, parents, teachers and administrators. We shall look at each module in detail.

⦁	Student
Each student belongs to a class identified by semester and section. Each class belongs to a department and are assigned a set of courses. Therefore, these courses are common to all students of that class. The students are given a unique username and password to login. Each of them will have a different view. These views are described below.
Student information
Each student can view only their own personal information. This includes their personal details like name, phone no, address etc. Also, they can view the courses they are enrolled in and the attendance, marks of each of those.
Attendance information
Attendance for each course will be displayed. This includes the number of attended classes and the attendance percentage. If the attendance percentage if below a specified threshold, say 75%, It will be marked in red otherwise it be in green. This will be presented in a calendar format.
Marks information
There will be tests and 1 semester end examination for each course. The marks for each of these will be provided in the ERP system.
Notifications and events
This section is common to all students and parents. Notification are messages from the admin such as declaration of holidays, test time-table etc. The events and their details are specified here.

⦁	Parents
Each parent belongs to a class identified by semester and section. Each class belongs to a department and are assigned a set of courses. Therefore, these courses are common to all students of that class. The students are given a unique username and password to login. Each of them will have a different view. These views are described below.
Parents information
Each parent can view only their own personal information. This includes their personal details like name, phone no, address etc. Also, they can view  their children informationthe courses they are enrolled in and the attendance, marks of each of those.
 Payment information
Pay online, get payment invoice, 
Notifications and events
This section is common to all students and parents. Notification are messages from the admin such as declaration of holidays, test time-table etc. The events and their details are specified here.


⦁	Teacher
Each teacher belongs to a department and are assigned to classes with a course. Teachers will also have a username and password to login. The different views for teachers are described below.
Information
The teachers will have access to information regarding the courses and classes they are assigned to. Details of the courses include the credits, the syllabus plan. Details of the class include the department, semester, section and the list of students in each class. The teacher will also have access to information of students who belong to the same class as the teacher.

Attendance
The teacher has the ability to add and also edit the attendance of each student. For entering the attendance, they will be given the list of students in each class and they can enter the attendance of the whole class on a day to day basis. There will be two radio buttons next to each student name, one for present and the other for absent. There will also be an option for extra classes. Teachers can edit the attendance of each student either for each student individually or for the whole class.
Marks
The teacher can enter the marks for tests and 1 SEE for each course they are assigned. They also have the ability to edit the marks in case of any changes. Reports such as the report card including all the marks and CGPA of a student can be generated.

⦁	Administrator
The administrator will have access to all the information in the different tables in the database. They will access to all the tables in a list form. They will be able to add entry in any table and also edit them. The design of the view for the admin will provide a modular interface so that querying the tables will be optimized. They will be provided with search and filter features so that they can access data efficiently.

⦁	Class Diagram
The class diagram states the different classes involved in the software. For each class, a set of attributes and method are included. The relationship between the classes are also specified. For example, the teacher class has the attributes Id, name, phone no, address and methods such as marking attendance, declaring marks and preparing report cards. Each instance of the teacher class belongs to a department. This is specified by the relationship between Teacher and Department classes.




Figure 2.1: Class diagram of School ERP

⦁	Entity Relationship Diagram



Figure 2.2: Entity Relationship diagram of School ERP

Chapter 4

System Implementation
The School ERP system has three main user classes. These include the students, teachers and administrator. This section will explain in detail all the features and the working of those for each user class.

⦁	Student

⦁	Login
Each student in the School is assigned a unique username and password by the administrator. The user- name is the same as their USN and so is the password. They may change it later according to their wish.



Figure 3.1: Student Login Page


⦁	Homepage
After successful login, the student is presented a homepage with their main sections, attendance, marks and timetable. In the attendance section the student can view their attendance status which includes the total classes, attended classes and the attendance percentage for each of their courses.
In the marks section, the student can view the marks for each of their courses internal assessments. Also, the semester end examination for 100 marks. Lastly, the timetable provides the classes assigned to that student and day and time of each in a tabular form.



Figure 3.2: Student Home Page


⦁	Attendance
On the attendance page, there is a list of courses that is dependent on each student. For each course, the course id and name are display along with the attended classes, total classes and the attendance percentage for that particular course. If the attendance percentage is below 75 for any course, it is displayed in red denoting shortage of attendance, otherwise it is green. If there is any shortage, it specifies the number of classes to attend to make up for it. If you click on each course, it takes you to the attendance detail page.

Attendance Detail
This page displays more details for the attendance in each course. For each the course, there is a list of classes conducted and each is marked with the date, day and whether the student was present or absent on that particular date.


Figure 3.3: Student Attendance Page
Figure 3.4: Student Attendance Detail Page




⦁	Marks
The Marks page is a table with an entry for each of their courses. The course id and name are specified along the marks obtained in each of the tests and exams. The tests include internal assessments with marks obtained, tests, quiz etc. Lastly, one semester end exam with marks out of 100.



Figure 3.5: Student Marks Page


⦁	Timetable

This page is a table which lists the day and timings of each of the classes assigned to the student. The row headers are the days of the week and the column headers are the time slots. So, for each day, it specifies the classes in the time slots. The timetable is generated automatically from the assign table, which is a table containing the information of all the teachers assigned to a class with a course and the timings the classes.


Figure 3.6: Student Timetable

⦁	Teacher
⦁	Login
Each teacher in the School is assigned a unique username and password by the administrator. The username is their teacher ID and the same for password. The teacher may change the password later.


Figure 3.7: Teacher Login


⦁	Homepage
After successful login, the teacher is presented a homepage with their main sections, attendance, marks, timetable and reports. In the attendance section, the teacher can enter the attendance of their respective students for the days on which classes were conducted. There is a provision to enter extra classes and view/edit the attendance of each individual student. In the marks section, the teacher may enter the marks for internal assessments, tests, quiz etc. for each student. They can also edit each of the entered marks. The timetable provides the classes assigned to the teacher with the day and timings in a tabular form. Lastly, the teacher can generate reports for each of their assigned class.

⦁	Attendance
There is a list of all the class assigned to teacher. So, for each class there are 3 actions available. They are,

Enter Attendance
On this page, the classes scheduled or conducted is listed in the form of a list. Initially, all the scheduled classes will be listed from the start of the semester to the current date. Thus, if  there is class scheduled for  today, it  will  automatically  appear on top of  the list. If   the   attendance of any day is not marked it will be red, otherwise green if marked. Classes can also be cancelled which will make that date as yellow. While entering the attendance, the list of students in that class is listed and there are two options next to each. 

Figure 3.8:  Teacher homepage


These options are in the form of a radio button for present and absent. All the buttons are initially marked as present and the teacher just needs to change for the absent students.
Figure 3.9: Entering attendance

Edit Attendance
After entering attendance, the teacher can also edit it. It is similar to screen for entering attendance, only the entered attendance is saved and display. The teacher can change the appropriate attendance and save it.
Figure 3.10: Editing attendance

Student Attendance
For each assigned class, the teacher can view the attendance status of the list of students. The number of attended classes, total number of classes conducted and the attendance percentage is displayed. If the attendance percentage of any of the students is below 75, it will be displayed in red. Thus, the teacher may easily find the list of students not eligible to take a test.

Student Attendance Details
The teacher can view the attendance detail of all their assigned students individually. That is, for all the conducted classes, it will display whether that student was present or absent. The teacher can also edit the attendance of each student individually by changing the attendance status for each conducted class.

Figure 3.11: Attendance of students in a class

Figure 3.12: Attendance details of an individual student

⦁	Marks
On this page, the list of classes assigned to the teacher are displayed along with two actions for each class. These actions are,


Enter Marks
On this page, the teacher can enter the marks. Initially all of them are marked red to denote that the marks have not been entered yet. Once the marks for a test is entered, it turns green. While entering the marks for a particular test, the list of students in that class is listed and marks can be entered for all of them and submitted. Once, the marks are submitted, the students can view their respective marks. Incase if there is a need to change the marks of any student, it is possible to edit the marks.

Figure 3.13:  Entering marks
Edit Marks
Marks for a test can be edited. While editing, the list of students in that class is displayed along with already entered marks. The marks to be updated can be changed and submitted. The students can view this change immediately.

Student Marks
For each assigned class, the teacher has access to the list of students and the marks they obtained in all the tests. This is displayed in a tabular form.

⦁	Timetable
This page is a table which lists the day and timings of each of the classes assigned to the teacher. The row headers are the days of the week and the column headers are the time slots. So, for each day, it specifies the classes in the time slots. The timetable is generated automatically from the assign table, which is a table containing the information of all the teachers assigned to a class with a course and the timings the classes.


Figure 3.14: Editing marks

Figure 3.15: Marks of all the students in a class

Free teachers
For each entry in the table, the list of free teachers can be generated. Free teachers are the teachers who assigned to the class and are free for that time slot on that day. This is very useful for the teachers particularly when they are on leave as it helps them find a suitable replacement are that class.


Figure 3.16: Teacher Timetable

Figure 3.17: List of free teachers for a time slot

⦁	Reports
The last page for the teachers is used to generate reports for each class. The report specifies the list of students in that class and their respective CIE and attendance percentage. CIE is the average of the marks obtained from the tests. The CIE is out of 40 and the students with CIE below 20 are marked in red and are not eligible to write the semester end exam. Also, the attendance percentage is displayed with students below 75% marked in red.

Figure 3.18: CIE and attendance for a class of students
       Administrator
The administrator is responsible for adding and maintaining all the departments, students, teachers, classes and courses. All this data is stored in the database in their respective tables. The admin is also responsible for adding and maintaining the list of teachers assigned to class with a course and the timings. This information is stored in the Assign table. The admin also has access to the marks and attendance of each student and can modify them.

There are several features in place to ensure that querying the database is quick and efficient for the administrator. As the database has the potential to become huge, there is a search feature for every table including student, teacher etc. The search has g o t a specific record based on name or id. Also, it can filter the record based on department, class etc.

Figure 3.19 shows the homepage for the admin, it lists all the different tables in the database. Figure 3.20 shows the details of the class table. Each class consists of a list of students as shown.


Figure 3.19: Admin homepage

Figure 3.20: Admin students table page

Chapter 6

Conclusion

⦁	Conclusion
By using Existing System accessing information from files is a difficult task and there is no quick and easy way to keep the records of students and staff. Lack of automation is also there in the Existing System. The aim of Our System is to reduce the workload and to save significant staff time.

Tittle of the project as School ERP System is the system that deals with the issues related to a particular institution. It is the very useful to the student as well as the faculties to easy access to finding the details. The School ERP provides appropriate information to users based on their profiles and role in the system. This project is designed keeping in view the  day  to  day  problems  faced  by  a  School   system.

The fundamental problem in maintaining and managing the work by the administrator is hence over- come. Prior to this it was a bit difficult for maintaining the time table and also keeping track of the daily schedule. But by developing this web-based application the administrator can enjoy the task, doing it ease and also by saving the valuable time. The amount of time consumption is reduced and also the manual calculations are omitted, the reports can be obtained regularly and also v i e w  whenever on demand by the user. The effective utilization of the work, by proper sharing it and by providing the accurate results. The storage facility will ease the job of the operator. Thus, the system developed will be helpful to the administrator by easing his/her task.

This System provide the automate admissions no manual processing is required. This is a paperless work. It can be monitored and controlled remotely. It reduces the man power required. It provides accurate information always. All years together gathered information can be saved and can be accessed at any time. The data which is stored in the repository helps in taking intelligent decisions by the management providing the accurate results. The storage facility will ease the job of the operator. Thus, the system developed will be helpful to the administrator by easing his/her task providing  the accurate results.  The storage facility will ease the job of the operator.

This project will be  successfully implemented with all the features and modules of the School management system as per requirements.
References

⦁	Elmasri and Navathe: Fundamentals of Database Systems, 7th Edition, Pearson Education, 2016.
⦁	Ian Sommerville: Software Engineering, 10th edition, Person Education Ltd, 2015.
⦁	Roger S Pressman: Software Engineering- A Practitioners approach,8th edition, McGraw-Hill Publication, 2015.
⦁	https://en.wikipedia.org/wiki/Requirements-engineering
⦁	https://web.cs.dal.ca/ hawkey/3130/srs-template-ieee.doc
⦁	http://www.ntu.edu.sg/home/cfcavallaro/Reports/Report%20writing.htmTop
⦁	https://en.wikipedia.org/wiki/Class diagram
⦁	h⦁	ttps://www.djangoproje⦁	ct.com/
⦁	https://getbootstrap.com/
⦁	h⦁	ttps://www.tutorialspoin⦁	t.com/
⦁	https://creately.com/
⦁	h⦁	ttps://www.ov⦁	erleaf.com/project


