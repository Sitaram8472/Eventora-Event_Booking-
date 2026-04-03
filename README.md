# Eventora - Full-Stack Event Booking Platform

Eventora is a full-stack MERN application that allows users to seamlessly browse, register, and pay natively without any third-party tools. It includes an administrative dashboard for event organizers to manage events and bookings efficiently.

---

## Features

### User Authentication

- Secure login and registration using JWT and bcrypt

### 2FA OTP Verification

- Email OTP required for:
  - Account activation after registration
  - Finalizing event ticket booking

### Role-Based Access

#### Admin

- Create, edit, and delete events
- Approve or reject booking requests
- Mark bookings as Paid or Not Paid
- Access restricted to database-flagged admins only

#### User

- Browse available events
- Submit booking requests via OTP verification
- View booking status (Pending/Confirmed)
- Cancel bookings

---

### Event Management

- Create free and paid events
- Add:
  - Descriptions
  - External image URLs
  - Event dates
  - Categories
  - Seating capacity

---

### Smart Booking System

- Mandatory OTP verification before booking
- All bookings go into a Pending Queue
- Admin manually verifies bookings
- Prevents overbooking with seat validation logic

---

### Admin Analytics Dashboard

- Track:
  - Pending Requests
  - Total Revenue
  - Total Confirmed Paid Clients

---

### Email Notifications

- Automated email confirmations using Nodemailer

---

### UI/UX

- Built with React and Tailwind CSS
- Smooth micro-interactions and modern design

---

## Setup Instructions

### Prerequisites

Make sure you have installed:

- Node.js
- MongoDB (Atlas recommended)

---

## 1. Environment Variables Configuration

Navigate to `server/.env` and add:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=supersecretjwtkey_eventora
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_gmail_app_password
PORT=5000
```
