import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

function Card() {
    return (
        <div className="h-full w-full flex flex-col justify-center items-center">
        <div className="cardHolder flex flex-col items-center">
        <div className="theCard w-full md:w-1/2 relative bg-red-300">
            <div className="absolute cardType">

            </div>
            <div className="absolute cardName">

            </div>
            <div className="absolute ">

            </div>
        </div>

        </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Card))
