import React from "react";
import "../assets/styles/Project.scss";

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
            <div className="projects-grid">

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/ConstituAI-Fine-Tuning-Llama-2-on-the-Indian-Law-Dataset" target="_blank" rel="noreferrer">
                        <h2>ConstituAI: Fine-Tuning LLaMA 2 on Indian Legal Texts</h2>
                    </a>
                    <p>Fine-tuned LLaMA 2 on Indian legal QA pairs with 4-bit quantization. Demonstrates how LLMs can specialize in legal domains with a full UI for inference.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/document-understanding-ocr" target="_blank" rel="noreferrer">
                        <h2>Document Understanding Pipeline (LayoutLMv3 + Detectron2 + Tesseract OCR)</h2>
                    </a>
                    <p>End-to-end document intelligence using visual layout analysis, OCR, and transformer-based token classification to extract data from complex PDFs and forms.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/LLM-Driven-SQL-RAG-Pipeline-for-Banking-Data" target="_blank" rel="noreferrer">
                        <h2>LLM-Driven SQL RAG Pipeline for Banking</h2>
                    </a>
                    <p>Natural language-to-SQL interface powered by OpenAI and LangChain, built for querying and interacting with a synthetic banking database through Streamlit.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/Patient-Readmission-Prediction" target="_blank" rel="noreferrer">
                        <h2>Patient Readmission Prediction (Healthcare ML + GCP)</h2>
                    </a>
                    <p>Predicts 30-day readmissions using ML models trained on hospital data. Features BigQuery data loading, threshold tuning, and Streamlit deployment.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/FastAPI-Trade-Order-Service" target="_blank" rel="noreferrer">
                        <h2>FastAPI Trade Order Microservice (Deployed on AWS)</h2>
                    </a>
                    <p>A REST API built with FastAPI for handling trade orders, Dockerized and deployed to AWS EC2 with CI/CD via GitHub Actions.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/Probability-of-default" target="_blank" rel="noreferrer">
                        <h2>Corporate Default Probability Model</h2>
                    </a>
                    <p>Predicts corporate loan defaults based on financial metrics using custom ratio engineering and pyGAM for interpretable risk modeling.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/Fraud-Detection-Model-Cost-Optimization" target="_blank" rel="noreferrer">
                        <h2>Credit Card Fraud Detection with Cost Optimization</h2>
                    </a>
                    <p>Applies ML to identify fraudulent transactions from real-world datasets, using class balancing and cost-based thresholding.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/International-Space-Station-Tracker" target="_blank" rel="noreferrer">
                        <h2>International Space Station Real-Time Tracker with Kafka, Spark, Power BI</h2>
                    </a>
                    <p>Real-time geospatial tracking of the ISS using streaming architecture: Kafka producer, Spark processor, Power BI dashboards.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/Lower-back-pain-symptoms-classification-model" target="_blank" rel="noreferrer">
                        <h2>Lower Back Pain Classification</h2>
                    </a>
                    <p>A healthcare-focused ML classifier trained on vertebral measurements to detect spinal abnormalities using SVM and Random Forest.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/os-virtual-memory-paging-simulator" target="_blank" rel="noreferrer">
                        <h2>OS Virtual Memory Paging Simulator (C++)</h2>
                    </a>
                    <p>Simulates paging in operating systems with multiple replacement algorithms: FIFO, NRU, Aging, Clock, and Working Set.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/os-cpu-scheduling-simulator" target="_blank" rel="noreferrer">
                        <h2>CPU Scheduling Simulator (C++)</h2>
                    </a>
                    <p>C++ simulator for scheduling algorithms like FCFS, SRTF, RR, and Priority. Includes test automation and grading tools.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/os-io-scheduler-simulator-cpp" target="_blank" rel="noreferrer">
                        <h2>I/O Scheduler Simulation (C++)</h2>
                    </a>
                    <p>Disk I/O simulator implementing LOOK, CLOOK, SSTF, and FLOOK. Includes comparison against reference output.</p>
                </div>

                <div className="project">
                    <a href="https://github.com/varad-suryavanshi/blogging-website" target="_blank" rel="noreferrer">
                        <h2>React Blog App (Create React App Starter)</h2>
                    </a>
                    <p>A simple blogging app created with Create React App for testing components and learning frontend workflows.</p>
                </div>

            </div>
        </div>
    );
}

export default Project;
