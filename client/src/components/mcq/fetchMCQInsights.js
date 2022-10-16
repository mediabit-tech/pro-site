import React, { useEffect, useState } from 'react';
import Spinner from '../loader/loader';
import './fetchMCQInsights.css';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { javascript } from 'react-syntax-highlighter/dist/esm/languages/hljs';
import { stackoverflowLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import ContactSection from '../ContactSection';

const McqInsights = () => {

  const [mcqs, setMcqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  // route for all posts
  const loadAllMCQs = async () => {
    try {
      const getMcqs = await fetch(`/get-mcqinsights`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await getMcqs.json();
      setMcqs(data);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    loadAllMCQs();
  }, []);

  return (
    <>
      <div className="container mcq-search-container">
        <div className="row">
          <div className="col-12 lg-col-10">
            <div class="card mcq-search-card">
              <div class="card-body">
                {/* Practice Problems */}
                <div class="input-group mb-3">
                  <input type="search" class="form-control search-control" placeholder="Search by question, answer, type, mode..."
                    onChange={event => setQuery(event.target.value)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {loading ? (<Spinner />) : (
        <>
            {mcqs && mcqs.filter((mcq) => {
              if (query === "") {
                return mcq
              } else if (mcq.title.toLowerCase().includes(query.toLowerCase()) || mcq.correctAnswer.toLowerCase().includes(query.toLowerCase()) || mcq.choosenType.toLowerCase().includes(query.toLowerCase()) || mcq.mode.toLowerCase().includes(query.toLowerCase())) {
                return mcq
              }
            }).map((mcq) => {
              return (<>
                <section className='common-section'>
                  <div className="container mb-5">
                    <div className="row custom-theme">
                      <div className="col-12 col-lg-12" >
                        <div className="mb-3">
                          <h2>{mcq.title}</h2>
                        </div>

                        {!mcq.subTitle[0] ? (
                          ""
                        ) : (
                          <SyntaxHighlighter language={javascript} style={stackoverflowLight} customStyle={{ fontSize: "1.8rem", border: "1px solid #A78571", fontWeight: "400" }}>
                            {mcq.subTitle}
                          </SyntaxHighlighter>
                        )}

                        <div className="row custom-type-mode">
                          <div className="col">
                            <div className="col lg-col-3">
                              <div>
                                <h5><span class="badge bg-custom-one">Type</span><span class="badge bg-custom-two">{mcq.choosenType}</span></h5>
                              </div>
                            </div>
                          </div>
                          <div className="col">
                            <div className="col lg-col-3">
                              <div>
                                <h5><span class="badge bg-custom-one">Mode</span><span class="badge bg-custom-two">{mcq.mode}</span></h5>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row custom-option row-cols-1 row-cols-md-2">
                          <div className="col">
                            {!mcq.optionA ? ("") : (
                              <div className="col lg-col-3">
                                <h4><b>(A)</b> {mcq.optionA}</h4>
                              </div>
                            )}

                            {!mcq.optionB ? ("") : (
                              <div className="col lg-col-3">
                                <h4><b>(B)</b> {mcq.optionB}</h4>
                              </div>
                            )}
                          </div>

                          <div className="col">
                            {!mcq.optionC ? ("") : (
                              <div className="col lg-col-3">
                                <h4><b>(C)</b> {mcq.optionC}</h4>
                              </div>
                            )}

                            {!mcq.optionD ? ("") : (
                              <div className="col lg-col-3">
                                <h4><b>(D)</b> {mcq.optionD}</h4>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="mb-3">
                          <div className="solid-circle-check">
                            <h4><i class="fa-solid fa-circle-check"></i> <strong>{mcq.correctAnswer}</strong> </h4>
                          </div>
                        </div>

                        {!mcq.description ? (
                          ""
                        ) : (
                          <div className="mb-3">
                            <p>{mcq.description}</p>
                          </div>
                        )}

                      </div>
                    </div>
                    <hr />
                  </div>
                </section>
              </>)
            })}
        </>
      )}
      <ContactSection />
    </>
  )
}

export default McqInsights;