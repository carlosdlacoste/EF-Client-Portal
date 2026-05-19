# AW Client Report Portal - MVP Technical Assessment

A responsive, client-side automated portal designed to streamline financial reporting workflows for account managers, eliminating manual calculation errors.

## 🚀 Live Demo & Walkthrough
* **Live Link (GitHub Pages):** https://carlosdlacoste.github.io/EF-Client-Portal/

---

## 🛠️ Architecture & Technical Approach

Given the **2-hour strict time constraint**, this project was built as a lightweight Frontend MVP using **Vanilla HTML5, CSS3 (Modern Flexbox/Grid), and JavaScript (ES6+)**. 

The solution focuses entirely on implementing the required business logic safely and deterministically on the client-side:

* **Single Automated Cash Flow (SACS):** Automates the dynamic calculation of `Monthly Excess Cash` based on real-time inputs, removing the need for manual spreadsheet work.
* **Total Client Capital (TCC):** Aggregates multiple asset streams (Retirement, Brokerage, and Real Estate API metrics) into a centralized `Grand Total Net Worth`.
* **The "Rebecca Rule" Implementation:** Adhering strictly to the PRD guidelines, **Liabilities** are displayed in real-time for comprehensive auditing but are explicitly **isolated and NOT subtracted** from the Grand Total Net Worth to ensure legal and compliance accuracy.

---

## 🏗️ Production Roadmap (Scalability V2)

This architecture was structured to seamlessly decouple the Frontend representation from a backend service. In a production environment, the scaling path includes:

1. **Backend Integration:** Transitioning the client-side state into an API payload sent to a **Python (FastAPI / Flask)** microservice.
2. **Automated PDF Generation:** Utilizing **ReportLab** or **WeasyPrint** on the server-side to generate pixel-perfect, immutable PDF executive reports.
3. **Data Persistence:** Deploying a relational database (PostgreSQL) hosted on **Railway** to log historical generation timestamps and enable asynchronous downloads for account managers.

---

## ⚙️ How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/carlosdlacoste/EF-Client-Portal.git
