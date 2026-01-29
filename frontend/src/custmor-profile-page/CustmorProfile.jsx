import Navbar2 from "./nav-section/Navbar2"
import Con from "./main/Content"
import CurrentSubscription from "./main/CurrentSubscription"
function CustmorProfile() {
    return (
        <div>
            <Navbar2></Navbar2>
            <div className="max-w-[75%] m-auto">
                <Con></Con>
                <CurrentSubscription></CurrentSubscription>
            </div>
        </div>

    )
}

export default CustmorProfile
