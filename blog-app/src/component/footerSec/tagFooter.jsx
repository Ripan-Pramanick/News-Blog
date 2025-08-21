

function Tag(){
    const ImageURL ="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEio27Ob1wmJDJK_1XCzHebJlskaEjio980zbNc4ky0ytszMVhB961EmZZCz8tWkKuGgr6FJY0qcikVF8soRf2uuGPastRrSCg_C9CNGqPMSIoZvfdJ9ieCkAMXo6Snt4e-UkajF5qZ05MJ1/s1600-r/ad300.jpg";
    return(
        <div className="max-w-sm">
            <h1>TAG</h1>
            <div>
               <div>
                 <ul className="flex flex-auto">
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                    <li><a href="#" className="list-none bg-gray-500 py-1 px-2 hover:bg-red-600">Home</a></li>
                </ul>
                </div>
                <div>
                    <img src={ImageURL} alt="ImageURL" />
                </div>
            </div>

        </div>
    )
}

export default Tag;