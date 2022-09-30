import "./home.css"
import welcome from "../images/Welcome.jpg"


export const Home = () => {
    return <section className="homePage">
        <section className="welcomeBox">
            <img src={welcome} alt="" className="titleLetters" style={{ width: '500px', }} />
            <div className="dividingLine"></div>
            <div className="mantra">
                <div className="intro">Learning about how the female body functions hasn't really been a priority in our culture. But not to worry, Parsnip & Pear is here to help! The female body has a unique infradian rhythm. It's important that we know about that rhythm so that we can learn to flourish within the unique and beautiful bodies we've been given. Here at Parsnip and Pear we'll teach you to...</div>
                <div className="saying">PARSE YOUR CYCLE & PAIR YOUR LIFE</div>
            </div>
            <div className="dividingLine2"></div>
            <div className="box2">
                <div className="info2">
                    <div className="innerBox">
                        <p className="headLine">WHAT is Cycle Syncing??</p>
                        <p className="answerLine">
                            Each phase of your menstrual cycle correlates with a different set of proteins, grains, vegetables, fruits, and other foods that support the hormonal changes your body is experiencing. Eat those foods during that phase! Certain foods are included in specific phases based on their ability to metabolize estrogen, support progesterone production, or stabilize blood sugar levels. It’s simple, but you won’t believe the benefits!
                        </p>
                    </div>
                    <img src="/woman.jpg" alt="" className="pic" style={{ width: '500px', }} />
                </div>
            </div>
            <div className="info3">
                <div className="innerBox2">
                    <p className="headLine">WHY Cycle Sync?</p>
                    <p className="answerLine">
                        As your Ovaries and uterus engage in distinct functions each week of your cycle, your micronutrient needs change. Eating the right foods in one phase helps to lay the foundations to optimize your biology for the next phase and even to provide benefits in the other phases that follow.

                        Cycle syncing can eliminate period problems, yes, but it also gives your biology the good it needs to support your cyclical hormones and become the best version of yourself by maintaining and increasing the energy you have available to do what you want.
                    </p>
                </div>
            </div>
            <div className="dividingLine2"></div>
            <div className="info4">
                <p className="intro2">Do you know what's happening with your hormones?</p>
                <p className="saying">Checkout this graph...</p>
                <img src="/CycleChart.jpg" alt="" className="pic" style={{ width: '700px', }} />
            </div>
            <div className="dividingLine2"></div>

            <div className="info5">
                <p className="intro3">So that was a lot... what now?</p>
                <div className="bigBox">
                    <div className="box3">
                        <p className="saying">Know this...</p>
                        <p className="answerLine">What you eat provides the foundation your body needs to keep your hormones balanced. Eating the wrong foods or eliminating entire categories of macronutrients from your diet can rob your system of the raw materials it needs to produce healthy hormones which play a critical role in our physical health, cognitive function, moods and longevity.

                            When we have issues with our hormones, we’re often told there’s nothing we can do about it other than take synthetic birth control and deal with the side effects. Nobody tells us the foods we’re consuming could be contributing to the problem and that we can fix our symptoms simply by changing our eating habits.</p>
                    </div>
                    <img src="/women.jpg" alt="" className="pic" style={{ width: '700px', }} />
                </div>
            </div>
            <div className="dividingLine"></div>
            <div className="bigBox2">
                <div className="intro3">Need some help knowing what to eat? Here's the Parsnip & Pear cyclical food chart!</div>
                <img src="/FoodChart.jpg" alt="" className="pic" style={{ width: '700px', }} />
            </div>
            <div className="dividingLine2"></div>
            <div className="out">
                <p>Still need some help? Checkout more info on each phase under our phases tab.</p>
                <p>We even have delicious, phase specific recipes already picked out for you.</p>
                <p>Happy syncing!</p>
            </div>
            <div className="dividingLine"></div>

        </section>
    </section >
}