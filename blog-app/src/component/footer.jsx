import RandomPost from "./footerSec/randomPost";
import TagFooter from "./footerSec/tagFooter.jsx"


function Footer() {
    return (
        <div className="bg-black w-full max-h-[50%] h-full flex p-6 ">
            <div className="flex ">
                <RandomPost />
                <TagFooter/>
            </div>
        </div>
    )
}
export default Footer;