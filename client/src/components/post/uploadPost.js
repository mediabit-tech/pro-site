import React, { useState } from 'react';
import './uploadPost.css';
import { Scrollbars } from 'react-custom-scrollbars';

const UploadPost = () => {
    const [post, setPost] = useState({
        title:"", message:"", category:"", tag:"", mode:"", askingCompany:"", askingYear:""
    });

    let name, value;
    const handleInputes = (e) => {
        name = e.target.name;
        value = e.target.value;

        setPost({ ...post, [name]:value });
    }

    const sendDataOnBackend = async (e) => {
        e.preventDefault();
        const { title, message, category, tag, mode, askingCompany, askingYear } = post;

        const res = await fetch('/api/v1/submitpost', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ title, message, category, tag, mode, askingCompany, askingYear })
        });

        const data = await res.json();
        if(data.status === 422 || !data) {
            console.log('Error while uploading post!');
        } else {
            console.log('New post uploaded!', 'Successful!', 5000);
        }
    }

    return (
        <>
            <section>
                <div className="container custom-container">
                    <div className="row custom-css">
                        {/* left side */}
                        <div className="col-4">
                            <h1>Your All Posts</h1>
                            <Scrollbars style={{ width: 300, height: 400 }} >
                                <div className="mt-3 mb-3">
                                    <h4>This is displaying area.</h4>
                                    {/* <h4>{message}</h4> */}
                                </div>
                            </Scrollbars>
                        </div>

                        {/* right side */}
                        <div className="col-8">
                            <h1>Create Your New Post</h1>
                                <form method='POST'>
                                    {/* title tag */}
                                    <div className="mt-3 mb-3">
                                        <input type="text" className="form-control" placeholder="Enter your heading" value={post.title} name='title' onChange={handleInputes} required />
                                    </div>
                                    {/* message tag */}
                                    <div className="mb-3">
                                        <textarea className="form-control" rows="8" placeholder='Enter your description' value={post.message} name='message' onChange={handleInputes} required ></textarea>
                                    </div>
                                    <div className="row">
                                    {/* category tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your category" value={post.category} name='category' onChange={handleInputes} required />
                                            </div>
                                        </div>
                                        {/* #tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter your #tag" value={post.tag} name='tag' onChange={handleInputes} required />
                                            </div>
                                        </div>
                                        {/* mode tag */}
                                        <div className="col">
                                            <select className="mb-3 form-select" value={post.mode} name='mode' onChange={handleInputes} required >
                                                <option selected>Choose one</option>
                                                <option value="1">Easy</option>
                                                <option value="2">Medium</option>
                                                <option value="3">Hard</option>
                                            </select>
                                        </div>
                                    </div>
                                    {/* askingCompany tag */}
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="text" className="form-control" placeholder="Enter asking comapines name" value={post.askingCompany} name='askingCompany' onChange={handleInputes} required />
                                            </div>
                                        </div>
                                        {/* askingYear tag */}
                                        <div className="col">
                                            <div className="mb-3">
                                                <input type="number" className="form-control" placeholder="Enter asking years by companies" value={post.askingYear} name='askingYear' onChange={handleInputes} required />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <input type="submit" className="form-control btn btn-style w-50" value="Upload Post" onClick={sendDataOnBackend} />
                                    </div>
                                </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UploadPost