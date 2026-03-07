# 🧾 Web Invoice System

A **web-based invoice system** that allows users to enter product or service details and automatically calculate totals, discounts, and taxes.

This project helps students understand **form handling, dynamic calculations, DOM manipulation, and front-end UI design using JavaScript**.

---

# 🚀 Project Overview

The **Web Invoice System** allows users to:

* Add multiple products or services
* Automatically calculate totals
* Apply discounts and taxes
* Display invoice details in a structured table
* Generate the final invoice amount dynamically

This project is useful for understanding **basic billing systems, financial calculations, and invoice generation logic**.

---

# ✨ Core Features

## 1️⃣ Input Form

Users can add multiple items with the following fields:

* Item Name
* Quantity
* Price per Unit
* Discount (%)

Includes an **"Add Item** button to dynamically add more items.

---

## 2️⃣ Calculation Logic

The system performs the following calculations:

* **Item Total = Quantity × Price**
* **Subtotal = Sum of all item totals**
* Apply **Discounts** if provided
* Apply **Taxes (GST / VAT)** if applicable
* Calculate **Grand Total**

All calculations update **dynamically in real time**.

---

## 3️⃣ Invoice Display

The invoice is displayed in a **table format** containing:

| Item Name | Quantity | Price | Discount | Total |
| --------- | -------- | ----- | -------- | ----- |

Below the table the system displays:

* Subtotal
* Total Discount
* Taxes
* **Grand Total**

---

## 4️⃣ Reset / Clear Functionality

Users can clear all inputs to create a new invoice.

Clear button will:

* Remove all items
* Reset calculations
* Clear the form fields

---

# ⭐ Optional Features

Additional features that can be implemented:

* 💾 Save invoice using **localStorage**
* 🖨️ Print invoice
* 📄 Export invoice as **PDF**
* 📱 Responsive design for **mobile and tablets**
* ✔ Input validation
* 🚫 Prevent negative numbers
* 🔔 Required field validation

---

# 🎨 UI Design

The application contains two main sections.

---

## 1️⃣ Input Section

Fields included:

* Item Name
* Quantity
* Price per Unit
* Discount

Buttons:

* **Add Item**
* **Generate Invoice**
* **Clear Invoice**

---

## 2️⃣ Invoice / Output Section

Displays the generated invoice including:

* Item table
* Subtotal
* Total discounts
* Taxes
* **Grand Total**

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript

---

# 📂 Project Structure

```
invoice-system
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

# 📚 Learning Objectives

This project helps developers learn:

* Form handling
* DOM manipulation
* Dynamic calculations
* Financial logic implementation
* Frontend UI design

---

# 🔮 Future Improvements

Possible future improvements:

* Backend integration
* Database storage
* User authentication
* Invoice history system
* Downloadable invoices

---

# 👨‍💻 Author

**Suraj Yadav**

JavaScript Developer

---

# ⭐ Support

If you like this project, please **star the repository on GitHub**.
