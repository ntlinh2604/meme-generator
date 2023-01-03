import React from "react";

const Meme = () => {
    const [memeImage, setMemeImage] = React.useState("http://i.imgflip.com/1bij.jpg")
    const [memeText, setMemeText] = React.useState({
        topText : '',
        bottomText : ''
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemes(data.data.memes))
    },[])
    
    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[randomNumber].url
        
        setMemeImage(pre => pre = url)
        

    }
    function handleChange(event) {
        const {name, value} = event.target
        setMemeText(preText =>{
            return ({
                ...preText,
                //[event.target.name] : event.target.value//c1
                [name]:value
            })
            

        })
    }
    
    
    

     return (
        <main>
            <div className="form">
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={memeText.topText}
                />
                <input 
                    onChange={handleChange}
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={memeText.bottomText}
                />
                <button onClick={ getMemeImage}
                    className="form--button"
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme--container">
                <img className="meme--image" src={memeImage} alt=""></img>
                <div className="meme--text top" >{memeText.topText}</div>
                <div className="meme--text bottom">{memeText.bottomText}</div>
            </div>
            
            
        </main>
     )
};

export default Meme;