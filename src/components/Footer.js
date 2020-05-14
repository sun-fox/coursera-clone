import React from 'react'
import '../css/style.css';
import Footer2 from './Footer2';
function Footer() {
    return (
        <div class ="container-fluid" style ={{backgroundColor:"#F8F8F8",padding:"40px"}}>
            <div class ="row">
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Top Online Courses</b></li></ul>
                    <ul style ={{listStyle:"none"}}>
                        <li>AI for Everyone</li>
                        <li>Introduction to TensorFlow</li>
                        <li>Neural Networks and Deep Learning</li>
                        <li>Algorithms, Part 1</li>
                        <li>Algorithms, Part 2</li>
                        <li>Machine Learning</li>
                    </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Top Online Specializations</b></li></ul>
                <ul style={{listStyle:"none"}}>
                    <li>Deep Learning</li>
                    <li>Python for Everybody</li>
                    <li>Data Science</li>
                    <li>Applied Data Science with Python</li>
                    <li>Business Foundations</li>
                    <li>Architecting with Google Cloud Platform</li>
                </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Online Certificates</b></li></ul>
                <ul style={{listStyle:"none"}}>
                    <li>Google IT Support</li>
                    <li>IBM Customer Engagement Specialist</li>
                    <li>IBM Data Science</li>
                    <li>Applied Project Management</li>
                    <li>IBM Applied AI Professional Certificate</li>
                    <li>Machine Learning for Analytics</li>

                </ul>
                </div>
                <div class ="col-md-3 col-sm-12">
                <ul style ={{listStyle:"none"}}><li><b>Online Degree Program</b></li></ul>
                <ul style={{listStyle:"none"}}>
                    <li>Master's in Data Science</li>
                    <li>Bachelors Degree in Computer Science</li>
                    <li>Computer Science and Engineering Degrees</li>
                    <li>Master's in Machine Learning</li>
                    <li>MBA and Business Degrees</li>
                    <li>Master's in Electrical Engineering</li>
                </ul>
                </div>
            </div>
            <hr/>
            <Footer2/>
        </div>
    )
}

export default Footer
