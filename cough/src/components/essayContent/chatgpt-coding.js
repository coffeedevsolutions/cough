import React from "react";
import "./chatgpt-coding.css";
import BackButton from "../backButton";

const ChatgptCoding = () => {

    const essayText = `
        <p>Let me begin by listing a few of the things that this essay is not:</p>
        <p>This is not a:</p>
        <ul>
            <li>How-to guide</li>
            <li>Way to make quick money</li>
            <li>Claim that I now a computer engineer</li>
        </ul>
        <p>This essay is a breakdown of the last 6 months that I have spent slamming prompts into MANY different LLMs in order to build a set of web and mobile applications in my free time. I’m going to break down my background, what set me down this path, and how I went about relatively achieving my development goals with the help of AI.</p>
        <p>First of all, I do not have a CS degree, in fact I barely have a business degree. The one thing that helped to give me a head start on this path was that my first job out of college was as a project manager for a team of software developers. This was 4 years ago now, I was hired onto the team with zero prior knowledge of software development. I worked there for 3 years and over the course of those 3 years, all that I ended up taking away from that role was my knowledge of the software development life cycle. I didn’t learn a language, I didn’t learn anything about the cloud, but I will emphasize that understanding the SDLC was crucial to accelerating my skills as a quasi-developer down the line.</p>
        <p>When I say I barely have a business degree I mean that I have a degree in what is essentially entrepreneurship, which was not technically a part of the business school where I attended college. But when I began looking for new jobs towards the end of my time at that first company I was asking myself why I haven't tried my hand at the very thing that I went to school for. When you take classes in entrepreneurship it is only a matter of time before you learn about Y Combinator, so that is what I first began looking into. My hopes were quickly shattered as I began reading about what was needed to get into programs like this, then those shattered hopes were pulverized to dust when I continued to read about the importance that was placed on having technical founders.</p>
        <p>From that point I continued in my job search, eventually finding a really solid job still in the data/software field. It was here where I really learned about a new thing called ChatGPT. I had seen screenshots and articles about it online but I hadn’t truly connected the dots until I began playing around with it. It was while playing around with it that I realized this thing could generate code, and the code looked legit. I knew very little of frameworks and next to nothing about how an IDE worked, but I began to paste the code snippets into Visual Studio Code to see if I could get anything functioning. I couldn’t. I didn’t even know how to spin up a local environment. I was asking ChatGPT all these questions but I didn’t even know what questions to ask it.</p>
        <p>I decided to give myself some informal education and turned to a Udemy bootcamp course on web development to hopefully provide a baseline for me to build my knowledge off of. The course did a great job of outlining the basics of HTML, CSS, and Javascript but got a little outdated when it came to the sections on Mongo, React, and some of the more capricious frameworks out there. All that being said, understanding the core web development basics helped me to begin playing around in VS Code and building actual frontends.</p>
        <p>Here is where AI really comes into play in this story. From this point on my free time consisted of coming home from work, sitting down at my computer, and bouncing between copying my current (not working) code into ChatGPT with a prompt, copying ChatGPTs response, pasting it into my project, testing (it usually didn’t work), and then repeating this process.</p>
        <p>Over</p>
        <p>And over.</p>
        <p>And over again.</p>
        <p>The beauty of this whole process was, I didn’t know any different, so I didn’t mind. I was making progress, albeit slow. Progress that almost any 15 year old web development hobbyist could make in a fraction of the time, but to me it was all new and exciting. Hello world.</p>
        <div style="border-left: 1px solid #010101; padding-left: 15px;">
            <p>Note:</p>
            <p>If you plan on taking this route to ‘learn’ web development, you aren’t going to learn a whole lot. Not for a while that is. It will take a very long time before you are able to write genuine code from scratch, and even now I find myself just generating the repetitive stuff for the sake of convenience. You will also struggle with the vernacular, this is something I should have made an effort to learn far sooner in my journey. What generative AI can help you accomplish is incredible but you are going to need to hold up your end of the bargain if you hope to get anything done. And while I know this isn’t a novel concept, it is easy to get swept up in the monotonous “That did not work, please try a different way” and to not actually do any digging on your own. Being very intentional with the time you spend hammering away your project will result in a much more manageable learning curve and should reduce wasted time.</p>
        </div>
        <p>Over my time with ChatGPT I began to get a feel for its limitations. I went from generating static proof-of-concept frontends built in HTML, CSS, and JavaScript to dabbling in full JavaScript frameworks like React. I knew from the start that I wanted to use React, to me it was the most efficient use of my time as I could ‘learn’ React for web development and then quickly translate that to React Native for mobile development. While I might not have been off-base with my rationale, I surely was with my definition of quickly. But back to limitations, as your project deepens in complexity you need to keep a close eye on what ChatGPT is spitting out. A good rule of thumb when going down this path is to loop back every once in a while. Since these LLMs (especially the free versions that I was using early on in this process) struggle with retaining context in your code, you need to spoon feed it to them so that they stay on the rails, or at least within pissing distance of the track. Loop back a few steps in your process, go back to an arbitrary point in your code and work forward saying, “I want to accomplish___, here is how my code currently looks___, here is what I am getting___” and from there use the generative nature of these models to refine the code that they themselves created for you - you’d be surprised by what they find and the different, sometimes better paths they take to reach your goal.</p>
        <p>I naturally began to recognize patterns in the code that was being generated - when and how to use Hooks and how to pass props to child components were among the first that I learned because those are where the AI would most consistently make mistakes. Every time I ran a new prompt it was like I was blindfolding the model, spinning it in circles, and expecting it to hit the piñata. In the case of props this would necessitate spelling out the component architecture before every prompt so it was aware what the parent and child components were. In the case of Hooks, well lets just say Copilot likes to put stuff in Hooks that really don’t need to be there.</p>
        <p>Another major player in this journey was my close friend and co-founder - a very welcomed addition to the crew who also happens to be an actual software engineer, what a concept. I haven’t really touched on this yet but at this point I had written almost ZERO backend or server code. I found this element of the process to be too abstract for me, I’m still working on it to this day, and he was willing to help out. For him, I think the big draw was getting to work on a project from the ground up. He was excited about using Golang and practicing a lot of elements of software development that he didn’t really get to do in his day job. He wrote very solid and concise code for the backend and in doing this, dramatically reduced my effort in working with ChatGPT to make proper calls from the frontend which at the time was taking years off of my life. He also taught me about creating a network controller in order to simplify this entire process, that alone was worth its weight.</p>
        <p>From this point on we also began doing code reviews - if you aren’t familiar with them, this is where I would push a 3,000 line PR monstrosity to him and then proceed to get lambasted over text 20 minutes later for the quantity and quality of my code. I got better about this over time, though there is still the occasional “What the hell is this?” text at 10pm. The code review process has probably resulted in the biggest leap in my skills as I am now held accountable for not only my code, but the code of the idiot-genius that lives in my computer. It is both a destructive and constructive endeavor, like building a muscle, and in more ways than one I think that analogy fits for this entire process. Working through the code with someone who knew what they were doing, in real time, just helped me to iterate faster on my own knowledge and output.</p>
        <p>Fast-forward to current day and I have used ChatGPT, Bard/Gemini, Copilot, and Phind.</p>
        <p>I always come back to Github Copilot simply due to the fact that it integrates directly with VS Code. As you can see from my long-winded process above, anything I can do to save myself from copying and pasting more than necessary is welcomed with open arms. It has been a godsend for my productivity and the quality and consistency of code has been a noticeable upgrade from ChatGPT 3.5. Do I still get frustrated? Every day. Does it still hallucinate and spit out absolutely abhorrent code on occasion? You bet it does. But I have not been the only one improving in my development over the last 6 months, because as I was improving these models were improving alongside me. There is something exciting about that to me, that every prompt and dumb repetitive method I request goes through these incredible systems and as I receive the output seconds later I am assisting in bettering that system. And, the next time I ask a similar question the answer will hopefully be just a little bit better than the last.</p>
        <p>Patience, determination, curiosity, patience, and most importantly patience are what’s necessary for an undertaking of this nature. When I began this journey I told myself that the end justifies the means, if I can just get this idea created and out there in the world I can worry about fixing all the code later. Something along the way changed this mentality for me and I am now in the process of expanding this journey, spinning up side projects to refine my skills that I use in the development of my main project, asking questions in a way I’ve never asked them before and taking approaches to problems I never would have considered without this journey. I’m excited for where generative AI will go from here but as of now it has been a net win for me. It has lowered the barrier of entry to a field that seems so intimidating from the outside, and it has helped me to go after my dream and look at the world a little different in the process.</p>
        <p>Cheers.</p>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    `;

    return (
        <div>
            <BackButton />
            <div className="essayText">
                <div className="essayTitle">
                    ChatGPT as a Way to Learn to Code
                </div>
                <div className="essaySubTitle">
                    <p>April 2024</p>
                </div>
                <div className="essayContent" dangerouslySetInnerHTML={{ __html: essayText }} />
            </div>
        </div>
    )
}

export default ChatgptCoding;