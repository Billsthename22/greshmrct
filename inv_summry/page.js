import React from 'react'

function page() {
  return (
    <div>
            <header>
     
    </header>


    <main>
        <section className="dashboard">
            <div className="form-header">
                <div className="red"></div>

                <div className="blue">
                    <h1>Fixed Deposit</h1>
                

                </div>
            </div>
            <div className="form-body">
                <h2>
                    Investment Summary
                </h2>

                <div className="summary-container">

                    <p className="intro">This investment summary page provides you with a clear overview of the Fixed
                        Deposit investment
                        details, including the investor's information, investment terms, calculated interest, and total
                        maturity amount. Users can confirm or cancel their booking based on their preferences.</p>

                    <div className="summary-list" id="summary-list">
                       
                    </div>

                    <p>By confirming your investment booking, you agree to the <span className="red-text"> terms and
                            conditions</span> outlined above.
                        Click the "Confirm Booking" button below to proceed with the investment.</p>

                </div>
                <div className="button-container">
                    <button className="next blue" onclick="payWithPaystack()">
                        Confirm
                    </button>
                </div>


            </div>
        </section>


    </main>
    </div>
  )
}

export default page