console.log("works.js loaded");

const worksData = {
    stages: [
        {
            id: 'C',
            name: 'Graduate Studies',
            works: [
                // Boba Bubble Trouble
                {
                    id: 'boba-bubble-trouble',
                    icon: {
                        shape: 'star4rotatedRounded',
                        fill: 'black',
                        dashed: false,
                        skewed: false,
                        position: [86, 6],
                    },
                    hover: `<img src="../../Assets/Works/Story Machine/2.webp" alt="">`,
                    title: `
                    2025 GLOGAL GAME JAM
                    Boba Bubble Trouble
                    `,
                    listTitle: 'Boba Bubble Trouble',
                    subtitle: ``,
                    type: 'Game Development + Game Design',
                    date: '2025 Spring',
                    purpose: `Hackathon <span class="hyperlink">2025 GGJ</span> (Global Game Jam)
                        <br>
                        Project Type: Game Making
                        <br>
                        Team Members: Flanklin Xu, Yixi(Chris) Wu, Nik Kim, Regina Xia, Yiran Zhang
                        `,
                    description: `
                        Boba Bubble Trouble is a 3D game where players (boba bubbles) compete to escape the bubble tea cup, 
                        embarking on adventures in delicious milk tea ingredients.
                        <br><br>
                        This game was developed in 48 hours during the 2025 Global Game Jam, using Unity as the game engine.
                        <br><br>
                        Contributions: Game Concept, Level Design, 3D Modeling, Game Testing, Sound Design, Game development
                    `,  // 保持空的description
                    content: `
                        <div class="full-image">
                            <div style='position:relative; overflow:hidden; aspect-ratio:1; background: white;'>
                                <img style='z-index: 2; position:relative'
                                src="../../Assets/Works/Story Machine/2.png" alt="">
                                <img 
                                style='
                                    border-radius: 1%; border: 0.5px solid white; opacity: 0.9; 
                                    z-index: 1; position:relative; 
                                    top: 50%; left: 50%; transform: translate(-51%, -307%);
                                    width: 68.2%; height: auto;
                                '
                                src="../../Assets/Works/Story Machine/1.gif" alt="">
                            </div>
                        
                        </div>
                    `  // 保持空的content
                },

                // breadReader
                {
                    id: 'bread-reader',
                    icon: {
                        shape: 'star8rounded',
                        fill: 'black',
                        dashed: false,
                        position: [34, 43],
                        skewed: true,
                    },
                    hover: `<img style="aspect-ratio: 9/14;" src="../../Assets/Works/breadReader/1.webp" alt="">`,
                    title: 'breadReader',
                    listTitle: 'breadReader',
                    subtitle: ``,
                    type: 'Unmaking + Hardware + Interaction + Discursive Design',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: Advanced Synthesis Options Studio(ASOS) - Waste Machines
                        <br>
                        Instructor: <span class='hyperlink' onclick="window.open('http://daraghbyrne.me/')">Daragh Byrne</span>`,
                    description: `
                        What if bread could speak?<br>
                        What if your toast held hidden stories?<br>
                        What if a simple slice contained whole digital worlds?<br>
                        What if your breakfast table became a digital library?<br>
                        What if a mysterious machine could decode the poetry<br>
                        baked into bread?
                        <br><br>
                        'Bread Reader' is a machine that transforms ordinary
                        bread into digital narratives, revealing the stories and data
                        woven into our daily consumption.
                    `,  // 保持空的description
                    content: `
                        <div class="full-image">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe style="width: 100%; aspect-ratio: 16/9;"
                                src="https://www.youtube.com/embed/qmIV9mdoruA?si=Fq4CUbBAGrU7sfED" 
                                // title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
                                // gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        
                        <div class="half-image">
                            <img style="aspect-ratio: 9/12;"
                                src="../../Assets/Works/breadReader/1.webp" alt="">
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/breadReader/Poster.webp" alt="">
                        </div>

                        <div class = "h3">
                            <p>
                                Exhibition
                            </p>
                        </div>

                        <div class="half-image">
                            <img style="aspect-ratio: 9/12;"
                                src="../../Assets/Works/breadReader/6.webp" alt="">
                            <div class="quarter-image" style="aspect-ratio: 9/12;">
                                <img src="../../Assets/Works/breadReader/5.webp" alt="">
                                <img src="../../Assets/Works/breadReader/3.webp" alt="">
                            </div>
                        </div>

                        <p class = "work-discription">
                            "Waste Machines" is one of the F24 Advanced Synthesis Options Studio (ASOS), 
                            a multidisciplinary studio course offered by the School of Architecture at CMU. 
                            <br><br>
                            This studio explores how to critically examine, deconstruct,
                            and reimagine the lifecycle of electronic waste through design research and hands-on experimentation,
                            aiming to address the environmental challenges of planned obsolescence in modern technology.
                            <br><br>
                            We had an exhibition on Dec. 10th 2024
                        </p>

                        <div class = "h3">
                            <p>
                                Unmaking + Making
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/breadReader/10.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            The machine is built from an unclaimed $10 Walmart toaster 
                            and a decade-old handheld scanner from eBay. 
                        </p>
                        
                        <div class = "h3">
                            <p>
                                Control
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/breadReader/11.webp" alt="">
                            <img src="../../Assets/Works/breadReader/12.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            "Control" is an alternative expression for "hacking."
                            <br><br>
                            When the user starts to push, the scanner should begin scanning, 
                            and it should stop scanning when the handle is pushed to the bottom. 
                            I solved this part using a capacitive sensor (a combination of a resistor, wire, and a piece of aluminum foil) and a button.
                            <br><br>
                            Then, my goal is to control the scanner, forming a collaborative interaction with the toaster. 
                            I divided it into three smaller objectives: control the power, control the interface (button), and control the physical rotation. 
                            <br><br>
                            Every step of hacking is incredibly challenging! (Especially when I have no backup.) 
                            I need to manage the scanner, which includes addressing its high requirements for power stability, 
                            dealing with an inaccessible casing, the minuscule solder points at the switch, 
                            and the countless 3D printing iterations that seem perpetually imperfect.

                        </p>

                        <div class = "h3">
                            <p>
                                Showing + Printing
                            </p>
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/breadReader/8.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            ↑ Scanning sample scanned during the exhibition
                        </p>

                        <div class="full-image">
                            <img src="../../Assets/Works/breadReader/7.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            ↑ Printed samples at the exhibition site
                            <br>
                            <br>
                            Through the OpenAI API, the mac will read aloud the poetry and generate HTML for formatting, a
                            llowing the audience to take home their bread and bread poetry.
                        </p>

                        <div class = "h3">
                            <p>
                                Data & Poetry
                            </p>
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/breadReader/2.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            The issue of data is both global and intimate. On a planetary scale, its generation, transmission, and storage create environmental damage and widen digital divides. On a personal level, we struggle with mindless consumption, privacy vulnerabilities, and digital addictions.
                            <br><br>
                            While a poem might occupy mere bytes of data, its impact can resonate through centuries - a powerful juxtaposition that challenges our assumptions about the relationship between data volume and meaningful value in our digital age.

                        </p>
                    `  // 保持空的content
                },
                // Story Machine
                {
                    id: 'story-machine',
                    icon: {
                        shape: 'star4rotatedRounded',
                        fill: 'white',
                        dashed: false,
                        skewed: false,
                        position: [82, 8],
                    },
                    hover: `<img src="../../Assets/Works/Story Machine/2.webp" alt="">`,
                    title: 'Story Machine',
                    listTitle: 'Story Machine',
                    subtitle: ``,
                    type: 'Game Development + Game Design + AI Game',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: Fundamentals of Programming and Computer Science`,
                    description: `
                    This is a term project inspired by <span class='hyperlink' onclick="window.open('https://reverie.herokuapp.com/arXiv_Demo/')"> Smallville</span>, 
                    featuring a nostalgic 1-bit visual style and using OpenAI's API. 
                    Players can design their own world, create and customize characters, 
                    then watch their characters interact and stories unfold through AI-driven behaviors.
                    `,  // 保持空的description
                    content: `
                        <div class="full-image">
                            <div style='position:relative; overflow:hidden; aspect-ratio:1; background: white;'>
                                <img style='z-index: 2; position:relative'
                                src="../../Assets/Works/Story Machine/2.png" alt="">
                                <img 
                                style='
                                    border-radius: 1%; border: 0.5px solid white; opacity: 0.9; 
                                    z-index: 1; position:relative; 
                                    top: 50%; left: 50%; transform: translate(-51%, -307%);
                                    width: 68.2%; height: auto;
                                '
                                src="../../Assets/Works/Story Machine/1.gif" alt="">
                            </div>
                        
                        </div>
                    `  // 保持空的content
                },
                // Rethinking Rabbit R1
                {
                    id: 'rethinking-rabbit-r1',
                    icon: {
                        shape: 'star6rounded',
                        fill: 'white',
                        dashed: true,
                        skewed: false,
                        position: [57, 8],
                    },
                    hover: `<img style="aspect-ratio: 14/9;" src="../../Assets/Works/Rethinking Rabbit R1/0.webp" alt="">`,
                    title: `
                    [PROTOTYPE SPRINT]
                    <br>
                    Rethinking Rabbit R1
                    `,
                    listTitle: 'Rethinking Rabbit R1',
                    subtitle: ``,
                    type: 'UIUX + Interaction + AI Product',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: History and Future of Interaction Design
                        <br>
                        Instructor: <span class='hyperlink' onclick="window.open('https://pangaro.com/index.html')">Paul Pangaro</span>`,
                    description: `
                    We have all witnessed the rise and fall of Rabbit R1, 
                    which can be considered one of the pioneering AI devices and interaction terminals in this burgeoning wave of Large Language Models & AI. 
                    <br><br>
                    'Rethinking Rabbit R1' reimagines what AI interaction could become. 
                    While Rabbit R1 focused on command-based interactions through voice and visual inputs, 
                    I propose a fundamental shift towards a true conversational paradigm. 
                    Moving beyond the conventional "ask-answer" mode, my design framework introduces a three-step interaction model (Input, Memorize, Stimulate) that aims to foster creativity and autonomy. 
                    Through scenarios in language learning and city exploration, I demonstrate how this approach could transform our relationship with AI devices.
                    `,  // 保持空的description
                    content: `
                        <div class = "h3">
                            <p>
                                Rabbit R1
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/1.webp" alt="">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/2.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            <span class="bold">Rabbit R1</span>, which can be considered one of the pioneering AI devices and interaction terminals in this burgeoning wave of Large Language Models & AI,
                            leverages LLMs to provide basically 3 kinds of functionalities:
                            <br> 
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Answer questions (through both voice and visual)
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Make orders (for food or texi)
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Other boring things that you can do better with your phone (such as playing music, recording voice memos and setting reminders/alarms)
                            <br> 
                            <br>
                            Similar to phones, it has screens and sensors.
                            But unlike phones, it features interesting physical controls -
                            a wheel and button interface. That's what I love about it.
                            <br> 
                            <br>
                            So, I want to rethink it.
                        </p>

                        <div class = "h3">
                            <p>
                                Conversational Paradigm
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/6.webp" alt="">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/8.webp" alt="">
                        </div>

                        

                        <p class = "work-discription">
                            Today's paradigm for interacting with AI is what I call <span class="bold">A-A (Ask-Answer or Ask-Act)</span>. 
                            In this process, we face many limitations.
                            <br> 
                            <br>
                            Creativity, autonomy and diversity face severe challenges:
                            Monet can never draw the water lily through voice input and prompts.
                            Shakespeare can never write sonnets using predictive text.
                            <br> 
                            <br>
                            The root cause is the lack of conversation. 
                            Just as humans need conversation with each other, 
                            we need conversation with machines. 
                            Conversation is a loop, an iteration, and a collaboration. 
                            Within this process of exchange, several key elements emerge. 
                            Without conversation, we can't learn what's possible or what we might want. 
                            Conversations lead to the choices we make.
                            <br> 
                            <br>
                            Therefore, we need a <span class="bold">Conversational Paradigm</span>.
                        </p>

            

                        <div class = "h3">
                            <p>
                                Strategy
                            </p>
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/5.webp" alt="">
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/Rethinking Rabbit R1/3.gif" alt="">
                        </div>

                        <p class = "work-discription">
                            The Rabbit R1 represents an entirely new product category that requires rethinking how we interact with AI. 
                            By analyzing its hardware design: 
                            <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Data Collection: The Rabbit R1 excels at gathering information through networks and sensors, which helps machines understand context and serves as input for AI agents
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Screen Design: Its small display isn't meant for content consumption or creation - instead, it's optimized for world exploration
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• Hardware Integration: Its physical interaction features make it an intriguing tool for real-world engagement
                            <br>
                            <br>
                            The Rabbit R1 introduces a three-step interaction model (Input, Memorize, and Stimulate) that cleverly leverages its unique hardware capabilities. 
                            Each step incorporates different strategies to create a conversational experience while taking full advantage of the device's distinct design.
                        </p>

                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Senario 1</p>
                                <p>Learn a language:</p>
                                <p style="font-weight: 400;"> <br>
                                Alex is preparing for an exciting three-week trip to Japan. 
                                He is currently studying Japanese and wants to improve their language skills before the journey,
                                but he is unsure about what is most useful to learn in a short time. 
                                He don't want to use Duolingo, and also don't want to watch Youtube videos. 
                                He wants to learn something that is both useful in daily life and aligned with his interests.
                                </p>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width:100%; aspect-ratio: 12/9 "
                                src="https://embed.figma.com/proto/YsZ5FjZWKdmdTpIgsEyiEF/Prototype-Final-Project---Rethink-Rabbit-R1?node-id=6204-452&node-type=frame&scaling=scale-down&content-scaling=fixed&page-id=6114%3A115&starting-point-node-id=6204%3A483&embed-host=share" 
                                // allowfullscreen></iframe>
                            </div> 
                        </div>
                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Senario 2</p>
                                <p>Explore a new city:</p>
                                <p style="font-weight: 400;"> <br>
                                Alex has arrived in Japan and is excited to explore a new city. 
                                Like many travelers, he initially felt overwhelmed by travel guides, 
                                must-see lists, and recommended routes.
                                Despite having studied some Japanese and researched popular spots, 
                                standing in the actual streets of Japan made him realize he wanted a different kind of experience - 
                                one that wasn't bound by rigid plans or tourist checklists and was guided by curiosity.
                                </p>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width:100%; aspect-ratio: 12/9 "
                                src="https://embed.figma.com/proto/YsZ5FjZWKdmdTpIgsEyiEF/Prototype-Final-Project---Rethink-Rabbit-R1?node-id=6211-2493&p=f&scaling=scale-down&content-scaling=fixed&page-id=6211%3A2410&starting-point-node-id=6211%3A2489&embed-host=share" 
                                // allowfullscreen></iframe>
                            </div>
                        </div>
                        
                    `  // 保持空的content
                },
                // Playground OS
                {
                    id: 'playground-os',
                    icon: {
                        shape: 'circle',
                        fill: 'white',
                        dashed: false,
                        skewed: false,
                        position: [49, 13],
                    },
                    hover: `<img style="aspect-ratio: 14/9;" src="../../Assets/Works/Playground OS/1-9.webp" alt="">`,
                    title: `
                    [PROTOTYPE SPRINT]
                    <br>
                    Playground OS
                    `,
                    listTitle: 'Playground OS',
                    subtitle: `- An Operating System Designed for Creation`,
                    type: 'UIUX + Interaction + XR + Operating System + AI Product',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: History and Future of Interaction Design
                        <br>
                        Instructor: <span class='hyperlink' onclick="window.open('https://pangaro.com/index.html')">Paul Pangaro</span>`,
                    description: `Playground OS is an operating system designed for creation rather than consumption. 
                        Inspired by <span class="bold">Dynabook</span> and real-world playgrounds, it aims to fulfill Alan Kay's vision of a system that serves as "wheels for the mind."
                        <br>
                        <br>
                        Playground OS can operate on various devices, 
                        assist diverse groups of people, and function in all kinds of situations.`,
                    content: `
                        <div class="full-image">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe style="border: 1px solid rgba(0, 0, 0, 0.1); width: 100%; aspect-ratio: 12/9;"
                                src="https://embed.figma.com/proto/V0ihfXRV5fQM5eiTXcEOBc/Playground-OS-scenario?node-id=7-306&node-type=canvas&scaling=scale-down&content-scaling=fixed&page-id=7%3A271&starting-point-node-id=7%3A306&embed-host=share" 
                                allowfullscreen></iframe>
                            </div>
                        </div>

                        <div class = "h3">
                            <p>
                                Prior Art - Dynabook
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/Playground OS/1-6.webp" alt="">
                            <img src="../../Assets/Works/Playground OS/1-1.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            This is the iconic illustration from Alan Kay's paper written in 1972, 
                            'A Personal Computer for Children of All Ages'. 
                            It tells a story of two kids using the <span class="bold">Dynabook</span> to play games while learning physics on the grass.
                            <br> 
                            <br>
                            Many people assume that <span class="bold">Dynabook</span> is simply a tablet, akin to an 'iPad' with a keyboard. 
                            However, that's not the truth. <span class="bold">Dynabook</span> is the re-definition of Personal Computing.
                            In Alan's words, <span class="bold">Dynabook</span> is:
                            <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Not just a box but a service'
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'The wheels for the mind'
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'Something that helps you grow wand that you grow with'.


                        </p>

                        <div class = "h3">
                            <p>
                                Playground
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/Playground OS/1-5.webp" alt="">
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/Playground OS/1-8.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            I named it <span class="bold">'Playground OS'</span> because playgrounds are natural spaces for creativity. 
                            In real playgrounds, children create freely and instinctively. 
                            They invent games, build imaginary worlds, and explore without limits.
                            <br>
                            <br>
                            Just like a physical playground, the operating system aims to create an open, flexible environment where users can freely explore and create, 
                            turning simple materials tools, and equipments into endless possibilities.
                        </p>

                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Context</p>
                                <p>Recognization:</p>
                            </div>
                            <img style="border-radius: 10px; border: 1px solid rgba(130, 130, 130, 0.1);" src="../../Assets/Works/Playground OS/1.gif" alt="">
                        </div>

                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Communities</p>
                                <p>& Updates:</p>
                            </div>
                            <img style="border-radius: 10px; border: 1px solid rgba(130, 130, 130, 0.1);" src="../../Assets/Works/Playground OS/2.gif" alt="">
                        </div>

                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Programing</p>
                                <p>(AI Agent):</p>
                            </div>
                            <img style="border-radius: 10px; border: 1px solid rgba(130, 130, 130, 0.1);" src="../../Assets/Works/Playground OS/6.gif" alt="">
                        </div>

                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Running</p>
                                <p>(AI Agent):</p>
                            </div>
                            <img style="border-radius: 10px; border: 1px solid rgba(130, 130, 130, 0.1);" src="../../Assets/Works/Playground OS/5.gif" alt="">
                        </div>
                    `
                },
                // MoreDance
                {
                    id: 'more-dance',
                    icon: {
                        shape: 'star6rounded',
                        fill: 'white',
                        dashed: false,
                        position: [56, 23],
                    },
                    hover: `<img style="aspect-ratio: 9/9;"
                                src="../../Assets/Works/MOREDANCE/1.webp" alt="">`,
                    title: `
                    [PROTOTYPE SPRINT]
                    <br>
                    MOREDANCE
                    `,
                    listTitle: 'MOREDANCE',
                    subtitle: `- An AI Product for Exploring Music`,
                    type: 'Interaction + AI Product',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: History and Future of Interaction Design
                        <br>
                        Instructor: <span class='hyperlink' onclick="window.open('https://pangaro.com/index.html')">Paul Pangaro</span>`,
                    description: `
                    AI music platforms like Suno are changing how we make and experience music. 
                    The boundaries between performers, creators, and listeners are blurring as anyone can create music using simple keywords and patterns. 
                    While this democratizes music creation, it raises important questions: 
                    Can AI truly understand music's emotional core? 
                    And does this easy creation process reduce the personal meaning and creative satisfaction of making music?
                    
                    <br><br>
                    MOREDANCE co-creates music with you, allowing you to be both a creator and a listener while using it. 
                    It has 2 parts - the 'collector' and the 'producer'. The 'collector' encourages you to explore your environment and gather interesting sounds. 
                    These sound samples are encoded onto colored paper strips, which the 'producer' then reads to generate new music using AI technology. 
                    This unique approach keeps you actively engaged in music creation while exploring the world around you. 
                    The result is a dynamic and varied musical experience that connects you deeply with your sonic environment.
                    `,  // 保持空的description
                    content: `
                        <div class="full-image">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe style="width: 100%; aspect-ratio: 16/9;"
                                src="https://www.youtube.com/embed/-Ez5RnWz7Zs?si=O8DlMQofNsPaldjp" 
                                title="YouTube video player" frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </div>
                        </div>
                        <div class="full-image">
                            <img quality="100" src="../../Assets/Works/MOREDANCE/1.gif" alt="">
                        </div>
                    `
                },
                // Lino
                {
                    id: 'lino',
                    icon: {
                        shape: 'circle',
                        fill: 'white',
                        dashed: true,
                        skewed: false,
                        position: [46, 18],
                    },
                    hover: ``,
                    title: `
                    [PROTOTYPE SPRINT]
                    <br>
                    Lino
                    `,
                    listTitle: 'Lino',
                    subtitle: `- A Personal Knowledge Management System`,
                    type: 'UIUX + Interaction + AI Product',
                    date: '2024 Fall',
                    purpose: `<span class="bold">Acadamic</span><br>
                        Course: History and Future of Interaction Design
                        <br>
                        Instructor: <span class='hyperlink' onclick="window.open('https://pangaro.com/index.html')">Paul Pangaro</span>`,
                    description: `
                    Everyone who loves knowledge, and was trying to grasp all the essence of human wisdom and the finer details, 
                    but has failed, must have had this vision or imagery - of a "memory extender", a "second brain", whatever it may be called.
                    <br>
                    <br>
                    Lino is a personal knowledge management system, a search engine and a new way to interact with AIs (LLMs).
                    `,
                    content: `
                        <div class="full-image">
                            <img src="../../Assets/Works/Lino/2.webp" alt="">
                        </div>
                        <div class="full-image">
                            <img src="../../Assets/Works/Lino/1.gif" alt="">
                        </div>
                        <div class="h2">
                            <p>
                                Prior Art - Memex and more...
                            </p>
                        </div>
                        <div class="full-image">
                            <img src="../../Assets/Works/Lino/6.webp" alt="">
                        </div>
                        <div class="half-image">
                            <img src="../../Assets/Works/Lino/3.webp" alt="">
                            <img src="../../Assets/Works/Lino/4.webp" alt="">
                        </div>
                        <p class="work-discription">
                            In 1945, Vannevar Bush published <span class = "bold">As We May Think</span> in The Atlantic Monthly, 
                            envisioning a revolutionary information machine. 
                            In an era of unprecedented knowledge expansion, he conceptualized a device that could store and retrieve vast amounts of information. 
                            His imagined invention, named <span class = "bold">Memex</span> (a portmanteau of "memory extender"), was essentially a desk that could contain the contents of all the world's libraries.
                            <br>
                            <br>
                            Bush's most innovative contribution was the concept of 'trails' - the links or relationships between pieces of knowledge that would allow quick navigation from one piece of information to another. 
                            This visionary concept resonated with H. G. Wells' 1936 idea of the <span class = "bold">World Brain</span> and later influenced numerous innovations, including library science and <span class = "bold">hypertext</span>.
                        </p>
                        <div class="h2">
                            <p>
                                Lino 
                            </p>
                        </div>
                        <div class="h3">
                            <p>
                                Notes apps
                            </p>
                        </div>
                        <div class="half-image">
                            <img src="../../Assets/Works/Lino/7.webp" alt="">
                        </div>
                        <p class="work-discription">
                            Everyone's got their go-to notes app, till it becomes a black hole of random stuff:
                            <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mind Map -becomes- Mess Map
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Hashtags -becomes- Numerous hashtags
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Folders -becomes- Numerous folders / All in the default folder
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Nested pages -becomes- You never know what's inside
                        </p>
                        <div class="h3">
                            <p>
                                The nature of Knowledge
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/Lino/9.webp" alt="">
                        </div>
                        <p class="work-discription">
                            We're caught in a fundamental dilemma - our time is finite, 
                            yet we face an infinite sea of knowledge, 
                            while our memories inevitably fade.
                            As our collection of notes and information expands, 
                            chaos isn't just likely - it's inevitable. Why does this happen? Because knowledge isn't just a simple collection of facts. It's a intricate web of:
                            <br>
                            <br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">Concepts:</span> Core ideas<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">Content:</span> Supporting details<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">Context:</span> Situations that give meaning<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="bold">Associations:</span> How ideas connect
                            <br>
                            <br>
                            This complex structure creates a perfect storm. 
                            Each piece of information doesn't exist in isolation - it's connected to countless others through invisible threads.

                        </p>

                        <div class="h3">
                            <p>
                                Strategy - Auto-fluid & Auto-linking
                            </p>
                        </div>




                        

                    `  // 保持空的content
                },
            ]
        },
        {
            id: 'B',
            name: 'Gap Year',
            works: [
                // Hill Making
                {
                    id: 'hill-making',
                    icon: {
                        shape: 'star4rounded',
                        fill: 'black',
                        dashed: false,
                        skewed: true,
                        position: [22, 62],
                    },
                    hover: `<img style="aspect-ratio: 14/9;"
                                src="../../Assets/Works/Hill Making/img1051.webp" alt="">`,
                    title: `Hill Making`,
                    listTitle: 'Hill Making',
                    subtitle: `
                    - An Emotional Journey in Piled Stone Hills: <br>
                    &nbsp;Space, Experience,<br>
                    &nbsp;and Interactive Design
                    `,
                    type: 'Space + Resiposive Environment + Affective Computing + Digital Media Art',
                    date: '2023 Fall',
                    purpose: 'Personal',
                    description: `
                        When I was very young, the piled stone hill in the nearby park used to be my favorite amusement spot.
                        I would wander up and down the rocks, pass through the high platforms and caves, 
                        getting lost and then suddenly enlightened. 
                        It was not only my introduction to space but also a place for me to experience emotions. 
                        <br>
                        <br>
                        For the ancient owners, who often experienced gardens in solitude, 
                        these spaces served as a sanctuary for the release of emotions. 
                        Piled stone hills undoubtedly played a crucial role in facilitating this cathartic experience. 
                        Based on my childhood memories and what I have learned about ancient garden owners, 
                        I see the need to explore the interactive relationship between piled stone hills, 
                        the body, and emotions using a technological approach to unlock their inherent power and create innovative and transformative structures.
                    `,
                    content: `
                        <div class="half-image">
                            <img src="../../Assets/Works/Hill Making/3-12.webp" alt="">
                        </div>

                        <div class="full-image">
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <iframe class="ytb-embed" style="width: 100%; aspect-ratio: 16/9;"
                                src="https://www.youtube.com/embed/L9DkcnfT-aA?si=5j6UGOJ_z1UTpuK5rel=0&modestbranding=1&controls=1&showinfo=0" 
                                frameborder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowfullscreen></iframe>
                            </div>
                        </div>
                        
                        <div class = "full-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-11.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            Inspired from Slow House (DS+R - 1989) and House of Dust (Alison Knowles & James Tenneyt - 1967), 
                            I attempted to explore how media enhances human experiences in space. By creating a feedback system, 
                            a loop is formed among nature, senses and emotions.
                        </p>

                        <div class = "h2">
                            <p>
                                Chapter 1 - Hill Hacking
                            </p>
                        </div>

                        <div class = "full-image">
                            <img src="../../Assets/Works/Hill Making/3-1.webp" alt="">
                        </div>
                        
                        <p class = "work-discription">
                            “假山” (piled stone hill) also known as artificial mountains, 
                            are an integral element in traditional Chinese gardens, 
                            occupying a unique space between the artificial and the natural. 
                            They are believed to have originated from the imaginative realm of the place of gods. 
                            As the literati class began constructing private gardens, 
                            they materialized the essence of nature distilled in their refined landscape paintings.
                        </p>

                        <!-- <div class = "full-image">
                            <img src="../../Assets/Works/Hill Making/3-3.webp" alt="">
                        </div> -->

                        <div class = "half-image">
                            <img src="../../Assets/Works/Hill Making/3-8.webp" alt="">
                            
                        </div>

                        <div class = "half-image">
                            <img src="../../Assets/Works/Hill Making/3-7.webp" alt="">
                            <img src="../../Assets/Works/Hill Making/3-4.webp" alt="">
                        </div>

                        <p class = "work-discription">
                            The next challenge is to combine these
                            spaces. Inspired from Spatial Syntax and
                            topological graph theory, I have devised a
                            new graph for this issue, this graph is: <br><br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• planer - for readability;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• undirected - no clear direction in hills;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• cyclic - occasionally cyclic;<br>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;• weighted - representing length;<br><br>
                            I have employed this graph to analyze several famed piled stone hills, confirming
                            its feasibility in research and design.
                            <br>
                            <br>
                            The spatial information of lesser-known piled stone hills remains inadequately explored,
                            creating a research gap in this
                            field.
                            With more available data, it
                            becomes possible to integrate
                            Machine Learning to enhance
                            the spatial design of piled
                            stone hills in the future.
                        </p>





                        <div class = "h2">
                            <p>
                                Chapter 2 - Digital Hill
                            </p>
                        </div>

                        <div class = "full-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-2.webp" alt="">
                        </div>

                        <div class = "h3">
                            <p>
                                System Design
                            </p>
                        </div>

                        <div class = "full-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-10.webp" alt="">
                        </div>

                        <div class = "full-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-5.webp" alt="">
                        </div>

                        
                        <div class = "h3">
                            <p>
                                Sensus Stone
                            </p>
                        </div>

                        <div class = "half-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-13.webp" alt="">
                            <img
                            src="../../Assets/Works/Hill Making/3-9.webp" alt="">
                        </div>

                        <div class = "h3">
                            <p>
                                Shan-Shui Transcoding
                            </p>
                        </div>

                        <div class = "full-image">
                            <img
                                src="../../Assets/Works/Hill Making/3-6.webp" alt="">
                        </div>

                        <div class = "half-image">
                            <img style="aspect-ratio: 9/12;"
                                src="../../Assets/Works/Hill Making/img1057.webp" alt="">
                            <img style="aspect-ratio: 9/12;"
                            src="../../Assets/Works/Hill Making/img1055.webp" alt="">
                        </div>
                        

                        <div class = "full-image">
                            <img style="aspect-ratio: 16/9;"
                                src="../../Assets/Works/Hill Making/img1051.webp" alt="">
                        </div>
                    `
                },

                // ReCurv
                {
                    id: 'ReCurv',
                    icon: {
                        shape: 'star6',
                        fill: 'white',
                        dashed: true,
                        skewed: false,
                        position: [26, 46],
                    },
                    hover: `<img style="aspect-ratio: 14/9;" src="../../Assets/Works/ReCurv/1-7.webp" alt="">`,
                    title: `2024 DigitalFUTURES
                        <br>
                        ReCurv`,
                    listTitle: 'ReCurv',
                    subtitle: `
                    - Home-based<br>
                    &nbsp;Stroke Rehabilitation System`,
                    type: 'Product + Health',
                    date: '2024 Summer',
                    purpose: `Workshop <span class="hyperlink">2024 DigitalFUTURES</span> (Environmental Nudges via Eye-tracking and Bio-sensory Measures)
                        <br>
                        Project Type: Research + Product Design
                        <br>
                        Instructor: <span class='hyperlink' onclick='window.open("https://caup.tongji.edu.cn/caupen/e6/9e/c33466a321182/page.htm")'>Zheng chen</span>
                        <br>
                        Team Members: Yike Wang, Yixi(Chris) Wu, Tommy Bao-Nghi Nguyen, Tianyu Li, Xiyu Zhang
                        `,
                    description: `
                        Recovery can be lengthy due to inadequate motivation, feedback, and personalization. Our product addresses these challenges by leveraging advanced Electromyography (EMG) technology and AI. It analyzes muscle activity, offers real-time feedback, and customizes the recovery trajectory through our personalized recovery curve.
                        <br><br>
                        
                    `,  // 保持空的description
                    content: `
                        <div class="full-image" style="border: 1px solid #ccc;">
                            <iframe style="width: 100%; aspect-ratio: 16/9;" 
                            src="https://www.youtube.com/embed/1gdsnocX3C0?si=ZYrNoK85hbgnklt5" 
                            // title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                            // allowfullscreen></iframe>
                        </div>
                        <div class="full-image">
                            <img src="../../Assets/Works/ReCurv/1-3.webp" alt="">
                        </div>

                        <div class="h3">
                            <p>
                                Product & System
                            </p>
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/ReCurv/1-5.webp" alt="">
                        </div>

                        <p class="work-discription">
                            "A stroke profoundly impacts both physical and emotional well-being."
                            <br><br>
                            Recovery can be lengthy due to inadequate motivation, feedback, and personalization. 
                            Our product addresses these challenges by leveraging advanced Electromyography (EMG) technology and AI. 
                            It analyzes muscle activity, offers real-time feedback, and customizes the recovery trajectory through our personalized recovery curve.
                        </p>


                        <div class="h3">
                            <p>
                                Gamification
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/ReCurv/1-8.webp" alt="">
                            <img src="../../Assets/Works/ReCurv/1-7.webp" alt="">
                        </div>

                        <p class="work-discription">
                            "This was way more fun then staying in the hospital!"
                            <br><br>
                            Lack of immediate feedback, insufficient communication with doctors, absence of personalized guidance, and difficulty in maintaining consistency - these are the challenges we found stroke patients face during rehabilitation. Inspired by Nintendo Ring Fit Adventure, we adopted a projection-based gaming approach to enhance patients' rehabilitation experience through engaging interactive design and real-time feedback systems.
                        </p>

                        <div class="h3">
                            <p>
                                Recovery Curve
                            </p>
                        </div>

                        <div class="full-image">
                            <img src="../../Assets/Works/ReCurv/1-6.webp" alt="">
                        </div>

                        <p class="work-discription">
                            
                            "The path to recovery is long... But it doesn't have to be."
                            <br><br>
                            The following section delineates the primary muscles targeted in the arm rehabilitation process. Each muscle is meticulously monitored and assessed using our sophisticated algorithm, while personalized recommendations from our remote medical team are relayed directly to the patient.
                        </p>
                    `  // 保持空的content
                },

                // Glance T1
                {
                    id: 'glance-t1',
                    icon: {
                        shape: 'star6',
                        fill: 'white',
                        dashed: true,
                        skewed: false,
                        position: [29, 47],
                    },
                    hover: `<img src="../../Assets/Works/T1/0.webp" alt="">`,
                    title: `For Glance
                        <br>
                        T1`,
                    listTitle: 'T1',
                    subtitle: ``,
                    type: 'Product + AI Device',
                    date: '2024 Summer',
                    purpose: `For <span class="bold">Glance</span><br>
                        Project Type: AI Earphone Concept Design
                        <br>
                        Role: Design Intern`,
                    description: `
                    This conceptual exploration, undertaken during my internship at Glance, 
                    proposes new directions for AI-enabled earphones, 
                    encompassing both interaction paradigms and their physical manifestation.
                    <br><br>
                    The appearance of similar products in the market months later suggests that this design direction was addressing genuine user needs and market trends.
                    `,  // 保持空的description
                    content: `
                        <div class="full-image">
                            <img src="../../Assets/Works/T1/3.gif" alt="">
                        </div>
                        <div class="h2">
                            <p>
                                v0.1
                            </p>
                        </div>
                        <div class="full-image">
                            <img src="../../Assets/Works/T1/1.webp" alt="">
                        </div>
                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>'Click'</p>
                                <p>Case + Dock = Desktop-robot</p>
                                <p style="font-weight: 400;"> <br>
                                When we can fit a screen, microphone, and better speakers into such a tiny earphone case, 
                                it will become a better vessel for AI assistance than <span class="bold">Alexa</span>.
                                Slip it into your pocket while on the go, and once home, 
                                it naturally clicks into its magnetic dock on your desk.
                                <br><br>
                                Whether indoors or outdoors, it stays closer to your body.
                                </p>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <img src="../../Assets/Works/T1/4.webp" alt="">
                            </div>
                        </div>
                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Display</p>
                                <p>Interface -> Inter-face</p>
                                <p style="font-weight: 400;"> <br>
                                With screens proliferating around us - from phones to tablets to smartwatches - we don't need another display vying for our attention. Rather than adding to the visual noise,
                                let's deconstruct the very notion of 'interface,' reducing it to its purest form: from interface to inter-face. Through expressions, we can craft an entirely new paradigm of interaction.
                                </p>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <img src="../../Assets/Works/T1/5.webp" alt="">
                            </div>
                        </div>
                        <div class="customized-image" style = "grid-template-columns: 1fr 4fr;">
                            <div>
                                <p>Playability</p>
                                <p>1 Case * N Bases</p>
                                <p style="font-weight: 400;"> <br>
                                The dock acts as your desktop robot's body. 
                                The excitement of unboxing mystery shells for your earphones - 
                                like revealing a blind box collectible - 
                                would be irresistible. 
                                People would be obsessed with giving their AI companion new bodies.
                                </p>
                            </div>
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <img src="../../Assets/Works/T1/6.webp" alt="">
                            </div>
                        </div>

                        <div class="h2">
                            <p>
                                v0.2
                            </p>
                        </div>

                        <div class="half-image">
                            <img src="../../Assets/Works/T1/4.gif" alt="">
                            <img src="../../Assets/Works/T1/6.gif" alt="">
                        </div>
                        <p class="work-discription">
                            When integrating a screen into an earphone case, 
                            a sliding lid mechanism emerges as the most user-friendly solution. 
                            This design language aligns with our innate expectations of movement and interaction, 
                            creating a seamless opening experience that feels completely natural.

                            <br><br>
                            The facial expression interface must maintain a 50:50 ratio with the total display area, 
                            establishing a clear visual priority and reinforcing the direct emotional connection with users.
                        </p>
                    `  // 保持空的content
                }
            ]
        },
        {
            id: 'A',
            name: 'Undergraduate Studies',
            works: [
                // Vive Tower
                {
                    id: 'vive-towers',
                    icon: {
                        shape: 'square',
                        fill: 'black',
                        dashed: false,
                        skewed: true,
                        position: [75, 79],
                    },
                    hover: `<img style="aspect-ratio: 9/14;"
                    src="../../Assets/Works/Vive Towers/2-0.webp" alt="">`,
                    title: 'Vive Towers',
                    listTitle: 'Vive Towers',
                    subtitle: `- Reviving unfinished buildings`,
                    type: 'Architecture',
                    date: '2022 Fall',
                    purpose: 'Personal',
                    description: `"别样幸福城" (City of Ecstasy) stands out as one of China's most renowned unfinished neighborhoods, emblematic of numerous unfinished residential projects resulting from broken financial chains. These speculative constructions, often far from urban centers, epitomize the stark contradictions in China's urbanization process. Due to financial constraints, some homebuyers opt to move into unfinished "Brutalist" buildings. People gather scraps for firewood, form patrol teams, establish community kitchens, and even engage in self-sufficient vegetable gardening to meet their needs. Despite potential renovations to make them habitable, these long-abandoned structures face numerous challenges.
                    <br>
                    <br>
                    The visionary passages from Lime's Robotics Master have materialized in our present reality. The waves of AI, blockchain, and other technologies have sparked our anticipation for a significant technological revolution. The project envisions the Chinese government launching an experiment in 2030 where, inspired by earlier ideas of architectural utopia and augmented by advanced technologies, the inhabitants will find ultimate happiness in these unfinished cities.`,
                    content: `
                        <div class="full-image">
                            <img src="../../Assets/Works/Vive Towers/2-0.webp" alt="">
                        </div>
                
                        <div class="h3">
                            <p>
                                Background Research
                            </p>
                        </div>
                
                        <div class="half-image">
                            <img style="aspect-ratio: 9/12;"
                                src="../../Assets/Works/Vive Towers/2-11.webp" alt="">
                            <div class="quarter-image" style="aspect-ratio: 9/12;">
                                <img src="../../Assets/Works/Vive Towers/2-12.webp" alt="">
                                <img src="../../Assets/Works/Vive Towers/2-13.webp" alt="">
                            </div>
                        </div>
                        
                        <p class="work-discription">
                            <span class="bold">LEFT: </span>Children playing between the unfinished rough buildings in "别样幸福城" (City of Ecstasy). 
                            <span class="hyperlink">1</span>
                            <br>
                            <br>
                            <span class="bold">RIGHT-TOP: </span>The owners living in unfinished buildings cultivate the front vacant land, 
                            grow vegetables, and cook together, leading a "Gypsy" lifestyle. 
                            <span class="hyperlink">2</span>
                            <br>
                            <br>
                            <span class="bold">RIGHT-BOTTOM: </span>Liu Ruiqin, the owner of Room 307 in Building 6, sits helplessly by a window made of wooden planks. 
                            Many homeowners move into unfinished buildings due to economic pressure. 
                            These buildings lack windows and doors, as well as water, electricity, and gas. 
                            The residents wash their faces with rainwater, rely on battery-powered lamps for lighting, 
                            and make do by arranging sofas and beds, or simply setting up tents to live on.
                            <span class="hyperlink">3</span>
                        </p>
                
                        <div class="h3">
                            <p>
                                The "Vive Towers" Project
                            </p>
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Vive Towers/2-5.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Vive Towers/2-3.webp" alt="">
                        </div>
                
                        <p class="work-discription">
                            The structure is a bio-inspired (slime mould) system that continuously responds
                            and adapts to the needs of its residents. The system provides suggestions to the residents, 
                            who accept the suggestions and propose their own proposals. In a consensus mechanism, other residents decide whether to
                            agree to the proposals and spend tokens to express their agreement. 
                            Once a consensus is reached, the proposals are implemented, resulting in
                            the creation of corresponding functional spaces.
                        </p>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Vive Towers/2-1.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Vive Towers/2-4.webp" alt="">
                        </div>
                    `
                },
                // Parade with Gods
                {
                    id: 'parade-with-gods',
                    icon: {
                        shape: 'square',
                        fill: 'black',
                        dashed: false,
                        skewed: true,
                        position: [71, 78],
                    },
                    hover: `<img style="aspect-ratio: 9/14;" src="../../Assets/Works/Parade with Gods/1-1.webp" alt="">`,
                    title: 'Parade with Gods',
                    listTitle: 'Parade with Gods',
                    subtitle: `- How can China's villages win the tug-of-war with cities?`,
                    type: 'Architecture + Rural Urban Planning',
                    date: '2023 Spring - Summer',
                    purpose: `<span class="bold">Academic</span>
                        <br>
                        Course: Graduation design
                        <br>
                        Instructor: Dr. Luo Hui`,
                    description: `In February 2023, our team of seven conducted a 10-day research trip to little hamlets,
                        in Fujian Province. Faced with unfamiliar and unique local folk beliefs and customs, I
                        employed ethnographic research methods, including field investigations, interview,
                        architectural measurements, and data collection. Simultaneously, as an architecture
                        student, I observed significant conflicts and changes brought about by urbanization.
                        <br>
                        <br>
                        I imagined a tug-of-war competition between the villages and the cities. In the first
                        round of the "urban invasion," the villages were completely defeated. To win the game,
                        in Round 2, the villagers began to use their last ammunition - local folk beliefs. The
                        third round was a fanciful proposal: I suggested a declaration to learn from the epitome of urban civilization, "Disneyland," and package the essence of rural areas. Although these messages and proposals may seem metaphorical at first glance, they
                        have a practical meaning. Superficially "new rural" areas have sprung up, but the
                        uniqueness of village life is disappearing, causing widespread concern. With globalization and technological revolution reaching the last tentacles of the villages, rural
                        areas need to seize the opportunity to undergo significant transformation in a way
                        that aligns with the flow.
                        <br>
                        <br>
                        Special thanks to the villagers of Xiange hamlet and Xiancun town (Ningde, Fujian province, China).`,
                    content: `
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-0.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-16.webp" alt="">
                        </div>
                
                        <div class="h2">
                            <p>Round 1 - Urban Invasion</p>
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Parade with Gods/1-12.webp" alt="">
                            <img src="../../Assets/Works/Parade with Gods/1-3.webp" alt="">
                        </div>
                        
                        <div class="h2">
                            <p>Round 2 - Parade with Gods</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-4.webp" alt="">
                        </div>
                
                        <p class="work-discription">
                            "Parade with gods"(游神) is a popular belief activity from Xian'ge hamlet. 
                            People invite the god's statue into a sedan chair in the temple and carry it out for a procession during festive occasions. 
                            This symbolizes the gods' descent into the community to bless the area.
                            "Parade with gods" embodies the essence of folk belief culture, rituals, and art, making it the quintessential representation of all belief activities.
                            <br>
                            <br>
                            Folk beliefs and rutuals that are shared among residents of Xian'ge hamlet can serve as key factors in enhancing their cohesion and
                            vitality, while also presenting new opportunities for development.
                        </p>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-5.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-6.webp" alt="">
                        </div>
                
                        <div class="h2">
                            <p>Round 3 - Learning from Disneyland</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-15.webp" alt="">
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Parade with Gods/1-8.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-7.webp" alt="">
                        </div>
                
                        <p class="work-discription">
                            With exposure to belief cultures and spaces, I began to found connections to
                            theme parks, recognizing their similarities to those temples and sacred places.
                            The regional and independent nature of folk beliefs enables rural areas to develop distinct life philosophies, which are condensed into narrative experiences in
                            belief spaces - similar experiences can also be found in the diverse attractions
                            and rides within theme parks. Inspired by Robert Venturi, I proclaimed "learning
                            from Disneyland," and borrowed three design methods: Zone Mapping, Symbol
                            System, and Low Materiality. By "Fighting fire with fire," rural areas may have a
                            chance to succeed in [Round 3].
                        </p>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Parade with Gods/1-9.webp" alt="">
                            <img src="../../Assets/Works/Parade with Gods/1-11.webp" alt="">
                        </div>
                
                        <p class="work-discription">
                            Husserl defined phenomenological method as
                            discovering essence directly from phenomena
                            through intuition. I used phenomenology to explore the "genius loci" in belief spaces, observing a
                            system of symbols, images, and artifacts.
                            Unlike orthodox religions, Chinese folk beliefs prioritize practical benefits and secular connections,
                            rooted in the traditional concept of the relationship between the individual, clan, and land. Rural
                            belief spaces serve realistic purposes, such as indoctrination and social order, while also satisfying
                            people's pursuit of worldly benefits, containing rich
                            symbols, imagery, and narratives. These spaces
                            function as a system of symbols with narrative
                            capacities that align with "genius loci" in the Disneyland.
                            I started to seek symbols to create the narrative
                            experience.
                            <br>
                            <br>
                            During my research trip, I visited dozens of belief buildings/structures and traced their
                            developmental trajectory. I was amazed by how a makeshift metal roof or a piece
                            of red paper could sustain continuous religious devotion and I realized the profound
                            spiritual power behind these simple sheds. Just like the rides in theme parks, I believe
                            belief spaces in Chinese rural areas should be designed with low materiality,serving as
                            containers for spirituality and public life.
                        </p>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Parade with Gods/1-10.webp" alt="">
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Parade with Gods/1-1.webp" alt="">
                        </div>
                    `
                },
                // Go Above or Below
                {
                    id: 'go-above-or-below',
                    icon: {
                        shape: 'square',
                        fill: 'black',
                        dashed: false,
                        skewed: false,
                        position: [24, 82],
                    },
                    hover: `<img style="aspect-ratio: 14/9;" src="../../Assets/Works/Go Above or Below/4-11.webp" alt="">`,
                    title: 'Go Above or Below',
                    listTitle: 'Go Above or Below',
                    subtitle: ``,  // 这个作品没有副标题
                    type: 'Architecture',
                    date: '2022 Spring',
                    purpose: `<span class="bold">Academic</span>
                        <br>
                        Course: Large-span building design
                        <br>
                        Instructor: Dr. Shen Shaojie`,
                    description: `Soochow University has diverse academic disciplines, but its campus lacks public
                        spaces and opportunities for daily communication due to its scattered layout. To fully
                        leverage its advantages, the university need a new student activity center to provide
                        suitable public spaces and support for different groups while adopting a democratic
                        and open organizational approach to enhance connections and inspire creativity and
                        innovation among students.
                        <br>
                        <br>
                        In my third year of university, I took on a design project for a large-span building.
                        Rather than fixating on the technical aspects, I considered the purpose behind such
                        structures. I realized that unobstructed spaces beneath the roof offer ideal venues for
                        sports and performances, while the vast, continuous and open roof provides a "second
                        ground". By utilizing the roof as a versatile space, I aimed to transform the building's
                        spatial properties and organize behaviors.`,
                    content: `
                        <div class="half-image">
                            <img src="../../Assets/Works/Go Above or Below/4-5.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img style="aspect-ratio: 16/9;"
                                src="../../Assets/Works/Go Above or Below/4-14.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img style="aspect-ratio: 16/9;"
                                src="../../Assets/Works/Go Above or Below/4-15.webp" alt="">
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Go Above or Below/4-12.webp" alt="">
                            <img src="../../Assets/Works/Go Above or Below/4-13.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-11.webp" alt="">
                        </div>
                
                        <div class="h3">
                            <p>Location</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-1.webp" alt="">
                        </div>
                
                        <div class="h3">
                            <p>Concept</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-8.webp" alt="">
                        </div>
                        
                        <div class="h3">
                            <p>Plan</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-2.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-3.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Go Above or Below/4-9.webp" alt="">
                        </div>
                    `
                },
                // Aurora House
                {
                    id: 'aurora-house',
                    icon: {
                        shape: 'square',
                        fill: 'black',
                        dashed: false,
                        skewed: false,
                        position: [10, 90],
                    },
                    hover: `<img style="aspect-ratio: 14/9;" src="../../Assets/Works/Aurora House/5-0.webp" alt="">`,
                    title: `2021 SOLAR DECATHLON CHINA(SDC) COMPETITION
                        <br>
                        Aurora House`,
                    listTitle: 'Aurora House',
                    subtitle: ``,
                    type: 'Architecture + Construction',
                    date: 'March 2021 - Sept. 2021',
                    purpose: `<span class="bold">Team work</span>
                        <br>
                        Competition: 2021 SOLAR DECATHLON CHINA(SDC) COMPETITION
                        <br>
                        Instructor: <span class="hyperlink" onclick="window.open('https://scholar.google.ca/citations?user=k56lrcMAAAAJ&hl=en')">Dr. Wang Sining</span>, Dr. Han Dongchen`,
                    description: `Aurora House comprises an 80-square-meter family residence and a 60-square-meter family residence, connected by a 35-square-meter courtyard. The square floor plan allows for efficient utilization of the space, while minimizing energy and transportation costs.
                        <br>
                        <br>
                        Our team consists of the Technical University of Denmark and my school, Suzhou University. 
                        When they approached us with their design proposal, the pandemic hit. 
                        This meant they couldn't come to China in person, 
                        and we had to complete the localization and implementation of the design proposal on our own.
                        <br>
                        <br>
                        Contribution: Leader of interior design group, Plan development 60%,
                        Detail design 20%, Facade design 30%, Comstruction 30%, Procurement 40%`,
                    content: `
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-0.webp" alt="">
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Aurora House/5-3.webp" alt="">
                        </div>
                
                        <div class="half-image">
                            <img src="../../Assets/Works/Aurora House/5-10.webp" alt="">
                            <img src="../../Assets/Works/Aurora House/5-11.webp" alt="">
                        </div>
                
                        <div class="h3">
                            <p>The Competition</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-4.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-1.webp" alt="">
                        </div>
                
                        <p class="work-discription">
                            The Solar Decathlon is a collegiate competition organized by the U.S. Department of Energy that challenges student teams to design and build highly efficient, innovative, and low-carbon buildings powered by renewable energy.
                            <br>
                            <br>
                            The competition venue is in a small town in Zhangjiakou, Hebei Province, China. 
                            The sites for the 15 participating teams are arranged in a matrix.
                        </p>
                
                        <div class="h3">
                            <p>Building Tech</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-8.webp" alt="">
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-5.webp" alt="">
                        </div>
                
                        <div class="h3">
                            <p>Construction</p>
                        </div>
                
                        <div class="full-image">
                            <img src="../../Assets/Works/Aurora House/5-2.webp" alt="">
                        </div>
                    `
                }
            ]
        },
    ],
    
    // 获取作品的辅助方法
    getWorkById(workId) {
        for (const stage of this.stages) {
            const work = stage.works.find(w => w.id === workId);
            if (work) return work;
        }
        return null;
    }
};

console.log(worksData); // 检查数据是否正确