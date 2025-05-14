console.log("playground.js loaded");

const playgroundData = {
    projects: [
        {
            id: 'mini-project-1',
            icon: {
                shape: 'star4rounded',
                fill: 'white',
                dashed: false,
                skewed: false,
            },
            title: 'Mini Project 1',
            listTitle: 'Mini Project 1',
            subtitle: '- A Small Experiment',
            type: 'Interaction | <b>Development</b> | Web | Prototype',
            date: '2025 Spring',
            purpose: `<span class="bold">Personal</span> | Weekend Project`,
            description: `这是一个周末完成的小项目，用于实验一些新的交互概念。
                <br><br>
                This is a small weekend project to experiment with some new interaction concepts.`,
            content: `
                <div class="full-image">
                    <img src="https://placehold.co/800x450?text=Mini+Project+1" alt="Mini Project 1">
                </div>
                
                <div class="h3">
                    <p>
                        Project Background
                    </p>
                </div>
                
                <p class="work-discription">
                    这个项目是一个快速原型，探索了一些有趣的交互方式。
                    <br><br>
                    This project is a quick prototype exploring some interesting interaction methods.
                </p>
                
                <div class="half-image">
                    <img src="https://placehold.co/400x300?text=Process+1" alt="">
                    <img src="https://placehold.co/400x300?text=Process+2" alt="">
                </div>
                
                <p class="work-discription">
                    使用了一些最新的技术来实现这个交互效果。
                    <br><br>
                    Used some of the latest technologies to achieve this interaction effect.
                </p>
            `
        },
        {
            id: 'mini-project-2',
            icon: {
                shape: 'circle',
                fill: 'black',
                dashed: true,
                skewed: false,
            },
            title: 'Mini Project 2',
            listTitle: 'Mini Project 2',
            subtitle: '- Another Small Experiment',
            type: 'Product | <b>Design</b> | 3D Printing | Prototype',
            date: '2025 Winter',
            purpose: `<span class="bold">Personal</span> | Side Project`,
            description: `这是另一个小型实验项目，专注于3D打印技术。
                <br><br>
                This is another small experimental project focused on 3D printing technology.`,
            content: `
                <div class="full-image">
                    <img src="https://placehold.co/800x450?text=Mini+Project+2" alt="Mini Project 2">
                </div>
                
                <div class="h3">
                    <p>
                        Concept
                    </p>
                </div>
                
                <p class="work-discription">
                    这个项目探索了3D打印在日常物品中的应用。
                    <br><br>
                    This project explores the application of 3D printing in everyday objects.
                </p>
                
                <div class="half-image">
                    <img src="https://placehold.co/400x300?text=Sketch+1" alt="">
                    <img src="https://placehold.co/400x300?text=Sketch+2" alt="">
                </div>
                
                <p class="work-discription">
                    从最初的设计草图到最终的成品，经历了多次迭代。
                    <br><br>
                    From initial design sketches to the final product, it went through multiple iterations.
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
