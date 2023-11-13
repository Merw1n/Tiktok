import "./WaitingPage.scss"

const WaitingPage = () => {
    return (
        <div className="waiting__container">
            Your request is being processed. You don`t need to wait on this page.<br/>
            Please come back in approximately <span style={{color: "#4CAB6F", fontWeight: "600"}}>15 minutes</span> to check the results.
        </div>
    )
}

export default WaitingPage;