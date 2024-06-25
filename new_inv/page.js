import React from 'react'

const page = () => {
  return (
    <div>
           <header>
       
    </header>

    <main>
        <section className="dashboard">
            <div className="form-header">
                <div className="red"></div>
                <div className="blue">
                    <h1>New Investment</h1>
                 
                </div>
            </div>
            <div className="form-body">
                <h2>Treasury Bills (Digital Capital Group Limited)</h2>
                <p>Minimum investment amount N 100,000. Amount must be multiples of N100, Rates are applicable between
                    11am-2:30pm Nigerian time</p>

                <div className="row-container">
                    <div className="row">
                        <div>
                            <p className="bold">Investment Amount <span className="red-text">*</span></p>
                            <input type="text" name="Amount" id="Amount" placeholder="Amount" oninput="Calculate()"/>
                        </div>
                        <div>
                            <p className="bold">Rate</p>
                            <input type="text" name="Rate" id="Rate" placeholder="Rate" value="20" readonly/>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p className="bold">Yield</p>
                            <input type="text" name="Yield" id="Yield" placeholder="Yield" value="20" readonly/>
                        </div>
                        <div>
                            <p className="bold">Total Payable at Maturity</p>
                            <div className="result" id="result"></div>
                        </div>
                    </div>
                    <div className="row">
                        <div>
                            <p className="bold">Tenure (Days)</p>
                            <input type="text" name="days" id="days" placeholder="Tenure (Days)" oninput="Calculate()"/>
                        </div>
                        <div>
                            <p className="bold">Maturity Date</p>
                            <div className="result" id="maturitydate"></div>
                        </div>
                    </div>
                </div>
                <div className="button-container">
                    <button className="next blue" onclick="saveAndNext()">Next</button>
                </div>
            </div>
        </section>
    </main>
    </div>
  )
}

export default page