console.log("playground.js loaded");

const playgroundData = {
    projects: [
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
        }
    ],
    
    // 获取项目的辅助方法
    getProjectById(projectId) {
        return this.projects.find(p => p.id === projectId) || null;
    }
};

console.log(playgroundData); // 检查数据是否正确
