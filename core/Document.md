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
