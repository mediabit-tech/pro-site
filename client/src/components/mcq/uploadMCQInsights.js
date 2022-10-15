import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import './uploadPost.css';
import { NotificationManager } from 'react-notifications';

const UploadMCQInsights = () => {

    const navigate = useNavigate();
    
    // we can't use async function inside the useEffect hooks so that's why i'm define callUploadMCQPage() function the outside of the useEffect hooks 
    const callUploadMCQPage = async () => {
        try { // credentials check 
            const res = await fetch('/upload-post', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });
            await res.json();
            // assurity
            if (res.status !== 200) {
                const error = new Error(res.error);
                throw error;
            }
        } catch (err) {
            console.log(err);
            navigate('/admin-signin');
        }
    }

    useEffect(() => {
        callUploadMCQPage();
    }, []);

    // create new post
    const [mcq, setMcq] = useState({
        title: "", subTitle: "", mode: "", choosenType: "", optionA: "", optionB: "", optionC: "", optionD: "", correctAnswer: "", description: ""
    });

    let name, value;
    const handleInputes = (e) => {
        name = e.target.name;
        value = e.target.value;

        setMcq({ ...mcq, [name]: value });
    }

    const sendDataOnBackend = async (e) => {
        e.preventDefault();
        const { title, subTitle, mode, choosenType, optionA, optionB, optionC, optionD, correctAnswer, description } = mcq;
        if (!title || !correctAnswer) {
            NotificationManager.error('Oops! field is empty.', 'Error', 5000);
        } else {
            const res = await fetch('/submitmcq', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ title, subTitle, mode, choosenType, optionA, optionB, optionC, optionD, correctAnswer, description })
            });

            const data = await res.json();
            if (data.status === 422 || !data) {
                NotificationManager.error('Oops! getting error while uploading.', 'Error', 5000);
            } else {
                NotificationManager.success('Uploaded successfully!', mcq.title, 5000);
            }
            clearInputForm();
        }
    }

    function clearInputForm() {
        setMcq("");
    }

    function clickOnLogoutPanel(e) {
        e.preventDefault();
        navigate('/upload-post/logout');
    }

    function clickOnPostPanel(e) {
        e.preventDefault();
        navigate('/upload-post');
    }

    return (
        <>
            <section>
                <div className="container custom-container">
                    <div className="row custom-css">
                        <div className="col-3">
                            <div className="row">
                                <div className="col-6 mt-3">
                                    <button className='btn btn-style-custom' onClick={clickOnPostPanel}>New Post</button>
                                    <button className='btn btn-style-custom' onClick={clickOnLogoutPanel}>Logout</button>
                                </div>
                            </div>
                        </div>
                        {/* right side */}
                        <div className="col-8">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Create Your New MCQ Insight</h1>
                                </div>
                                <form method='POST'>
                                    {/* title tag */}
                                    <div className="mt-3 mb-3">
                                        <input type="text" className="form-control" placeholder="Enter title" value={mcq.title} name='title' onChange={handleInputes} required />
                                    </div>
                                    {/* subTitle tag */}
                                    <div className="mt-3 mb-3">
                                    <textarea className="form-control" rows="3" placeholder='Enter code snippet' value={mcq.subTitle} name='subTitle' onChange={handleInputes} ></textarea>
                                    </div>

                                    <div className="row">
                                        {/* mode tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Mode : Easy/Medium/Hard" value={mcq.mode} name='mode' onChange={handleInputes} />
                                            </div>
                                        </div>
                                        {/* choosenType tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Type : Single/Multipe Choice" value={mcq.choosenType} name='choosenType' onChange={handleInputes} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* option A tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Option A" value={mcq.optionA} name='optionA' onChange={handleInputes} />
                                    </div>
                                    {/* option B tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Option B" value={mcq.optionB} name='optionB' onChange={handleInputes} />
                                    </div>
                                    {/* option C tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Option C" value={mcq.optionC} name='optionC' onChange={handleInputes} />
                                    </div>
                                    {/* option D tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Option D" value={mcq.optionD} name='optionD' onChange={handleInputes} />
                                    </div>
                                    {/* correctAnswer tag */}
                                    <div className="mb-3">
                                        <input type="text" className="form-control" placeholder="Enter Correct Answer" value={mcq.correctAnswer} name='correctAnswer' onChange={handleInputes} required />
                                    </div>
                                    {/* description tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="3" placeholder='Enter description' value={mcq.description} name='description' onChange={handleInputes} ></textarea>
                                    </div>

                                    <div className="mb-3">
                                        <input type="submit" className="form-control btn btn-style w-50" value="Upload MCQ Insight" onClick={sendDataOnBackend} />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadMCQInsights;