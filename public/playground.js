console.log("playground.js loaded");

const playgroundData = {
    projects: [
        // RotFix
        {
            id: 'rotfix',
            icon: {
                shape: 'circle',
                fill: 'black',
                dashed: false,
                skewed: false,
            },
            title: 'RotFix',
            listTitle: 'RotFix',
            subtitle: '',
            type: 'Chrome Extension | <b>Design + Development</b> | LLM + Web | Learning Tool',
            date: '2025 Summer',
            purpose: `<span class="bold">Personal</span> | Research Tool`,
            description: `RotFix is a Chrome extension designed to combat passive learning when using ChatGPT. It detects when you're skimming without understanding and blocks further questions until you write a thoughtful reflection, which is then evaluated by an LLM. It forces active engagement to ensure knowledge retention.`,
            content: `
                <div class="full-image">
                    <img src="Assets/Playgrounds/RotFix/1.gif" alt="">
                </div>
                <p class = "work-discription">
                    In the summer of 2025, while working at an HCI lab, I used ChatGPT extensively to learn about electronic components. ChatGPT is an excellent teacher, capable of answering any human question in seconds. However, human nature is lazy. I soon found myself unable to force myself to read and understand long responses, leading to superficial learning where information slipped through my brain 🧠 without leaving a trace. To address this, I developed this Chrome extension: RotFix.
                </p>

                <div style="display: flex; justify-content: center; margin-bottom: 24px;">
                    <img style="width: 80px; height: auto;" src="Assets/Playgrounds/RotFix/icon.png" alt="">
                </div>

                <div class="full-image">
                    <img src="Assets/Playgrounds/RotFix/2.gif" alt="">
                </div>
                <p class = "work-discription">
                    RotFix precisely tracks your Q&A sessions with ChatGPT by monitoring changes in web content. When a set limit of turns is reached, it forcefully prevents you from asking further questions to ChatGPT. To unlock the chat, you must write a reflection in the dialog box, which is then evaluated by an LLM (graded as pass, thoughtful, or fail). If your reflection is deemed "thoughtful" (showing thinking but with some gaps), it will even suggest a follow-up question to deepen your understanding.
                </p>
            `
        },
        // A Walk with Shooting Star
        {
            id: 'walk-with-shooting-star',
            icon: {
                shape: 'star4rotatedRounded',
                fill: 'white',
                dashed: false,
                skewed: false,
            },
            title: 'A Walk with Shooting Star',
            listTitle: 'A Walk with Shooting Star',
            subtitle: '',
            type: 'VR Game | <b>Design + Development</b> | LLM + Unity | Virtual Companion',
            date: '2025 Spring - Summer',
            purpose: `<span class="bold">Teamwork</span> | Personal Project
            <br>
            Team Members: Nik Kim, Yixi(Chris) Wu`,
            description: `A Walk with Shooting Star is a VR game developed to commemorate a beloved golden retriever. It features an LLM-powered NPC that grows with the player, synchronizing with real-world time and seasons while remembering shared conversations. The project explores advanced LLM-environment interactions to create a deeply immersive virtual companionship.`,
            content: `
                <div class="full-image">
                    <img src="Assets/Playgrounds/Walk With Shooting Star/1.png" alt="">
                </div>
                <p class = "work-discription">
                    In the spring of 2025, I developed this VR game, "A Walk with Shooting Star", alongside Nik. Shooting Star is the name of the golden retriever featured in the game—it was Nik's beloved puppy, and he created this project as a memorial to him.
                </p>

                <div class="half-image">
                    <img src="Assets/Playgrounds/Walk With Shooting Star/4.jpg" alt="">
                    <img src="Assets/Playgrounds/Walk With Shooting Star/2.jpg" alt="">
                </div>
                <p class = "work-discription">
                    Players can walk, chat (powered by an LLM persona), and play fetch with Shooting Star. The game's time system synchronizes with the real world, sharing the changing seasons and the cycle of day and night with you. Over time, Shooting Star remembers the moods and stories you share, growing to understand you better and becoming a reliable virtual companion.
                </p>

                <div class="full-image">
                    <img src="Assets/Playgrounds/Walk With Shooting Star/3.png" alt="">
                </div>
                <p class = "work-discription">
                    In the summer of 2025, we decided to further explore "LLM-based NPCs," specifically focusing on how to enable the underlying LLM to interact more realistically with the virtual environment by accessing richer game-state information, thereby achieving a deeply immersive experience.
                    <br><br>
                    I also developed a backend system to facilitate testing and controlling the information context provided to the LLM, determining what inputs enable more natural and accurate conversations. 🦮
                    <br>
                    <span class='hyperlink' onclick="window.open('https://c-hri-sw-u.github.io/llm_mockup/')">Link to LLM Mockup</span>
                </p>
            `
        },
        // IMU-Based Motion & Gesture Recognition
        {
            id: 'mini-project-1',
            icon: {
                shape: 'star6',
                fill: 'white',
                dashed: false,
                skewed: false,
            },
            title: 'IMU-Based Motion & Gesture Recognition',
            listTitle: 'IMU-Based Motion & Gesture Recognition',
            subtitle: '',
            type: 'UX/UI + Interaction | <b>Design + Development</b> | Sensing + ML | Gesture',
            date: '2025 Spring',
            purpose: `<span class="bold">Personal</span> | Coursework
            <br>
            Course: Building User-Focused Sensing Systems + Computational Methods for Interactive Systems
            <br>
            Instructor: <span class='hyperlink' onclick="window.open('http://www.mayankgoel.com/')">Mayank Goel</span>, 
            <span class='hyperlink' onclick="window.open('https://www.synergylabs.org/yuvraj/')">Yuvraj Agarwal</span>
            + <span class='hyperlink' onclick="window.open('https://alexandraion.com/')">Alexandra Ion</span>
            `,
            description: `This project combines two assignments from CMIS and SS courses, exploring the capabilities and limitations of IMU sensors for motion tracking and gesture recognition. I utilized smartphone IMUs and Raspberry Pi with Sensing Hat to develop step counters and complex gesture recognition systems using both heuristic approaches and machine learning. For more precise interaction, I also used dual IMUs (Arduino Nano 33 BLE Sense REV2) to design a finger sleeve that could manipulate on-screen shapes - controlling movement up, down, left, right, rotation clockwise/counterclockwise, and zooming in/out, which together formed an 8-axis operation system.
            <br><br>
            Through this comprehensive exploration, I encountered two significant challenges: (1) achieving precision, complexity, and intuitive control simultaneously with IMU sensors is extremely difficult, explaining why commercial XR devices favor CV-based solutions; and (2) the generalization problem across users is substantial - algorithms perform dramatically differently when processing different individuals' movement patterns, requiring robust training across diverse users and environments for reliable performance. These insights fundamentally shaped my understanding of sensor-based interaction design.`,
            content: `
                
                <div class="full-image">
                    <img src="Assets/Playgrounds/0.webp" alt="">
                </div>
                <div class="half-image">
                    <img src="" alt="">
                    <img src="https://raw.githubusercontent.com/armarmstrong/IMGHOST/main/img/Frame%2022%20from%20Figma.png" alt="">
                </div>
            `
        },
        // LadyBug Replication and Exploration
        {
            id: 'mini-project-2',
            icon: {
                shape: 'star6',
                fill: 'white',
                dashed: true,
                skewed: false,
            },
            title: 'LadyBug Replication and Exploration',
            listTitle: 'LadyBug Replication and Exploration',
            subtitle: '',
            type: 'Interaction | <b>Development</b> | Hacking + Unmaking | Discursive Design',
            date: '2025 Spring',
            purpose: `<span class="bold">Teamwork</span> | <span class="bold">For Why Lab</span>
            <br>
            Role: Research Assistant
            <br>
            Instructor: <span class='hyperlink' onclick="window.open('http://daraghbyrne.me/')">Daragh Byrne</span>
            `,
            description: `This project focused on replicating and exploring the 
            <span class='hyperlink' onclick="window.open('https://www.instructables.com/LadyBug-a-Motorized-Microscope-and-3D-Scanner-for-/')">LadyBug</span> 
            - a motorized microscope and 3D scanner. We used light-driven motors to control a micro-scope and light source moving on different axes, 
            then stitched the captured images to create high-resolution scanning results. 
            <br><br>
            We replicated the project using e-waste materials.
            Utilizing the scanning results with code, we explored various technical approaches to enhance the original design and convert the scanning results into digital art.`,
            content: `
                <div class="full-image">
                    <img src="Assets/Playgrounds/4.webp" alt="">
                </div>
                <div class="half-image">
                    <img src="Assets/Playgrounds/5.gif" alt="">
                    <img src="" alt="">
                </div>
            `
        },
        
        {
            id: 'mini-project-3',
            icon: {
                shape: 'circle',
                fill: 'black',
                dashed: false,
                skewed: false,
            },
            title: 'Game of Life Web',
            listTitle: 'Game of Life Web',
            subtitle: '',
            type: 'UX/UI + Interaction | <b>Design + Development</b> | Web | -',
            date: '2025 Spring',
            purpose: `<span class="bold">Teamwork</span> | <span class="bold">For Why Lab</span>
            <br>
            Role: Research Assistant
            <br>
            Instructor: <span class='hyperlink' onclick="window.open('http://daraghbyrne.me/')">Daragh Byrne</span>
            `,
            description: `This project created a web product based on Conway's Game of Life cellular automaton. 
            The website allows users to upload images of their choice, which are automatically segmented into "live" and "dead" cells based on color thresholds. 
            Users can then run the Game of Life simulation with these cells. 
            <br><br>
            We used PCB scanning results as dead cells and natural material scanning results as live cells, 
            exploring the relationships between different materials through this interactive visualization.`,
            content: `
                <div class="full-image">
                    <img src="Assets/Playgrounds/6.gif" alt="">
                </div>
                <p class = "work-discription">
                    <span class="hyperlink" onclick="window.open('https://c-hri-sw-u.github.io/game_of_life_web/')">
                        Click here to visit the website
                    </span>
                </p>
            `
        },
        // Story Machine
        {
            id: 'story-machine',
            icon: {
                shape: 'star4rotatedRounded',
                fill: 'white',
                dashed: true,
                skewed: false,
            },
            title: 'Story Machine',
            listTitle: 'Story Machine',
            subtitle: ``,
            type: 'Game | <b>Design + Development</b> | LLM + Python | Simulation',
            date: '2024 Fall',
            purpose: `<span class="bold">Personal</span> | Coursework
                <br>
                Course: Fundamentals of Programming and Computer Science`,
            description: `
            This is an inspired recreation of <span class='hyperlink' onclick="window.open('https://reverie.herokuapp.com/arXiv_Demo/')"> Smallville</span>, 
            featuring a nostalgic 1-bit visual style and using OpenAI's API. 
            Players can design their own world, create and customize characters, 
            then watch their characters interact and stories unfold through AI-driven behaviors.
            `, 
            content: `
                <div class="full-image">
                    <div style='position:relative; overflow:hidden; aspect-ratio:1; background: white;'>
                        <img style='z-index: 2; position:relative'
                        src="Assets/Playgrounds/Story Machine/2.png" alt="">
                        <img 
                        style='
                            border-radius: 1%; border: 0.5px solid white; opacity: 0.9; 
                            z-index: 1; position:relative; 
                            top: 50%; left: 50%; transform: translate(-51%, -307%);
                            width: 68.2%; height: auto;
                        '
                        src="Assets/Playgrounds/Story Machine/1.gif" alt="">
                    </div>
                
                </div>
            `
        }
    ],
    
    // 获取项目的辅助方法
    getProjectById(projectId) {
        return this.projects.find(p => p.id === projectId) || null;
    }
};

console.log(playgroundData); // 检查数据是否正确
