1️⃣ Full README.md file (copy-paste into your GitHub repo
2️⃣ Professional Project Description for your Resume

✅ 1️⃣ Full README.md (copy-paste)
# 🚀 WildFly CI/CD Pipeline with Jenkins, Ansible, Rollback & Email Notifications

This project demonstrates a complete CI/CD pipeline to deploy a production-style web application on **WildFly servers** using **Jenkins** and **Ansible**, with:
- Automated WAR build using Maven
- Deployment to multiple WildFly servers
- Automatic rollback on failure
- Email notifications on success and failure
- Attractive web UI with HTML, CSS, JavaScript animations

---

## 🏗️ Architecture Overview

GitHub Repo  
⬇  
Jenkins Pipeline  
⬇  
Maven Build (WAR)  
⬇  
Ansible Deployment  
⬇  
WildFly Server 1 & WildFly Server 2  
⬇  
Email Notification (Success / Failure)  

---

## 📁 Project Structure



ci-cd-wildfly-project/
│
├── Jenkinsfile
├── pom.xml
│
├── ansible/
│ ├── inventory.ini
│ ├── deploy.yml
│ └── rollback.yml
│
└── src/
└── main/
└── webapp/
├── index.html
├── style.css
├── script.js
└── images/
├── background.jpg
└── logo.png


---

## ⚙️ Technologies Used

- Jenkins (CI/CD)
- Ansible (Deployment & Rollback)
- Maven (Build tool)
- WildFly (Application Server)
- HTML, CSS, JavaScript (Web UI)
- GitHub (Source Control)
- Gmail SMTP (Email Notifications)
- Linux (Ubuntu)

---

## 📜 Jenkins Pipeline Stages

1. **Checkout**
   - Pulls code from GitHub (main branch)

2. **Build WAR**
   - Runs `mvn clean package`
   - Generates WAR file

3. **Deploy using Ansible**
   - Copies WAR file to both WildFly servers
   - Restarts WildFly service

4. **Post Actions**
   - On Success → Send email notification
   - On Failure → Trigger rollback + send email

---

## 📧 Email Notification

- Configured using Jenkins **E-mail Notification (basic)**
- Sends:
  - Success email with application URL
  - Failure email after rollback

---

## 🔄 Rollback Strategy

- Before deploying new WAR, old WAR is backed up to:


/opt/backup/

- If deployment fails:
- Backup WAR is restored
- WildFly service is restarted
- Email notification is sent

---

## 🖥️ Web Application

The application is a static web app with:
- Animated UI using CSS & JavaScript
- Background image and company logo
- Button links to Jenkins, GitHub, Ansible, WildFly
- Deployed as WAR to WildFly

URL:


http://<wildfly-ip>:8080/company-webapp/


---

## 🛠️ Setup Instructions

### 1️⃣ Prerequisites

On Jenkins Server:
```bash
sudo apt install jenkins maven ansible git -y


On WildFly Servers:

Install WildFly

Ensure service name is wildfly

Allow Jenkins SSH access

2️⃣ Configure SSH Access

From Jenkins server:

ssh-keygen
ssh-copy-id ubuntu@wildfly1-ip
ssh-copy-id ubuntu@wildfly2-ip


Test:

ansible -i ansible/inventory.ini wildfly -m ping

3️⃣ Configure Jenkins Tools

Manage Jenkins → Tools

Add Maven with name:

maven-3

4️⃣ Configure Email Notification

Manage Jenkins → System → E-mail Notification

Set:

SMTP Server: smtp.gmail.com
Port: 587
Use TLS: Enabled
Username: yourmail@gmail.com
Password: Gmail App Password


Test email configuration and save.

5️⃣ Create Jenkins Pipeline Job

New Item → Pipeline

Pipeline script from SCM

Repository URL: your GitHub repo

Branch: main

Script Path: Jenkinsfile

6️⃣ Run Pipeline

Click Build Now
Pipeline will:

Build WAR

Deploy to both WildFly servers

Send email on success or failure

✅ Expected Output

On success:

Application deployed

WildFly restarted

Email sent

On failure:

Rollback executed

Email sent

System restored to previous version
