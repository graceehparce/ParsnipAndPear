import "./resources.css"


export const Resources = () => {
    return <section className="wholeBox">
        <div className="headingRes">
            <div>Want to learn more about women's health??</div>
            <div>Checkout these resources from some of the most influencial women in the field!</div>
        </div>
        <div className="dividingLine2"></div>
        <div className="books">
            <div className="book1">
                <img src="/beyondthepill.jpeg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://drbrighten.com/">Beyond The Pill</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/Beyond-Pill-Program-Hormones-Dangerous/dp/0062847090/ref=sr_1_1?crid=NUN75A4Z6GEA&keywords=beyond+the+pill&qid=1664557685&qu=eyJxc2MiOiIxLjcwIiwicXNhIjoiMS4yNyIsInFzcCI6IjEuMjkifQ%3D%3D&sprefix=beyond+the+pi%2Caps%2C430&sr=8-1">Buy it!</a>
            </div>
            <div className="book1">
                <img src="/intheflo.jpg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://www.floliving.com/">In the Flo</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/FLO-Unlock-Hormonal-Advantage-Revolutionize/dp/0062870491/ref=sr_1_1?crid=E1QZK5GQ1FC6&keywords=in+the+flo&qid=1664558011&qu=eyJxc2MiOiIxLjkzIiwicXNhIjoiMS41MCIsInFzcCI6IjEuNjgifQ%3D%3D&sprefix=in+the+flo%2Caps%2C112&sr=8-1">Buy it!</a>
            </div>
            <div className="book1">
                <img src="/fifthvitalsign.jpeg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://fertilityfriday.com/">The Fifth Vital Sign</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/Fifth-Vital-Sign-Optimize-Fertility/dp/1999428005/ref=sr_1_1?crid=1DN99ZG4FBPXT&keywords=the+fifth+vital+sign&qid=1664558133&qu=eyJxc2MiOiIxLjc5IiwicXNhIjoiMS40NyIsInFzcCI6IjEuNzEifQ%3D%3D&sprefix=the+fifth+vital+sign%2Caps%2C106&sr=8-1">Buy it!</a>
            </div>
            <div className="book1">
                <img src="/yourbrainonbc.jpeg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://www.sarahehill.com/">Your Brain on Birth Control</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/This-Your-Brain-Birth-Control/dp/0525536035/ref=sr_1_1?keywords=your+brain+on+birth+control+sarah+hill&qid=1664558255&qu=eyJxc2MiOiIxLjU3IiwicXNhIjoiMS4zMSIsInFzcCI6IjEuNDQifQ%3D%3D&sprefix=your+brain+on+bi%2Caps%2C107&sr=8-1">Buy it!</a>
            </div>
        </div>

    </section>
}