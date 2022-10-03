import "./resources.css"


export const Resources = () => {
    return <section className="wholeBox">
        <div className="headingDiv">
            <div className="headingRes">
                <div className="ResTitle">Resources!</div>
                <div>Want to learn more about women's health??</div>
                <div>Checkout these books by some of the most influencial women in the field!</div>
            </div>
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
            <div className="book1">
                <img src="/takingCharge.jpg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://www.tcoyf.com/">Taking Charge of Your Fertility</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/Taking-Charge-Your-Fertility-Anniversary/dp/0062326031/ref=asc_df_0062326031/?tag=hyprod-20&linkCode=df0&hvadid=312142103956&hvpos=&hvnetw=g&hvrand=14745724868761487277&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9013187&hvtargid=pla-434631356316&psc=1">Buy it!</a>
            </div>
            <div className="book1">
                <img src="/periodRepairManual.jpeg" alt="" className="bookImg" style={{ width: '200px', height: '300px' }} />
                <a className="text" target="_blank" href="https://www.larabriden.com/">The Period Repair Manual</a>
                <a className="text2" target="_blank" href="https://www.amazon.com/Period-Repair-Manual-Treatment-Hormones/dp/0648352404/ref=sr_1_1?keywords=the+period+repair+manual&qid=1664811358&qu=eyJxc2MiOiIxLjY0IiwicXNhIjoiMS4xOSIsInFzcCI6IjEuNDEifQ%3D%3D&sprefix=the+period+repa%2Caps%2C124&sr=8-1">Buy it!</a>
            </div>
        </div>
        <div className="dividingLine"></div>
        <div className="extraRes">In case you weren't sure where to find them, here are some of Parsnip & Pear's resources with charts and information to make your life easier...</div>
        <img src="/FoodChart.jpg" alt="" className="pic7" style={{ width: '700px', }} />
        <div className="dividingLine2"></div>
        <img src="/CycleChart.jpg" alt="" className="pic8" style={{ width: '700px', }} />
        <div className="section1">
            <img src="/MIG.jpg" alt="infographic_img" className="infoG" style={{ width: '500px', }} />
            <img src="/FIG.jpg" alt="infographic_img" className="infoG" style={{ width: '500px', }} />
        </div>
        <div className="section1">
            <img src="/OIG.jpg" alt="infographic_img" className="infoG" style={{ width: '500px', }} />
            <img src="/LIG.jpg" alt="infographic_img" className="infoG" style={{ width: '500px', }} />
        </div>

    </section>
}